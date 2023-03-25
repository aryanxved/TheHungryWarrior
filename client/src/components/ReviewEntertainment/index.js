import React, {Component, useState} from 'react';
import NavBar from '../Navbar';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
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


const serverURL = ""; //enable for dev mode

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));


function Title() {

  return (
    <div>
      <div>
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
              Review Entertainment
            </Typography>
          </Card>
        </div>
        </div>
        </div>
        )
    }

function ReviewTitle(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    <div>
    <p style={{marginTop: '25px'}}></p>
    <div align="center">
    <Typography
                align="center"
                variant='h5'
                style={{fontFamily: 'roboto', color: 'black'}}
              >
                <b>What is the title of this review?</b>
              </Typography>

    <TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
          onChange={handleChange}
          
          id="outlined-multiline-static"
          label="Review Title"
          multiline
          minRows={1}
          variant="outlined"
          align="center"
        />
  </div>
    </div>
  )
}

function ReviewLocation(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <p style={{marginTop: '75px'}}></p>
      <div align="center" marginTop="250px">
      <p style={{marginTop: '25px'}}></p>
    </div>
    <div align="center">
          
    <Typography
      align="center"
      variant='h5'
      style={{fontFamily: 'roboto', color: 'black'}}
    >
      <b>What's the Entertainment Name?</b>
    </Typography>
  
    <FormControl variant="outlined" style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}>
    <InputLabel>Select a Location</InputLabel>
      <Select onChange={handleChange}    >
      <MenuItem value ={'Toronto Raptors Game'}> {'Toronto Raptors Game'} </MenuItem>
      <MenuItem value ={'Kitchener Rangers Game'}> {'Kitchener Rangers Game'} </MenuItem>
      <MenuItem value ={'King Pin Bowlounge'}> {'King Pin Bowlounge'} </MenuItem>
      <MenuItem value ={'Adventure Rooms'}> {'Adventure Rooms'} </MenuItem>
      <MenuItem value ={'Clay and Glass Museum'}> {'Clay and Glass Museum'} </MenuItem>
</Select>
</FormControl>
</div>
</div>
  )
}

function ReviewQuality(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    <div >
    <p style={{marginTop: '25px'}}></p>
          
          <div align="center">
          
              <Typography
                align="center"
                variant='h5'
                style={{fontFamily: 'roboto', color: 'black'}}
              >
                <b>What do you rate the quality of your experience?</b>
              </Typography>
            
              <FormControl variant="outlined" style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}} >
              <InputLabel>Select Quality Rating</InputLabel>
                <Select onChange={handleChange}>
                  
                <MenuItem value ={'Amazing'}> {'Amazing'} </MenuItem>
                <MenuItem value ={'Good'}> {'Good'} </MenuItem>
                <MenuItem value ={'Satisfactory'}> {'Satisfactory'} </MenuItem>
                <MenuItem value ={'Disappointment'}> {'Disappointment'} </MenuItem>
                <MenuItem value ={'Horrible'}> {'Horrible'} </MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  )
}

function ReviewDescription(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    <div>
    <p style={{marginTop: '25px'}}></p>
    <div align="center">
    <Typography
                align="center"
                variant='h5'
                style={{fontFamily: 'roboto', color: 'black'}}
              >
                <b>Please describe your experience.</b>
              </Typography>

    <TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
          onChange={handleChange}
          
          id="outlined-multiline-static"
          label="Describe your thoughts"
          multiline
          minRows={4}
          variant="outlined"
          align="center"
        />
  </div>
    </div>
  )
}

function ReviewContact(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    <div>
    <p style={{marginTop: '25px'}}></p>

<div align="center">
  <Typography
              align="center"
              variant='h5'
              style={{fontFamily: 'roboto', color: 'black'}}
            >
              <b>Can we get your contact details?</b>
            </Typography>

  <TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Full Name"
        variant="outlined"
        align="center"
      />

<TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Email"
        variant="outlined"
        align="center"
      />

<TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Phone Number"
        variant="outlined"
        align="center"
      />
</div>
    </div>
  )
}

function ReviewEntertainment() {
  
  const [reviewLocation, setReviewLocation] = useState("")
  
  const [reviewTitle, setReviewTitle] = useState("")

  const [reviewDescription, setReviewDescription] = useState("")
  
  const [reviewQuality, setReviewQuality] = useState("")

  const [reviewInfo, setReviewInfo] = useState("")

  
  const handleAddReview = () => {
    callApiAddReview()
      .then(res => {
      });
  }

  const callApiAddReview = async () => {

    const url = serverURL + "/api/addReview";

    const submittedReview = {
      "ReviewTitle": reviewTitle,
      "ReviewLocation": reviewLocation,
      "ReviewQuality": reviewQuality,
      "ReviewDescription": reviewDescription
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify(submittedReview)
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("Found reviews: ", body);
    return body;
  }

  const submitButton = () => {
    
      setReviewInfo(
        <div className = "ReviewPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your review has been successfully submitted! 
        <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Thank you for your review: 
        <div style={{fontSize: "14px", marginTop: "10px"}}>The location you selected is: <br/>{reviewLocation}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What is this experience about? <br/>{reviewTitle}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What the details behind your experience are? <br/>{reviewDescription}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your overall quality of your experience? <br/>{reviewQuality}</div>
        </div>
        </div>)
        handleAddReview();
    
  }

  return (
    <div className='backdropEnt'>
      <div>
        <div>
          <Card style={{color: 'white',
              backgroundColor: '#001833'}}>
              <CssBaseline />
              <Title></Title>
          </Card>
        
          <p style={{marginTop: '75px'}}></p>
        </div>
        
        <div align="center">
          <Card style={{color: 'white',
              backgroundColor: '#ffd500',
              height: '800px',
              width: '900px',
              marginBottom: '50px'}}>

                <ReviewLocation handler={setReviewLocation}></ReviewLocation>
                <ReviewTitle handler={setReviewTitle}></ReviewTitle>
                <ReviewQuality handler={setReviewQuality}></ReviewQuality>
                <ReviewDescription handler={setReviewDescription}></ReviewDescription>
                <div align='center' style={{marginTop: '20px'}}>
                <Button variant="outlined" align="center" onClick={submitButton} style={{backgroundColor: "black", height: '50px', width: '200px', color: 'white'}}>Submit</Button>
                </div>  

          </Card>
        </div>
        <div align="center">
          <Card style={{color: 'white',
              backgroundColor: '#ffd500',
              height: '400px',
              width: '900px',
              marginBottom: '50px'}}>
          <div align='center'>
        <Typography variant="h5" component="div" gutterBottom
        style={{fontFamily: 'roboto', color: 'black'}}>
        {reviewInfo}
      </Typography>
      </div>
        </Card>
        </div>
        
        
        
        
      </div>
      
    </div>
  );
}

function SubmitButton(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };


  return (
    <div>
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
  )
}




/*
function ReviewEntertainment() {
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
                Review Entertainment
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
                What's the Entertainment Name?
              </Typography>
            
              <FormControl variant="outlined" style={{marginTop: "30px", width: "100vh"}}>
              <InputLabel>Select a Location</InputLabel>
                <Select        >
                <MenuItem value ={1}> {'Toronto Raptors Game'} </MenuItem>
                <MenuItem value ={2}> {'Kitchener Rangers Game'} </MenuItem>
                <MenuItem value ={3}> {'King Pin Bowlounge'} </MenuItem>
                <MenuItem value ={4}> {'Adventure Rooms'} </MenuItem>
                <MenuItem value ={5}> {'Clay and Glass Museum'} </MenuItem>
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
  } */
  
  export default (ReviewEntertainment);