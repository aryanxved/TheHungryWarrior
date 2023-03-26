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
              Housing
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
                  Let's get your Housing preferences:
                </Typography>
            </div>
            </div>
            </div>
            )
        }

const Housing = () => {
  const classes = useStyles();

  const SelectBudget = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    console.log(housingBudget);
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', textAlign: "center"}} onChange={handleChange}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select your Monthly Budget</InputLabel>
          <Select
            value={housingBudget}
            labelID="select-budget"
            id="select-budget"
            label="Select your Budget"
            variant="outlined"
            align="center"
            onChange={handleChange}
          >
            <MenuItem value={10}>$500 & Under</MenuItem>
            <MenuItem value={20}>$600 & Under</MenuItem>
            <MenuItem value={30}>$700 & Under</MenuItem>
            <MenuItem value={40}>$800 & Under</MenuItem>
            <MenuItem value={50}>$900 & Under</MenuItem>
            <MenuItem value={60}>$1000 & Under</MenuItem>
            <MenuItem value={10000}>$1100 or More</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectPeople = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-people" style={{color: '#001833', marginLeft: '10px'}}>Select Number of People Per Unit</InputLabel>
          <Select
            value={housingPeople}
            labelID="select-people"
            id="select-people"
            label="Number of People"
            variant="outlined"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={5}>6</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectRoomType = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-type" style={{color: '#001833', marginLeft: '10px'}}>Select Room Type</InputLabel>
          <Select
            value={housingRoomType}
            labelID="select-type"
            id="selectType"
            label="Select Room Type"
            variant="outlined"
            name='selectType'
            onChange={handleChange}
          >
            <MenuItem value={'Single'}>Single</MenuItem>
            <MenuItem value={'Double'}>Double</MenuItem>
            <MenuItem value={'Suite'}>Suite</MenuItem>
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
            value={housingDistance}
            labelID="select-distance"
            id="select-distance"
            label="Select Distance from E7"
            variant='outlined'
            align='center'
            color= 'white'
            onChange={handleChange}
          >
            <MenuItem value={200}>Within 200m</MenuItem>
            <MenuItem value={400}>Within 400m</MenuItem>
            <MenuItem value={600}>Within 600m</MenuItem>
            <MenuItem value={800}>Within 800m</MenuItem>
            <MenuItem value={1000}>Within 1km</MenuItem>
            <MenuItem value={5000}>Within 5km</MenuItem>
            <MenuItem value={500000}>5km or more</MenuItem>
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
      href='/Housing'
      >
      Clear All Filters
      </Button>
    );
  };

  //----------------------API---------------
    const [housingDistance, setHousingDistance] = useState()
    
    const [housingBudget, setHousingBudget] = useState()
  
    const [housingPeople, setHousingPeople] = useState("")
    
    const [housingRoomType, setHousingRoomType] = useState("")
  
    const [housings, setHousings] = useState([])

    const [entInfo, setEntInfo] = useState("")
  
    
    const handleAddHousing = () => {
      callApiAddHousing()
        .then(res => {
          var parsed = JSON.parse(res.express);
          console.log("getHousings returned" + JSON.stringify(parsed))
          setHousings(parsed)
        });
    }
  
    const callApiAddHousing = async () => {
  
      const url = serverURL + "/api/getHousing";
  
      const submittedHousing = {
        "housingBudget": housingBudget,
        "housingDistance": housingDistance,
        "housingRoomType": housingRoomType,
        "housingPeople": housingPeople
      }
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify(submittedHousing)
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      console.log("Found Housing: ", body);
      return body;
    }
  
    const submitButton = () => {
      
        setEntInfo(
          <div className = "HousingPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your review has been successfully submitted! 
          <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Heres what we're searching: 
          <div style={{fontSize: "14px", marginTop: "10px"}}>Housing Distance<br/>{housingDistance}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Housing Budget <br/>{housingBudget}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Housing Level <br/>{housingPeople}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Housing Activity <br/>{housingRoomType}</div>
          </div>
          </div>)
          handleAddHousing();
          console.log(housings);
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
          <SelectBudget handler={setHousingBudget}/>
          <SelectDistance handler={setHousingDistance}/>
          <SelectRoomType handler={setHousingRoomType}/>
          <SelectPeople handler={setHousingPeople}/>
          </div>
          <div style={{marginTop: '30px', marginBottom: '30px'}}>
          <SubmitButton/>
          <ClearButton/>
          </div>
          <Typography variant="h5" component="div" gutterBottom>
      </Typography>
        </Card>
        </div>
  
          {housings.map(option => {
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
                  {option.housingName}
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
                   {"$" + option.housingBudget + " CAD"}
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
                   {option.housingDistance + "KM"}
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
                   {option.housingRoomType}
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

export default Housing;
