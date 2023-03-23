
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
import './index.css';


import { FormControl, MenuItem } from '@material-ui/core';


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


const InfoEntertainment = () => {
  const classes = useStyles();

  return (
    <><><><><><><><><><><><div align='center' className='backdropinfoEntertainment'>
         <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
          Information About Entertainment 
          </Typography>
        </Paper>
      </Grid>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/Raptor.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        Toronto Raptors Game
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>The Toronto Raptors are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association as a member of the league's Eastern Conference Atlantic Division. They play their home games at Scotiabank Arena. In 2019, the Raptors won their first ever NBA championship.
                        <p></p>
                        <b>Address:</b> 40 Bay St., Toronto &nbsp;&nbsp; <b>Cost:</b> $80 &nbsp;&nbsp; <b>Distance from UW:</b> 116 KM  &nbsp;&nbsp; <b>Rating: </b> 4.5/5
                        </center>
                        
                    </Typography>

                </div>
                    
                <div align="center" style={{ marginTop: '30px' }}>
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
                        href='/MapRaptors'
                    >
                        View on Map
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
                            <img src="/images/Rangergame.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Kitchener Rangers Game
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Kitchener Rangers are a major junior ice hockey team based in Kitchener, Ontario, Canada. They are members of the Midwest Division of the Western Conference of the Ontario Hockey League. The Rangers have won the J. Ross Robertson Cup as OHL champions in 1981, 1982, 2003 and 2008.
                            <p> </p>
                            <b>Address:</b> 400 East Ave, Kitchener &nbsp;&nbsp; <b>Cost:</b> $23 &nbsp;&nbsp; <b>Distance from UW:</b> 12 KM  &nbsp;&nbsp; <b>Rating: </b> 4.4/5
                
                                </center>
                            
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.kitchenerrangers.com/'
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
                        href='/MapRangers'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
    <Box>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '53vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/KingPin.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            King Pin Bowlounge
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>
                                With twenty-eight state of the art 10 pin lanes including a separate section for private parties, Kingpin Bowlounge is the biggest bowling venue in the Waterloo Region. Whether you want to celebrate a birthday, are looking for a place to hold your next corporate event or want to be part of a bowling league, Kingpin is the perfect place.
                                <p> </p>
                                <b>Address:</b> 425 Bingemans Centre Dr, Kitchener &nbsp;&nbsp; <b>Cost:</b> $35 &nbsp;&nbsp; <b>Distance from UW:</b> 11 KM  &nbsp;&nbsp; <b>Rating: </b> 3.9/5
                                </center>
                            
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://bingemans.com/kingpinbowlounge/'
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
                        href='/MapKingPin'
                    >
                        View on Map
                    </Button>

                       
                    </div>
                </Grid>
            </Grid>
           
        </Card>
        </Box>  
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '56vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/AdventureRooms.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Adventure Rooms
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Adventure Rooms are “real life escape room games” – which are awesome group activities.  The basic idea is that the team must solve a variety of puzzles in order to “break free” from an escape room containing locked doors before a 60 minute countdown reaches zero.
                            To do so, they have to use not brute force, but skill and cunning.
                            This is a fun and challenging game that requires searching for clues, codes, keys and using objects in strange ways.  Escape games are a great option for group activities for all ages, team building events, and special occasions.
                           <p> </p>
                            <b>Address:</b> 283 Duke St W #102, Kitchener &nbsp;&nbsp; <b>Cost:</b> $25 &nbsp;&nbsp; <b>Distance from UW:</b> 5 KM  &nbsp;&nbsp; <b>Rating: </b> 4.7/5
                                </center>
                            
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://adventurerooms.ca/escaperoomkitchener/'
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
                        href='/MapAdventureRoom'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '56vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/Clay.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Canadian Clay & Glass Gallery
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Canadian Clay & Glass Gallery celebrates contemporary ceramic and glass artists engaged in conceptual, technical or material research.
                            Located in Waterloo, Ontario, we are a not-for-profit institution that aims to collect, exhibit, research, promote, and preserve work by Canadian artists and makers in clay, glass, and copper enameling to represent the diversity of the Canadian landscape.
                            Our rotating exhibitions celebrate and support diverse artists from across Canada working in these mediums and present their work to the public.
                            <p> </p>
                            <b>Address:</b> 25 Caroline St N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $40 &nbsp;&nbsp; <b>Distance from UW:</b> 2 KM  &nbsp;&nbsp; <b>Rating: </b> 4.6/5
                                </center>
                            
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.theclayandglass.ca/'
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
                        href='/MapClay'
                    >
                        View on Map
                    </Button>

                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/waterloopark.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Waterloo Park
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Known as the jewel of the city, Waterloo Park has a lake, animal farm, picnic areas, splash pad, sport fields, playgrounds and more.
                            <p> </p>
                            <b>Address:</b> 100 Father David Bauer Dr, Waterloo &nbsp;&nbsp; <b>Cost:</b> $0 &nbsp;&nbsp; <b>Distance from UW:</b> 500 m  &nbsp;&nbsp; <b>Rating: </b> 4.6/5
                
                            </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.waterloo.ca/en/things-to-do/waterloo-park.aspx'
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
                        href='/MapPark'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '54vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/ctrlv.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Ctrl V Waterloo
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>It's simple: VR is fun, easy and accessible. Unlike conventional gaming, VR offers a new way to play together with your family, friends and your mortal enemies! Most games only require the use of one or two buttons, so if you can flick a light switch while flushing the toilet, you can play VR!
                            Ctrl V is the ideal venue to host your next birthday party, team building event, corporate event, or just a simple night out with your friends!
                            <p> </p>
                            <b>Address:</b> Address: 170 Columbia St W #5, Waterloo &nbsp;&nbsp; <b>Cost:</b> $28 &nbsp;&nbsp; <b>Distance from UW:</b> 1 KM  &nbsp;&nbsp; <b>Rating: </b> 4.8/5
                            
                            </center>
                           
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://ctrlv.ca/location/waterloo'
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
                        href='/MapCtrlV'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/galaxy.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Galaxy Cinemas Waterloo
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Cineplex is a leading Canadian company that operates in the Film Entertainment and Content, Amusement and Leisure, and Media sectors. It offers a unique escape through its theatres and entertainment venues, and is a joint venture partner in Scene+.
                            <p> </p>
                            <b>Address:</b> 550 King St N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $15 &nbsp;&nbsp; <b>Distance from UW:</b> 4 KM  &nbsp;&nbsp; <b>Rating: </b> 4.3/5
                            </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.cineplex.com/theatre/galaxy-cinemas-waterloo'
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
                        href='/MapGalaxy'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/pinclub.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Pin Up Arcade Bar
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Come out, enjoy a beer, and play the best selection of pinball and classic arcade games around!
                            <p> </p>
                            <b>Address:</b> 247 King St N Unit 8, Waterloo &nbsp;&nbsp; <b>Cost:</b> $8 &nbsp;&nbsp; <b>Distance from UW:</b> 2 KM  &nbsp;&nbsp; <b>Rating: </b> 4.5/5
                            </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.facebook.com/PinUpArcadeBar/'
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
                        href='/MapPinUp'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/ski.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Chicopee Ski Resort & Tube Park
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Whether you're planning a family adventure, school trip, or just looking to spend some time hitting the slopes with friends, Chicopee has you covered. Come visit us for the day and see what we have to offer!
                            <p> </p>
                            <b>Address:</b> 1600 River Rd E, Kitchener &nbsp;&nbsp; <b>Cost:</b> $50 &nbsp;&nbsp; <b>Distance from UW:</b> 18 KM  &nbsp;&nbsp; <b>Rating: </b> 4.2/5
                            </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.chicopee.ca/'
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
                        href='/MapChicopee'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>

    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '56vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/Butterfly.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Cambridge Butterfly Conservatory
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Situated on a 107 acre site which includes the environmentally sensitive Kossuth Bog, the 25,000 square foot facility includes a 10,800 square foot indoor tropical garden featuring thousands of free-flying butterflies.
                            Our conservatory also hosts a variety of tropical plants, birds, and animals, along with several water features. Witness butterflies emerge from their chrysalis and take their first flight, followed by a walk-through of our mounted and live-insect galleries.
                            <p> </p>
                            <b>Address:</b> 2500 Kossuth Rd, Cambridge &nbsp;&nbsp; <b>Cost:</b> $20 &nbsp;&nbsp; <b>Distance from UW:</b> 26 KM  &nbsp;&nbsp; <b>Rating: </b> 4.2/5   
                            </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://www.cambridgebutterfly.com/'
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
                        href='/MapButterfly'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>
    
    
    <div align='center'>
        <Card style={{ color: 'black', backgroundColor: 'white', height: '54vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/cannoe.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Canoeing The Grand
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Canoeing the Grand is an experience that is both iconic and peaceful. As you quietly paddle our beautiful heritage river you will discover our region from a whole new vantage point.
                        We provide daily trips to several access points along the Walter Bean Trail as well as several custom trips that are available by request.
                        Pack your picnic basket, a good book, fishing tackle and your loved ones for a local adventure you won’t soon forget!
                        <p> </p>
                        <b>Address:</b> 3734 King St E, Kitchener &nbsp;&nbsp; <b>Cost:</b> $120 &nbsp;&nbsp; <b>Distance from UW:</b> 18 KM  &nbsp;&nbsp; <b>Rating: </b> 4.4/5   
                            
                        </center>
                        </Typography>
                    </div>

                    <div align="center" style={{ marginTop: '30px' }}>
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
                            href='https://canoeingthegrand.com/'
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
                        href='/MapCanoeing'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>
  );
};




export default InfoEntertainment;