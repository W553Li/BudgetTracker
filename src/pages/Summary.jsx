import { Container, Stack, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'
import { Chart } from "react-google-charts"
import { useState } from 'react'

export default function Summary() {
    // Get functions and data from budgetcontext
    const { budgets, getBudgetExpenses} = useBudgets()
    // Create dynamic variables to set the active year and date tabs
    var [activeYear, setActiveYear] = useState("Year")
    var [activeMonth, setActiveMonth] = useState("Month")

    // Create arrays to store chart data
    var years = []
    var months = [[0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11]]
    var monthcharts = [[["January", "January"]], [["February", "February"]], [["March", "March"]], [["April", "April"]], [["May", "May"]], [["June", "June"]], 
                        [["July", "July"]], [["August", "August"]], [["September", "September"]], [["October", "October"]], [["November", "November"]], [["December", "December"]]]

    // iterate through budgets and expenses to store them in the proper arrays above
    budgets.forEach(budget => {
        const expenses = getBudgetExpenses(budget.id)
        expenses.forEach(expense => {
            const date = new Date(expense.date)
            months[date.getMonth()].push(expense)

            if (!years.includes(date.getFullYear())) {
                years.push(date.getFullYear())
            }
        })
    })

    // Take the expenses from above and sort their dates to make the charts
    months.forEach(month => {
        month.slice(1).forEach(expense => {
            const date = new Date(expense.date)
            var amount = [expense.description + " " + expense.date, expense.amount]
            monthcharts[month[0]].push(amount)
        })
    })

    // Creating UI
    return (
        <Container className="mb-auto">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Summary</h1>
                <DropdownButton key={"yearSelect"} id="dropdown-basic-button" title={activeYear}>
                    {years.map(year => {
                        return (
                            <Dropdown.Item key={year} onClick={() => setActiveYear(year)}>{year}</Dropdown.Item>
                        )
                    })}
                </DropdownButton>
                <DropdownButton key={"monthSelect"} id="dropdown-basic-button" title={activeMonth}>
                    <Dropdown.Item key={'January'} onClick={() => setActiveMonth('January')}>January</Dropdown.Item>
                    <Dropdown.Item key={'February'} onClick={() => setActiveMonth('February')}>February</Dropdown.Item>
                    <Dropdown.Item key={'March'} onClick={() => setActiveMonth('March')}>March</Dropdown.Item>
                    <Dropdown.Item key={'April'} onClick={() => setActiveMonth('April')}>April</Dropdown.Item>
                    <Dropdown.Item key={'May'} onClick={() => setActiveMonth('May')}>May</Dropdown.Item>
                    <Dropdown.Item key={'June'} onClick={() => setActiveMonth('June')}>June</Dropdown.Item>
                    <Dropdown.Item key={'July'} onClick={() => setActiveMonth('July')}>July</Dropdown.Item>
                    <Dropdown.Item key={'August'} onClick={() => setActiveMonth('August')}>August</Dropdown.Item>
                    <Dropdown.Item key={'September'} onClick={() => setActiveMonth('September')}>September</Dropdown.Item>
                    <Dropdown.Item key={'October'} onClick={() => setActiveMonth('October')}>October</Dropdown.Item>
                    <Dropdown.Item key={'November'} onClick={() => setActiveMonth('November')}>November</Dropdown.Item>
                    <Dropdown.Item key={'December'} onClick={() => setActiveMonth('December')}>December</Dropdown.Item>
                </DropdownButton>
            </Stack>

            {/* Iterate through chart data to create the chart for the current selected month to display */}
            {monthcharts.map(month => {
                const activeChart = []
                if (month[0][0] === activeMonth) {
                    activeChart.push(month[0])
                    month.slice(1).forEach(expense => {
                        const expenseDate = expense[0].split(" ")
                        const date = new Date(expenseDate.at(-1))
                        if (date.getFullYear() == activeYear) {
                            activeChart.push(expense)
                        }
                    })

                    // Creating the actual Chart
                    return (
                        <Chart
                        key={month[0][0]}
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data = {activeChart}
                        options={{
                            title: month[0][0],
                            pieHole: 0.4,
                            is3D: false,
                        }}
                        />
                    )
                }
            })}
        </Container>
    )
}