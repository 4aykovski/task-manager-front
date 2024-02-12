import React, {FC} from 'react';
import classes from "../Sidebar/Sidebar.module.css";
import SidebarItem from "../SidebarItem/SidebarItem";
import {sidebarItem} from "../../types/types";

interface SidebarPagesListProps {
    items: sidebarItem[]
}

const SidebarPagesList: FC<SidebarPagesListProps> = ({items}) => {


    const changeActiveItem = (item: sidebarItem) => {
        items.map(i => i.activeState[1](false))
        item.activeState[1](true)
    }



    return (

        <ul className={classes.sidebarList}>
            {items.map(item =>
                <SidebarItem
                    key={item.value}
                    item={item}
                    onClick={changeActiveItem}
                />
            )}
        </ul>
    );
};

export default SidebarPagesList;