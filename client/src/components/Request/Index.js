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
//import './index.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../images/E7Pic.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function Request() {
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
              Submit a Request!
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
              Submit your additional suggestions!
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
              Select one of the options below to submit a request!
            </Typography>
</div>


        <div align="center" marginTop="250px">
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
            href='/RequestEnt'
          >
            Request Entertainment
          </Button>
          <Button
            style={{
              color: 'white',
              backgroundColor: '#001833',
              height: '75px',
              width: '300px',
              fontSize: '20px',
              marginLeft: '20px'
            }}
            type="submit"
            color="primary"
            variant="contained"
            href='/RequestH'
          >
            Request Housing
          </Button>
          <Button
            style={{
              color: 'white',
              backgroundColor: '#001833',
              height: '75px',
              width: '300px',
              fontSize: '20px',
              marginLeft: '20px'
            }}
            type="submit"
            color="primary"
            variant="contained"
            href='/RequestFood'
          >
            Request Restaurant
          </Button>
        </div>
      </div>
    </div>
  );
}
