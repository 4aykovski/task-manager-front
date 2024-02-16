import {Dispatch, SetStateAction} from "react";

export interface mainPagesListItem {
    value: string;
    iconName: string;
    activeState: [boolean, Dispatch<SetStateAction<boolean>>];
    route: string;
}

export interface projectsListItem {
    id: number;
    name: string;
    route: string;
    iconName: string;
    activeState: [boolean, Dispatch<SetStateAction<boolean>>];
}