import { Modal, Form, Button} from "react-bootstrap"
import { useRef, useState } from "react"
import { useBudgets} from "../contexts/BudgetsContext"
import { useAuth } from "../contexts/AuthContext"

export default function EditBudgetModal({show, handleClose, budgetId, budgetName, budgetMax}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const {updateBudget} = useBudgets()
    const {session} = useAuth()
    function handleSubmit(e) {
        e.preventDefault() 
        updateBudget ({
            id: budgetId,
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value),
            UID: session.user.id
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                {/* Header */}
                <Modal.Header closeButton>
                    <Modal.Title>Edit Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Name of the budget */}
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={budgetName} ref={nameRef} type="text" required/>
                    </Form.Group>
                    {/* Amount for the budget */}
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Max Spending</Form.Label>
                        <Form.Control defaultValue={budgetMax} ref={maxRef} type="number" required min={0} step={0.01}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        {/* Button to Edit the budget */}
                        <Button variant="primary" type="submit">
                            Edit
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )

}