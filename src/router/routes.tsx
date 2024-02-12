import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import React from "react";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";

export const publicRoutes = [
    {path: '/', element: <Main/>},
    {path: '*', element: <NotFound/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/tasks', element: <Tasks/>},
    {path: '/projects', element: <Projects/>},
]

export const privateRoutes = []