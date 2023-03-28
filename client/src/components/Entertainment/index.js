import React, {Component, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  CssBaseline,
} from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from '@material-ui/core';
import './index.css';

const serverURL = ""; //enable for dev mode

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
              Entertainment
            </Typography>
          </Card>
        </div>
        </div>
        </div>
        )
    }

    function PrefTitle() {

      return (
        <div>
          <div>
            <CssBaseline />
            <div>
                <Typography
                  align="left"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                >
                  Let's get your Entertainment preferences:
                </Typography>
            </div>
            </div>
            </div>
            )
        }

const Entertainment = () => {
  const classes = useStyles();

  const SelectBudget = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    console.log(entertainmentBudget);
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', textAlign: "center"}} onChange={handleChange}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select your Budget</InputLabel>
          <Select
            value={entertainmentBudget}
            labelID="select-budget"
            id="select-budget"
            label="Select your Budget"
            variant="outlined"
            align="center"
            onChange={handleChange}
          >
            <MenuItem value={0} >$0</MenuItem>
            <MenuItem value={10} >$10 & Under</MenuItem>
            <MenuItem value={20} >$20 & Under</MenuItem>
            <MenuItem value={30} >$30 & Under</MenuItem>
            <MenuItem value={40} >$40 & Under</MenuItem>
            <MenuItem value={50} >$50 & Under</MenuItem>
            <MenuItem value={60} >$60 & Under</MenuItem>
            <MenuItem value={10000}>Unrestricted</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectActivityLevel = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-activity-level" style={{color: '#001833', marginLeft: '10px'}}>Select Physical Activity Level</InputLabel>
          <Select
            value={entertainmentLevel}
            labelID="select-activity-level"
            id="select-activity-level"
            label="Select Physical Activity Level"
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value={'Low'}>Low (Sitting in Seat)</MenuItem>
            <MenuItem value={'Medium'}>Medium (Some Moving Around)</MenuItem>
            <MenuItem value={'High'}>High (Very Intensive)</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectType = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-type" style={{color: '#001833', marginLeft: '10px'}}>Select Activity Type</InputLabel>
          <Select
            value={entertainmentActivity}
            labelID="select-type"
            id="selectType"
            label="Select Activity Type"
            variant="outlined"
            name='selectType'
            onChange={handleChange}
          >
            <MenuItem value={'Recreation'}>Recreation</MenuItem>
            <MenuItem value={'Education'}>Education</MenuItem>
            <MenuItem value={'Gaming'}>Gaming</MenuItem>
            <MenuItem value={'Sporting Event'}>Sporting Event</MenuItem>
            <MenuItem value={'Museum'}>Museum</MenuItem>
            <MenuItem value={'Visual'}>Visual</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectDistance = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };

  return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select Distance from E7</InputLabel>
          <Select
            value={entertainmentDistance}
            labelID="select-distance"
            id="select-distance"
            label="Select Distance from E7"
            variant='outlined'
            align='center'
            color= 'white'
            onChange={handleChange}
          >
            <MenuItem value={5}> Within 5 km</MenuItem>
            <MenuItem value={15}>Within 15 km</MenuItem>
            <MenuItem value={30}>Within 30 km</MenuItem>
            <MenuItem value={10000}>Unrestricted</MenuItem>
          </Select>
      </FormControl>
    );
  };

  
  const SubmitButton = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };  

    return(
      <Button 
      onChange={handleChange}
      variant="outlined" 
      onClick={submitButton}
      style={{backgroundColor: 'green', color: '#FFFFFF'}}
      >
      Search with Filters
      </Button>
    );
  };

  const ClearButton = () => {
    
    return(
      <Link to="/Entertainment" style={{textDecoration:"none"}}>
      <Button 
      variant="outlined" 
      style={{backgroundColor: 'red', color: '#FFFFFF', marginLeft: "20px"}}
      >
      Clear All Filters
      </Button>
      </Link>
    );
  };

  //----------------------API---------------
    const [entertainmentDistance, setEntertainmentDistance] = useState()
    
    const [entertainmentBudget, setEntertainmentBudget] = useState()
  
    const [entertainmentLevel, setEntertainmentLevel] = useState("")
    
    const [entertainmentActivity, setEntertainmentActivity] = useState("")
  
    const [entertainments, setEntertainments] = useState([])

    const [entInfo, setEntInfo] = useState("")

    const [error, setError] = useState("")



    const handleAddEntertainment = () => {
      callApiAddEntertainment()
        .then(res => {
          var parsed = JSON.parse(res.express);
          console.log("getEntertainments returned" + JSON.stringify(parsed))
          setEntertainments(parsed)
        });
    }
  
    const callApiAddEntertainment = async () => {
  
      const url = serverURL + "/api/getEntertainment";
  
      const submittedEntertainment = {
        "entertainmentBudget": entertainmentBudget,
        "entertainmentDistance": entertainmentDistance,
        "entertainmentActivity": entertainmentActivity,
        "entertainmentLevel": entertainmentLevel
      }
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify(submittedEntertainment)
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      console.log("Found Entertainment: ", body);
      return body;
    }
  
    const submitButton = () => {
      
        setEntInfo(
          <div className = "EntertainmentPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your review has been successfully submitted! 
          <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Heres what we're searching: 
          <div style={{fontSize: "14px", marginTop: "10px"}}>Entertainment Distance<br/>{entertainmentDistance}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Entertainment Budget <br/>{entertainmentBudget}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Entertainment Level <br/>{entertainmentLevel}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Entertainment Activity <br/>{entertainmentActivity}</div>
          </div>
          </div>)
          //setError('')
          if (entertainmentDistance == null || entertainmentBudget == null || entertainmentLevel == "" || entertainmentActivity == ""){
            setError('Cannot complete search')
          }
          
          else{
          handleAddEntertainment();
          setError('')
          }
          console.log(entertainments);
      }
    
  
  return (
    <div className='backdropEnt'>
      <Grid item xs={12}>
      <Title></Title>
      {error && <Card style={{backgroundColor: 'red'}}>
              <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error: Search Failed</Typography>
              <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
              <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>---</Typography>
                <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>Ensure all fields are selected with a value</Typography>
                <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>Try changing your filter parameters</Typography>

                </Card>}
          <div style={{marginTop: '50px'}}>
          <Card align="center" style={{color:'#001833', backgroundColor: 'black', opacity: '100%'}}>
          <div style={{marginTop: '20px'}}>
          <PrefTitle></PrefTitle>
          </div>
          <div style={{marginTop: '20px'}}>
          <SelectBudget handler={setEntertainmentBudget}/>
          <SelectDistance handler={setEntertainmentDistance}/>
          <SelectType handler={setEntertainmentActivity}/>
          <SelectActivityLevel handler={setEntertainmentLevel}/>
          </div>
          <div style={{marginTop: '30px', marginBottom: '30px'}}>
          <SubmitButton/>
          </div>
          <Typography variant="h5" component="div" gutterBottom>
      </Typography>
        </Card>
        </div>
  
          {entertainments.map(option => {
      return(
        <>
          <div style={{marginTop: '20px'}}>
        <div style={{marginTop: '50px'}}>
          <Card align="center" style={{color:'#001833', backgroundColor: 'black', opacity: "100%"}}>
          <div style={{marginTop: '20px'}}>
          <div>
                <Typography
                  align="left"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                >
                  {option.entertainmentName}
                </Typography>
            </div>
            <div align='center'>
              <Grid container spacing={24} justifyContent='center'>
                
              <Grid item md={3}>
              <Card style={{width: "300px", height: '100px', borderRadius: '10px', marginBottom:'20px', marginLeft: '20px', backgroundColor: 'white'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Cost
                  </Typography>
                </Card>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {"$" + option.entertainmentBudget + " CAD"}
                </Typography>
                </Card>
                </Grid>

                <Grid item md={3}>
                <Card style={{width: "300px", height: '100px', borderRadius: '10px', marginLeft: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Distance
                  </Typography>
                </Card>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px', marginLeft: '20px'}}
                >
                   {option.entertainmentDistance + "KM"}
                </Typography>
                </Card>
                </Grid>
                
                <Grid item md={3}>
                <Card style={{width: "300px", height: '100px', borderRadius: '10px', marginLeft: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Activity
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h4"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentActivity}
                </Typography>
                </Card>
                </Grid>
                <Card style={{width: "300px", height: '100px', borderRadius: '10px', marginLeft: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Activity Level
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h4"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentLevel}
                </Typography>
                </Card>
                </Grid>
            </div>
            <Card style={{color:'#001833', backgroundColor: 'green', marginBottom: '20px', marginTop: '20px', width: '350px', borderRadius: '50px'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                  >
                    Key Details About This Spot
                  </Typography>
                </Card>
                
            <Card style={{width: "1100px", height: '100px', borderRadius: '10px', marginLeft: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Location Address
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h6"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentAddress}
                </Typography>
                </Card>
                <Card style={{width: "1100px", height: '250px', borderRadius: '10px', marginLeft: '20px', marginTop: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    About this Spot!
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h6"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentDest}
                </Typography>
                </Card>
                <Card style={{color:'#001833', backgroundColor: 'green', marginBottom: '20px', marginTop: '20px', width: '250px', borderRadius: '50px'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                  >
                    Contact the User
                  </Typography>
                </Card>

                <div align='center'>
              <Grid container spacing={24} justifyContent='center'>
                

                <Grid item md={3}>
                <Card style={{width: "350px", height: '100px', borderRadius: '10px', marginLeft: '20px', marginTop: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    User Name
                  </Typography>
                </Card>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px', marginLeft: '20px'}}
                >
                   {option.entertainmentUserName}
                </Typography>
                </Card>
                </Grid>
                
                <Grid item md={3}>
                <Card style={{width: "350px", height: '100px', borderRadius: '10px', marginLeft: '20px', marginTop: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    User Email
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h6"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentUserEmail}
                </Typography>
                </Card>
                </Grid>
                <Card style={{width: "350px", height: '100px', borderRadius: '10px', marginLeft: '20px', marginTop: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    User Phone
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h6"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.entertainmentUserPhone}
                </Typography>
                </Card>
                </Grid>
            </div>
          </div>
        </Card>
      </div>
      <Card style={{color:'#001833', backgroundColor: '#FFD500', marginBottom: '20px', marginTop: '50px'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"white", marginLeft: '20px'}}
                  >
                    
                  </Typography>
                </Card>
      </div>
        </>
      )
      })}
      
          
        


     
      </Grid>
    </div>
  );
};

export default Entertainment;
