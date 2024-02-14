import React, {FC} from 'react';

interface IconProps {
    iconName: string;
    className: string;
}

const Icon: FC<IconProps> = ({iconName, className}) => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <img
            src={`${iconsDir}${iconName}`}
            alt="icon"
            className={className}/>
    );
};

export default Icon;