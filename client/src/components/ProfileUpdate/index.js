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

export default function ProfileUpdate() {
 
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
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [loading, setLoading] = useState(false)

  
    function handleSubmit (event) {
    event.preventDefault();

    setLoading(true)

    setError('')
    
    if (passwordRef !== passwordConfirmRef){
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
        
        const promises = []
        if (emailRef !== emailRef){
            promises.push(updateEmail(emailRef))
        }
        
        if (passwordRef){
            promises.push(updatePassword(passwordRef))
        }
        
        Promise.all(promises).then(() => {history.push('/')}).catch(() => {
            setError('Profile Update Failed')
        }).finally(() => {setLoading(false)}) 

        console.log(promises)
    }

    


    //const data = new FormData(event.currentTarget);
    console.log({
      emailRef,
      passwordRef
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='backdropUpdate'>
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
              Update Profile
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
              Update your details below:
            </Typography>
            </Card>
          {error && <Card style={{backgroundColor: 'red', marginTop: '20px'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
            </Card>}
            {success && <Card style={{backgroundColor: 'green', marginTop: '20px'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Woo Hoo! It Worked!</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{success}</Typography>
            </Card>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, marginLeft: '30px', marginRight:'30px' }}>
            <Grid container spacing={2}>
              
                
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  onChange={(event) => setEmailRef(event.target.value)}
                  defaultValue={currentUser.email}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='outlined'
                  style={{backgroundColor: 'white', borderRadius: '50px'}}
                  placeholder="Keep blank if same password remains"
                  onChange={(event) => setPasswordRef(event.target.value)}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="passwordConfirm"
                  label="Password Confirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  variant='outlined'
                  placeholder="Keep blank if same password remains"
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
              Update Password
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Take me Back! (Cancel and Don't Save)
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