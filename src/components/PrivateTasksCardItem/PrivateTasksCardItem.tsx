import React, {FC} from 'react';
import {privateTaskListItem} from "../../types/types";
import {Link} from "react-router-dom";
import classes from "./PrivateTasksCardItem.module.css";

interface PrivateTasksCardItemProps {
    task: privateTaskListItem,
    tasks: privateTaskListItem[],
    setTasks: (value: (((prevState: privateTaskListItem[]) => privateTaskListItem[]) | privateTaskListItem[])) => void
}

const PrivateTasksCardItem: FC<PrivateTasksCardItemProps> = ({ task, tasks , setTasks}) => {
    const changeTaskStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTasks = [...tasks];
        newTasks.find(task => task.id === Number(event.target.name))!.complete = event.target.checked;
        setTasks(newTasks);
    }

    return (
        <li className={classes.Item}>
            <span className={classes.ItemNumber}>{task.id}</span>
            <div className={classes.ItemNameWrapper}>
                <Link
                    to={task.route}
                    className={classes.ItemName}>
                    {task.name}
                </Link>
            </div>
            <div className={classes.CheckboxWrapper}>
                <input
                    type="checkbox"
                    className={classes.CustomCheckbox}
                    checked={task.complete}
                    onChange={changeTaskStatus}
                    name={task.id.toString()}/>
            </div>
        </li>
    );
};

export default PrivateTasksCardItem;