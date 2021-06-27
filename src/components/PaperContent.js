import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip, Box, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    appNameContainer: {
        padding: '10px',
        width: '100%'
    },
    appName: {

    },
    dividingLine: {
        borderBottom: '1px ridge rgb(54, 140, 213)',
        width: '50%'
    },
    appDescriptionContainer: {
        padding: '10px'
    },
    appDescription: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    clapContainer: {
        width: '100%'
    },
    clap: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '25px',
        height: '25px'
    },
    clapCount: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '12px',
        paddingBottom: '10px'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '0px'
    }
}));

export default function PaperContent(props) {
    const classes = useStyles();
    const data = props.data;
    return (
        <Grid container className={classes.root}>
            <Grid container alignContent='flex-start' className={classes.paperContainer}>
                <Grid container direction="row" className={classes.appNameContainer}>
                    <Tooltip title={data.Title} enterDelay={10} placement={'bottom-end'} >
                        <Typography variant="h6" noWrap className={classes.appName}>{data.Title}</Typography>
                    </Tooltip>
                </Grid>
                <Grid container direction="row">
                    <Box component='span' className={classes.dividingLine}></Box>
                </Grid>
                <Grid container direction="row" className={classes.appDescriptionContainer} align="justify">
                    <Tooltip title={data.Description} enterDelay={10} placement={'bottom-end'}>
                        <Typography className={classes.appDescription}>{data.Description}</Typography>
                    </Tooltip>
                </Grid>
                <Grid container direction="row" className={classes.buttonContainer}>
                    <Typography align='center' className={classes.clapContainer}>
                        <Avatar alt="Appreciate" src="images/clap.png" variant='rounded' className={classes.clap} />
                    </Typography>
                    <Typography align='center' className={classes.clapCount}>
                        2
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

