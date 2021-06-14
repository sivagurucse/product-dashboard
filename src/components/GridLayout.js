import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
        paddingTop: '50px'
    },
    paper: {
        height: 180,
        width: 180,
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
    },
    stickyName: {
        marginTop: '40%',
        fontWeight: 500
    }
}));

export default function SpacingGrid(props) {
    const [spacing] = React.useState(5);
    const classes = useStyles();
    console.log(JSON.stringify(props.data));
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {props.data.map((object, index) => (
                        <Grid key={object.sNo} item>
                            <Paper
                                className={classes.paper}
                                elevation={3}
                                style={{
                                    transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (Math.floor(Math.random() * 20))}deg)`,
                                    backgroundColor: getRandomColor()
                                    // backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 75%)"
                                }}
                            >
                                <Grid container justify="center" className={classes.paperContainer}>
                                    <Grid className={classes.stickyName}>
                                        {object.Title}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
