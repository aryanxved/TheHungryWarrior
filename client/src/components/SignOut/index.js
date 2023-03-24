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

export default function SignOut(){
    const [error, setError] = useState("")
    const { currentUser, signout } = useAuth()
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
    
    return(
        <div align="center">
        <Card align="center" style={{width: '500px', height: '200px', marginTop: '50px'}}>
        <Typography component="h1" variant="h4">
            Currently Signed in as:
          </Typography>

          <Typography component="h1" variant="h6" style={{marginTop: '30px'}}>
          <strong>User ID: </strong> {currentUser && currentUser.email}
          </Typography>
          {error && <Card style={{backgroundColor: 'red'}}>
          <Typography align='center' style={{color: 'white', fontSize: '28px', fontFamily: 'Roboto', marginLeft: '20px', marginRight: '20px'}}>Uh Oh! Error Occurred.</Typography>
            <Typography align='center' style={{color: 'white', fontSize: '16px', marginLeft: '20px', marginRight: '20px'}}>{error}</Typography>
            </Card>}
        
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogout}
              style={{marginTop: '30px'}}
            >
              Log out
            </Button>
            </Card>
            </div>
    )
}