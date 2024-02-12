import React, {FC} from 'react';
import classes from './MainPagesList.module.css'
import MainPagesItem from "../MainPagesItem/MainPagesItem";
import {sidebarItem} from "../../types/types";

interface SidebarPagesListProps {
    items: sidebarItem[]
}

const MainPagesList: FC<SidebarPagesListProps> = ({items}) => {


    const changeActiveItem = (item: sidebarItem) => {
        items.map(i => i.activeState[1](false))
        item.activeState[1](true)
    }



    return (

        <ul className={classes.sidebarList}>
            {items.map(item =>
                <MainPagesItem
                    key={item.value}
                    item={item}
                    onClick={changeActiveItem}
                />
            )}
        </ul>
    );
};

export default MainPagesList;