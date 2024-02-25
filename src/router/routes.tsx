import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";
import ProjectIdPage from "../pages/ProjectIdPage";

export const publicRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '*', element: <NotFound/>, exact: true},
    {path: '/dashboard', element: <Dashboard/>, exact: true},
    {path: '/tasks', element: <Tasks/>, exact: true},
    {path: '/projects', element: <Projects/>, exact: true},
    {path: '/projects/:id', element: <ProjectIdPage/>, exact: true},
]

export const privateRoutes = []