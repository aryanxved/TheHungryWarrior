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

const Food = () => {
  const classes = useStyles();

  const SelectBudget = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-distance">Select your Budget</InputLabel>
          <Select
            lableID="select-budget"
            id="select-budget"
            lable="Select your Budget"
          >
            <MenuItem value={10}>$5</MenuItem>
            <MenuItem value={20}>$10</MenuItem>
            <MenuItem value={30}>$15</MenuItem>
            <MenuItem value={40}>$20</MenuItem>
            <MenuItem value={50}>$25 or more</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectDistance = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-distance">Select Your Preferred Distance</InputLabel>
          <Select
            lableID="select-distance"
            id="select-distance"
            lable="Select Your Preffered Distance"
          >
            <MenuItem value={10}>0 - 200m</MenuItem>
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

  const SelectCuisine = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-cuisine">Select Cuisine</InputLabel>
          <Select
            lableID="select-cuisine"
            id="select-cuisine"
            lable="Select Cuisine"
          >
            <MenuItem value={10}>Fast Food</MenuItem>
            <MenuItem value={20}>Casual Dine-In</MenuItem>
            <MenuItem value={30}>Specialty </MenuItem>
            <MenuItem value={40}>Mediterranean Food</MenuItem>
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
            Food
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.papper} align="center">
          <SelectBudget/>
          <SelectDistance/>
          <SelectCuisine/>
          <SubmitButton/>
        </Paper>
      </Grid>
    </div>
  );
};

export default Food;
