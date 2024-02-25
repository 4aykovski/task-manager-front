import React, {FC} from 'react';
import classes from "./Content.module.css"

interface ContentProps {
    children?: React.ReactNode
}

const Content: FC<ContentProps> = ({children}) => {
    return (
        <div className={classes.Content}>
            {children}
        </div>
    );
};

export default Content;