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
              Food
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
                  Let's get your Food preferences:
                </Typography>
            </div>
            </div>
            </div>
            )
        }

const Food = () => {
  const classes = useStyles();

  const SelectBudget = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    console.log(foodBudget);
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', textAlign: "center"}} onChange={handleChange}>
        <InputLabel id="select-distance" style={{color: '#001833', marginLeft: '10px'}}>Select your Budget</InputLabel>
          <Select
            value={foodBudget}
            labelID="select-budget"
            id="select-budget"
            label="Select your Budget"
            variant="outlined"
            align="center"
            onChange={handleChange}
          >
            <MenuItem value={5}>$5 & Under</MenuItem>
            <MenuItem value={10}>$10 & Under</MenuItem>
            <MenuItem value={15}>$15 & Under</MenuItem>
            <MenuItem value={20}>$20 & Under</MenuItem>
            <MenuItem value={25}>Unrestricted</MenuItem>
          </Select>
      </FormControl>
    );
  };

  const SelectCuisine = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };
  
    return(
      <FormControl style={{backgroundColor: 'white', width: '300px', borderRadius: '15px', marginLeft: '20px'}}>
        <InputLabel id="select-type" style={{color: '#001833', marginLeft: '10px'}}>Type of Cuisine</InputLabel>
          <Select
            value={foodCuisine}
            labelID="select-type"
            id="selectType"
            label="Select Activity Type"
            variant="outlined"
            name='selectType'
            onChange={handleChange}
          >
            <MenuItem value={'Fast Food'}>Fast Food</MenuItem>
            <MenuItem value={'Casual Dine-In'}>Casual Dine-In</MenuItem>
            <MenuItem value={'Specialty'}>Specialty </MenuItem>
            <MenuItem value={'Mediterranean Food'}>Mediterranean Food</MenuItem>
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
            value={foodDistance}
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
            <MenuItem value={50001}>Unrestricted</MenuItem>
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
      <Link to="/Food" style={{textDecoration:"none"}}>
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
    const [foodDistance, setFoodDistance] = useState()
    
    const [foodBudget, setFoodBudget] = useState()
  
    const [foodLevel, setFoodLevel] = useState("")
    
    const [foodCuisine, setFoodCuisine] = useState("")
  
    const [foods, setFoods] = useState([])

    const [entInfo, setEntInfo] = useState("")
  
    const [error, setError] = useState()

    
    const handleAddFood = () => {
      callApiAddFood()
        .then(res => {
          var parsed = JSON.parse(res.express);
          console.log("getFoods returned" + JSON.stringify(parsed))
          setFoods(parsed)
        });
    }
  
    const callApiAddFood = async () => {
  
      const url = serverURL + "/api/getFood";
  
      const submittedFood = {
        "foodBudget": foodBudget,
        "foodDistance": foodDistance,
        "foodCuisine": foodCuisine
      }
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify(submittedFood)
      });
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      console.log("Found Food: ", body);
      return body;
    }
  
    const submitButton = () => {
      setError("")
        setEntInfo(
          <div className = "FoodPosted" style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center">Your review has been successfully submitted! 
          <div style={{marginTop: "30px", alignContent: "center", width: "55vh"}} align="center"> Heres what we're searching: 
          <div style={{fontSize: "14px", marginTop: "10px"}}>Food Distance<br/>{foodDistance}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Food Budget <br/>{foodBudget}</div>
          <br/>
          <div style={{fontSize: "14px", marginTop: "10px"}}>Food Cuisine <br/>{foodCuisine}</div>
          </div>
          </div>)
          handleAddFood();
          console.log(foods);
          //setTimeout(errorHandler, 1000);
          //setFoods([])
         
      }
    /*
      const errorHandler = () => {
        setError('')
        if (!Array.isArray(foods) || !foods.length){
          return (setError('No results found. Please change filter criteria and try again.')

          )
      }
      else if (foods.length >= 1) {
        return (setError('')
        )
      } 
      
      }
      */
  
  return (
    <div className='backdropEnt'>
      <Grid item xs={12}>
      <Title></Title>
      {error && <Card style={{backgroundColor: 'red', marginTop: '20px'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
            </Card>}
          <div style={{marginTop: '50px'}}>
          <Card align="center" style={{color:'#001833', backgroundColor: 'black', opacity: '100%'}}>
          <div style={{marginTop: '20px'}}>
          <PrefTitle></PrefTitle>
          </div>
          <div style={{marginTop: '20px'}}>
          <SelectBudget handler={setFoodBudget}/>
          <SelectDistance handler={setFoodDistance}/>
          <SelectCuisine handler={setFoodCuisine}/>
          </div>
          <div style={{marginTop: '30px', marginBottom: '30px'}}>
          <SubmitButton/>
          </div>
          <Typography variant="h5" component="div" gutterBottom>
      </Typography>
        </Card>
        </div>
  
          {foods.map(option => {
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
                  {option.foodName}
                </Typography>
            </div>
            <div align='center'>
              <Grid container spacing={24} justifyContent='center'>
                
              <Grid item md={3}>
              <Card style={{width: "300px", height: '150px', borderRadius: '10px', marginBottom:'20px', marginLeft: '20px', backgroundColor: 'white'}}>
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
                   {"$" + option.foodBudget + " CAD"}
                </Typography>
                </Card>
                </Grid>

                <Grid item md={3}>
                <Card style={{width: "300px", height: '150px', borderRadius: '10px', marginLeft: '20px'}}>
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
                   {option.foodDistance + "M"}
                </Typography>
                </Card>
                </Grid>
                
                <Grid item md={3}>
                <Card style={{width: "300px", height: '150px', borderRadius: '10px', marginLeft: '20px'}}>
                <Card style={{color:'#001833', backgroundColor: 'gold'}}>
                  <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                  >
                    Cuisine
                  </Typography>
                </Card>
                <Typography
                  align="center"
                  variant="h4"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '20px'}}
                >
                   {option.foodCuisine}
                </Typography>
                </Card>
                </Grid>
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
                   {option.foodAddress}
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
                   {option.foodDesc}
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
                   {option.foodUserName}
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
                   {option.foodUserEmail}
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
                   {option.foodUserPhone}
                </Typography>
                </Card>
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

export default Food;
