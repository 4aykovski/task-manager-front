import React, {FC} from 'react';
import classes from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: FC<CardProps> = ({children, className}) => {
    return (
        <div className={className
            ? classes.Card + ' ' + className
            : classes.Card
        }>
            {children}
        </div>
    );
};

export default Card;