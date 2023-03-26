import React, {Component, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from '../Navigation/history';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider, CssBaseline} from '@material-ui/core';
import { useAuth } from '../Firebase/context'
import { useHistory } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const theme = createTheme();
const serverURL = ""

export default function SignOut(){
    const [error, setError] = useState("")
    const { currentUser, signout, userEmailCurrent } = useAuth()
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const history = useHistory()
    
    async function handleLogout(){
        setError('')

        try {
            await signout()
            history.push('/SignIn')
        }
        catch {
            setError('Logout was Unsuccessful. Please try again!')
        }
    }
    
    async function handleUpdate(){
        setError('')

        try {
            history.push('/ProfileUpdate')
        }
        catch {
            setError('Unauthorized. Please try again later')
        }
    }

    
    const handlePosts = () => {
        callApiGetPosts()
          .then(res => {
            var parsed = JSON.parse(res.express);
            console.log("getPosts returned" + JSON.stringify(parsed))
            setPosts(parsed)
          });
      }


      const callApiGetPosts = async () => {
    
        const url = serverURL + "/api/getPosts";
        
        
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

    return (
        <ThemeProvider theme={theme}>
           <div className='backdropSignIn'>
              <Card style={{color: 'white', backgroundColor: '#FFD500'}}>
                <Typography
                  align="center"
                  variant="h3"
                  component="div"
                  gutterBottom
                  style={{fontFamily: 'Impact', color: 'black', letterSpacing: '2px'}}
                >
                  Profile
                </Typography>
              </Card>
            </div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
             
              
              {error && <Card style={{backgroundColor: 'red'}}>
              <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
                <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
                </Card>}
                
              
              <Box component="form" noValidate sx={{ mt: 1 }}>
              <Box component="form" onSubmit={handleUpdate} noValidate sx={{ mt: 1 }}>
              <Typography component="h1" variant="h4" style={{ color: 'white'}}>
            Currently Signed in as:
          </Typography>

          <Typography component="h1" variant="h6" style={{marginTop: '30px', color: 'white'}}>
          <strong>User ID: </strong> {currentUser && currentUser.email}
          </Typography>
          <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px'}}
                  sx={{ mt: 3, mb: 2 }}
                >
                  <strong>Update Profile</strong>
                </Button>
                </Box>
                
                <Box component="form" onSubmit={handlePosts} noValidate sx={{ mt: 1 }}>
          <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px'}}
                  sx={{ mt: 3, mb: 2 }}
                >
                  <strong>View My Posts</strong>
                </Button>
                </Box>

                <Box component="form" onSubmit={handleLogout} noValidate sx={{ mt: 1 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px'}}
                  sx={{ mt: 3, mb: 2 }}
                >
                  <strong>Log Out</strong>
                </Button>
                <Grid container style={{marginTop: '10px'}}>
                  <Grid item xs>
                  
                  </Grid>
                  <Grid item>
                    <Link href="/SignIn" variant="body2" style={{color: 'white'}}>
                      {"Log into another account"}
                    </Link>
                  </Grid>
                </Grid>
                </Box>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );

      
}


         