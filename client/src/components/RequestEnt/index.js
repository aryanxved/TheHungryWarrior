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
              Request Entertainment
            </Typography>
          </Card>
        </div>
        </div>
        </div>
        )
    }

function RequestTitle(props) {
  
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
                <b>What's the Entertainment Name?</b>
              </Typography>
            
              <TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
                onChange={handleChange}
                id="outlined-multiline-static"
                label="Enter the name here"
                multiline
                minRows={1}
                variant="outlined"
                />
  </div>
    </div>
  )
}

function RequestLocation(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <p style={{marginTop: '25px'}}></p>
      <div align="center" marginTop="250px">
    </div>
    <div align="center">
          
    <Typography
                align="center"
                variant='h5'
                style={{fontFamily: 'roboto', color: 'black'}}
              >
                <b>What is the address of the Entertainment?</b>
              </Typography>
            
              <TextField style={{width: "100vh", marginTop: "30px", backgroundColor: "white"}}
                onChange={handleChange}

                id="outlined-multiline-static"
                label="Enter the address here"
                multiline
                minRows={1}
                variant="outlined"
                />
</div>
</div>
  )
}

function RequestQuality(props) {
  
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
                What do you rate the quality of your experience?
              </Typography>
            
              <FormControl variant="outlined" style={{marginTop: "30px", width: "100vh", }} >
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

function RequestDescription(props) {
  
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
                <b>Do you have any additional information for us.</b>
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

function ContactTitle(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
   
    <div>
    <p style={{marginTop: '25px'}}></p>

    <Typography
                align="center"
                variant='h5'
                style={{fontFamily: 'roboto', color: 'black', }}
              >
                <b>Can we get your contact details?</b>
              </Typography>
  </div>


    
  )
}


function RequestContactName(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
   
  <TextField style={{width: "33vh", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Full Name"
        variant="outlined"
        align="center"
      />


    
  )
}

function RequestContactEmail(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    
    
 

<TextField style={{width: "33vh", marginLeft: "30px", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Email"
        variant="outlined"
        align="center"
      />


    
  )
}

function RequestContactPhone(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (



 

<TextField style={{width: "33vh", marginLeft: "30px", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Phone Number"
        variant="outlined"
        align="center"
      />
  )
}







function RequestEntertainment() {
  
  const [requestLocation, setRequestLocation] = useState("")
  
  const [requestTitle, setRequestTitle] = useState("")

  const [requestDescription, setRequestDescription] = useState("")
  
  const [requestQuality, setRequestQuality] = useState("")

  const [requestInfo, setRequestInfo] = useState("")

  const [requestName, setRequestName] = useState("")

  const [requestEmail, setRequestEmail] = useState("")

  const [requestPhone, setRequestPhone] = useState("")


  
  const handleAddRequest = () => {
    callApiAddRequest()
      .then(res => {
      });
  }

  const callApiAddRequest = async () => {

    const url = serverURL + "/api/addRequestEntertainment";

    const submittedReview = {
      "EntName": requestTitle,
      "EntAddress": requestLocation,
      "EntInfo": requestDescription,
      "FullName": requestName,
      "Email": requestEmail,
      "PhoneNumber": requestPhone
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
    
      setRequestInfo(
        <div className = "RequestPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your request has been successfully submitted! 
        <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Thank you for your request: 
        <div style={{fontSize: "14px", marginTop: "10px"}}>What is this experience about? <br/>{requestTitle}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>The location you selected is: <br/>{requestLocation}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What the details behind your experience are? <br/>{requestDescription}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your name is? <br/>{requestName}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your email is? <br/>{requestEmail}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your phone number is? <br/>{requestPhone}</div>
        </div>
        </div>)
        handleAddRequest();
    
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
        <Card  style={{color: 'white',
              backgroundColor: '#ffd500',
              height: '750px',
              width: '900px',
              marginBottom: '50px'}}>
        <RequestTitle handler={setRequestTitle}></RequestTitle>
        <RequestLocation handler={setRequestLocation}></RequestLocation>
        <RequestDescription handler={setRequestDescription}></RequestDescription>
        <ContactTitle></ContactTitle>
        <div align="center">
          <RequestContactName handler={setRequestName}></RequestContactName>
          <RequestContactEmail handler={setRequestEmail}></RequestContactEmail>
          <RequestContactPhone handler={setRequestPhone}></RequestContactPhone>
        </div>
        <div align='center' style={{marginTop: '20px'}}>
        <Button variant="outlined" align="center" onClick={submitButton} style={{backgroundColor: "black", height: '50px', width: '200px', color: 'white'}}>Submit</Button>
        </div>
        

        </Card>
      </div>
      
      <div align='center'>

      <Card style={{color: 'white',
              backgroundColor: '#ffd500',
              height: '550px',
              width: '900px',
              marginBottom: '50px'}}>
      <div align='center'>
        <Typography variant="h5" component="div" gutterBottom
        style={{fontFamily: 'roboto', color: 'black'}}>
        {requestInfo}
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
  
  export default (RequestEntertainment);

/*
export default function RequestEnt() {
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
                What's the Entertainment Name?
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
                What is the address of the Entertainment?
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
  </div>
  <p style={{marginTop: '25px'}}></p>
  <Typography
                align="center"
                variant='h5'
              >
                Do you have any additional information for us?
              </Typography>

              <TextField style={{width: "100vh", marginTop: "30px"}}
                id="outlined-multiline-static"
                label="Additional information"
                multiline
                minRows={4}
                variant="outlined"
                />

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
  */
  