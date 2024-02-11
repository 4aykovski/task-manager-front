import {Dispatch, SetStateAction} from "react";

export interface sidebarItem {
    value: string;
    activeState: [boolean, Dispatch<SetStateAction<boolean>>];
    route: string;
}