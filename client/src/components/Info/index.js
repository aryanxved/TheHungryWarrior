
import React, {Component, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { FormControl, MenuItem } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Info = () => {
  const classes = useStyles();

  
  const SubmitButtonHousing = () => {
    
    return(
        <div align="left" marginTop="250px">
        <Button
        style={{
          color: 'white',
          backgroundColor: '#001833',
          height: '75px',
          width: '300px',
          fontSize: '20px',
        }}
        type="submit"
        color="primary"
        variant="contained"
      >
        Housing
      </Button>
      </div>
    );
  };

  const SubmitButtonRestaurant = () => {
    
    return(
        <div align="centre" marginTop="250px">
          <Button
            style={{
              color: 'white',
              backgroundColor: '#001833',
              height: '75px',
              width: '300px',
              fontSize: '20px',
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
        Restaurant
      </Button>
      </div>
    );
  };


  const SubmitButtonEntertainment = () => {
    
    return(
        <div align="right" marginTop="250px">
          <Button
            style={{
              color: 'white',
              backgroundColor: '#001833',
              height: '75px',
              width: '300px',
              fontSize: '20px',
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
        Entertainment
      </Button>
      </div>
    );
  };



  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
            Info
          </Typography>
        </Paper>
      </Grid>

      
      <Grid item xs={12}>
        <Paper className={classes.paper}> 
              <SubmitButtonHousing/>
              <SubmitButtonRestaurant/>
              <SubmitButtonEntertainment/>
        </Paper>
      </Grid>
    </div>
  );
};




export default Info;