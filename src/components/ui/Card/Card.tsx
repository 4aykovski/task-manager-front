import React, {FC} from 'react';
import classes from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
}

const Card: FC<CardProps> = ({children}) => {
    return (
        <div className={classes.Card} >
            {children}
        </div>
    );
};

export default Card;