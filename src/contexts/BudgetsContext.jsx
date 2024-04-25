import React, {useContext, useState, useEffect} from "react"
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {
    // Hooks to use local storage
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])
    const [repeats, setRepeats] = useLocalStorage("repeats", [])

    // Get all expenses for a particular budget
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    // Get all the expenses that are supposed to repeat
    function getRepeatExpenses(budgetId) {
        return repeats.filter(repeat => repeat.budgetId === budgetId)
    }

    // Function to add an expense to a budget
    function addExpense({description, amount, budgetId, date, repeat}) {
        let id = uuidV4()

        // Checking for repeat
        if (repeat == "None") {
        } else {
            let repeatDate = date.split('-')
            let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
            let parent = id

            // Checking for the specific repeat period and adding it to local storage
            if (repeat == "Daily") {
                // let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toISOString().split('T')[0]
                let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                addRepeat({description, amount, budgetId, date, repeat, parent})
            } else if (repeat == "Weekly") {
                // let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toISOString().split('T')[0]
                let date = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                addRepeat({description, amount, budgetId, date, repeat, parent})
            } else if (repeat == "Monthly") {
                // let date = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toISOString().split('T')[0]
                let date = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                addRepeat({description, amount, budgetId, date, repeat, parent})
            } else if (repeat == "Yearly") {
                // let date = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toISOString().split('T')[0]
                let date = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                addRepeat({description, amount, budgetId, date, repeat, parent})
            }
        }

        // Add the actual expense to local storage
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: id, description, amount, budgetId, date, repeat}]
        })
    }

    // Add the repeat to local storage, specifically in the repeat section storing all the scheduled repeats
    function addRepeat({description, amount, budgetId, date, repeat, parent}) {
        setRepeats(prevRepeats => {
            return [...prevRepeats, {id: uuidV4(), description, amount, budgetId, date, repeat, parent}]
        })
    }

    // Add a repeated expense to local storage with the other regular expenses
    function addRepeatedExpense({description, amount, budgetId, date, repeat}) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidV4(), description, amount, budgetId, date, repeat}]
        })
    }

    // Add the budget to local storage
    function addBudget({name, max}) {
        setBudgets(prevBudgets => {
            // Check if any budget already has the same name, if so, do not add another
            if (prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets, {id: uuidV4(), name, max}]
        })
    }

    // Delete the given expense from local storage
    function deleteExpense({id}) {
        // If the expense is supposed to repeat, remove it from the scheduled future repeat expenses
        deleteRepeat({id})

        // Deleting the actual expense from local storage
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    // Deleting the scheduled/repeated expense from local storage
    function deleteRepeat({id}) {
        let parent = id

        setRepeats(prevRepeats => {
            return prevRepeats.filter(repeat => repeat.parent !== parent)
        })
    }

    // Delete the given budget from local storage
    function deleteBudget({id}) {
        // Go through all expenses, if the expense is part of the budget being deleted, move it to being uncategorized
        setExpenses(prevExpenses => {
            return prevExpenses.map(expense => {
                if (expense.budgetId !== id) {
                    return expense
                }
                return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}
            })
        })

        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        repeats,
        getBudgetExpenses,
        getRepeatExpenses,
        addRepeatedExpense,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget
    }}> {children} </BudgetsContext.Provider>
}