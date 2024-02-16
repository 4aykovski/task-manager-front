import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRoute";

function App() {
    const currentPath = window.location.pathname.split('/');

    const mainPagesItems = [
        {
            value: "DASHBOARD",
            route: "/dashboard",
            iconName: 'dashboard.svg',
            activeState: useState(currentPath[1] === 'dashboard' || currentPath[1] === '')
        },
        {
            value: "PROJECTS",
            route: "/projects",
            iconName: 'projects.svg',
            activeState: useState(currentPath[1] === 'projects' && currentPath.length === 2)
        },
        {value: "TASKS", route: "/tasks", iconName: 'tasks.svg', activeState: useState(currentPath[1] === 'tasks')},
    ]

    const projectListItems = [
        {
            id: 1,
            name: "Project1",
            route: "/projects/1",
            iconName: 'projectIcon.svg',
            activeState: useState(currentPath[1] === 'projects' && currentPath[2] === '1')
        },
        {
            id: 2,
            name: 'Project2',
            route: '/projects/2',
            iconName: 'projectIcon.svg',
            activeState: useState(currentPath[1] === 'projects' && currentPath[2] === '2')
        },
    ]

    // TODO: Сделать компонент ICON
    // TODO: Решить проблему с активным projects при переключении на отдельный проект

    return (
        <BrowserRouter>
            <main>
                <Sidebar
                    mainPagesListItems={mainPagesItems}
                    projectsListItems={projectListItems}/>
                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
