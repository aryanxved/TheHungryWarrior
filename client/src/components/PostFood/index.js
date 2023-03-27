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
import { useAuth } from '../Firebase/context'



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
              Post Food
            </Typography>
          </Card>
        </div>
        </div>
        </div>
        )
    }

function PostTitle(props) {
  
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
                <b>What's the Food Name?</b>
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

function PostLocation(props) {
  
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
                <b>What is the address of the Food?</b>
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

function PostQuality(props) {
  
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

function PostDescription(props) {
  
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

function PostingDetailsTitle(props) {
  
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
                  <b>Can we get your posting details?</b>
                </Typography>
    </div>
    
    )
  }


function PostContactName(props) {
  
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

function PostContactEmail(props) {
  
  const handleChange = (event) => {
    props.handler(event.target.value);
  };
  const { currentUser } = useAuth()

  return (

<TextField style={{width: "33vh", marginLeft: "30px", marginTop: "30px", backgroundColor: "white"}}
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Email"
        variant="outlined"
        align="center"
        defaultValue={currentUser.email}
        
      /> 
  )
}

function PostContactPhone(props) {
  
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

function SelectBudget (props) {
  
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return (
    
    <TextField style={{width: "50vh", marginTop: "30px", backgroundColor: "white"}}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Enter Cost in Dollars"
          variant="outlined"
          align="center"
        />
    )
  }
  
  function SelectDistance(props) {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return (
  
  <TextField style={{width: "50vh", marginLeft: "30px", marginTop: "30px", backgroundColor: "white"}}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Enter Distance in KM"
          variant="outlined"
          align="center"
        /> 
    )
  }

function PostFood() {
  
    
      
    
      const SelectType = (props) => {
        
        const handleChange = (event) => {
          props.handler(event.target.value);
        };
      
        return(
          <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
            <InputLabel id="select-type" style={{color: '#001833', marginLeft: '10px'}}>Select Cuisine Type</InputLabel>
              <Select
                value={foodCuisine}
                labelID="select-type"
                id="selectType"
                label="Select Cuisine Type"
                variant="outlined"
                name='selectType'
                onChange={handleChange}
              >
                <MenuItem value={'Fast Food'}>Fast Food</MenuItem>
                <MenuItem value={'Casual Dine-In'}>Casual Dine-In</MenuItem>
                <MenuItem value={'Specialty'}>Specialty</MenuItem>
                <MenuItem value={'Mediterranean Food'}>Mediterranean</MenuItem>
              </Select>
          </FormControl>
        );
      };
    
    
      
  const { currentUser } = useAuth()  

  const [foodAddress, setPostLocation] = useState("")
  
  const [foodName, setPostTitle] = useState("")

  const [foodDesc, setPostDescription] = useState("")
  
  const [postQuality, setPostQuality] = useState("")

  const [postInfo, setPostInfo] = useState("")

  const [foodUserName, setPostName] = useState("")

  const [foodUserEmail, setPostEmail] = useState(currentUser.email)

  const [foodUserPhone, setPostPhone] = useState("")

  const [foodDistance, setFoodDistance] = useState("")
    
    const [foodBudget, setFoodBudget] = useState("")
  
    const [foodLevel, setFoodLevel] = useState("")
    
    const [foodCuisine, setFoodCuisine] = useState("")
  
    const [foods, setFoods] = useState([])


  
  const handleAddPost = () => {
    callApiAddPost()
      .then(res => {
      });
  }

  const callApiAddPost = async () => {

    const url = serverURL + "/api/addPostFood";

    const submittedReview = {
      "foodName": foodName,
      "foodAddress": foodAddress,
      "foodDesc": foodDesc,
      "foodUserName": foodUserName,
      "foodUserEmail": foodUserEmail,
      "foodUserPhone": foodUserPhone,
      "foodBudget": foodBudget,
        "foodDistance": foodDistance,
        "foodCuisine": foodCuisine
    }

    //foodBudget
    //foodDistance
    //foodCuisine
    //foodLevel
    //foodName
    //foodDesc
    //foodAddress
    //foodUserName
    //foodUserPhone
    //foodUserEmail 

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
    
      setPostInfo(
        <div className = "PostPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your post has been successfully submitted! 
        <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Thank you for your post: 
        <div style={{fontSize: "14px", marginTop: "10px"}}>What is this experience about? <br/>{foodName}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>The location you selected is: <br/>{foodAddress}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What the details behind your experience are? <br/>{foodDesc}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your name is? <br/>{foodUserName}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your email is? <br/>{foodUserEmail}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>What your phone number is? <br/>{foodUserPhone}</div>
        <br/>
        <div style={{fontSize: "14px", marginTop: "10px"}}>Food Distance<br/>{foodDistance}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Food Budget <br/>{foodBudget}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Food Cuisine <br/>{foodCuisine}</div>
        </div>
        </div>)
        handleAddPost();
    
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
              height: '1000px',
              width: '900px',
              marginBottom: '50px'}}>
        <PostTitle handler={setPostTitle}></PostTitle>
        <PostLocation handler={setPostLocation}></PostLocation>
        <PostDescription handler={setPostDescription}></PostDescription>
        <ContactTitle></ContactTitle>
        
        <div align="center">
          <PostContactName handler={setPostName}></PostContactName>
          <PostContactEmail handler={setPostEmail}></PostContactEmail>
          <PostContactPhone handler={setPostPhone}></PostContactPhone>
        </div>
<PostingDetailsTitle></PostingDetailsTitle>
        <div align="center">
          <div >
          <SelectBudget handler={setFoodBudget}/>
          <SelectDistance handler={setFoodDistance}/>
          </div>
          <div style={{marginTop: '20px'}}>
          <SelectType handler={setFoodCuisine}/>
          </div>
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
        {postInfo}
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
  
  export default (PostFood);

/*
export default function PostEnt() {
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
                Post Food
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
                What's the Food Name?
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
                What is the address of the Food?
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
  