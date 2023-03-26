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
import './index.css';

const theme = createTheme();

export default function SignIn() {
    const [emailRef, setEmailRef] = useState(null)
    const [passwordRef, setPasswordRef] = useState(null)
    const { signin, currentUser } = useAuth()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [status, setStatus] = useState()
    const [loading, setLoading] = useState(false)

  
    async function handleSubmit (event) {
    event.preventDefault();

    try {
    setError('')
    setLoading(true)
    await signin(emailRef, passwordRef)
    setSuccess('Login Success')
    history.push("/Landing")
    }
    catch {
        setError("Sign in Failed")
        setSuccess('')
    }
    setLoading(false)

    //const data = new FormData(event.currentTarget);
    console.log({
      emailRef,
      passwordRef
    });
  };

  

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
              Sign In
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
            {success && <Card style={{backgroundColor: 'green'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Woo Hoo! Welcome Back!</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{success}</Typography>
            </Card>}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Secured Sign In</Typography>
          <Typography align='center' style={{color: 'white', fontSize: '24px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px',  marginTop: '20px'}}>Please Sign In to your account:</Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant='filled'
              style={{backgroundColor: 'white', borderRadius: '50px', marginTop: '50px'}}
              onChange={(event) => setEmailRef(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant='filled'
              style={{backgroundColor: 'white', borderRadius: '50px'}}
              onChange={(event) => setPasswordRef(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px'}}
              sx={{ mt: 3, mb: 2 }}
            >
              <strong>Sign In</strong>
            </Button>
            <Grid container style={{marginTop: '10px'}}>
              <Grid item xs>
              <Link href="/forgotPassword" variant="body2" style={{color: 'white'}}>
                  {"Forgot your password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2" style={{color: 'white'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}