import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import PaperContent from './PaperContent';

function getRandomColor() {
    return 'rgb(' +
        (Math.floor(Math.random() * 56) + 200) + ', ' +
        (Math.floor(Math.random() * 56) + 200) + ', ' +
        (Math.floor(Math.random() * 56) + 200) +
        ')';
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '50px 0 20px 0'        
    },
    paper: {
        height: 250,
        width: 200,
        '&:hover': {
            boxShadow: '10px 10px 7px rgba(0,0,0,.7)',
            transform: 'rotate(0deg) !important',
            position: 'relative',
            zIndex: 5,
            cursor: 'pointer'
        }
    },
    paperContainer: {
        minHeight: '100%'
    },
    control: {
        padding: theme.spacing(2),
    }    
}));

export default function StickyLayout(props) {
    const [spacing] = useState(5);    
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {props.jsonData.map((object, index) => (
                        <Grid key={object.sNo} item>
                            <Paper
                                className={classes.paper}
                                elevation={24}
                                style={{
                                    transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (Math.floor(Math.random() * 10))}deg)`,
                                    backgroundColor: getRandomColor()
                                }}
                            >
                                <PaperContent
                                    data={object}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
