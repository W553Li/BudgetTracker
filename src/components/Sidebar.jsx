import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


// Creating Sidebar component
export default function Sidebar() {
    const {session, signOut} = useAuth()
    const navigate = useNavigate()

    const handleSignout = async (e) => {
        e.preventDefault()
        try {
            await signOut()
            navigate("/BudgetTracker/Login")
        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
        {/* Sidebar itself */}
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            {/* Sidebar header */}
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <NavLink to="/BudgetTracker/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Home
            </NavLink>
            </CDBSidebarHeader>

            {/* Links in the sidebar */}
            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>

                    <NavLink exact to="/BudgetTracker/Summary" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Summary</CDBSidebarMenuItem>
                    </NavLink>

                    {session ? <></> :
                        <NavLink exact to="/BudgetTracker/Login" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Login</CDBSidebarMenuItem>
                        </NavLink>
                    }

                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                {session && <CDBSidebarMenuItem onClick={handleSignout} className="sidebar-btn-wrapper hover:cursor-pointer" style={{padding: '20px 5px'}}>
                    Sign Out
                </CDBSidebarMenuItem>}
            </CDBSidebarFooter>
        </CDBSidebar>
        </div>
    )
}