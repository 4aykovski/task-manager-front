import React, {FC} from 'react';
import classes from "../MainPagesListItem/MainPagesListItem.module.css";

interface IconProps {
    iconName: string;
}

const Icon: FC<IconProps> = ({iconName}) => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <img
            src={`${iconsDir}${iconName}`}
            alt="icon"/>
    );
};

export default Icon;