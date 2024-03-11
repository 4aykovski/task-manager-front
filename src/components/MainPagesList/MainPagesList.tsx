import React, {FC} from 'react';
import classes from './MainPagesList.module.css'
import MainPagesListItem from "../MainPagesListItem/MainPagesListItem";
import {mainPagesListItem} from "../../types/types";

interface MainPagesListProps {
    items: mainPagesListItem[];
}

const MainPagesList: FC<MainPagesListProps> = ({items}) => {

    return (
        <ul className={classes.mainPagesList}>
            {items.map(item =>
                <MainPagesListItem
                    key={item.value}
                    item={item}
                />
            )}
        </ul>
    );
};

export default MainPagesList;