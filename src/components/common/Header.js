import React from 'react';
import { Grid, Typography, Link, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontWeight: 600
  },
  ideaIcon: {
    transform: 'rotate(180deg)',
    marginTop: '10px'
  },
  floatingButton: {
    position: 'fixed',
    width: '50px',
    height: '50px',
    right: '40px',
    top: '10px',
    zIndex: 9999,
    backgroundColor: 'black',
    color: 'yellow',
    borderRadius: '50px',
    textAlign: 'center',
    boxShadow: '2px 2px 3px #999'
  },
  toolTip: {
    fontSize: "1em"        
  }
}));

export default function Headercomponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container direction="row" justify="center">
        <Typography variant="h5" className={classes.heading}>99Products.in</Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        <Typography variant="subtitle2">Open source ideas</Typography>
      </Grid>
      <Grid>
        <Tooltip title={'I have an Idea'} enterDelay={10} arrow className={classes.toolTip}>
          <Link href="https://forms.gle/yVV3Cx2nufF2GW3BA" target="_blank" color="inherit" className={classes.floatingButton}>
            <WbIncandescentIcon className={classes.ideaIcon}></WbIncandescentIcon>
          </Link>
        </Tooltip>
      </Grid>
    </Grid>
  )
}