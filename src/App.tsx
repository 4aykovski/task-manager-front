import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

function App() {
    const currentPath = window.location.pathname.split('/');

    // решить с постоянным ререндером

    const sidebarItems = [
        {value: "DASHBOARD", route: "/dashboard", activeState: useState(currentPath[1] === 'dashboard')},
        {value: "PROJECTS", route: "/projects", activeState: useState(currentPath[1] === 'projects')},
        {value: "TASKS", route: "/tasks", activeState: useState(currentPath[1] === 'tasks')},
    ]

    console.log('123')

    return (
        <BrowserRouter>
            <Sidebar items={sidebarItems}/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
