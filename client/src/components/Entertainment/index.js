import React, {Component, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  CssBaseline,
} from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from '@material-ui/core';
import './index.css';


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

function Title() {

  return (
    <div>
      <div>
        <CssBaseline />
        <div>
          <Card style={{color: 'white', backgroundColor: '#001833'}}>
            <Typography
              align="center"
              variant="h3"
              component="div"
              gutterBottom
              style={{fontFamily: 'Roboto'}}
            >
              Entertainment
            </Typography>
          </Card>
        </div>
        </div>
        </div>
        )
    }

    function PrefTitle() {

      return (
        <div>
          <div>
            <CssBaseline />
            <div>
                <Typography
                  align="left"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                >
                  Let's get your Entertainment preferences:
                </Typography>
            </div>
            </div>
            </div>
            )
        }

const Entertainment = () => {
  const classes = useStyles();

  const SelectBudget = () => {
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', textAlign: "center"}}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select your Budget</InputLabel>
          <Select
            labelID="select-budget"
            id="select-budget"
            label="Select your Budget"
            variant="outlined"
            align="center"
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
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-activity-level" style={{color: '#001833', marginLeft: '10px'}}>Select Activity Level</InputLabel>
          <Select
            labelID="select-activity-level"
            id="select-activity-level"
            label="Select Activity Level"
            variant="outlined"
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
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-type" style={{color: '#001833', marginLeft: '10px'}}>Select Activity Type</InputLabel>
          <Select
            labelID="select-type"
            id="select-type"
            label="Select Activity Type"
            variant="outlined"
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
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select Distance from E7</InputLabel>
          <Select
            lableID="select-distance"
            id="select-distance"
            label="Select Distance from E7"
            variant='outlined'
            align='center'
            color= 'white'
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
      variant="outlined" 
      style={{backgroundColor: 'green', color: '#FFFFFF'}}
      >
      Search with Filters
      </Button>
    );
  };

  const ClearButton = () => {
    
    return(
      <Button 
      variant="outlined" 
      style={{backgroundColor: 'red', color: '#FFFFFF', marginLeft: "20px"}}
      href='/Entertainment'
      >
      Clear All Filters
      </Button>
    );
  };

  return (
    <div className='backdropEnt'>
      <Grid item xs={12}>
      <Title></Title>
        <div style={{marginTop: '50px'}}>
        <Card align="center" style={{color:'#001833', backgroundColor: '#3f51b5'}}>
        <div style={{marginTop: '20px'}}>
        <PrefTitle></PrefTitle>
</div>
        <div style={{marginTop: '20px'}}>
          <SelectBudget/>

          <SelectDistance/>

          <SelectType/>

          <SelectActivityLevel/>
</div>
          <div style={{marginTop: '30px', marginBottom: '30px'}}>
          <SubmitButton/>
          <ClearButton/>
          </div>
        </Card>
        </div>
      </Grid>
    </div>
  );
};

export default Entertainment;
