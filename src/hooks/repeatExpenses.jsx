import { useState, useEffect } from "react"
import { useBudgets } from "../contexts/BudgetsContext";
import supabase from "../config/supabaseClient";
import { useAuth } from "../contexts/AuthContext"

export default function repeatExpenses() {
    // Get context and grab the current date
    const {budgets, getBudgetExpenses, getRepeatExpenses, addRepeatedExpense} = useBudgets()
    const today = new Date().toLocaleDateString('en-CA')
    const {session} = useAuth()

    // Update dates for repeat
    const handleUpdate = async (newDate, id) => {
        const {data, error} = await supabase
        .from('repeats')
        .update({date: newDate})
        .eq('id', id)
    }

    // const handleUpdate2 = async (repeat) => {
    //     if (today > repeat.date) {
    //         // If the current date is the scheduled date, then add the expense and update the scheduled date to the next time
    //         let repeatDate = repeat.date.split('-')
    //         let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
    //         let newDate = ''

    //         // addRepeatedExpense({
    //         //     description: repeat.description, 
    //         //     amount: repeat.amount, 
    //         //     budgetId: repeat.budgetId, 
    //         //     date: repeat.date, 
    //         //     repeat: "None"})
    //         if (repeat.repeat == "Daily") {
    //             newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
    //         } else if (repeat.repeat == "Weekly") {
    //             newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
    //         } else if (repeat.repeat == "Monthly") {
    //             newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
    //         } else if (repeat.repeat == "Yearly") {
    //             newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
    //         }

    //         const {data, error} = await supabase
    //             .from('repeats')
    //             .update({date: newDate})
    //             .eq('id', repeat.id)
    //     }
    // }

    useEffect(() => {
        // Go through each budget
        budgets.forEach(budget => {
            // Go through each repeat expense for the current budget
            const repeats = getRepeatExpenses(budget.id)
            repeats.forEach(repeat => {
                // Check if the current date is the scheduled repeat date
                if (today > repeat.date) {
                    // If the current date is the scheduled date, then add the expense and update the scheduled date to the next time
                    let repeatDate = repeat.date.split('-')
                    let originalDate = new Date(repeatDate[0], repeatDate[1]-1, repeatDate[2])
                    let newDate;

                    addRepeatedExpense({
                        description: repeat.description, 
                        amount: repeat.amount, 
                        budgetId: repeat.budgetId, 
                        date: repeat.date, 
                        repeat: "None",
                        UID: session.user.id})
                    if (repeat.repeat == "Daily") {
                        newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+1).toLocaleDateString('en-CA')
                        // repeat.date = newDate
                        // handleUpdate(newDate, repeat.id)
                    } else if (repeat.repeat == "Weekly") {
                        newDate = new Date(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()+7).toLocaleDateString('en-CA')
                        // repeat.date = newDate
                        // handleUpdate(newDate, repeat.id)
                    } else if (repeat.repeat == "Monthly") {
                        newDate = new Date(originalDate.getFullYear(), originalDate.getMonth()+1, originalDate.getDate()).toLocaleDateString('en-CA')
                        // repeat.date = newDate
                        // handleUpdate(newDate, repeat.id)
                    } else if (repeat.repeat == "Yearly") {
                        newDate = new Date(originalDate.getFullYear()+1, originalDate.getMonth(), originalDate.getDate()).toLocaleDateString('en-CA')
                        // repeat.date = newDate
                        // handleUpdate(newDate, repeat.id)
                    } 

                    handleUpdate(newDate, repeat.id)
                }
            })
        })
    }, [session])
}