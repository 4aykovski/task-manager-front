import React, {useState} from 'react';
import './styles/App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRoute";
import {mainPagesListItem, projectsListItem} from "./types/types";

function App() {
    const currentPath = window.location.pathname.split('/');

    const mainPagesItems: mainPagesListItem[] = [
        {
            value: "DASHBOARD",
            route: "/dashboard",
            iconName: 'dashboard.svg',
            activeState: useState(currentPath[1] === 'dashboard')
        },
        {
            value: "PROJECTS",
            route: "/projects",
            iconName: 'projects.svg',
            activeState: useState(currentPath[1] === 'projects' && currentPath.length === 2)
        },
        {value: "TASKS", route: "/tasks", iconName: 'tasks.svg', activeState: useState(currentPath[1] === 'tasks')},
    ]

    const projectListItems: projectsListItem[] = [
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

    return (
        <BrowserRouter>
            {currentPath[1] !== ''
                ?
                <Sidebar
                    mainPagesListItems={mainPagesItems}
                    projectsListItems={projectListItems}/>
                :
                <></>
            }
            <main>
                <AppRouter/>
            </main>
        </BrowserRouter>
    );
}

export default App;
