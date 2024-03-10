import React from 'react';
import Card from "../ui/Card/Card";
import classes from "./ProjectsCard.module.css"

const ProjectsCard = () => {
    return (
        <Card className={classes.ProjectCard}>
            <div className={classes.Heading}>
                Project1
            </div>
            <div className={classes.ProjectBoard}>
                <div className={classes.BoardsList}>

                </div>
                <div className={classes.BoardsColumnsWrapper}>
                    <div className={classes.BoardsColumns}>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>
                        <div className={classes.BoardsColumn}>

                        </div>


                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectsCard;