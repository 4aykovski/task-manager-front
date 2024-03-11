import React, {FC, useContext} from 'react';
import {mainPagesListItem} from "../../types/types";
import classes from "./MainPagesListItem.module.css";
import {Link} from "react-router-dom";
import {SidebarContext} from "../../context";
import Icon from '../ui/Icon/Icon';

interface MainPagesItemProps {
    item: mainPagesListItem;
}

const MainPagesListItem: FC<MainPagesItemProps> = ({item}) => {
    const isExpanded = useContext(SidebarContext)

    return (
        <Link
            to={item.route}
        >
            <li className={item.activeState[0] ? classes.mainPagesItem + ' ' + classes.active : classes.mainPagesItem}>
                <Icon
                    iconName={item.iconName}
                    className={classes.icon}></Icon>
                <span className={isExpanded ? classes.text + ' ' + classes.expanded : classes.text}>{item.value}</span>
            </li>
        </Link>
    );
};

export default MainPagesListItem;