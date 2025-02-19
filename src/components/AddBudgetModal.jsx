import { Modal, Form, Button} from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"
import { useAuth } from "../contexts/AuthContext"

export default function AddBudgetModal ({show, handleClose}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const {addBudget} = useBudgets()
    const {session} = useAuth()
    function handleSubmit(e) {
        e.preventDefault() 
        addBudget ({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value),
            UID: session.user.id
        })
        handleClose()
    }

    // UI for creating a budget
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                {/* Header */}
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Name of the budget */}
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    {/* Amount for the budget */}
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Max Spending</Form.Label>
                        <Form.Control ref={maxRef} type="number" required min={0} step={0.01}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        {/* Button to add the budget */}
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
