import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

function App() {
    const currentPath = window.location.pathname.split('/');

    console.log(currentPath)

    const sidebarItems = [
        {
            value: "DASHBOARD",
            route: "/dashboard",
            activeState: useState(currentPath[1] === 'dashboard' || currentPath[1] === '')
        },
        {value: "PROJECTS", route: "/projects", activeState: useState(currentPath[1] === 'projects')},
        {value: "TASKS", route: "/tasks", activeState: useState(currentPath[1] === 'tasks')},
    ]

    return (
        <BrowserRouter>
            <main>
                <Sidebar items={sidebarItems}/>
                <Routes>
                    <Route
                        path="/dashboard"
                        element={<Dashboard/>}/>
                    <Route
                        path="/"
                        element={<Dashboard/>}/>
                    <Route
                        path="/projects"
                        element={<Projects/>}/>
                    <Route
                        path="/tasks"
                        element={<Tasks/>}/>
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
