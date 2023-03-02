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

export default function RequestH() {
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
                Request Entertainment
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
            
              <TextField style={{width: "100vh", marginTop: "30px"}}
                id="outlined-multiline-static"
                label="Enter the name here"
                multiline
                minRows={4}
                variant="outlined"
                />
    </div>
    <p style={{marginTop: '25px'}}></p>
          <div align="center">
          
              <Typography
                align="center"
                variant='h5'
              >
                What is the Housing location?
              </Typography>
            
              <TextField style={{width: "100vh", marginTop: "30px"}}
                id="outlined-multiline-static"
                label="Enter the address here"
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
                Do you have any additional information for us?
              </Typography>

    <TextField style={{width: "100vh", marginTop: "30px"}}
          id="outlined-multiline-static"
          label="Addtional Information"
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
  