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

export default function MyPosts() {
  const classes = useStyles();
  
  return (
    <div style={{backgroundColor: '#FFFFFFF'}}>
      <div className='backdropEnt'>
        <CssBaseline />
        <div>
          <Card style={{color: 'white', backgroundColor: '#FFD500'}}>
            <Typography
              align="center"
              variant="h3"
              component="div"
              gutterBottom
              style={{fontFamily: 'Impact', color: 'black', letterSpacing: '2px'}}
            >
              View My Posts!
            </Typography>
          </Card>
        </div>
        <p style={{marginTop: '75px'}}></p>
        <div align="center">
          
         
        <div align="center">
          
            <Typography
              align="center"
              variant="h3"
              component="div"
              gutterBottom
              style={{
                fontFamily: 'Roboto',
                color: 'white',
                opacity: '100%',
                align: 'center',
              }}
            >
              View All Your Currently Active Posts
            </Typography>
        
        </div>
          
        </div>
<div>
<p style={{marginTop: '25px'}}></p>

<div align="center">
         
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
              Select one of the options below to view your posts.
            </Typography>
        </div>
</div>


        <div align="center" marginTop="250px">
        <Link to="/MyPostsEntertainment" style={{textDecoration:"none"}}>
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
            View Entertainment
          </Button>
          </Link>
          <Link to="/MyPostsHousing" style={{textDecoration:"none"}}>
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
            View Housing
          </Button>
          </Link>
          <Link to="/MyPostsFood" style={{textDecoration:"none"}}>
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
            View Restaurant
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
