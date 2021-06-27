import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    errorInstruction: {
        paddingTop: '20px'
    }
}));

export default function Headercomponent() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container direction="row" justify="center">
                <Typography variant={'h4'}>Oops!</Typography>
            </Grid>
            <Grid container direction="row" justify="center" className={classes.errorInstruction}>
                <Typography paddingTop={2}>Something went wrong....Please try reloading the page...</Typography>
            </Grid>
        </Grid>
    )
}