import React, {createContext, FC, useState} from 'react';
import Logo from "../Logo/Logo";
import {sidebarItem} from "../../types/types";
import classes from "./Sidebar.module.css";
import SidebarPagesList from "../SidebarPagesList/SidebarPagesList";
import {SidebarContext} from "../../context";

interface SidebarProps {
    items: sidebarItem[]
}

const Sidebar: FC<SidebarProps> = ({items}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true)

    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <aside className={isExpanded ? classes.sidebar + ' ' + classes.active : classes.sidebar}>
            <nav className={classes.listWrapper}>
                <div className={classes.logoWrapper}>
                    {isExpanded ? <Logo/> : <div/>}
                    <button
                        className={classes.closeBtn}
                        onClick={() => setIsExpanded(!isExpanded)}>
                        <img
                            src={`${iconsDir}/close.svg`}
                            alt="close"
                            className={classes.close}/>
                    </button>
                </div>
                <SidebarContext.Provider value={isExpanded}>
                    <SidebarPagesList items={items}/>
                </SidebarContext.Provider>

            </nav>
        </aside>
    );
};

export default Sidebar;