import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

import AirlineSeatReclineNormalSharpIcon from '@material-ui/icons/AirlineSeatReclineNormalSharp';

const Header = () => {

    const useStyles = makeStyles(() => ({
        typographyStyles: {
            flex: 1
        }
    }));

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Header
                </Typography>
                <AirlineSeatReclineNormalSharpIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
