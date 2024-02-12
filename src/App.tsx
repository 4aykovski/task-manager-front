import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRoute";

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
                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
