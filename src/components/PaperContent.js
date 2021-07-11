import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip, Box, Avatar, Link, Divider } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    appNameContainer: {
        padding: '10px',
        width: '100%'
    },
    appName: {
        width: '100%'
    },
    dividingLine: {
        borderBottom: '1px ridge rgb(54, 140, 213)',
        width: '50%'
    },
    appDescriptionContainer: {
        padding: '10px',
        width: '100%'
    },
    appDescription: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    appImageContainer: {

        padding: '10px',
        width: '100%'
    },
    appLinksContainer: {
        padding: '10px',
        width: '100%'
    },
    clapContainer: {
        width: '100%',
        paddingBottom:'5px'
    },
    clap: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '25px',
        height: '25px',
        '&:hover': {
            transform: 'scale(1.5) !important'
        }
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
    const { data } = props;
    const headerElementRef = useRef();
    const descriptionElementRef = useRef();
    const [headetHoverStatus, setHeaderHover] = useState(false);
    const [descHoverStatus, setDescHover] = useState(false);

    const compareSize = () => {
        const headerCompare =
            headerElementRef.current.scrollWidth > headerElementRef.current.clientWidth;
        const descCompare =
            descriptionElementRef.current.scrollHeight > descriptionElementRef.current.clientHeight;
        setHeaderHover(headerCompare);
        setDescHover(descCompare);
    };
    useEffect(() => {
        compareSize();
        window.addEventListener('resize', compareSize);
    }, []);
    useEffect(() => () => {
        window.removeEventListener('resize', compareSize);
    }, []);    

    return (
        <Grid container className={classes.root}>
            <Grid container alignContent='flex-start' className={classes.paperContainer}>
                <Grid container direction="row" className={classes.appNameContainer}>
                    <Tooltip title={data.Title} enterDelay={10} placement={'bottom-end'} disableHoverListener={!headetHoverStatus}>
                        <Typography variant="h6" noWrap className={classes.appName} ref={headerElementRef}>
                            {data.Title}
                        </Typography>
                    </Tooltip>
                </Grid>
                <Grid container direction="row">
                    <Box component='span' className={classes.dividingLine}></Box>
                </Grid>
                <Grid container direction="row" className={classes.appLinksContainer} >
                    <Grid container spacing={2}>
                        <Grid item direction="col">
                            {data.Github && <Link href={data.Github} target="_blank" color='inherit'><GitHubIcon></GitHubIcon></Link>}
                        </Grid>
                        <Grid item direction="col">
                            {data.Links && <Link href={data.Links} target="_blank">View Me</Link>}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" className={classes.appDescriptionContainer} align="justify">
                    <Tooltip title={data.Description} enterDelay={10} placement={'bottom-end'} disableHoverListener={!descHoverStatus}>
                        <Typography className={classes.appDescription} ref={descriptionElementRef}>{data.Description}</Typography>
                    </Tooltip>
                </Grid>
                {/* <Grid container direction="row" className={classes.appImageContainer} align="justify">

                </Grid> */}
                <Grid container direction="row" className={classes.buttonContainer}>
                    <Typography align='center' className={classes.clapContainer} component={'span'}>
                        <Avatar alt="Appreciate" src="images/clap.png" variant='rounded' className={classes.clap} onClick={() => { console.log('Clicked') }} />
                    </Typography>
                    <Typography align='center' className={classes.clapCount}>
                        {data.sNo % 2 === 0 ? 2 : data.clapCount}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

