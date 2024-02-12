import React, {FC, useContext} from 'react';
import {sidebarItem} from "../../types/types";
import classes from "./SidebarItem.module.css";
import {Link} from "react-router-dom";
import {SidebarContext} from "../../context";

interface SidebarItemProps {
    item: sidebarItem;
    onClick: (item: sidebarItem) => void;
}

const SidebarItem: FC<SidebarItemProps> = ({item, onClick}) => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`
    const isExpanded = useContext(SidebarContext)
    console.log(isExpanded)
    return (
        <Link
            to={item.route}
            onClick={() => onClick(item)}
        >
            <li className={item.activeState[0] ? classes.sidebarItem + ' ' + classes.active : classes.sidebarItem}>
                <img
                    src={`${iconsDir}${item.value.toLowerCase()}.svg`}
                    alt="icon"
                    className={classes.icon}/>
                <span className={isExpanded ? classes.text + ' ' + classes.expanded : classes.text}>{item.value}</span>
            </li>
        </Link>
    );
};

export default SidebarItem;