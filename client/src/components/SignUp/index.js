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
import { TextField, InputAdornment } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider, CssBaseline} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useAuth } from '../Firebase/context'
import './index.css';


const theme = createTheme();

export default function SignUp() {
 
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const [firstnameRef, setFirstNameRef] = useState(null)
    const [lastnameRef, setLastNameRef] = useState(null)
    const [emailRef, setEmailRef] = useState(null)
    const [passwordRef, setPasswordRef] = useState(null)
    const [passwordConfirmRef, setPasswordConfirmRef] = useState(null)
    const { signup } = useAuth()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [loading, setLoading] = useState(false)

  
    async function handleSubmit (event) {
    event.preventDefault();

    try {
    setError('')
    setLoading(true)
    await signup(emailRef, passwordRef)
    setSuccess('Signup Success')
    }
    catch {
        
        if (!passwordRef || !passwordConfirmRef || !firstnameRef || !lastnameRef || !emailRef){
            return (setError('Fields cannot be left blank'),
            setSuccess('')
            )
        }
        
    
        else if (passwordRef !== passwordConfirmRef){
        return (
          setError('Passwords are not matching. Please Re-enter same password'),
        setSuccess('')
        )

        }
    
        else if (passwordRef && passwordRef.length < 6){
            return (setError('Password too short. Please enter a password greater than 6 characters long'),
            setSuccess('')
            )
        }
        
        else {
            setError('Sign-up Failed. Please try again')
            setSuccess('')
        }
        
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
      <div className='backdropSignUp'>
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
              Sign Up
            </Typography>
          </Card>
        </div>
        </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card style={{marginTop:'70px', marginBottom:'40px', backgroundColor: '#FFD500'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card style={{backgroundColor: 'black', marginTop: '20px', display: 'flex', borderRadius: '30px'}}>
            <Typography style={{color: 'white', fontSize: '20px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>
              Register with your details below:
            </Typography>
            </Card>
          {error && <Card style={{backgroundColor: 'red', marginTop: '20px'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
            </Card>}
            {success && <Card style={{backgroundColor: 'green', marginTop: '20px'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Woo Hoo! Welcome to THW!</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{success}</Typography>
            </Card>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, marginLeft: '30px', marginRight:'30px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  onChange={(event) => setFirstNameRef(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  onChange={(event) => setLastNameRef(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  onChange={(event) => setEmailRef(event.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  onChange={(event) => setPasswordRef(event.target.value)}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Password Confirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px', borderWidth: 0, outline: 'none'}}
                  onChange={(event) => setPasswordConfirmRef(event.target.value)}

                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              //disabled={loading}
              style={{backgroundColor: 'black', borderRadius: '50px', marginTop: '20px', color: 'white'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
}