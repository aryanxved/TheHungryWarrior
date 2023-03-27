
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


const InfoHousing = () => {
  const classes = useStyles();




  return (
    <div align='center' className='backdropEnt'>
        <Card style={{color: 'white', backgroundColor: '#ffd500'}}>
            <Typography variant="h3" color="black" noWrap 
                style={{fontFamily: 'Impact', letterSpacing: '2px', color: 'black'}}>
                Information About Housing 
            </Typography>
        </Card>
      
          
        

      <><><><><><><><><><><><div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/elora.png" style={{WebkitTransform: 'scale(1.6)'}}/>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                       <b>Elora House</b> 
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    <center>Appealing to students who like their own space, Elora House possess’ the largest rooms ALL with private ensuite washrooms in luxury 3, 4, and 5 bedroom layouts. Elora offers a number of building and suite amenities that provide the comforts and benefits of independent living.
                      <p> </p>  
                      <b>Address:</b> 250 Phillip St, Waterloo (280m from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $1000 &nbsp;&nbsp; <b>Roommates</b> 3, 4, 5  &nbsp;&nbsp; <b>Rating: </b>  
                      <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Rez-One+Elora+House,+250+Phillip+St,+Waterloo,+ON+N2L+0C9&ludocid=13181356457615106524&lsig=AB86z5XMIZDXqWuu6acYMA1nQqmD&hl=en&gl=CA#lrd=0x882bf5177334e97f:0xb6ed95dc41f321dc,1" > 1.6/5 </a>
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
                        href='https://www.rez-one.ca/elora-house/'
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
                        href='/ReviewHousing'
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
                        href='/MapElora'
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
                            <img src="/images/Fergus.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Fergus House</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center> Fergus House features the standard range of comforts and amenities that our tenants have come to expect from Rez-One properties. 4-bedroom units make this residence the ideal setting for students who enjoy living, studying and socializing together!
                        <p> </p>
                        <b>Address:</b> 254 Phillip St, Waterloo (280m from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $1000 &nbsp;&nbsp; <b>Roommates</b> 4  &nbsp;&nbsp; <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Ontario,+Waterloo,+Phillip+St,+Fergus+House%E9%82%AE%E6%94%BF%E7%BC%96%E7%A0%81:+N2L+0E1&ludocid=5204985769179538828&lsig=AB86z5U_NcY5Hs5_HWAvmnoDlIUg&hl=en&gl=CA#lrd=0x882bf4073d4d5043:0x483bd2fad8e8e58c,1" > 3.0/5 </a>
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
                            href='https://www.rez-one.ca/fergus-house/'
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
                            href='/ReviewHousing'
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
                        href='/MapFergus'
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
                            <img src="/images/icon.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Icon</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Meet ICON, Waterloo's largest and most dynamic modern living development at the intersection of Phillip St. and Columbia St. Composed of two, twenty-five storey towers with an unparalleled view of the evolving Waterloo skyline and conveniently located directly across the street from the University of Waterloo, ICON is the ideal place to call home. 
                        <p> </p>
                        <b>Address:</b> 330 Phillip St, Waterloo (500m from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $950 &nbsp;&nbsp; <b>Roommates</b> 2, 3, 4  &nbsp;&nbsp; <b>Rating: </b>  
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=ICON+330,+330+Phillip+St,+Waterloo,+ON+N2L+3W9&ludocid=3777592449796179173&lsig=AB86z5XbOvd47cHaoy10udkrSZSJ&hl=en&gl=CA#lrd=0x882bf3ff48593b51:0x346cb4518c4c84e5,1" > 3.0/5 </a>
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
                            href='https://www.iconstudents.com/'
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
                            href='/ReviewHousing'
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
                        href='/MapIcon'
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
                            <img src="/images/145.png" style={{WebkitTransform: 'scale(1.8)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Society 145</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Composed of two towers rising 20 and 23 storeys high, Society145 provides modern elegance, first class amenities and beautifully designed suites. Each space has been carefully thought through to create an exceptional living experience for each individual.
                        Experience the luxuries and convenience that Society Condos has to offer, which include the state-of-the-art fitness centre, business lounge, multi-media theatre, and rooftop patio with panoramic views of Waterloo. All mere steps from your suite.
                        <p> </p>
                        <b>Address:</b> 145 Columbia St, Waterloo (800M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $950 &nbsp;&nbsp; <b>Roommates</b> 2, 3, 4  &nbsp;&nbsp; <b>Rating: </b>  
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Society+145,+145+Columbia+St+W,+Waterloo,+ON+N2L+3L2&ludocid=17029216847414451068&lsig=AB86z5XRaYjTVClVYCBoJlIZLKW8&hl=en&gl=CA#lrd=0x882bf3f285e19ea9:0xec53ee7f813c5b7c,1" > 3.5/5 </a>
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
                            href='https://www.society145.com/'
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
                            href='/ReviewHousing'
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
                        href='/MapSociety'
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
                            <img src="/images/Accomodate8u.png" style={{WebkitTransform: 'scale(1.7)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>Accommod8u</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Designed to offer residents ease of access to Waterloo’s University District, 250 Lester Street offers innovative luxury living. Conveniently located just steps away from all of the action University Avenue West has to offer, this stunning building stands out among the surrounding properties and pushes the bounds of luxury living in Waterloo.
                        <p> </p>
                        <b>Address:</b> 250 Lester St, Waterloo (600M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $700 &nbsp;&nbsp; <b>Roommates</b> 2, 3, 4  &nbsp;&nbsp; <b>Rating: </b>  
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Accommod8u,+256+Lester+St,+Waterloo,+ON+N2L+3W5&ludocid=1926932334980519262&lsig=AB86z5Vyl8Frk7YpSNl_slfS_5DA&hl=en&gl=CA#lrd=0x882bf4079128549d:0x1abdd6bfd4ba555e,1" > 2.7/5 </a>
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
                            href='https://www.accommod8u.com/250-lester-street'
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
                            href='/ReviewHousing'
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
                        href='/MapAccomod8u'
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
                            <img src="/images/KingStreet.png" style={{WebkitTransform: 'scale(3.5)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>King Street Towers</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Our spacious three, four, or five bedroom apartments come fully furnished with everything you need to be comfortable. Every apartment has a bedroom for each student resident, a dining area, kitchen and living room. The majority of bedrooms have en-suite washrooms, and many suites have private balconies!
                            <p> </p>
                            <b>Address:</b> 339 King Street N, Waterloo (1900M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $800 &nbsp;&nbsp; <b>Roommates</b> 3, 4, 5  &nbsp;&nbsp; <p></p> <b>Rating: </b>  
                            <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=King+Street+Towers+-+Tower+1,+333+King+St+N,+Waterloo,+ON+N2J+2Z1&ludocid=3357378768246143031&lsig=AB86z5UMV-VUTeyMdXGDOxeJ0Apn&hl=en&gl=CA#lrd=0x882bf3f3eb299127:0x2e97ce3399bff837,1" > 3.7/5 </a>
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
                            href='https://www.kingstreettowers.ca/'
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
                            href='/ReviewHousing'
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
                        href='/MapKingST'
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
                            <img src="/images/MyRez.png" style={{WebkitTransform: 'scale(3.5)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>My Rez on Lester</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center>Our clean and spacious five bedroom apartments come fully furnished with everything you need to be comfortable. Every apartment has a bedroom for each individual student, a dining area, kitchen, living room, and one or two shared bathrooms, depending on the size of the unit. Student housing in Waterloo doesn’t get better than MyRez!
                        <p> </p>
                        <b>Address:</b> 181 Lester St, Waterloo (800M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $900 &nbsp;&nbsp; <b>Roommates</b> 5  &nbsp;&nbsp; <b>Rating: </b>  
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=myREZ+On+Lester,+181+Lester+St,+Waterloo,+ON+N2L+3W3&ludocid=17615863891002739346&lsig=AB86z5UPZuROYIrb9MEM6XxRtzmo&hl=en&gl=CA#lrd=0x882bf3aa0561f24f:0xf4781ee042d94a92,1" > 4.1/5 </a>
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
                            href='https://www.myrezonlester.com/'
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
                            href='/ReviewHousing'
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
                        href='/MapMyRez'
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
                            <img src="/images/uwp.png" style={{WebkitTransform: 'scale(1.9)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>UWP</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        <center> UWP consists of 4 courts and 2 halls. All floors are co-ed, with 20 - 50 residents and 1 don living on each floor. Each suite is single gender. Upper-years can request a mixed-gender suite. 
                        <p> </p>
                        <b>Address:</b> 161 University Ave W, Waterloo (450M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $700 &nbsp;&nbsp; <b>Roommates</b> 1, 2, 3, 4  &nbsp;&nbsp; <p></p> <b>Rating: </b> 
                        <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=UWP+Eby+Hall,+159+University+Ave+W,+Waterloo,+ON+N2L+3E8&ludocid=9062592212194158740&lsig=AB86z5X44x0RUJQ60ViJyi1mVMDd&hl=en&gl=CA#lrd=0x882bf406872fe285:0x7dc4cb99f00de894,1" > 3.9/5 </a>
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
                            href='https://uwaterloo.ca/campus-housing/residences/uwp'
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
                            href='/ReviewHousing'
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
                        href='/MapUWP'
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
                            <img src="/images/viphousing.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>VIP Student Housing</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>VIP Student Housing is a family owned-operated rental company offering the finest student suites in Waterloo. From first-year undergraduate students to PhD graduates, VIP Student Housing is sure to have a suite that will accommodate your needs.
                            VIP Student takes pride in delivering exceptional services for all tenants; such as same-day maintenance repairs and flexible appointment scheduling. All suites come fully furnished to provide a hassle-free and comfortable living experience.
                            <p> </p>
                            <b>Address:</b> 110 University Ave W, Waterloo (650M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $750 &nbsp;&nbsp; <b>Roommates</b> 5  &nbsp;&nbsp; <b>Rating: </b> 
                            <a href="https://www.google.com/search?q=vip+student+housing&source=hp&ei=hnsfZJfFNNP9kPIPubaegAo&iflsig=AOEireoAAAAAZB-JlhMTDMgeNV4Mxc0gKOKFTn6d_Y0R&gs_ssp=eJzj4tVP1zc0LIzPSUsrMs02YLRSNaiwsDBKSjM1MjdJskw1NzFLsjKosDQzSrMwTzVPNTY1TTWxMPASLsssUCguKU1JzStRyMgvLc7MSwcALMEWtw&oq=vip+studen&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6EQguEIAEELEDEIMBEMcBEK8BOg4ILhCABBCxAxDHARDRAzoRCC4QgAQQsQMQgwEQxwEQ0QM6FAguEIAEELEDEIMBEMcBENEDENQCOgsILhCABBCxAxCDAToLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgsIABCKBRCxAxCDAToFCC4QgAQ6EQguEIoFELEDEIMBEMcBENEDOg4IABCABBCxAxCDARDJAzoICAAQigUQkgM6CAgAEIAEEJIDOgsIABCABBCxAxDJAzoHCAAQgAQQCjoLCC4QrwEQxwEQgARQAFjADmDBFWgAcAB4AIABhwGIAbwIkgEDMy43mAEAoAEB&sclient=gws-wiz#lrd=0x882bf5274b9e746b:0x962f87e7e355e480,1,,,," > 3.4/5 </a>
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
                            href='https://www.110university.com/'
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
                            href='/ReviewHousing'
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
                        href='/MapV1'
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
                            <img src="/images/Rev.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>REV</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center> REV consists of 4 quads. Each quad has 5 floors, with 48 residents and 1 don living on each floor. Floors are co-ed, but each wing on the floor are single gender.
                            <p> </p>
                            <b>Address:</b> 200 University Ave W, Waterloo (1500M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $700 &nbsp;&nbsp; <b>Roommates</b> 1, 2  &nbsp;&nbsp;  <p></p> <b>Rating: </b> 
                            <a href="https://www.google.com/search?q=ron+eydt+village+reviews&ei=s3sfZLrpLZ20qtsPi6S-cA&ved=0ahUKEwj6jq6qlvj9AhUdmmoFHQuSDw4Q4dUDCA4&uact=5&oq=ron+eydt+village+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQiQUQogQyBQgAEKIEMgUIABCiBDIICAAQiQUQogQ6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6BQgAEIAEOgYIABAWEB46AggmOgcIIRCgARAKOgUIIRCgAUoECEEYAFDYAVjzKWDdKmgBcAF4AIAB6AOIAaUUkgEINi4xMC40LTKYAQCgAQHIAQnAAQE&sclient=gws-wiz-serp#lrd=0x882bf6ae232b6283:0xaaf315bc4fcd76b7,1,,,," > 3.6/5 </a>
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
                            href='https://uwaterloo.ca/campus-housing/residences/rev'
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
                            href='/ReviewHousing'
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
                        href='/MapRev'
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
                            <img src="/images/MKV.png" style={{WebkitTransform: 'scale(1.3)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>MKV</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                       <center> MKV consists of 2 wings. Each wing has 4 floors, with 40 residents and 1 don living on each floor. Most floors are co-ed, but each suite is single gender. MKV is the only suite-style residence with air conditioning available. 
                       <p></p>
                       <b>Address:</b> 200 University Ave W, Waterloo (1500M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $700 &nbsp;&nbsp; <b>Roommates</b> 2  &nbsp;&nbsp; <b>Rating: </b>  
                       
                       <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Mackenzie+King+Village+(MKV)West+Entrance,+200+University+Ave+W,+Waterloo,+ON+N2J+4Z2&ludocid=6373469991089954198&lsig=AB86z5XyBi5F9KxpxjLSP17xBQzp&hl=en&gl=CA#lrd=0x882bf6ae7862c815:0x58731d3055875d96,1" > 3.0/5 </a>
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
                            href='https://uwaterloo.ca/campus-housing/residences/mkv'
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
                            href='/ReviewHousing'
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
                        href='/MapMKV'
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
                            <img src="/images/v1.png" style={{WebkitTransform: 'scale(5.0)'}}/>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            <b>V1</b>
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            <center>Village 1 consists of 4 quads separated into 26 houses. Each house has 3 or 4 floors with 14-16 students per floor. There is 1 Don per house. Houses and lounges are co-ed, but floors and bathrooms are single-gender.
                            <p> </p>
                            <b>Address:</b> 200 University Ave W, Waterloo (1500M from E7) &nbsp;&nbsp; <b>Rent per Month:</b> $700 &nbsp;&nbsp; <b>Roommates</b> 1, 2 &nbsp;&nbsp; <p></p> <b>Rating: </b>  
                            <a href="https://www.google.com/search?q=student+village+1+reviews&ei=vHsfZOyzM5-oqtsP_L2QyAQ&ved=0ahUKEwjsgdmulvj9AhUflGoFHfweBEkQ4dUDCA4&uact=5&oq=student+village+1+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICCEQoAEQwwQ6CggAEEcQ1gQQsAM6BggAEAcQHjoICAAQCBAHEB46CAgAEAUQBxAeOgcIABANEIAEOgYIABAFEB46CAgAEAcQHhAPSgQIQRgAUMYHWJs1YOs3aAJwAXgAgAFviAGlB5IBAzguMpgBAKABAcgBB8ABAQ&sclient=gws-wiz-serp#lrd=0x882bf6abf96164fd:0x6ab904facf719195,1,,,," > 2.9/5 </a>
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
                            href='https://uwaterloo.ca/campus-housing/residences/v1'
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
                            href='/ReviewHousing'
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
                        href='/MapV1'
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




export default InfoHousing;