import { Modal, Form, Button} from "react-bootstrap"
import { useRef, useState } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID} from "../contexts/BudgetsContext"
import { useAuth } from "../contexts/AuthContext"

export default function AddExpenseModal ({show, handleClose, defaultBudgetId}) {
    // Create variables and function to add an expense
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const repeatRef = useRef()
    const dateRef = useRef()
    const {addExpense, budgets} = useBudgets()
    const {session} = useAuth()
    function handleSubmit(e) {
        e.preventDefault() 
        addExpense ({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
            date: dateRef.current.value,
            repeat: repeatRef.current.value,
            UID: session.user.id
        })
        handleClose()
    }

    var curr = new Date().toLocaleDateString('en-CA')

    // UI for adding an expense
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                {/* Header */}
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Name for the new expense */}
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" required/>
                    </Form.Group>
                    {/* Amount for the new expense */}
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control ref={amountRef} type="number" required min={0} step={0.01}/>
                    </Form.Group>
                    {/* What budget to add the new expense to */}
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>Budget</Form.Label>
                        {/* Create the various options for available budgets */}
                        <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            {/* <option id={uncategorizedBudgetId}>Uncategorized</option> */}
                            {/* iterate through all the current budgets and add them to the list of options */}
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name} 
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    {/* Allow the user to choose if the new expense should repeat */}
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>Repeat</Form.Label>
                        <Form.Select defaultValue={"None"} ref={repeatRef}>
                            <option id={"None"}>None</option>
                            <option id={"Daily"}>Daily</option>
                            <option id={"Weekly"}>Weekly</option>
                            <option id={"Monthly"}>Monthly</option>
                            <option id={"Yearly"}>Yearly</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Date of the current expense */}
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control defaultValue={curr} ref={dateRef} type="date" required></Form.Control>
                    </Form.Group>

                    {/* Button to add the new expense */}
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
