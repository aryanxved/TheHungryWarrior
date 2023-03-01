
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


const InfoEntertainment = () => {
  const classes = useStyles();

  
  

  


  

  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
          Information About Entertainment 
          </Typography>
        </Paper>
      </Grid>

<div align='center'>
      <Card style={{color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"}}>
<Grid container spacing={2} columns={12}>
      <Grid item xs={5}>
         <div align='left'> 
        <Card style={{color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"}}>
        <img src = "/images/Raptor.png"/>
        </Card>
      </div>
      </Grid>
      <Grid item xs={7}>
          <div style={{marginTop: '20px'}}>
          <Typography variant="h5" color="black" wrap>
          Toronto Raptors Best Team! 
          </Typography>
          </div>

          <div style={{marginTop: '20px', marginRight: '30px', textAlign: 'Left'}}>
         <Typography align = 'center' variant="h10" color="inherit" style={{marginLeft: '30px'}}>
         A professional basketball team from Toronto playing in the NBA.
         A professional basketball team from Toronto playing in the NBA.
         A professional basketball team from Toronto playing in the NBA.
         A professional basketball team from Toronto playing in the NBA.
         A professional basketball team from Toronto playing in the NBA.
        </Typography>
        </div>

        <div align="center" style={{marginTop: '30px'}}>  
            <Button
              style={{
                color: 'white',
                backgroundColor: 'black',
                height: '40px',
                width: '150px',
                fontSize: '20px',
              }}
              type="submit"
              color="primary"
              variant="contained"
              href='https://www.raptors.com/'
              >
              Visit site
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'black',
                height: '40px',
                width: '250px',
                fontSize: '20px',
                marginLeft: '20px'
              }}
              type="submit"
              color="primary"
              variant="contained"
              href='/ReviewEntertainment'
              >
              Write A Review
            </Button>
          </div>
      </Grid> 
  </Grid>
</Card>    
</div>



        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Kitchener Rangers Game
          </Typography>
        </Paper>
        <img src = "/images/Rangergame.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         A professional hockey team from Waterloo playing in the OHL
        </Typography>

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          King Pin Bowlounge
          </Typography>
        </Paper>
        <img src = "/images/KingPin.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         
With 28 state of the art 10 pin lanes including a separate section for private parties, Kingpin Bowlounge is the biggest bowling venue in the Waterloo Region. Whether you want to celebrate a birthday, are looking for a place to hold your next corporate event or want to be part of a bowling league, Kingpin is the perfect place.

        </Typography>
      

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Adventure Rooms
          </Typography>
        </Paper>
        <img src = "/images/AdventureRooms.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         
The Adventure Rooms are “real life escape room games” – which are awesome group activities.  The basic idea is that the team must solve a variety of puzzles in order to “break free” from an escape room containing locked doors before a 60 minute countdown reaches zero.  To do so, they have to use not brute force, but skill and cunning.
This is a fun and challenging game that requires searching for clues, codes, keys and using objects in strange ways.  Escape games are a great option for group activities for all ages, team building events, and special occasions.

        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
        Canadian Clay & Glass Gallery

          </Typography>
        </Paper>
        <img src = "/images/Clay.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         The Canadian Clay & Glass Gallery celebrates contemporary ceramic and glass artists engaged in conceptual, technical or material research. Located in Waterloo, Ontario, we are a not-for-profit institution that aims to collect, exhibit, research, promote, and preserve work by Canadian artists and makers in clay, glass, and copper enameling to represent the diversity of the Canadian landscape. Our rotating exhibitions celebrate and support diverse artists from across Canada working in these mediums and present their work to the public. 

        </Typography>

      

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
           
        Waterloo Park 

          </Typography>
        </Paper>
        <img src = "/images/waterloopark.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         Known as the jewel of the city, Waterloo Park has a lake, animal farm, picnic areas, splash pad, sport fields, playgrounds and more.

        </Typography>


        
        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
           
        Ctrl V Waterloo


        </Typography>
        </Paper>
        <img src = "/images/ctrlv.png"/>
         <div>
         </div>

         <Typography align = 'right' variant="h10" color="inherit">
         It's simple: VR is fun, easy and accessible. Unlike conventional gaming, VR offers a new way to play together with your family, friends and your mortal enemies! Most games only require the use of one or two buttons, so if you can flick a light switch while flushing the toilet, you can play VR!

         Ctrl V is the ideal venue to host your next birthday party, team building event, corporate event, or just a simple night out with your friends!

        </Typography>


        
        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Galaxy Cinemas Waterloo
          </Typography>
        </Paper>
        <img src = "/images/galaxy.png"/>
         <div>
         </div>
         <Typography align = 'right' variant="h10" color="inherit">
         Cineplex is a leading Canadian company that operates in the Film Entertainment and Content, Amusement and Leisure, and Media sectors. It offers a unique escape through its theatres and entertainment venues, and is a joint venture partner in Scene+,
        </Typography>

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Pin Up Arcade Bar
          </Typography>
        </Paper>
        <img src = "/images/pinclub.png"/>
         <div>
         </div>
         <Typography align = 'right' variant="h10" color="inherit">
         Come out, enjoy a beer, and play the best selection of pinball and classic arcade games around!
        </Typography>



        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Chicopee Ski & Tube Park
          </Typography>
        </Paper>
        <img src = "/images/ski.png"/>
         <div>
         </div>
         <Typography align = 'right' variant="h10" color="inherit">
         Whether you're planning a family adventure, school trip, or just looking to spend some time hitting the slopes with friends, Chicopee has you covered. Come visit us for the day and see what we have to offer!

        </Typography>



        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Cambridge Butterfly Conservatory

          </Typography>
        </Paper>
        <img src = "/images/Butterfly.png"/>
         <div>
         </div>
         <Typography align = 'right' variant="h10" color="inherit">
         Situated on a 107 acre site which includes the environmentally sensitive Kossuth Bog, the 25,000 square foot facility includes a 10,800 square foot indoor tropical garden featuring thousands of free-flying butterflies. Our conservatory also hosts a variety of tropical plants, birds, and animals, along with several water features. Witness butterflies emerge from their chrysalis and take their first flight, followed by a walk-through of our mounted and live-insect galleries.
        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Canoeing The Grand

          </Typography>
        </Paper>
        <img src = "/images/cannoe.png"/>
         <div>
         </div>
         <Typography align = 'right' variant="h10" color="inherit">
         Canoeing the Grand is an experience that is both iconic and peaceful. As you quietly paddle our beautiful heritage river you will discover our region from a whole new vantage point. We provide daily trips to several access points along the Walter Bean Trail as well as several custom trips that are available by request. Pack your picnic basket, a good book, fishing tackle and your loved ones for a local adventure you won’t soon forget!
        </Typography>


      <Grid item xs={12}>
        <Paper className={classes.paper}> 
        </Paper>
      </Grid>
    </div>
  );
};




export default InfoEntertainment;