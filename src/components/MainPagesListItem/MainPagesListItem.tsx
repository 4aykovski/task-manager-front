import React, {FC, useContext} from 'react';
import {mainPagesListItem} from "../../types/types";
import classes from "./MainPagesListItem.module.css";
import {Link} from "react-router-dom";
import {SidebarContext} from "../../context";

interface MainPagesItemProps {
    item: mainPagesListItem;
    onClick: (item: mainPagesListItem) => void;
}

const MainPagesListItem: FC<MainPagesItemProps> = ({item, onClick}) => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`
    const isExpanded = useContext(SidebarContext)

    return (
        <Link
            to={item.route}
            onClick={() => onClick(item)}
        >
            <li className={item.activeState[0] ? classes.mainPagesItem + ' ' + classes.active : classes.mainPagesItem}>
                <img
                    src={`${iconsDir}${item.value.toLowerCase()}.svg`}
                    alt="icon"
                    className={classes.icon}/>
                <span className={isExpanded ? classes.text + ' ' + classes.expanded : classes.text}>{item.value}</span>
            </li>
        </Link>
    );
};

export default MainPagesListItem;