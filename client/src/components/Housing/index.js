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


const Housing = () => {
  const classes = useStyles();

  const SelectRoomType = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-room-type">Select Room Type</InputLabel>
          <Select
            lableID="select-room-type"
            id="select-room-type"
            lable="Select Room Type"
          >
            <MenuItem value={10}>Single</MenuItem>
            <MenuItem value={20}>Double</MenuItem>
            <MenuItem value={30}>Suite</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectPeople = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-people">Select Number of People Per Unit</InputLabel>
          <Select
            lableID="select-people"
            id="select-people"
            lable="Number of People"
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
            <MenuItem value={50}>5</MenuItem>
          </Select>
      </FormControl>
    );
  };
  const SelectBudget = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-budget">Select your Monthly Budget</InputLabel>
          <Select
            lableID="select-budget"
            id="select-budget"
            lable="Select your Monthly Budget"
          >
            <MenuItem value={10}>$500</MenuItem>
            <MenuItem value={20}>$600</MenuItem>
            <MenuItem value={30}>$700</MenuItem>
            <MenuItem value={40}>$800</MenuItem>
            <MenuItem value={50}>$900</MenuItem>
            <MenuItem value={60}>$1000</MenuItem>
            <MenuItem value={70}>$1100 or More</MenuItem>
          </Select>
      </FormControl>
    );
  };
  
  const SelectDistance = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-distance">Select Distance from E7</InputLabel>
          <Select
            lableID="select-distance"
            id="select-distacne"
            lable="Select Distacne from E7"
          >
            <MenuItem value={10}>0m - 200m</MenuItem>
            <MenuItem value={20}>200m - 400m</MenuItem>
            <MenuItem value={30}>400m - 600m</MenuItem>
            <MenuItem value={40}>600m - 800m</MenuItem>
            <MenuItem value={50}>800m - 1km</MenuItem>
            <MenuItem value={60}>1km - 5km</MenuItem>
            <MenuItem value={70}>5km or more</MenuItem>
          </Select>
      </FormControl>
    );
  };
  
  const SubmitButton = () => {
    
    return(
      <Button 
      variant="contained" 
      color="primary"
      >
      Submit Your Filters
      </Button>
    );
  };

  

  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
            Housing
          </Typography>
        </Paper>
      </Grid>

      
      <Grid item xs={12}>
        <Paper className={classes.paper}> 
              <SelectBudget/>
              <SelectDistance/>
              <SelectPeople/>
              <SelectRoomType/>
              <SubmitButton/>
        </Paper>
      </Grid>
    </div>
  );
};

export default Housing;
