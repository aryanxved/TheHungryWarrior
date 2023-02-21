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

const Entertainment = () => {
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
            <MenuItem value={10}>$0</MenuItem>
            <MenuItem value={20}>$10</MenuItem>
            <MenuItem value={30}>$20</MenuItem>
            <MenuItem value={40}>$30</MenuItem>
            <MenuItem value={50}>$40</MenuItem>
            <MenuItem value={60}>$50</MenuItem>
            <MenuItem value={70}>$60</MenuItem>
            <MenuItem value={70}>$80 or more</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectActivityLevel = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-activity-level">Select Activity Level</InputLabel>
          <Select
            lableID="select-activity-level"
            id="select-activity-level"
            lable="Select Activity Level"
          >
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>High</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectType = () => {
    return(
      <FormControl fullWidth>
        <InputLabel id="select-type">Select Activity Type</InputLabel>
          <Select
            lableID="select-type"
            id="select-type"
            lable="Select Activity Type"
          >
            <MenuItem value={10}>Athletics/Recreation</MenuItem>
            <MenuItem value={20}>Museum/Education</MenuItem>
            <MenuItem value={30}>Visual/Gaming</MenuItem>
            <MenuItem value={40}>Sporting Event</MenuItem>
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
            <MenuItem value={10}>0 - 5km</MenuItem>
            <MenuItem value={20}>5km - 15km</MenuItem>
            <MenuItem value={30}>15km - 30km</MenuItem>
            <MenuItem value={40}>30km or More</MenuItem>
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
      <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography align="center"
            variany="h1"
            component="div"
            gutterBottom
            style={{fontFamily: "Impact"}}
            color="inherit" noWrap>
            Entertainment
          </Typography>
        </Paper>
      </Grid>
      </div>

      <Grid item xs={12}>
        <Paper className={classes.papper} align="center">
          <SelectBudget/>
          <SelectDistance/>
          <SelectType/>
          <SelectActivityLevel/>
          <SubmitButton/>
        </Paper>
      </Grid>

    </div>
  );
};

export default Entertainment;
