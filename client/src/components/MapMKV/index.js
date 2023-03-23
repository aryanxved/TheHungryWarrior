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

export default function MapMKV() {
  const classes = useStyles();
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.466862370953!2d-80.55467728473015!3d43.47172647216471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf6ae7862c815%3A0x58731d3055875d96!2sMackenzie%20King%20Village%20(MKV)West%20Entrance!5e0!3m2!1sen!2sca!4v1679524097948!5m2!1sen!2sca" width="1519" height="675" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

     );
}
