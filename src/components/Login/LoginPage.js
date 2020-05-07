import React from 'react';
import GoogleButton from './GoogleButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function LoginPage(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <Typography variant="h1">
                        Welcome
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <Typography variant="overline">
                        Matt Bailey's web app that does something for some reason
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <Typography variant="h2">
                        Please login with Google to continue
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <GoogleButton from={props.from} />
                </Grid>
            </Grid>
        </Grid >
    );
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

export default LoginPage;

