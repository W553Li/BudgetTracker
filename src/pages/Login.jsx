import { Container, Stack, Button, Dropdown, DropdownButton, Form} from 'react-bootstrap'
import React, { useState, useRef } from 'react'
import { useAuth } from "../contexts/AuthContext"
import {Link, useNavigate} from "react-router-dom"


export default function Login() {
    // Refs for handling email and password input and errors
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)

    // handling navigation
    const navigate = useNavigate()

    // session handling
    const {session, signIn} = useAuth()

    // sign in handling
    const handleSignin = async (e) => {
        e.preventDefault()
        
        try {
            const result = await signIn(emailRef.current.value, passwordRef.current.value)

            if (result.success) {
                navigate("/BudgetTracker/")
            } else {
                setError(result.error.message);
            }
        } catch (error) {
            setError("An error occurred")
        }
    }

    // rendering form
    return (
        <Container className="mb-auto mt-auto">
            {/* Header */}
            <div className="h4 mb-2 text-center">Log In</div>
            <div className="p-4 mb-2 text-left">
                Don't have an account? <Link to="/BudgetTracker/Signup">Sign Up</Link>
            </div>
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSignin}>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        ref={emailRef}
                        type="email" 
                        placeholder="Enter Email" 
                        required/>
                </Form.Group>
                {/* User Password */}
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        type="password" 
                        placeholder="Enter Password"
                        required/>
                </Form.Group>
                {/* Login Button */}
                <Button className="w-100" variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            {error && <p className="h4 mb-2 text-center">{error}</p>}
        </Container>
    );
}