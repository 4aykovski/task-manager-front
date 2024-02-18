import React, {FC, useEffect, useState} from 'react';
import Logo from "../ui/Logo/Logo";
import {mainPagesListItem, projectsListItem} from "../../types/types";
import classes from "./Sidebar.module.css";
import {SidebarContext} from "../../context";
import MainPagesList from "../MainPagesList/MainPagesList";
import ProjectsList from "../ProjectsList/ProjectsList";
import {useLocation} from "react-router-dom";

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

    const location = useLocation();
    useEffect(() => {
        mainPagesListItems.map(i => i.route === location.pathname
            ? i.activeState[1](true)
            : i.activeState[1](false)
        );
        projectsListItems.map(i => i.route === location.pathname
            ? i.activeState[1](true)
            : i.activeState[1](false)
        );
    }, [location, mainPagesListItems, projectsListItems])

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
                        items={mainPagesListItems}/>
                    <ProjectsList
                        items={projectsListItems}/>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
};

export default Sidebar;