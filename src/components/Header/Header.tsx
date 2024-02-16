import React, {FC} from 'react';
import classes from './Header.module.css'
import Card from "../ui/Card/Card";
import Icon from '../ui/Icon/Icon';

interface HeaderProps {
    name: string;
}

const Header: FC<HeaderProps> = ({name}) => {
    return (
        <header>
            <div className={classes.LeftPart}>
                <Card>
                    LeftPart
                </Card>
            </div>
            <div className={classes.RightPart}>
                <Card>
                    <Icon iconName={"notification.svg"}/>
                </Card>
                <Card>
                    ProfileIcon
                </Card>
            </div>
        </header>
    );
};

export default Header;