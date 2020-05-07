import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

function HomePage(props) {
    const location = useLocation()
    const classes = useStyles();
    console.log(props)

    if ('user' in props) {
        return (
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                        <Typography variant="h1">
                            {`Welcome ${props.user.given_name}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid >
        );
    } else {
        return null
    }

}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default HomePage;

