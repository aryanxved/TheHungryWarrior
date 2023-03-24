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
            <MenuItem value={10} >$10</MenuItem>
            <MenuItem value={20} >$20</MenuItem>
            <MenuItem value={30} >$30</MenuItem>
            <MenuItem value={40} >$40</MenuItem>
            <MenuItem value={50} >$50</MenuItem>
            <MenuItem value={60} >$60</MenuItem>
            <MenuItem value={10000}>$80 or more</MenuItem>
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
        <InputLabel id="select-activity-level" style={{color: '#001833', marginLeft: '10px'}}>Select Activity Level</InputLabel>
          <Select
            value={entertainmentLevel}
            labelID="select-activity-level"
            id="select-activity-level"
            label="Select Activity Level"
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value={'Low'}>Low</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'High'}>High</MenuItem>
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
            <MenuItem value={5}>0 - 5km</MenuItem>
            <MenuItem value={15}>5km - 15km</MenuItem>
            <MenuItem value={30}>15km - 30km</MenuItem>
            <MenuItem value={10000}>30km or More</MenuItem>
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
      <Button 
      variant="outlined" 
      style={{backgroundColor: 'red', color: '#FFFFFF', marginLeft: "20px"}}
      href='/Entertainment'
      >
      Clear All Filters
      </Button>
    );
  };

  //----------------------API---------------
    const [entertainmentDistance, setEntertainmentDistance] = useState()
    
    const [entertainmentBudget, setEntertainmentBudget] = useState()
  
    const [entertainmentLevel, setEntertainmentLevel] = useState("")
    
    const [entertainmentActivity, setEntertainmentActivity] = useState("")
  
    const [entertainments, setEntertainments] = useState([])

    const [entInfo, setEntInfo] = useState("")
  
    
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
          handleAddEntertainment();
          console.log(entertainments);
      }
    
  
  return (
    <div className='backdropEnt'>
      <Grid item xs={12}>
      <Title></Title>
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
          <ClearButton/>
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
                </Grid>
            </div>
            
          </div>
        </Card>
      </div>
      </div>
        </>
      )
      })}
      
          
        


     
      </Grid>
    </div>
  );
};

export default Entertainment;
