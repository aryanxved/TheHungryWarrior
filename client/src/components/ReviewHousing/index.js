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
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function ReviewHousing() {
    const classes = useStyles();
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
                Review A Place
              </Typography>
            </Card>
          </div>
          <p style={{marginTop: '75px'}}></p>
          <div align="center" marginTop="250px">
          <p style={{marginTop: '25px'}}></p>
          <div align="center">
          
              <Typography
                align="center"
                variant='h5'
              >
                What's the Housing Name?
              </Typography>
            
      <FormControl variant="outlined" style={{marginTop: "30px", width: "100vh"}}>
        <InputLabel>Select a Location</InputLabel>
        <Select        >
                <MenuItem value ={1}> {'Elora'} </MenuItem>
                <MenuItem value ={2}> {'Fergus'} </MenuItem>
                <MenuItem value ={3}> {'UWP'} </MenuItem>
                <MenuItem value ={4}> {'WCRI'} </MenuItem>
                <MenuItem value ={5}> {'Icon'} </MenuItem>
        </Select>
      </FormControl>
    </div>
    <p style={{marginTop: '25px'}}></p>
          <div align="center">
          
              <Typography
                align="center"
                variant='h5'
              >
                What do you rate the quality of your experience?
              </Typography>
            
      <FormControl variant="outlined" style={{marginTop: "30px", width: "100vh"}}>
        <InputLabel>Select Quality Rating</InputLabel>
        <Select        >
                <MenuItem value ={1}> {'Amazing'} </MenuItem>
                <MenuItem value ={2}> {'Good'} </MenuItem>
                <MenuItem value ={3}> {'Satisfactory'} </MenuItem>
                <MenuItem value ={4}> {'Disappointment'} </MenuItem>
                <MenuItem value ={5}> {'Horrible'} </MenuItem>
        </Select>
      </FormControl>
    </div>

    <p style={{marginTop: '25px'}}></p>
    <div>
    <Typography
                align="center"
                variant='h5'
              >
                Please describe your experience.
              </Typography>

    <TextField style={{width: "100vh", marginTop: "30px"}}
          id="outlined-multiline-static"
          label="Describe your thoughts"
          multiline
          minRows={4}
          variant="outlined"
        />
  </div>
  <p style={{marginTop: '25px'}}></p>

  <div>
    <Typography
                align="center"
                variant='h5'
              >
                Can we get your contact details?
              </Typography>

    <TextField style={{width: "33vh", marginTop: "30px"}}
          id="outlined-multiline-static"
          label="Full Name"
          variant="outlined"
        />

<TextField style={{width: "33vh", marginLeft: "30px", marginTop: "30px"}}
          id="outlined-multiline-static"
          label="Email"
          variant="outlined"
        />

<TextField style={{width: "33vh", marginLeft: "30px", marginTop: "30px"}}
          id="outlined-multiline-static"
          label="Phone Number"
          variant="outlined"
        />
  </div>

    <p style={{marginTop: '25px'}}></p>
    <div align="center" marginTop="250px">  
            <Button
              style={{
                color: 'white',
                backgroundColor: '#001833',
                height: '50px',
                width: '200px',
                fontSize: '20px',
              }}
              type="submit"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
          </div>
          </div>
        </div>
      </div>
    );
  }
  