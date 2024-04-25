import { useState, useEffect } from "react"
import { useBudgets } from "../contexts/BudgetsContext";

export default function repeatExpenses() {
    // Get context and grab the current date
    const {budgets, getBudgetExpenses, getRepeatExpenses, addRepeatedExpense} = useBudgets()
    const today = new Date().toLocaleDateString('en-CA')

    // Go through each budget
    budgets.forEach(budget => {
        // Go through each repeat expense for the current budget
        const repeats = getRepeatExpenses(budget.id)
        repeats.forEach(repeat => {
            // Check if the current date is the scheduled repeat date
            if (today == repeat.date) {
                // If the current date is the scheduled date, then add the expense and update the scheduled date to the next time
                let repeatDate = repeat.date.split('-')
                let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
                addRepeatedExpense({
                    description: repeat.description, 
                    amount: repeat.amount, 
                    budgetId: repeat.budgetId, 
                    date: repeat.date, 
                    repeat: "None"})
                if (repeat.repeat == "Daily") {
                    // let newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toISOString().split('T')[0]
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                    repeat.date = newDate
                } else if (repeat.repeat == "Weekly") {
                    // let newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toISOString().split('T')[0]
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                    repeat.date = newDate
                } else if (repeat.repeat == "Monthly") {
                    // let newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toISOString().split('T')[0]
                    newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                    repeat.date = newDate
                } else if (repeat.repeat == "Yearly") {
                    // let newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toISOString().split('T')[0]
                    newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                    repeat.date = newDate
                } 
            }
        })
    })
}