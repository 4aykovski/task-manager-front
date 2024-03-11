import React, {FC, useState} from 'react';
import Card from "../ui/Card/Card";
import {privateTaskListItem} from "../../types/types";
import classes from "./PrivateTasksCard.module.css"
import PrivateTasksCardItem from "../PrivateTasksCardItem/PrivateTasksCardItem";
import Modal from "../Modal/Modal";

interface PrivateTasksCardProps {
    tasks: privateTaskListItem[],
    setTasks: (value: (((prevState: privateTaskListItem[]) => privateTaskListItem[]) | privateTaskListItem[])) => void
}

const PrivateTasksCard: FC<PrivateTasksCardProps> = ({ tasks, setTasks }) => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const showModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    const createTask = () => {
        const task: privateTaskListItem = {
            id: tasks.length + 1,
            name: title,
            route: `/task/${tasks.length + 1}`,
            description: description,
            complete: false
        }
        setTasks([...tasks, task])
        setModal(false)
    }
    return (
        <Card className={classes.PrivateTasksCard}>
            <div className={classes.Heading}>Private tasks - {tasks.length}
                <button
                    className={classes.NewTaskButton}
                    onClick={showModal}
                >
                    +
                </button>
            </div>
            <div className={classes.PrivateTasksCardListWrapper}>
                <div className={classes.PrivateTasksCardList}>
                    <ul>
                        {tasks.map((task) => (
                            <PrivateTasksCardItem
                                key={task.id}
                                task={task}
                                tasks={tasks}
                                setTasks={setTasks}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <Modal
                active={modal}
                title="New Task"
                onClose={closeModal}
            >
                <div className={classes.TitleForm}>
                    <label htmlFor="title">Task title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={classes.TitleInput}
                    />
                </div>
                <div className={classes.DescriptionForm}>
                    <label htmlFor="description">Task description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={classes.DescriptionInput}
                    />
                </div>
                <button
                    className={classes.ModalSubmitButton}
                    onClick={createTask}
                >
                    Submit
                </button>
            </Modal>
        </Card>
    );
};

export default PrivateTasksCard;