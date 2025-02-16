import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

// handling routing with tokens
const PrivateRoute = ({children}) => {
    // useAuth to access session data
    const {session} = useAuth();

    // while session is loading
    if (session === undefined) {
        return <p>Loading...</p>
    }

    // if have a session, return children, else, navigate to signup
    return <>{session ? <> {children} </> : <Navigate to="/BudgetTracker/Login"/>}</>
};

export default PrivateRoute;