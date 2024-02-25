import React, {FC} from 'react';
import Card from "../ui/Card/Card";
import {privateTaskListItem} from "../../types/types";
import classes from "./PrivateTasksCard.module.css"
import PrivateTasksCardItem from "../PrivateTasksCardItem/PrivateTasksCardItem";

interface PrivateTasksCardProps {
    tasks: privateTaskListItem[];
}

const PrivateTasksCard: FC<PrivateTasksCardProps> = ({tasks}) => {


    return (
        <Card className={classes.PrivateTasksCard}>
            <div className={classes.Heading}>Private tasks - {tasks.length}</div>
            <ul>
                {tasks.map((task) => (
                    <PrivateTasksCardItem
                    key={task.id}
                    task={task}/>
                ))}
            </ul>
        </Card>
    );
};

export default PrivateTasksCard;