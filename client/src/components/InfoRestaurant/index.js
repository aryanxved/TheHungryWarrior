
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
    <div align='center' className='backdropEnt'>
        <Card style={{color: 'white', backgroundColor: '#ffd500'}}>
            <Typography variant="h3" color="inherit" noWrap 
            style={{fontFamily: 'Impact', letterSpacing: '2px', color: 'black'}}>
            Information About Restaurants
          </Typography>
        </Card>
      
        <><><><><><><><><><><><div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/HarveyRes.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        <b>Harvey's</b>
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center> For over 60 years we've been proud to serve our fellow Canadians only the best ingredients and now more than ever our commitment to 100% Canadian Quality remains the same.
                    You could say, we're fans of what grows in our own backyard. So Canada, are you ready to help us on our mission to keep this country a beautiful thing?
                    <p></p>
                   <b>Address:</b> 170 University Ave W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $7 &nbsp;&nbsp; <b>Distance from UW:</b> 160 m  &nbsp;&nbsp; <b>Rating: </b> 
                   <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Harvey%27s,+170+University+Ave+W+Unit+10,+Waterloo,+ON+N2L+3E9&ludocid=74390202677307634&lsig=AB86z5VsZf6Goqr466RMQOej8pHH&hl=en&gl=CA#lrd=0x882bf401323dd441:0x108497ec559a8f2,1" > 3.9/5 </a>
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
                        href='https://www.harveys.ca/en.html'
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
                        href='/ReviewRestaurant'
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
                        href='/MapHarveys'
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
                            <img src="/images/Lobster.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Lobster Burger Bar</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center> Lobster Burger Bar is our name. Fresh Atlantic Lobster and Angus Beef is our Game!
                        It’s hard to imagine two of the world’s most delicious foods now available in Waterloo, within walking distance to both universities and high-tech companies.
                        
                        <p></p>
                        <b>Address:</b> 170 University Ave W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $25 &nbsp;&nbsp; <b>Distance from UW:</b> 160 m  &nbsp;&nbsp; <b>Rating: </b>  
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Lobster+Burger+Bar+Waterloo,+170+University+Ave+W,+Waterloo,+ON+N2L+3E9&ludocid=11233951301485632002&lsig=AB86z5XQQ76GkAr0KhAa1ZXkAreL&hl=en&gl=CA#lrd=0x882bf597526776ff:0x9be703304d169a02,1" > 4.4/5 </a>
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
                            href='https://lobsterburgerbar.com/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapLobster'
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
                            <img src="/images/Williams.png" style={{WebkitTransform: 'scale(1.8)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Williams Fresh Cafe</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center>Williams Fresh Café is your all-day, every day café for delicious food and signature drinks made-to-order from real, fresh ingredients and served to your table with a real smile. Our cafés offer a stylish yet casual setting, each with its own local flavour.
                        Whether conducting a morning meeting over breakfast, catching up with a friend over lunch, indulging in a mid-afternoon coffee break with colleagues, or sharing an evening drink and dessert with a loved one, Williams Fresh Café will always make a fresh difference to your day.
                        <p></p>
                   <b>Address:</b> 170 University Ave W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $8 &nbsp;&nbsp; <b>Distance from UW:</b> 160 m  &nbsp;&nbsp; <b>Rating: </b>   
                   <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Williams+Fresh+Cafe,+170+University+Ave+W,+Waterloo,+ON+N2L+3E9&ludocid=8632024008206559705&lsig=AB86z5X5NxGjDrq_Q3KB3kWdNXR6&hl=en&gl=CA#lrd=0x882bf406cedcdd7f:0x77cb1c19ddcba9d9,1" > 3.5/5 </a>
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
                            href='https://williamsfreshcafe.com/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapWilliams'
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
                            <img src="/images/Subway.png" style={{WebkitTransform: 'scale(3.2)'}} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Subway</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>From our customizable and signature sandwiches to wraps and salads, Subway is simply an excellent choice when it comes to freshly made, convenient and affordable offerings. We’re one of the world’s largest restaurant brands for a reason, serving up a craveable menu with quality options to our millions of fans every day.
                       
                       <p></p>
                  <b>Address:</b> 200 University Ave W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $8 &nbsp;&nbsp; <b>Distance from UW:</b> 750 m  &nbsp;&nbsp; <b>Rating: </b> 
                  <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Subway,+Brubakers+Food+Ct.Student+Life,+200+University+Ave+W,+Waterloo,+ON+N2L+3G1&ludocid=2331237712331270671&lsig=AB86z5VOo3GyQq1K7m7SYCyM13oU&hl=en&gl=CA#lrd=0x882bf403beb6ab3d:0x205a3859127fea0f,1" > 4.0/5 </a>
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
                            href='https://www.subway.com/en-ca/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapSubway'
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
                            <img src="/images/PubKing.png" style={{WebkitTransform: 'scale(1.3)'}} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>The Pub on King</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Welcome to The Pub on King in Uptown Waterloo. Home of the $7.95 food menu! With Opening our doors more than five years ago, we have established ourselves as the-place-to-be in Uptown Waterloo. During the day you can stop by for a quick and quiet lunch of a variety of pub fare with inspiration from many British Classics!
                        A great place for your happy-hour hang out after work with a variety of appetizers and daily drink features. Our nightlife atmosphere turns more upbeat with daily live entertainment appealing to all ages. The affordable and social hotspot that people can’t stop talking about!
                        
                        <p></p>
                  <b>Address:</b> 77 King St. N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $8 &nbsp;&nbsp; <b>Distance from UW:</b> 1900 m  &nbsp;&nbsp; <b>Rating: </b> 
                  <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=The+Pub+On+King,+77+King+St+N,+Waterloo,+ON+N2J+2X3&ludocid=2788554906336114940&lsig=AB86z5WTIafE1ME0bJ_FMI3LUaYC&hl=en&gl=CA#lrd=0x882bf40ce96c1af1:0x26b2efe9b4d638fc,1" > 4.0/5 </a>
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
                            href='https://www.thepubonking.com/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapPub'
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
                            <img src="/images/Korner.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Korner Kitchen</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Inspired by a passion for serving traditional home style dishes in a friendly, comfortable, and modern atmosphere, Korner Kitchen Breakfast & Lunch Eatery is the proud result of over 30 years in the local dining industry.
                        <p></p>
                        <b>Address:</b> 183 Weber St. N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $11 &nbsp;&nbsp; <b>Distance from UW:</b> 2200 m  &nbsp;&nbsp; <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Korner+Kitchen+Breakfast+and+Lunch+Eatery,+183+Weber+St+N,+Waterloo,+ON+N2J+3H3&ludocid=16786377140349460267&lsig=AB86z5Wk-hFY_XFz2K-K25zphJa_&hl=en&gl=CA#lrd=0x882b8ca24edf4b59:0xe8f5311234445f2b,1" > 4.6/5 </a>
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
                            href='https://kornerkitchen.ca/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapKorner'
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
                            <img src="/images/Fresco.png" style={{WebkitTransform: 'scale(1.5)'}} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Johnny Fresco</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>If you’re craving tasty Canadian and Mediterranean meals in Waterloo, then Johnny Fresco is the place to be. Come check out our energetic and lively atmosphere for a truly authentic dining experience in beautiful Waterloo.
                        Our food is made with only the freshest ingredients available and our portions are so big you will never walk away hungry.
                        <p></p>
                        <b>Address:</b> 244 Weber St. N, Waterloo &nbsp;&nbsp; <b>Cost:</b> $9 &nbsp;&nbsp; <b>Distance from UW:</b> 2000 m  &nbsp;&nbsp; <b>Rating: </b>
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Johnny+Fresco,+244+Weber+St+N,+Waterloo,+ON+N2J+3H4&ludocid=12017379436100491560&lsig=AB86z5U44TdlOcOfVQ1MFKqWaFy-&hl=en&gl=CA#lrd=0x882bf38b6f684a71:0xa6c64eed23da9928,1" > 4.5/5 </a>
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
                            href='https://www.johnnyfresco.com/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapFresco'
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
                            <img src="/images/SharwamaPlus.png" style={{WebkitTransform: 'scale(1.5)'}} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Shawerma Plus</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center>Our USP has always been the same: an authentic shawarma experience with the finest ingredients available. This mission has led us to achieve 58+ awards and #1 rankings from Google, TripAdvisor, The Record and other respected bodies.
                        This has all been due to the love and support of our amazing customers, whose commitment to our brand proves that taste and authenticity matters above everything else. 
                        
                        <p></p>
                        <b>Address:</b> 160 University Ave. W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $11 &nbsp;&nbsp; <b>Distance from UW:</b> 400 m  &nbsp;&nbsp; <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Shawerma+Plus+(Shawarma+Plus),+160+University+Ave+W,+Waterloo,+ON+N2L+3E9&ludocid=6248472801143395938&lsig=AB86z5XCHuuN5EWJGEk0wCHSS5k0&hl=en&gl=CA#lrd=0x882bf406c4885ef3:0x56b708e824d79662,1" >4.7/5 </a>
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
                            href='https://shawermaplus.com/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapShawerma'
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
                            <img src="/images/Lazeez.png" style={{WebkitTransform: 'scale(1.5)'}} />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Lazeez Shawarma</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>The Lazeez story begins with the universal passion for great taste. Our founders, while each having different and unique stories, backgrounds and personalities, found a strong connection over their common love for great tasting Middle Eastern food. 
                        Spiced to perfection, marinated right, and topped with our signature sauces, our food hits the local taste buds hard. Lazeez has since become the go-to place for those who love the delicious flavours of the Middle East; and as we have learned, that’s pretty much everyone.
                       
                        <p></p>
                        <b>Address:</b> 170 University Ave. W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $13 &nbsp;&nbsp; <b>Distance from UW:</b> 230 m  &nbsp;&nbsp; <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Lazeez+Shawarma,+170+University+Ave+W,+Waterloo,+ON+N2L+3E9&ludocid=7992021597631290640&lsig=AB86z5UohQKM-Z64R-2LkYRzQAZ3&hl=en&gl=CA#lrd=0x882bf4012e23d5f1:0x6ee95d4cac101d10,1" > 4.4/5 </a>
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
                            href='https://www.lazeezshawarma.com/menu/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapLazeez'
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
                            <img src="/images/TimHorton.png" style={{WebkitTransform: 'scale(5.0)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Tim Hortons</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center>In 1964, the first Tim Hortons restaurant in Hamilton, Ontario opened its doors and Canadians have been ordering Tim Hortons iconic Original Blend coffee, Double-Double coffees, Donuts and Timbits ever since. 
                        Over the years, Tim Hortons has captured the hearts and taste buds of Canadians. More than a coffee and bake shop, Tim Hortons is part of the fabric of Canada and a proud symbol of our country and its values.
                       
                        <p></p>
                        <b>Address:</b> 200 University Ave. W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $5 &nbsp;&nbsp; <b>Distance from UW:</b> 750 m  &nbsp;&nbsp; <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Tim+Hortons,+SLC+Great+Hall,+Waterloo,+ON+N2L+3G1&ludocid=9559152365010600807&lsig=AB86z5XnZpaTvVIBNyaUbPPAfLDs&hl=en&gl=CA#lrd=0x882bf7037e5c8ceb:0x84a8ee6dee4ac367,1" > 2.8/5 </a>
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
                            href='https://www.timhortons.ca/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapTims'
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
                            <img src="/images/Mels.png" style={{WebkitTransform: 'scale(1.6)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Mel's Diner</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Cozy little diner serving all day breakfast and home made burgers.
                        <p></p>
                        <b>Address:</b> 140 University Ave. W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $7 &nbsp;&nbsp; <b>Distance from UW:</b> 550 m  &nbsp;&nbsp; <b>Rating: </b>
                        
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Mel%27s+Diner,+140+University+Ave+W,+Waterloo,+ON+N2L+6J3&ludocid=7775662307146270131&lsig=AB86z5WqB2MoqSTyCRwMya_N0s3D&hl=en&gl=CA#lrd=0x882bf407008be27b:0x6be8b3abced905b3,1" > 4.3/5 </a></center> 
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
                            href='https://www.melsdiner.ca/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapMels'
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
                            <img src="/images/PitaPit.png " style={{WebkitTransform: 'scale(2.4)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Pita Pit</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center>At the Pita Pit, we’re proud of what we put into our pitas, and equally proud of what we don’t. Nothing’s deep-fried, battered or grilled in fat. 
                        We don’t add salt unless you tell us you want it. And we don’t stuff our good-for-you, great-tasting fillings in big wads of bread as thick as a mattress. Welcome to fresh thinking and healthy eating at the Pita Pit, a proudly Canadian, no b.s. place to eat.
                        
                        <p></p>
                        <b>Address:</b> 200 University Ave. W, Waterloo &nbsp;&nbsp; <b>Cost:</b> $7 &nbsp;&nbsp; <b>Distance from UW:</b> 800 m  &nbsp;&nbsp; <b>Rating: </b>
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Mel%27s+Diner,+140+University+Ave+W,+Waterloo,+ON+N2L+6J3&ludocid=7775662307146270131&lsig=AB86z5WqB2MoqSTyCRwMya_N0s3D&hl=en&gl=CA#lrd=0x882bf407008be27b:0x6be8b3abced905b3,1" > 2.9/5 </a>
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
                            href='https://pitapit.ca/'
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
                            href='/ReviewRestaurant'
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
                        href='/MapMels'
                    >
                        View on Map
                    </Button>
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>
    </div>
  );
};




export default InfoRestaurant;