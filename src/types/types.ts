import {Dispatch, SetStateAction} from "react";

export interface mainPagesListItem {
    value: string;
    activeState: [boolean, Dispatch<SetStateAction<boolean>>];
    route: string;
}

export interface projectsListItem {
    id: number;
    name: string;
    route: string;
    activeState: [boolean, Dispatch<SetStateAction<boolean>>];
}