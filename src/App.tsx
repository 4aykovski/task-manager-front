import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRoute";

function App() {
    const currentPath = window.location.pathname.split('/');

    console.log(currentPath)

    const mainPagesItems = [
        {
            value: "DASHBOARD",
            route: "/dashboard",
            activeState: useState(currentPath[1] === 'dashboard' || currentPath[1] === '')
        },
        {value: "PROJECTS", route: "/projects", activeState: useState(currentPath[1] === 'projects')},
        {value: "TASKS", route: "/tasks", activeState: useState(currentPath[1] === 'tasks')},
    ]

    const projectListItems = [
        {id: 1, name: "Project1", route: "/projects/1", activeState: useState(false)},
        {id: 2, name: 'Project2', route: '/projects/2', activeState: useState(false)},
    ]

    // TODO: Сделать компонент ICON
    // TODO: Решить проблему с активынм projects при переключении на отдельный проект

    return (
        <BrowserRouter>
            <main>
                <Sidebar mainPagesListItems={mainPagesItems} projectsListItems={projectListItems}/>
                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
