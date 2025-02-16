import React, {useContext, useState, useEffect} from "react"
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"
import supabase from "../config/supabaseClient";
import { useAuth } from "../contexts/AuthContext"

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = null

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {
    // // Hooks to use local storage
    // const [budgets, setBudgets] = useLocalStorage("budgets", [])
    // const [expenses, setExpenses] = useLocalStorage("expenses", [])
    // const [repeats, setRepeats] = useLocalStorage("repeats", [])

    // // Get all expenses for a particular budget
    // function getBudgetExpenses(budgetId) {
    //     return expenses.filter(expense => expense.budgetId === budgetId)
    // }

    // // Get all the expenses that are supposed to repeat
    // function getRepeatExpenses(budgetId) {
    //     return repeats.filter(repeat => repeat.budgetId === budgetId)
    // }

    // // Function to add an expense to a budget
    // function addExpense({description, amount, budgetId, date, repeat}) {
    //     let id = uuidV4()

    //     // Checking for repeat
    //     if (repeat == "None") {
    //     } else {
    //         let repeatDate = date.split('-')
    //         let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
    //         let parent = id

    //         // Checking for the specific repeat period and adding it to local storage
    //         if (repeat == "Daily") {
    //             // let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toISOString().split('T')[0]
    //             let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
    //             addRepeat({description, amount, budgetId, date, repeat, parent})
    //         } else if (repeat == "Weekly") {
    //             // let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toISOString().split('T')[0]
    //             let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
    //             addRepeat({description, amount, budgetId, date, repeat, parent})
    //         } else if (repeat == "Monthly") {
    //             // let date = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toISOString().split('T')[0]
    //             let date = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
    //             addRepeat({description, amount, budgetId, date, repeat, parent})
    //         } else if (repeat == "Yearly") {
    //             // let date = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toISOString().split('T')[0]
    //             let date = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
    //             addRepeat({description, amount, budgetId, date, repeat, parent})
    //         }
    //     }

    //     // Add the actual expense to local storage
    //     setExpenses(prevExpenses => {
    //         return [...prevExpenses, {id: id, description, amount, budgetId, date, repeat}]
    //     })
    // }

    // // Add the repeat to local storage, specifically in the repeat section storing all the scheduled repeats
    // function addRepeat({description, amount, budgetId, date, repeat, parent}) {
    //     setRepeats(prevRepeats => {
    //         return [...prevRepeats, {id: uuidV4(), description, amount, budgetId, date, repeat, parent}]
    //     })
    // }

    // // Add a repeated expense to local storage with the other regular expenses
    // function addRepeatedExpense({description, amount, budgetId, date, repeat}) {
    //     setExpenses(prevExpenses => {
    //         return [...prevExpenses, {id: uuidV4(), description, amount, budgetId, date, repeat}]
    //     })
    // }

    // // Add the budget to local storage
    // function addBudget({name, max}) {
    //     setBudgets(prevBudgets => {
    //         // Check if any budget already has the same name, if so, do not add another
    //         if (prevBudgets.find(budget => budget.name === name)) {
    //             return prevBudgets
    //         }
    //         return [...prevBudgets, {id: uuidV4(), name, max}]
    //     })
    // }

    // // Delete the given expense from local storage
    // function deleteExpense({id}) {
    //     // If the expense is supposed to repeat, remove it from the scheduled future repeat expenses
    //     deleteRepeat({id})

    //     // Deleting the actual expense from local storage
    //     setExpenses(prevExpenses => {
    //         return prevExpenses.filter(expense => expense.id !== id)
    //     })
    // }

    // // Deleting the scheduled/repeated expense from local storage
    // function deleteRepeat({id}) {
    //     let parent = id

    //     setRepeats(prevRepeats => {
    //         return prevRepeats.filter(repeat => repeat.parent !== parent)
    //     })
    // }

    // // Delete the given budget from local storage
    // function deleteBudget({id}) {
    //     // Go through all expenses, if the expense is part of the budget being deleted, move it to being uncategorized
    //     setExpenses(prevExpenses => {
    //         return prevExpenses.map(expense => {
    //             if (expense.budgetId !== id) {
    //                 return expense
    //             }
    //             return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}
    //         })
    //     })

    //     setBudgets(prevBudgets => {
    //         return prevBudgets.filter(budget => budget.id !== id)
    //     })
    // }





    ////////////////////////////////////////////// Supabase Refactor
    
    // States for storing budgets, expenses, and repeats from Supabase database
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])
    const [repeats, setRepeats] = useState([])
    const [uncategorizedBudgetId, setUncategorizedBudgetId] = useState()
    const {session} = useAuth()

    // console.log(uncategorizedBudgetId)

    // fetch data from Supabase database
    useEffect(() => {
        // fetch budgets from budgets table in supabase
        const fetchBudgets = async () => {
            // get from budgets table and grab data
            const {data, error} = await supabase
            .from('budgets')
            .select()
            .eq('UID', session.user.id)

            // if failed to fetch the budgets
            if (error) {
                // update fetch error, budgets, and log error
                setBudgets([])
            }
            // if successfully fetched the budgets
            if (data) {
                // update fetch error and budgets
                setBudgets(data)
            }
        }

        const fetchExpenses = async () => {
            // get from expenses table and grab data
            const {data, error} = await supabase
            .from('expenses')
            .select()
            .eq('UID', session.user.id)

            // if failed to fetch the expenses
            if (error) {
                // update fetch error, expenses, and log error
                setExpenses([])
            }
            // if successfully fetched the expenses
            if (data) {
                // update fetch error and expenses
                setExpenses(data)
            }
        }

        const fetchRepeats = async () => {
            // get from repeats table and grab data
            const {data, error} = await supabase
            .from('repeats')
            .select()
            .eq('UID', session.user.id)

            // if failed to fetch the repeats
            if (error) {
                // update repeats
                setRepeats([])
            }
            // if successfully fetched the repeats
            if (data) {
                // update fetch error and repeats
                setRepeats(data)
            }
        }

        const fetchUncategorized = async () => {
            // get from budgets table and grab uncategorized id
            const {data, error} = await supabase
            .from('budgets')
            .select()
            .eq('name', 'Uncategorized')
            .eq('UID', session.user.id)

            // if does not exist, create the uncategorized budget
            if (data.length < 1) {
                const {uncategorized} = await supabase
                .from('budgets')
                .insert([{name: 'Uncategorized', max: null, UID: session.user.id}])
                .select()
            }

            // if failed to fetch the budgets
            if (error) {
                // update fetch error, budgets, and log error
                setUncategorizedBudgetId()
            }
            // if successfully fetched the budgets
            if (data) {
                // update fetch error and budgets
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



    // // Get all expenses for a particular budget
    // function getBudgetExpenses(budgetId) {
    //     const fetchExpenses = async () => {
    //         // get from Expenses table and select/grab data
    //         const {data, error} = await supabase
    //         .from('expenses')
    //         .select()
    //         .eq('budgetId', budgetId)

    //         // if failed to fetch the Expenses
    //         if (error) {
    //             // update fetch error, Expenses, and log error
    //             setExpenses([])
    //         }
    //         // if successfully fetched the Expenses
    //         if (data) {
    //             // update fetch error and Expenses
    //             setExpenses(data)
    //         }
    //     }

    //     fetchExpenses()
    // }

    // // Get all the expenses that are supposed to repeat
    // function getRepeatExpenses(budgetId) {
    //     const fetchRepeats = async () => {
    //         // get from Repeats table and select/grab data
    //         const {data, error} = await supabase
    //         .from('repeats')
    //         .select()
    //         .eq('budgetId', budgetId)

    //         // if failed to fetch the Repeats
    //         if (error) {
    //             // update fetch error, Repeats, and log error
    //             setFetchError("Could not fetch the Repeats")
    //             setRepeats(null)
    //             console.log(error)
    //         }
    //         // if successfully fetched the Repeats
    //         if (data) {
    //             // update fetch error and Repeats
    //             setRepeats(data)
    //             setFetchError(null)
    //         }
    //     }

    //     fetchRepeats()
    // }



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
    
                // Checking for the specific repeat period and adding it
                // Add the repeat to Supabase, specifically in the repeat section storing all the scheduled repeats
                if (repeat == "Daily") {
                    let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                } else if (repeat == "Weekly") {
                    let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                } else if (repeat == "Monthly") {
                    let date = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                } else if (repeat == "Yearly") {
                    let date = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                }

                const {child, child_error} = await supabase
                    .from('repeats')
                    .insert([{description, amount, budgetId, date, repeat, parent: data[0].id, UID}])
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
        // const handleUncategorized = async () => {
        //     // go through budget table, looking for if uncategorized budget exists for current user
        //     const {data, error} = await supabase
        //     .from('budgets')
        //     .select()
        //     .eq('name', 'Uncategorized')
        //     .eq('UID', session.user.id)

        //     // if does not exist, create the budget and move the expenses
        //     if (data.length < 1) {
        //         const {uncategorized} = await supabase
        //         .from('budgets')
        //         .insert([{name: 'Uncategorized', max: null, UID: session.user.id}])
        //         .select()

        //         handleChildren(uncategorized)
        //     } else {
        //         // if uncategorized does exist, simply move the expenses
        //         handleChildren(data)
        //     }
        // }

        // Go through all expenses, if the expense is part of the budget being deleted, move it to being uncategorized
        const handleChildren = async () => {
            const {data, error} = await supabase
            .from('expenses')
            .update({budgetId: uncategorizedBudgetId})                // TODO: set to UNCATEGORIZED_BUDGET_ID or whatever
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

        // handleUncategorized()
        handleChildren()
        handleDelete()
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
        deleteBudget
    }}> {children} </BudgetsContext.Provider>
}