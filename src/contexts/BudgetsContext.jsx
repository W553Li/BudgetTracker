import React, { useContext, useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useAuth } from "../contexts/AuthContext";

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = null

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {
    // States for storing budgets, expenses, and repeats from Supabase database
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])
    const [repeats, setRepeats] = useState([])
    const [uncategorizedBudgetId, setUncategorizedBudgetId] = useState()
    const {session} = useAuth()

    // fetch data from Supabase database
    useEffect(() => {
        if (!session) {
            return
        };

        // fetch budgets from budgets table in supabase
        const fetchBudgets = async () => {
            const {data, error} = await supabase
                .from('budgets')
                .select()
                .eq('UID', session.user.id)

            if (error) {
                setBudgets([])
            }
            if (data) {
                setBudgets(data)


                // Check for repeat expenses
                const today = new Date().toLocaleDateString('en-CA')

                // Update dates for repeat
                const handleUpdate = async (newDate, id) => {
                    const {data, error} = await supabase
                    .from('repeats')
                    .update({date: newDate})
                    .eq('id', id)
                }

                data.forEach(budget => {
                    // Go through each repeat expense for the current budget
                    const repeats = getRepeatExpenses(budget.id)
                    repeats.forEach(async (repeat) => {
                        // Check if the current date is the scheduled repeat date
                        let currentDate = repeat.date;
                        while (today > currentDate) {
                            // Add the repeated expense
                            addRepeatedExpense({
                                description: repeat.description, 
                                amount: repeat.amount, 
                                budgetId: repeat.budgetId, 
                                date: currentDate, 
                                repeat: "None",
                                UID: session.user.id
                            })

                            // Calculate next date based on repeat type
                            let repeatDate = currentDate.split('-')
                            let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
                            let newDate;

                            if (repeat.repeat === "Daily") {
                                newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                            } else if (repeat.repeat === "Weekly") {
                                newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                            } else if (repeat.repeat === "Monthly") {
                                newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                            } else if (repeat.repeat === "Yearly") {
                                newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                            } 
                            
                            // Update the current date and the repeat record in database
                            currentDate = newDate
                            await handleUpdate(newDate, repeat.id)
                        }
                    })
                })
            }
        }

        const fetchExpenses = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .select()
                .eq('UID', session.user.id)

            if (error) {
                setExpenses([])
            }
            if (data) {
                setExpenses(data)
            }
        }

        const fetchRepeats = async () => {
            const {data, error} = await supabase
                .from('repeats')
                .select()
                .eq('UID', session.user.id)

            if (error) {
                setRepeats([])
            }
            if (data) {
                setRepeats(data)
            }
        }

        const fetchUncategorized = async () => {
            const {data, error} = await supabase
                .from('budgets')
                .select()
                .eq('name', 'Uncategorized')
                .eq('UID', session.user.id)

            if (error) {
                setUncategorizedBudgetId()
                return;
            }
            if (data) {
                setUncategorizedBudgetId(data[0].id)
            }
        }

        fetchBudgets()
        fetchExpenses()
        fetchRepeats()
        fetchUncategorized()
    }, [session])

    // Get all expenses for a particular budget
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    // Get all the expenses that are supposed to repeat
    function getRepeatExpenses(budgetId) {
        return repeats.filter(repeat => repeat.budgetId === budgetId)
    }

    // Function to add an expense to a budget
    function addExpense({description, amount, budgetId, date, repeat, UID}) {
        // access expenses table and insert expense
        const handleAdd = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .insert([{description, amount, budgetId, date, repeat, UID}])
                .select()

            // Checking for repeat
            if (repeat == "None") {
            } else {
                let repeatDate = date.split('-')
                let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
                let newDate = ''

                // Checking for the specific repeat period and adding it
                // Add the repeat to Supabase, specifically in the repeat section storing all the scheduled repeats
                if (repeat == "Daily") {
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                } else if (repeat == "Weekly") {
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                } else if (repeat == "Monthly") {
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                } else if (repeat == "Yearly") {
                    newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                }

                const {child, child_error} = await supabase
                    .from('repeats')
                    .insert([{description, amount, budgetId, date: newDate, repeat, parent: data[0].id, UID}])
            }

            setExpenses(prevExpenses => {
                return [...prevExpenses, data[0]]
            })
        }

        handleAdd()
    }

    // Add a repeated expense to Supabase with the other regular expenses
    function addRepeatedExpense({description, amount, budgetId, date, repeat, UID}) {
        // access expenses table and insert expense
        const handleAdd = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .insert([{description, amount, budgetId, date, repeat, UID}])
                .select()

            setExpenses(prevExpenses => {
                return [...prevExpenses, data[0]]
            })
        }

        handleAdd()
    }

    // Check the database for existing budget of same name then try adding budget
    function addBudget({name, max, UID}) {
        // Check if any budget already has the same name, if so, do not add another
        const handleCheck = async () => {
            const {data, error} = await supabase
                .from('budgets')
                .select()
                .eq('name', name)

            if (data.length < 1 && name != 'Uncategorized') {
                addBudgetSupabase ({
                    name: name,
                    max: max,
                    UID: UID
                })
            }
        }

        handleCheck()
    }

    // Add the budget to Supabase
    function addBudgetSupabase({name, max, UID}) {
        // access budgets table and insert budget
        const handleAdd = async () => {
            const {data, error} = await supabase
                .from('budgets')
                .insert([{name, max, UID}])
                .select()

            setBudgets(prevBudgets => {
                return [...prevBudgets, data[0]]
            })
        }

        handleAdd()
    }

    // Delete the given expense from local storage
    function deleteExpense({id}) {
        // If the expense is supposed to repeat, remove it from the scheduled future repeat expenses
        // fetch expenses from database with matching id and delete
        const handleDelete = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .delete()
                .eq('id', id)

            setExpenses(prevExpenses => {
                return prevExpenses.filter(expense => expense.id !== id)
            })
        }

        handleDelete()
    }

    // Delete the given budget from local storage
    function deleteBudget({id}) {
        // Go through all expenses, if the expense is part of the budget being deleted, move it to being uncategorized
        const handleChildren = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .update({budgetId: uncategorizedBudgetId})
                .eq('budgetId', id)

            setExpenses(prevExpenses => {
                return prevExpenses.map(expense => {
                    if (expense.budgetId !== id) {
                        return expense
                    }
                    return {...expense, budgetId: uncategorizedBudgetId}
                })
            })
        }

        // fetch budgets from database with matching id and delete
        const handleDelete = async () => {
            const {data, error} = await supabase
                .from('budgets')
                .delete()
                .eq('id', id)

            setBudgets(prevBudgets => {
                return prevBudgets.filter(budget => budget.id !== id)
            })
        }

        handleChildren()
        handleDelete()
    }

    // Update/Edit the expense with the given id
    function updateExpense({id, description, amount, budgetId, date, repeat, UID}) {
        // fetch expenses from database with matching id and update
        const handleUpdate = async () => {
            const {data, error} = await supabase
                .from('expenses')
                .update({description, amount, budgetId, date, repeat, UID})
                .eq('id', id)
                .select()
            
            const {child, childError} = await supabase
                .from('repeats')
                .update({description, amount, budgetId, date, repeat, UID})
                .eq('parent', id)
                .select()

            // update state to remove expense before edit
            setExpenses(prevExpenses => {
                return prevExpenses.filter(expense => expense.id !== id)
            })
            
            // update state to readd expense with edit
            setExpenses(prevExpenses => {
                return [...prevExpenses, data[0]]
            })
        }

        handleUpdate()
    }

    // Update/Edit the budget with the given id
    function updateBudget({id, name, max, UID}) {
        // fetch budgets from database with matching id and update
        const handleBudgetUpdate = async () => {
            console.log(id, name, max, UID)
            // no previous budget with the same name
            const {data, error} = await supabase
                .from('budgets')
                .select()
                .eq('name', name)

            if (data.length < 1 && name != 'Uncategorized') {
                const {data, error} = await supabase
                .from('budgets')
                .update({name, max, UID})
                .eq('id', id)
                .select()

                // update state to remove budget before edit
                setBudgets(prevBudgets => {
                    return prevBudgets.filter(budget => budget.id !== id)
                })

                // update state to readd budget with edit
                setBudgets(prevBudgets => {
                    return [...prevBudgets, data[0]]
                })
            }
        }

        handleBudgetUpdate()
    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        repeats,
        uncategorizedBudgetId,
        getBudgetExpenses,
        getRepeatExpenses,
        addRepeatedExpense,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget,
        updateExpense,
        updateBudget
    }}> {children} </BudgetsContext.Provider>
}