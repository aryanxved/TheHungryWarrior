import React, {Component} from 'react';
import NavBar from '../Navbar';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  CssBaseline,
} from '@material-ui/core/';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../images/E7Pic.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: '#FFFFFFF'}}>
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
              About Us
            </Typography>
          </Card>
        </div>
        <p style={{marginTop: '75px'}}></p>
        <div align="center">
          
         
          
            <Typography
              align="center"
              variant="h4"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              About the Tool
            </Typography>
          
        </div>
<div>

<p style={{marginTop: '25px'}}></p>
            <Typography
              align="center"
              variant="h5"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              Budgeting for your term can be a pain...
            </Typography>

            <Typography
              align="center"
              variant="h7"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              We know that Waterloo students undergo a tedious preparation process before classes 
              start for the term. Everything from finding a place, paying thousands in tuition to having 
              to figure out what they want for lunch. Planning a budget that includes residence, food, entertainment, 
              and even travel can take time. Currently, many students have to calculate their term budget by hand, 
              often leading to a suboptimal solution. This is where our proposed tool, “The Hungry Warrior,” comes in. 
              We created this program with the goal of helping University of Waterloo students just like you. 
            </Typography>
            
<p style={{marginTop: '25px'}}></p>

<Typography
              align="center"
              variant="h5"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              What does the Hungry Warrior do?
            </Typography>

            <Typography
              align="center"
              variant="h7"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              This web tool is your one-stop budget calculator for navigating your term 
              at the University of Waterloo. We focus on making educated recommendations 
              based on your preferences and available budget. The Hungry Warrior allows 
              you to plan your housing, food, and entertainment choices over the next 4 
              months. Additional filters allow you to fine tune the results to get results 
              tailored to your liking. 

            </Typography>

            <p style={{marginTop: '25px'}}></p>
            <Typography
              align="center"
              variant="h5"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              How is our tool dfferent from others?
            </Typography>

            <Typography
              align="center"
              variant="h7"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'black',
                opacity: '100%',
                align: 'center',
              }}
            >
              We admit, there are other budget calculators out there. However, 
              many fail to address the needs of university students, particularly 
              those at the University of Waterloo. The Hungry Warrior is made for 
              students by students. As a result, we are more receptive to understanding how students 
              such as yourself think and the issues faced. Most calculators are too generic and do 
              not provide specific recommendations. Our app takes budgeting to the next level by 
              showing students actual restaurant, entertainment and living options within their 
              expense range. Furthermore, The Hungry Warrior considers the user’s preferences 
              and works to optimize their happiness throughout the term. Overall, this tool 
              will allow you to properly forecast your finances to save time and money.
            </Typography>

            

            
</div>



     
      </div>
    </div>
  );
}
