import { useState } from "react"
import { Button, Modal, Stack } from "react-bootstrap"
import { Chart } from "react-google-charts"
import { useBudgets } from "../contexts/BudgetsContext"
import { currencyFormatter } from "../utils"
import EditExpenseModal from "./EditExpenseModal"
import EditBudgetModal from "./EditBudgetModal"

export default function ViewExpensesModal ({budgetId, handleClose}) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense, uncategorizedBudgetId} = useBudgets()
    const [showEditExpenseModal, setShowEditExpenseModal] = useState(false)
    const [editExpenseId, setEditExpenseId] = useState()
    const [editExpenseDescription, setEditExpenseDescription] = useState()
    const [editExpenseAmount, setEditExpenseAmount] = useState()
    const [editExpenseBudgetId, setEditExpenseBudgetId] = useState()
    const [editExpenseRepeat, setEditExpenseRepeat] = useState()
    const [editExpenseDate, setEditExpenseDate] = useState()
    const [editBudgetName, setEditBudgetName] = useState()
    const [editBudgetMax, setEditBudgetMax] = useState()
    const [editBudgetId, setEditBudgetId] = useState()
    const [showEditBudgetModal, setShowEditBudgetModal] = useState(false)

    const expenses = getBudgetExpenses(budgetId)

    const budget = uncategorizedBudgetId === budgetId 
    ? { name: "Uncategorized", id: uncategorizedBudgetId} 
    : budgets.find(b => b.id === budgetId)


    // Get the current max for the budget for creating the chart
    let max = 0

    for (let i = 0; i < budgets.length; i++) {
        if (budgets[i].id === budgetId) {
            max = budgets[i].max
            break
        }
    }

    // Creating the charts
    var chartData = [["Expenses", "Expenses"]]
    if (budgetId == uncategorizedBudgetId) {
        expenses.forEach(expense => {
            var amount = [expense.description + " " + expense.date, expense.amount]
            chartData.push(amount)
        })
    } else {
        expenses.forEach(expense => {
            var amount = [expense.description + " " + expense.date, expense.amount]
            chartData.push(amount)
            max -= expense.amount
        })
        if (max < 0) {
            max = 0
        }
        var totalBudget = ["Unused", max]
        chartData.push(totalBudget)
    }

    // UI for viewing the expenses of a budget    
    return (
        <>
            <Modal show={budgetId != null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap="2">
                            <div>Expenses - {budget?.name} </div>
                            {budgetId !== uncategorizedBudgetId && (
                                <Button onClick={() => {
                                    deleteBudget(budget) 
                                    handleClose()
                                }} 
                                variant="outline-danger">Delete</Button>
                            )}
                            {budgetId !== uncategorizedBudgetId && (
                                <Button onClick={() => {
                                    setEditBudgetId(budget.id)
                                    setEditBudgetName(budget.name)
                                    setEditBudgetMax(budget.max)
                                    setShowEditBudgetModal(true)
                                    handleClose()
                                }} 
                                variant="outline-secondary">&#9998;</Button>
                            )}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Iterate and show all the current expenses for the budget */}
                    <Stack direction="vertical" gap="3">
                        {expenses.map(expense => (
                            <Stack direction="horizontal" gap="2" key={expense.id}>
                                <div className="me-auto fs-4">{expense.description}
                                    <span className="text-muted fs-6 ms-1"> {expense.date}, Repeat: {expense.repeat} </span>
                                </div>
                                <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                                <Button onClick={() => deleteExpense(expense)} size="sm" variant="outline-danger">&times;</Button>
                                <Button 
                                    onClick={() => {
                                        setEditExpenseId(expense.id)
                                        setShowEditExpenseModal(true)
                                        setEditExpenseDescription(expense.description)
                                        setEditExpenseAmount(expense.amount)
                                        setEditExpenseBudgetId(expense.budgetId)
                                        setEditExpenseDate(expense.date)
                                        setEditExpenseRepeat(expense.repeat)
                                    }} 
                                    size="sm" 
                                    variant="outline-secondary"
                                >&#9998;</Button>
                            </Stack>
                        ))}
                    </Stack>
                    {/* Creating the chart */}
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data = {chartData}
                        options={{
                            title: "",
                            pieHole: 0.4,
                            is3D: false,
                        }}
                    />  
                </Modal.Body>
            </Modal>
            <EditExpenseModal 
                show={showEditExpenseModal}
                handleClose={() => setShowEditExpenseModal(false)}
                expenseId={editExpenseId}
                expenseDescription={editExpenseDescription}
                expensesAmount={editExpenseAmount}
                expenseBudgetId={editExpenseBudgetId}
                expenseRepeat={editExpenseRepeat}
                expenseDate={editExpenseDate}
            />
            <EditBudgetModal
                show={showEditBudgetModal}
                handleClose={() => setShowEditBudgetModal(false)}
                budgetId={editBudgetId}
                budgetName={editBudgetName}
                budgetMax={editBudgetMax}
            />
        </>
    )
}
