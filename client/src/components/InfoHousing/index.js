
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


const InfoHousing = () => {
  const classes = useStyles();




  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
          Information About Housing 
          </Typography>
        </Paper>
      </Grid>

      <><><><><><><><><><><><div align='center'>
    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '200vh', marginTop: '50px', marginBottom: '20px', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={5}>
                <div align='left'>
                    <Card style={{ color: 'black', backgroundColor: 'white', height: '50vh', width: '80vh', boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
                        <img src="/images/elora.png" />
                    </Card>
                </div>
            </Grid>
            <Grid item xs={7}>
                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h5" color="black" wrap>
                        Elora House
                    </Typography>
                </div>

                <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                    <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                    Appealing to students who like their own space, Elora House possess’ the largest rooms ALL with private ensuite washrooms in luxury 3, 4, and 5 bedroom layouts. Elora offers a number of building and suite amenities that provide the comforts and benefits of independent living.
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
                            <img src="/images/Fergus.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Fergus House
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        Fergus House features the standard range of comforts and amenities that our tenants have come to expect from Rez-One properties. 4-bedroom units make this residence the ideal setting for students who enjoy living, studying and socializing together!
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
                            <img src="/images/icon.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Icon
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        Meet ICON, Waterloo's largest and most dynamic modern living development at the intersection of Phillip St. and Columbia St. Composed of two, twenty-five storey towers with an unparalleled view of the evolving Waterloo skyline and conveniently located directly across the street from the University of Waterloo, ICON is the ideal place to call home. 
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
                            <img src="/images/145.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Society 145
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        Composed of two towers rising 20 and 23 storeys high, Society145 provides modern elegance, first class amenities and beautifully designed suites. Each space has been carefully thought through to create an exceptional living experience for each individual.
                        Experience the luxuries and convenience that Society Condos has to offer, which include the state-of-the-art fitness centre, business lounge, multi-media theatre, and rooftop patio with panoramic views of Waterloo. All mere steps from your suite.
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
                            <img src="/images/Accomodate8u.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            Accommod8u
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        Designed to offer residents ease of access to Waterloo’s University District, 250 Lester Street offers innovative luxury living. Conveniently located just steps away from all of the action University Avenue West has to offer, this stunning building stands out among the surrounding properties and pushes the bounds of luxury living in Waterloo.
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
                            <img src="/images/KingStreet.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            King Street Towers
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            Our spacious three, four, or five bedroom apartments come fully furnished with everything you need to be comfortable. Every apartment has a bedroom for each student resident, a dining area, kitchen and living room. The majority of bedrooms have en-suite washrooms, and many suites have private balconies!
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
                            <img src="/images/MyRez.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            My Rez on Lester
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        Our clean and spacious five bedroom apartments come fully furnished with everything you need to be comfortable. Every apartment has a bedroom for each individual student, a dining area, kitchen, living room, and one or two shared bathrooms, depending on the size of the unit. Student housing in Waterloo doesn’t get better than MyRez!
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
                            <img src="/images/uwp.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            UWP
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        UWP consists of 4 courts and 2 halls. All floors are co-ed, with 20 - 50 residents and 1 don living on each floor. Each suite is single gender. Upper-years can request a mixed-gender suite. 
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
                            <img src="/images/viphousing.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            VIP Student Housing
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            VIP Student Housing is a family owned-operated rental company offering the finest student suites in Waterloo. From first-year undergraduate students to PhD graduates, VIP Student Housing is sure to have a suite that will accommodate your needs.
                            VIP Student takes pride in delivering exceptional services for all tenants; such as same-day maintenance repairs and flexible appointment scheduling. All suites come fully furnished to provide a hassle-free and comfortable living experience.
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
                            <img src="/images/Rev.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            REV
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            REV consists of 4 quads. Each quad has 5 floors, with 48 residents and 1 don living on each floor. Floors are co-ed, but each wing on the floor are single gender.
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
                            <img src="/images/MKV.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            MKV
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                        MKV consists of 2 wings. Each wing has 4 floors, with 40 residents and 1 don living on each floor. Most floors are co-ed, but each suite is single gender. MKV is the only suite-style residence with air conditioning available. Multi faith room icon.
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
                            <img src="/images/v1.png" />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" color="black" wrap>
                            V1
                        </Typography>
                    </div>

                    <div style={{ marginTop: '20px', marginRight: '30px', textAlign: 'Left' }}>
                        <Typography align='center' variant="h10" color="inherit" style={{ marginLeft: '30px' }}>
                            Village 1 consists of 4 quads separated into 26 houses. Each house has 3 or 4 floors with 14-16 students per floor. There is 1 Don per house. Houses and lounges are co-ed, but floors and bathrooms are single-gender.
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
                    </div>
                </Grid>
            </Grid>
        </Card>
    </div></>
    </div>
  );
};




export default InfoHousing;