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
import { useAuth } from '../Firebase/context'
import { useHistory } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
              MyPosts Food
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

        function TextByID(props) {
  
            const handleChange = (event) => {
              props.handler(event.target.value);
            };
          
            return (
             
              <div align="center">
              
              <TextField style={{width: "500px", marginTop: "30px", backgroundColor: "white", borderRadius: '50px'}}
                    onChange={handleChange}
                    id="outlined-multiline-static"
                    label="Enter an Post ID value"
                    multiline
                    minRows={1}
                    variant="filled"
                    align="center"
                  />
            </div>
             
            )
          }

const MyPostsFood = () => {
  const classes = useStyles();
  
    const { currentUser, signout, userEmailCurrent } = useAuth()

  const SubmitButton = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };  

    return(
      <Button 
      onChange={handleChange}
      onClick={submitButtonAll}
      type="submit"
      fullWidth
      variant="contained"
      style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px', width: '500px'}}
      sx={{ mt: 3, mb: 2 }}
      >
      View All Posts
      </Button>
           
    );
  };

  const SubmitButtonByID = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };  

    return(
      <Button 
      onChange={handleChange}
      onClick={submitButtonByID}
      type="submit"
      fullWidth
      variant="contained"
      style={{backgroundColor: 'green', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px', width: '240px', marginRight: '20px'}}
      sx={{ mt: 3, mb: 2 }}
      >
      View Posts By ID
      </Button>
           
    );
  };

  const DeleteButtonByID = (props) => {
    
    const handleChange = (event) => {
      props.handler(event.target.value);
    };  

    return(
      <Button 
      onChange={handleChange}
      onClick={submitButtonByIDDelete}
      type="submit"
      fullWidth
      variant="contained"
      style={{backgroundColor: 'red', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px', width: '240px'}}
      sx={{ mt: 3, mb: 2 }}
      >
      Delete Posts By ID
      </Button>
           
    );
  };

  //----------------------API---------------
    
    const [posts, setPosts] = useState([])

    const [entInfo, setEntInfo] = useState("")

    const [ID, setID] = useState('')

  
    
    const handlePosts = () => {
        callApiGetPosts()
          .then(res => {
            var parsed = JSON.parse(res.express);
            console.log("getPosts returned" + JSON.stringify(parsed))
            setPosts(parsed)
          });
      }

      const handlePostsByID = () => {
        callApiGetPostsByID()
          .then(res => {
            var parsed = JSON.parse(res.express);
            console.log("getPosts returned" + JSON.stringify(parsed))
            setPosts(parsed)
          });
      }

      const handlePostsByIDDelete = () => {
        callApiGetPostsByIDDelete()
          .then(res => {
            var parsed = JSON.parse(res.express);
            console.log("getPosts returned" + JSON.stringify(parsed))
            setPosts(parsed)
          });
      }
  
    const callApiGetPosts = async () => {
    
        const url = serverURL + "/api/getPostsFood";
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              //authorization: `Bearer ${this.state.token}`
            },
            body: JSON.stringify({userEmailCurr: currentUser.email})
          });
          const body = await response.json();
          if (response.status !== 200) throw Error(body.message);
          console.log("Found Posts: ", body);
          return body;
        }

        const callApiGetPostsByID = async () => {
    
            const url = serverURL + "/api/getPostsFoodByID";
            
            const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  //authorization: `Bearer ${this.state.token}`
                },
                body: JSON.stringify({userEmailCurr: currentUser.email, userCurrentID: ID})
              });
              const body = await response.json();
              if (response.status !== 200) throw Error(body.message);
              console.log("Found Posts: ", body);
              return body;
            }

        const callApiGetPostsByIDDelete = async () => {
    
                const url = serverURL + "/api/getPostsFoodByIDDelete";
                
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      //authorization: `Bearer ${this.state.token}`
                    },
                    body: JSON.stringify({userEmailCurr: currentUser.email, userCurrentID: ID})
                  });
                  const body = await response.json();
                  if (response.status !== 200) throw Error(body.message);
                  console.log("Found Posts: ", body);
                  return body;
            }
  
    const submitButtonAll = () => {
          handlePosts();
          console.log(posts);
      }

    const submitButtonByID = () => {
        handlePostsByID();
        console.log(posts);
    }

    const submitButtonByIDDelete = () => {
        handlePostsByIDDelete();
        history.push('/SignOut');
        console.log(posts);
    }
    
  
  return (
    <div className='backdropEnt'>
      <Grid item xs={12}>
      <Title></Title>
    <div align='center'>
    <SubmitButton></SubmitButton> 
    </div>
    <div align='center'>
<TextByID handler={setID}></TextByID>
    </div>
    <div align='center'>
<SubmitButtonByID></SubmitButtonByID>
 
   <DeleteButtonByID></DeleteButtonByID>
    </div>
          {posts.map(option => {
      return(
        <>
          <div style={{marginTop: '20px'}}>
        <div style={{marginTop: '50px'}}>
          <Card align="center" style={{color:'#001833', backgroundColor: 'black', opacity: "100%"}}>
          <div style={{marginTop: '20px'}}>
          <div>
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
                <div align='left' style={{marginLeft: '20px', marginBottom: '20px'}}>
                <Card style={{backgroundColor: '#FFD500', width: '300px', borderRadius: '50px'}}>
                <Typography
                  align="left"
                  variant="h5"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Roboto', color:"black", marginLeft: '40px'}}
                >
                  Post ID Number: {option.foodID}
                </Typography>
                </Card>
                </div>
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
                   {"$" + option.foodBudget + " CAD"}
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
                   {option.foodDistance + "M"}
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

export default MyPostsFood;

