
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
    <><><><><><><><><><><><div align='center' className='backdropEnt'>
         <Card style={{color: 'white', backgroundColor: '#ffd500'}}>
            
                  
                    <Typography variant="h3" color="inherit" noWrap 
                    style={{fontFamily: 'Impact', letterSpacing: '2px', color: 'black'}}>
                    Information About Entertainment 
                    </Typography>
            
                
         </Card>
         
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
                        <b>Toronto Raptors Game</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>The Toronto Raptors are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association as a member of the league's Eastern Conference Atlantic Division. They play their home games at Scotiabank Arena. In 2019, the Raptors won their first ever NBA championship.
                        <p></p>
                        <b>Address:</b> 40 Bay St., Toronto &nbsp;&nbsp; <b>Cost:</b> $80 &nbsp;&nbsp; <b>Distance from UW:</b> 116 KM  &nbsp;&nbsp; <b>Rating: </b> 
                       
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Scotiabank+Arena,+40+Bay+St.,+Toronto,+ON+M5J+2X2&ludocid=6359875317936854032&lsig=AB86z5XD_LR3S0Yv0B-aFYirLFwU&hl=en&gl=CA#lrd=0x89d4cb2b5935bf09:0x5842d0e7d5669410,1,,,," > 4.5/5 </a>
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
                            <img src="/images/Rangergame.png" style={{WebkitTransform: 'scale(1.6)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Kitchener Rangers Game</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Kitchener Rangers are a major junior ice hockey team based in Kitchener, Ontario, Canada. They are members of the Midwest Division of the Western Conference of the Ontario Hockey League. The Rangers have won the J. Ross Robertson Cup as OHL champions in 1981, 1982, 2003 and 2008.
                            <p> </p>
                            <b>Address:</b> 400 East Ave, Kitchener &nbsp;&nbsp; <b>Cost:</b> $23 &nbsp;&nbsp; <b>Distance from UW:</b> 12 KM  &nbsp;&nbsp; <b>Rating: </b>
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Kitchener+Memorial+Auditorium+(customer+service),+400+East+Ave,+Kitchener,+ON+N2H+1Z6&ludocid=3943015494357869784&lsig=AB86z5V06MEwQn_QyEDtn8NMwEp6&hl=en&gl=CA#lrd=0x882bf4c63ced86b7:0x36b867b37d0fe4d8,1" > 4.4/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/KingPin.png" style={{WebkitTransform: 'scale(1.6)'}}/>
                        </Card>
                    </div>
                </Grid>
                
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>King Pin Bowlounge</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>
                                With twenty-eight state of the art 10 pin lanes including a separate section for private parties, Kingpin Bowlounge is the biggest bowling venue in the Waterloo Region. Whether you want to celebrate a birthday, are looking for a place to hold your next corporate event or want to be part of a bowling league, Kingpin is the perfect place.
                                <p> </p>
                                <b>Address:</b> 425 Bingemans Centre Dr, Kitchener &nbsp;&nbsp; <b>Cost:</b> $35 &nbsp;&nbsp; <b>Distance from UW:</b> 11 KM  &nbsp;&nbsp; <b>Rating: </b> 
                                <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Kingpin+Bowlounge+%26+Boston+Pizza,+425+Bingemans+Centre+Dr,+Kitchener,+ON+N2B+3X7&ludocid=7590735809122626599&lsig=AB86z5XzsT4lFQbasUZssU-rXteS&hl=en&gl=CA#lrd=0x882b8cabe11066b3:0x6957b6003e976c27,1" > 3.9/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/AdventureRooms.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Adventure Rooms</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Adventure Rooms are “real life escape room games” – which are awesome group activities.  The basic idea is that the team must solve a variety of puzzles in order to “break free” from an escape room containing locked doors before a 60 minute countdown reaches zero.
                            To do so, they have to use not brute force, but skill and cunning.
                            This is a fun and challenging game that requires searching for clues, codes, keys and using objects in strange ways.  Escape games are a great option for group activities for all ages, team building events, and special occasions.
                           <p> </p>
                            <b>Address:</b> 283 Duke St W #102, Kitchener &nbsp;&nbsp; <b>Cost:</b> $25 &nbsp;&nbsp; <b>Distance from UW:</b> 5 KM  &nbsp;&nbsp; <b>Rating: </b>
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Adventure+Rooms+Canada+%7C+Escape+Rooms+Kitchener,+283+Duke+St+W+%23102,+Kitchener,+ON+N2H+3X7&ludocid=12292662451027155629&lsig=AB86z5WjW03MG1qykx86175Vc5Id&hl=en&gl=CA#lrd=0x882bf48b00f190ff:0xaa984f5eb1419aad,1" > 4.7/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/Clay.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Canadian Clay & Glass Gallery</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>The Canadian Clay & Glass Gallery celebrates contemporary ceramic and glass artists engaged in conceptual, technical or material research.
                            Located in Waterloo, Ontario, we are a not-for-profit institution that aims to collect, exhibit, research, promote, and preserve work by Canadian artists and makers in clay, glass, and copper enameling to represent the diversity of the Canadian landscape.
                            Our rotating exhibitions celebrate and support diverse artists from across Canada working in these mediums and present their work to the public.
                            <p> </p>
                            <b>Address:</b> 25 Caroline St N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $0 &nbsp;&nbsp; <b>Distance from UW:</b> 2 KM  &nbsp;&nbsp; <b>Rating: </b>
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Canadian+Clay+and+Glass+Gallery,+25+Caroline+St+N,+Waterloo,+ON+N2L+2Y5&ludocid=16069528593120981024&lsig=AB86z5UPivrtQ6IJSEBgJbk2OC24&hl=en&gl=CA#lrd=0x882bf40d8ad3d4a1:0xdf026f1d8cf57020,1" > 4.6/5 </a>
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
                            <b>Waterloo Park</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Known as the jewel of the city, Waterloo Park has a lake, animal farm, picnic areas, splash pad, sport fields, playgrounds and more.
                            <p> </p>
                            <b>Address:</b> 100 Father David Bauer Dr, Waterloo &nbsp;&nbsp; <b>Cost:</b> $0 &nbsp;&nbsp; <b>Distance from UW:</b> 500 m  &nbsp;&nbsp; <b>Rating: </b>
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Waterloo+Park,+100+Father+David+Bauer+Dr,+Waterloo,+ON+N2L+2Y4&ludocid=176503487751458267&lsig=AB86z5W6vxTLXG2D1Oe9pbVboxVP&hl=en&gl=CA#lrd=0x882bf405af73801f:0x27310fca90b0ddb,1" > 4.6/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/ctrlv.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Ctrl V Waterloo</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>It's simple: VR is fun, easy and accessible. Unlike conventional gaming, VR offers a new way to play together with your family, friends and your mortal enemies! Most games only require the use of one or two buttons, so if you can flick a light switch while flushing the toilet, you can play VR!
                            Ctrl V is the ideal venue to host your next birthday party, team building event, corporate event, or just a simple night out with your friends!
                            <p> </p>
                            <b>Address:</b> Address: 170 Columbia St W #5, Waterloo &nbsp;&nbsp; <b>Cost:</b> $28 &nbsp;&nbsp; <b>Distance from UW:</b> 1 KM  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Ctrl+V,+170+Columbia+St+W+%235,+Waterloo,+ON+N2L+3L3&ludocid=2570954389161444849&lsig=AB86z5UNEwwSX1ahKUuQxIlD6D6b&hl=en&gl=CA#lrd=0x882bf3ffb89970f5:0x23addd653bb305f1,1" > 4.8/5 </a>
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
                            <img src="/images/galaxy.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Galaxy Cinemas Waterloo</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Cineplex is a leading Canadian company that operates in the Film Entertainment and Content, Amusement and Leisure, and Media sectors. It offers a unique escape through its theatres and entertainment venues, and is a joint venture partner in Scene+.
                            <p> </p>
                            <b>Address:</b> 550 King St N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $15 &nbsp;&nbsp; <b>Distance from UW:</b> 4 KM  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Galaxy+Cinemas+Waterloo,+550+King+St+N,+Waterloo,+ON+N2L+5W6&ludocid=12413980991274530019&lsig=AB86z5UCXYqgb_kkZ8trgLjh9c7x&hl=en&gl=CA#lrd=0x882bf3c3fec99953:0xac4751f0815eb4e3,1" > 4.3/5 </a>
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
                            <b>Pin Up Arcade Bar</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Come out, enjoy a beer, and play the best selection of pinball and classic arcade games around!
                            <p> </p>
                            <b>Address:</b> 247 King St N Unit 8, Waterloo &nbsp;&nbsp; <b>Cost:</b> $8 &nbsp;&nbsp; <b>Distance from UW:</b> 2 KM  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Pin+Up+Arcade+Bar,+247+King+St+N+Unit+8,+Waterloo,+ON+N2J+2Y8&ludocid=6643479211732241769&lsig=AB86z5UP6xWJPWIA--3NZIFuWFcc&hl=en&gl=CA#lrd=0x882bf3f5c7fb72f5:0x5c326124f7fe0d69,1" > 4.5/5 </a>
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
                            <b>Chicopee Ski Resort & Tube Park</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Whether you're planning a family adventure, school trip, or just looking to spend some time hitting the slopes with friends, Chicopee has you covered. Come visit us for the day and see what we have to offer!
                            <p> </p>
                            <b>Address:</b> 1600 River Rd E, Kitchener &nbsp;&nbsp; <b>Cost:</b> $50 &nbsp;&nbsp; <b>Distance from UW:</b> 18 KM  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Chicopee,+396+Morrison+Road,+Kitchener,+ON+N2A+2Z6&ludocid=1076067052616744199&lsig=AB86z5Vps-mKgW5nurAGKaBin19S&hl=en&gl=CA#lrd=0x882b8b0f43b17bb9:0xeeef54879b8fd07,1" > 4.2/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/Butterfly.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Cambridge Butterfly Conservatory</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Situated on a 107 acre site which includes the environmentally sensitive Kossuth Bog, the 25,000 square foot facility includes a 10,800 square foot indoor tropical garden featuring thousands of free-flying butterflies.
                            Our conservatory also hosts a variety of tropical plants, birds, and animals, along with several water features. Witness butterflies emerge from their chrysalis and take their first flight, followed by a walk-through of our mounted and live-insect galleries.
                            <p> </p>
                            <b>Address:</b> 2500 Kossuth Rd, Cambridge &nbsp;&nbsp; <b>Cost:</b> $20 &nbsp;&nbsp; <b>Distance from UW:</b> 26 KM  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Cambridge+Butterfly+Conservatory,+2500+Kossuth+Rd,+Cambridge,+ON+N3H+4R7&ludocid=14666111037109520647&lsig=AB86z5UIztgWo7piLSbSAO6cignO&hl=en&gl=CA#lrd=0x882b8a1e938d6881:0xcb887e48ab594907,1" > 4.2/5 </a>
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
        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={5}>
                    <div align='left'>
                        <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                            <img src="/images/cannoe.png" style={{WebkitTransform: 'scale(2.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Canoeing The Grand</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Canoeing the Grand is an experience that is both iconic and peaceful. As you quietly paddle our beautiful heritage river you will discover our region from a whole new vantage point.
                        We provide daily trips to several access points along the Walter Bean Trail as well as several custom trips that are available by request.
                        Pack your picnic basket, a good book, fishing tackle and your loved ones for a local adventure you won’t soon forget!
                        <p> </p>
                        <b>Address:</b> 3734 King St E, Kitchener &nbsp;&nbsp; <b>Cost:</b> $120 &nbsp;&nbsp; <b>Distance from UW:</b> 18 KM  &nbsp;&nbsp; <b>Rating: </b>   
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Canoeing+The+Grand,+3734+King+St+E,+Kitchener,+ON+N2P+2G5&ludocid=12268146367124497270&lsig=AB86z5VlMA86ghnlPiUetChI5aSI&hl=en&gl=CA#lrd=0x882b8a563dcd4b23:0xaa41361f18f46376,1" > 4.4/5 </a>
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