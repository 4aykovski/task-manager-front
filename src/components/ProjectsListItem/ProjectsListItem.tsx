import React, {FC, useContext} from 'react';
import classes from './ProjectsListItem.module.css'
import {Link} from "react-router-dom";
import {projectsListItem} from "../../types/types";
import {SidebarContext} from "../../context";
import Icon from "../ui/Icon/Icon";

interface ProjectItemProps {
    item: projectsListItem
}

const ProjectsListItem: FC<ProjectItemProps> = ({item}) => {
    const isExpanded = useContext(SidebarContext)

    return (
        <Link
            to={item.route}>
            <div className={classes.projectsListItemWrapper}>
                <Icon
                    iconName={item.iconName}
                    className={classes.itemIcon}></Icon>
                {isExpanded
                    ?
                    <li className={item.activeState[0] ? classes.projectsListItem + ' ' + classes.active : classes.projectsListItem}>
                        <div className={isExpanded ? classes.text + ' ' + classes.expanded : classes.text}>{item.name}</div>
                    </li>
                    :
                    ''
                }
            </div>
        </Link>
    );
};

export default ProjectsListItem;