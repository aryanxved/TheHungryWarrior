
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
import { FormControl, MenuItem } from '@material-ui/core';
import './index.css';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#001833',
    color: 'white'
  },
}));


const InfoRestaurant = () => {
  const classes = useStyles();


  return (
    <div className='backdropinfoTeam'>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
            Meet the Team
          </Typography>
        </Paper>
      </Grid>
        <div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/HarveyRes.png" />
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        <b>Aryan Ved</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center> 3rd year Management Engineering student with a passion for technology. I love to work with people and can take on any opportunity. 
                    <p></p>
                        I have experience with: 
                        • Web development
                        • Unity3D AR/VR/MR (XR)
                        • Computer Aided Design (Autodesk Inventor, Google Sketch-up) 
                        • Adobe Premiere Pro, Photoshop & Figma
                        • Machining (vertical mill, engine lathe, bandsaw, etc) & makerbot 3d-printing 
                        • Arduino projects
                    </center>

                    </Typography>
                </div>

                <div align="center" style={{ marginTop: '30px' }}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            height: '40px',
                            width: '200px',
                            fontSize: '20px',
                        }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        href='https://www.linkedin.com/in/aryanved/?originalSubdomain=ca'
                    >
                        Visit LinkedIn
                    </Button>
                    
                </div>
            </Grid>
        </Grid>
    </Card>
</div>

<div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/HarveyRes.png" />
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        <b>Haley Schott</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center>  Management Engineering Student at University of Waterloo 
                        <p></p>
                       
                        Strategic Planning InternStrategic Planning Intern
                        TD · Co-opTD · Co-op Sep 2022 - Present
                    <p></p>
        • Developed a sustainable 5-point savings plan that highlighted savings opportunities for TD Wealth’s phones
        <p></p>
        
        • Delivered knowledgeable and concise oral presentations to executive members that highlighted future saving opportunities, methods to achieve savings, and business use cases
                    </center>

                    </Typography>
                </div>

                <div align="center" style={{ marginTop: '30px' }}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            height: '40px',
                            width: '200px',
                            fontSize: '20px',
                        }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        href='https://www.linkedin.com/in/haley-schott/?originalSubdomain=ca'
                    >
                        Visit LinkedIn
                    </Button>
                    
                </div>
            </Grid>
        </Grid>
    </Card>
</div>


<div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/HarveyRes.png" />
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        <b>Nathan Pipilas</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center>  The guy who filmed himself for 20 days because he was bored.
                        <p></p>
                       
                    </center>

                    </Typography>
                </div>

                <div align="center" style={{ marginTop: '30px' }}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            height: '40px',
                            width: '200px',
                            fontSize: '20px',
                        }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        href='https://ca.linkedin.com/in/nathan-pipilas-40721322b?original_referer=https%3A%2F%2Fduckduckgo.com%2F'
                    >
                        Visit LinkedIn
                    </Button>
                    
                </div>
            </Grid>
        </Grid>
    </Card>
</div>


<div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/HarveyRes.png" />
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        <b>Yash Pokra</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center>  University of Waterloo | Management Engineering
                        <p></p>
                        A Management Engineering student studying at the University of Waterloo. Who has a passion for data-driven technology and has strong analytical skills.
                          </center>

                    </Typography>
                </div>

                <div align="center" style={{ marginTop: '30px' }}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            height: '40px',
                            width: '200px',
                            fontSize: '20px',
                        }}
                        type="submit"
                        color="primary"
                        variant="contained"
                        href='https://www.linkedin.com/in/ypokra/?originalSubdomain=ca'
                    >
                        Visit LinkedIn
                    </Button>
                    
                </div>
            </Grid>
        </Grid>
    </Card>
</div>
    
    </div>
  );
};




export default InfoRestaurant;