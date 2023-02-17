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
import './index.css';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '../images/E7Pic.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className="backdroplanding">
      <div>
        <CssBaseline />
        <div>
          <Card style={{color: 'white', backgroundColor: '#001833'}}>
            <Typography
              align="center"
              variant="h1"
              component="div"
              gutterBottom
              style={{fontFamily: 'Impact'}}
            >
              The Hungry Warrior
            </Typography>
          </Card>
        </div>
        <p style={{marginTop: '75px'}}></p>
        <div align="center">
          <Card
            style={{
              color: 'white',
              backgroundColor: '#001833',
              height: '60px',
              width: '900px',
              opacity: '75%',
              marginBottom: '50px',
            }}
          >
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
              Redefining How UW Students Budget.
            </Typography>
          </Card>
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
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
