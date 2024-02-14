import React, {FC, useState} from 'react';
import Logo from "../Logo/Logo";
import {mainPagesListItem, projectsListItem} from "../../types/types";
import classes from "./Sidebar.module.css";
import {SidebarContext} from "../../context";
import MainPagesList from "../MainPagesList/MainPagesList";
import ProjectsList from "../ProjectsList/ProjectsList";

interface SidebarProps {
    mainPagesListItems: mainPagesListItem[];
    projectsListItems: projectsListItem[];
}

const Sidebar: FC<SidebarProps> = ({mainPagesListItems, projectsListItems}) => {
    const [
        isExpanded,
        setIsExpanded,
    ] = useState<boolean>(localStorage.getItem('isExpanded') !== null
        ? localStorage.getItem('isExpanded') === 'true'
        : true
    )
    localStorage.setItem('isExpanded', String(isExpanded))

    const changeActiveItem = (item: mainPagesListItem | projectsListItem) => {
        mainPagesListItems.map(i => i.activeState[1](false))
        projectsListItems.map(i => i.activeState[1](false))
        item.activeState[1](true)
    }

    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <aside className={isExpanded ? classes.sidebar + ' ' + classes.active : classes.sidebar}>
            <nav className={classes.sidebarWrapper}>
                <div className={classes.logoWrapper}>
                    {isExpanded ? <Logo/> : <></>}
                    <button
                        className={classes.closeBtn}
                        onClick={() => setIsExpanded(!isExpanded)}>
                        <img
                            src={isExpanded
                                ? `${iconsDir}/close.svg`
                                : `${iconsDir}/open.svg`}
                            alt="close"
                            className={classes.close}/>
                    </button>
                </div>

                <SidebarContext.Provider value={isExpanded}>
                    <MainPagesList
                        items={mainPagesListItems}
                        onClickItem={changeActiveItem}/>
                    <ProjectsList
                        items={projectsListItems}
                        onClickItem={changeActiveItem}/>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
};

export default Sidebar;