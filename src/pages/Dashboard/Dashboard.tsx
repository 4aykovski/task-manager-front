import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import PrivateTasksCard from "../../components/PrivateTasksCard/PrivateTasksCard";
import TelegramCard from "../../components/TelegramCard/TelegramCard";
import classes from "./Dashboard.module.css"
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import {privateTaskListItem} from "../../types/types";

const Dashboard = () => {

    let tasks:privateTaskListItem[] = [
        {
            id: 1,
            route: "/task/1",
            name: 'task 1',
            description: 'task 1 description',
            complete: useState(false)
        },
        {
            id: 2,
            route: "/task/2",
            name: 'task 2',
            description: 'task 2 description',
            complete: useState(true)
        },
        {
            id: 3,
            route: "/task/2",
            name: 'task 2',
            description: 'task 2 description',
            complete: useState(true)
        },
        {
            id: 4,
            route: "/task/2",
            name: 'task 2',
            description: 'task 2 description',
            complete: useState(true)
        },
    ]


    return (
        <div className={classes.MainWrapper}>
            <Header name="Dashboard"/>
            <Content>
                <div className={classes.RightPart}>
                    <PrivateTasksCard tasks={tasks}/>
                    <TelegramCard/>
                </div>
                <div className={classes.LeftPart}>
                    <ProjectsCard/>
                </div>

            </Content>
        </div>
    );
};

export default Dashboard;