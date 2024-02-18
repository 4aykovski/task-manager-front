import React, {FC} from 'react';
import {projectsListItem} from "../../types/types";
import classes from "./ProjectsList.module.css";
import ProjectsListItem from "../ProjectsListItem/ProjectsListItem";

interface ProjectListProps {
    items: projectsListItem[];
}

const ProjectsList: FC<ProjectListProps> = ({items}) => {
    return (
        <div className={classes.projectListWrapper}>
            <div className={classes.text}>Projects</div>
            <ul className={classes.projectList}>
                {items.map(item =>
                    <ProjectsListItem
                        key={item.id}
                        item={item}/>
                )}
            </ul>
        </div>
    );
};

export default ProjectsList;