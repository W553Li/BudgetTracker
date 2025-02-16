import {useContext, createContext, useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const AuthContext = createContext();

// manage user state
export const AuthContextProvider = ({ children }) => {
    // state for handling sessions
    const [session, setSession] = useState(undefined)

    // contact supabase for signup
    const signUpNewUser = async (email, password) => {
        const {data, error} = await supabase
            .auth
            .signUp({
                email: email.toLowerCase(),
                password: password
            });

            if (error) {
                // console.log("signup error: ", error)
                return {success: false, error};
            }

            return {success: true, data};
    }

    // contact supabase for signin
    const signIn = async (email, password) => {
        try {
            const {data, error} = await supabase
                .auth
                .signInWithPassword({
                    email: email.toLowerCase(),
                    password: password
                })

                if (error) {
                    // console.log("signin error: ", error)
                    return {success: false, error};
                }

                return {success: true, data};
        } catch (error) {
            // console.log("other signin error: ", error)
            return {success: false, error};
        }
    }

    // contact supabase for signout
    const signOut = async () => {
        const {error} = supabase
            .auth
            .signOut();
        if (error) {
            // console.log("Error signing out:", error)
        } else {
            // console.log("completed sign out")
        }
    }

    // get the session from supabase
    useEffect(() => {
        supabase
            .auth
            .getSession()
            .then(({ data: {session}}) => {
                setSession(session);
        })

        supabase
            .auth
            .onAuthStateChange((_event, session) => {
                setSession(session);
        })
    }, [])

    return (
        <AuthContext.Provider value={{session, signUpNewUser, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

// hook for managing consuming content of our context
export const useAuth = () => {
    return useContext(AuthContext);
};