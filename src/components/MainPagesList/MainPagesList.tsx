import React, {FC} from 'react';
import classes from './MainPagesList.module.css'
import MainPagesListItem from "../MainPagesListItem/MainPagesListItem";
import {mainPagesListItem} from "../../types/types";

interface MainPagesListProps {
    items: mainPagesListItem[];
    onClickItem: (item: mainPagesListItem) => void;
}

const MainPagesList: FC<MainPagesListProps> = ({items, onClickItem}) => {

    return (
        <ul className={classes.mainPagesList}>
            {items.map(item =>
                <MainPagesListItem
                    key={item.value}
                    item={item}
                    onClick={onClickItem}
                />
            )}
        </ul>
    );
};

export default MainPagesList;