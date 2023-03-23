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

export default function MapREV() {
  const classes = useStyles();
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7489.382156609595!2d-80.55966988843478!3d43.470471485558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf6ae3a75504f%3A0x3587cce0db044462!2sRon%20Eydt%20Village%2C%20200%20University%20Ave%20W%2C%20Waterloo%2C%20ON%20N2L%203G5!5e0!3m2!1sen!2sca!4v1679524080788!5m2!1sen!2sca" width="1519" height="675" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



     );
}
