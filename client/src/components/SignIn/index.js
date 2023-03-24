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

const theme = createTheme();

export default function SignIn() {
    const [emailRef, setEmailRef] = useState(null)
    const [passwordRef, setPasswordRef] = useState(null)
    const { signin, currentUser } = useAuth()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [loading, setLoading] = useState(false)

  
    async function handleSubmit (event) {
    event.preventDefault();

    try {
    setError('')
    setSuccess('Login Success')
    setLoading(true)
    await signin(emailRef, passwordRef)
    }
    catch {
        setError("Sign in Failed")
        setSuccess('')
    }
    setLoading(false)
    history.push("/Landing")

    //const data = new FormData(event.currentTarget);
    console.log({
      emailRef,
      passwordRef
    });
  };


  return (
    <ThemeProvider theme={theme}>
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
          <Typography component="h1" variant="h5">
            Sign in
            {currentUser && currentUser.email}
          </Typography>
          {error && <Card style={{backgroundColor: 'red'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
            </Card>}
            {success && <Card style={{backgroundColor: 'green'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Woo Hoo! Welcome Back!</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{success}</Typography>
            </Card>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant='outlined'
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
              variant='outlined'
              onChange={(event) => setPasswordRef(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
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