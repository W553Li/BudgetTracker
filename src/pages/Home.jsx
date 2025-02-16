import { Container, Stack, Button } from 'react-bootstrap'
import BudgetCard from '../components/BudgetCard'
import AddBudgetModal from '../components/AddBudgetModal'
import AddExpenseModal from '../components/AddExpenseModal'
import { useEffect, useState } from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'
import UncategorizedBudgetCard from '../components/UncategorizedBudgetCard'
import TotalBudgetCard from '../components/TotalBudgetCard'
import ViewExpensesModal from '../components/ViewExpensesModal'
import { Chart } from "react-google-charts"
import repeatExpenses from '../hooks/repeatExpenses'
import { useAuth } from "../contexts/AuthContext"

export default function Home() {
  // Creating Dynamic variables for UI usage
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()

  // Get functions and data from budgetcontext
  const {budgets, getBudgetExpenses, uncategorizedBudgetId} = useBudgets()

  // Update to check for expenses that are supposed to repeat today
  repeatExpenses()

  const {session} = useAuth()

  // Function to open expense modal
  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  // Create chart with budget data
  var chartData = [["Budget", "Budget"]]
  budgets.forEach(budget => {
    
    const chartAmount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
    var amount = [budget.name, chartAmount]
    chartData.push(amount)
    var unused = budget.max - chartAmount
    if (unused < 0) {
      unused = 0
    }
    var unusedBudget = [budget.name + " Unused", unused]
    chartData.push(unusedBudget)
  })

  // Creating UI
  return (
    <>
    <Container className="mb-auto">

      {/* Creating top bar with Title and 'Add Budget' and 'Add Expense' buttons */}
      <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budget Tracker</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>
      </Stack>

      {/* Create cards to display each individual budgets by iterating through budgets in local storage */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))", gap:"1rem", alignItems:"flex-start"}}>
        {budgets.map(budget => {
        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
          return (
            <BudgetCard 
            key={budget.id} 
            name={budget.name} 
            amount={amount} 
            max={budget.max} 
            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
            onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
            />
          )
        })}
        <UncategorizedBudgetCard 
          onAddExpenseClick={openAddExpenseModal}
          onViewExpensesClick={() => setViewExpensesModalBudgetId(uncategorizedBudgetId)}/>
        <TotalBudgetCard/>
      </div>

      {/* Create chart using budgets data */}
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data = {chartData}
      options={{
          title: "Budget",
          pieHole: 0.4,
          is3D: false,
      }}
      />
    </Container>

    {/* Functionality for buttons for adding and viewing budgets and expenses */}
    <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    <AddExpenseModal show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
    <ViewExpensesModal budgetId={viewExpensesModalBudgetId} handleClose={() => setViewExpensesModalBudgetId()}/>
    </>
  )
}