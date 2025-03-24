import { Modal, Form, Button} from "react-bootstrap"
import { useRef, useState } from "react"
import { useBudgets} from "../contexts/BudgetsContext"
import { useAuth } from "../contexts/AuthContext"

export default function EditExpenseModal({show, handleClose, expenseId, expenseDescription, expensesAmount, expenseBudgetId, expenseRepeat, expenseDate}) {
    // Create variables and function to edit an expense
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const dateRef = useRef()
    const {updateExpense, budgets} = useBudgets()
    const {session} = useAuth()
    function handleSubmit(e) {
        e.preventDefault() 
        updateExpense ({
            id: expenseId,
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
            date: dateRef.current.value,
            repeat: expenseRepeat,
            UID: session.user.id
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
        {/* <Form> */}
            {/* Header */}
            <Modal.Header closeButton>
                <Modal.Title>Edit Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Name for the new expense */}
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={expenseDescription} ref={descriptionRef} type="text" required/>
                </Form.Group>
                {/* Amount for the new expense */}
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control defaultValue={expensesAmount} ref={amountRef} type="number" required min={0} step={0.01}/>
                </Form.Group>
                {/* What budget to add the new expense to */}
                <Form.Group className="mb-3" controlId="budgetId">
                    <Form.Label>Budget</Form.Label>
                    {/* Create the various options for available budgets */}
                    <Form.Select defaultValue={expenseBudgetId} ref={budgetIdRef}>
                        {/* iterate through all the current budgets and add them to the list of options */}
                        {budgets.map(budget => (
                            <option key={budget.id} value={budget.id}>
                                {budget.name} 
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                {/* Date of the current expense */}
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control defaultValue={expenseDate} ref={dateRef} type="date" required></Form.Control>
                </Form.Group>

                {/* Button to Edit the new expense */}
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
    )
}