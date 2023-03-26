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

export default function ForgotPassword() {
    const [emailRef, setEmailRef] = useState(null)
    const { forgotPassword, currentUser } = useAuth()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [status, setStatus] = useState()
    const [loading, setLoading] = useState(false)

  
    async function handleSubmit (event) {
    event.preventDefault();

    try {
    setSuccess('')
    setError('')
    setLoading(true)
    await forgotPassword(emailRef)
    setSuccess('Link sent! Check your email to continue password reset')
    }
    catch {
        setError("Password Reset Failed")
        setSuccess('')
    }
    setLoading(false)

    //const data = new FormData(event.currentTarget);
    console.log({
      emailRef
    });
  };

  

  return (
    <ThemeProvider theme={theme}>
       <div className='backdropForgot'>
          <Card style={{color: 'white', backgroundColor: '#FFD500'}}>
            <Typography
              align="center"
              variant="h3"
              component="div"
              gutterBottom
              style={{fontFamily: 'Impact', color: 'black', letterSpacing: '2px'}}
            >
              Forgot Password
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
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Yay! Good News!</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{success}</Typography>
            </Card>}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '0px', marginRight: '0px'}}>Let's get you into your account</Typography>
          <Typography align='center' style={{color: 'white', fontSize: '24px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px',  marginTop: '20px'}}>Please enter your email:</Typography>

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
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor: '#FFD500', borderRadius: '50px', height: '50px', marginTop: '30px', fontSize: '18px'}}
              sx={{ mt: 3, mb: 2 }}
            >
              <strong>Reset Password</strong>
            </Button>
            <Grid container style={{marginTop: '10px'}}>
              <Grid item xs>
              <Link href="/SignIn" variant="body2" style={{color: 'white'}}>
                  {"Login to your account"}
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