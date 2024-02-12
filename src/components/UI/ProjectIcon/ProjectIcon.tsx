import React, {FC} from 'react';

interface ProjectIconProps {
    className?: string;
}

const ProjectIcon: FC<ProjectIconProps> = ({className}) => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <img
            src={`${iconsDir}/projectIcon.svg`}
            alt=""
            className={className}/>
    );
};

export default ProjectIcon;