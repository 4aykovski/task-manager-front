import React, {FC, useContext} from 'react';
import {projectsListItem} from "../../types/types";
import classes from "./ProjectsList.module.css";
import ProjectsListItem from "../ProjectsListItem/ProjectsListItem";
import {SidebarContext} from "../../context";

interface ProjectListProps {
    items: projectsListItem[];
    onClickItem: (item: projectsListItem) => void;
}

const ProjectsList: FC<ProjectListProps> = ({items, onClickItem}) => {
    const isExpanded = useContext(SidebarContext)

    return (
        <div className={classes.projectListWrapper}>
            <div className={classes.text}>Projects</div>
            <ul className={classes.projectList}>
                {items.map(item =>
                    <ProjectsListItem
                        key={item.id}
                        item={item}
                        onClick={onClickItem}/>
                )}
            </ul>
        </div>
    );
};

export default ProjectsList;