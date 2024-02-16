import React from 'react';
import classes from './Logo.module.css'

const Logo = () => {
    const iconsDir = `${process.env.PUBLIC_URL}/assets/icons/`

    return (
        <img
            src={`${iconsDir}logo.svg`}
            className={classes.logo}
            alt=""/>
    );
};

export default Logo;