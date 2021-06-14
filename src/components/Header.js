import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  heading: {
    cursor: 'pointer',
    fontWeight: 600
  }
}));

export default function Headercomponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
        <Grid container direction="row" justify="center">
          <Typography variant="h5" className={classes.heading}>99Products</Typography>
        </Grid>
        <Grid container direction="row" justify="center">
          <Typography variant="subtitle2">Open source ideas</Typography>
        </Grid>
    </Grid>
  )
}