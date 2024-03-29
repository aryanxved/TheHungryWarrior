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
import './index.css';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../images/E7Pic.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function Info() {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: '#FFFFFFF'}} className='backdropEnt'>
      <div>
        <CssBaseline />
        <div>
          <Card style={{color: 'white', backgroundColor: '#ffd500'}}>
            <Typography
              align="center"
              variant="h3"
              component="div"
              gutterBottom
              style={{fontFamily: 'Impact', letterSpacing: '2px', color: 'black'}}
            >
              Find Information!
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
                color: 'white',
                opacity: '100%',
                align: 'center',
              }}
            >
              Learn about information near you!
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
                color: 'white',
                opacity: '100%',
                align: 'center',
              }}
            >
              Select one of the options to view a category!
            </Typography>
</div>


        <div align="center" style={{marginTop: "50px"}}>
        <Link to="/InfoEntertainment" style={{textDecoration:"none"}}>
          <Button
            style={{
              color: 'black',
              backgroundColor: '#FFD500',
              height: '75px',
              width: '300px',
              fontSize: '20px',
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
            Entertainment Info
          </Button>
          </Link>
          <Link to="/InfoHousing" style={{textDecoration:"none"}}>
          <Button
            style={{
              color: 'black',
              backgroundColor: '#FFD500',
              height: '75px',
              width: '300px',
              fontSize: '20px',
              marginLeft: '20px'
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
            Housing Info
          </Button>
          </Link>
          <Link to="/InfoRestaurant" style={{textDecoration:"none"}}>
          <Button
            style={{
              color: 'black',
              backgroundColor: '#FFD500',
              height: '75px',
              width: '300px',
              fontSize: '20px',
              marginLeft: '20px'
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
            Restaurant Info
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
