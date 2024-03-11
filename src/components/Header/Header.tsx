import React, {FC} from 'react';
import classes from './Header.module.css'
import Card from "../ui/Card/Card";
import Icon from '../ui/Icon/Icon';
import {Link} from "react-router-dom";

interface HeaderProps {
    name: string;
}

const Header: FC<HeaderProps> = ({name}) => {
    return (
        <header>
            <div className={classes.LeftPart}>
                <Card>
                    {name}
                </Card>
            </div>
            <div className={classes.RightPart}>
                <Card className={classes.Item}>
                    <Link
                        to={"/profile/notifications"}
                        className={classes.Icons}>
                        <Icon iconName={"notification.svg"}/>
                    </Link>
                </Card>
                <Card className={classes.Item}>
                    <Link
                        to={"/profile"}
                        className={classes.Icons}>
                        <Icon iconName={"profile.svg"}/>
                    </Link>
                </Card>
            </div>
        </header>
    );
};

export default Header;