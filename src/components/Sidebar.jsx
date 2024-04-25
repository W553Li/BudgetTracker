import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

// Creating Sidebar component
export default function Sidebar() {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        {/* Sidebar itself */}
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            {/* Sidebar header */}
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <NavLink to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                Home
            </NavLink>
            </CDBSidebarHeader>

            {/* Links in the sidebar, only summary for now */}
            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>

                    <NavLink exact to="/summary" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Summary</CDBSidebarMenuItem>
                    </NavLink>

                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
        </div>
    )
}