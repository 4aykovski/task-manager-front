import React, {FC} from 'react';
import {privateTaskListItem} from "../../types/types";
import {Link} from "react-router-dom";
import classes from "./PrivateTasksCardItem.module.css";

interface PrivateTasksCardItemProps {
    task: privateTaskListItem,
}

const PrivateTasksCardItem: FC<PrivateTasksCardItemProps> = ({ task}) => {
    const changeTaskStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.complete[1](event.target.checked)
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
                    checked={task.complete[0]}
                    onChange={changeTaskStatus}
                    name={task.id.toString()}/>
            </div>
        </li>
    );
};

export default PrivateTasksCardItem;