import { Modal, Button, Stack} from "react-bootstrap"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import { currencyFormatter } from "../utils"
import { Chart } from "react-google-charts"

export default function ViewExpensesModal ({budgetId, handleClose}) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense} = useBudgets()

    const expenses = getBudgetExpenses(budgetId)

    const budget = UNCATEGORIZED_BUDGET_ID === budgetId 
    ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID} 
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
    if (budgetId == "Uncategorized") {
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
        // Create view for the component depending on if the budget uncategorized or not
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Expenses - {budget?.name} </div>
                        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                            <Button onClick={() => {
                                deleteBudget(budget) 
                                handleClose()
                            }} 
                            variant="outline-danger">Delete</Button>
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
    )
}
