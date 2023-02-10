import React, { Component, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import history from '../Navigation/history'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Food = () => {
    const classes = useStyles();
    

    return (
        <div>    
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3" color="inherit" noWrap>
            Food
            </Typography>
          </Paper>
        </Grid>   
        </div>
    )

}

export default Food;