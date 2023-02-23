
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
import InputLabel from '@material-ui/core/InputLabel';
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


const InfoRestaurant = () => {
  const classes = useStyles();


  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h3" color="inherit" noWrap>
            Information About Restaurants
          </Typography>
        </Paper>

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
           Harveys
          </Typography>
        </Paper>
        <img src = "/images/HarveyRes.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
          For over 60 years we've been proud to serve our fellow Canadians only the best ingredients and now more than ever our commitment to 100% Canadian Quality remains the same.
          You could say, we're fans of what grows in our own backyard. So Canada, are you ready to help us on our mission to keep this country a beautiful thing?
        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Lobster Burger Bar
          </Typography>
        </Paper>
        <img src = "/images/Lobster.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Lobster Burger Bar is our name. Fresh Atlantic Lobster and Angus Beef is our Game!
        
        It’s hard to imagine two of the world’s most delicious foods now available in Waterloo, within walking distance to both universities and high-tech companies.
        </Typography>

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Williams Fresh Cafe
          </Typography>
        </Paper>
        <img src = "/images/Williams.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Williams Fresh Café is your all-day, every day café for delicious food and signature drinks made-to-order from real, fresh ingredients and served to your table with a real smile. Our cafés offer a stylish yet casual setting, each with its own local flavour.
        Whether conducting a morning meeting over breakfast, catching up with a friend over lunch, indulging in a mid-afternoon coffee break with colleagues, or sharing an evening drink and dessert with a loved one, Williams Fresh Café will always make a fresh difference to your day.

        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Subway
          </Typography>
        </Paper>
        <img src = "/images/Subway.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        From our customizable and signature sandwiches to wraps and salads, Subway is simply an excellent choice when it comes to freshly made, convenient and affordable offerings. We’re one of the world’s largest restaurant brands for a reason, serving up a craveable menu with quality options to our millions of fans every day.
        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          The Pub on King
          </Typography>
        </Paper>
        <img src = "/images/PubKing.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Welcome to The Pub on King in Uptown Waterloo. Home of the $7.95 food menu! With Opening our doors more than five years ago, we have established ourselves as the-place-to-be in Uptown Waterloo. During the day you can stop by for a quick and quiet lunch of a variety of pub fare with inspiration from many British Classics! A great place for your happy-hour hang out after work with a variety of appetizers and daily drink features. Our nightlife atmosphere turns more upbeat with daily live entertainment appealing to all ages. The affordable and social hotspot that people can’t stop talking about!
        </Typography>
        

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Korner Kitchen
          </Typography>
        </Paper>
        <img src = "/images/Korner.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Inspired by a passion for serving traditional home style dishes in a friendly, comfortable, and modern atmosphere, Korner Kitchen Breakfast & Lunch Eatery is the proud result of over 30 years in the local dining industry.
        </Typography>



        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Johnny Fresco
          </Typography>
        </Paper>
        <img src = "/images/Fresco.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        If you’re craving tasty Canadian and Mediterranean meals in Waterloo, then Johnny Fresco is the place to be. Come check out our energetic and lively atmosphere for a truly authentic dining experience in beautiful Waterloo.
        Our food is made with only the freshest ingredients available and our portions are so big you will never walk away hungry.

        </Typography>

        
        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Shawerma Plus
          </Typography>
        </Paper>
        <img src = "/images/SharwamaPlus.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Our USP has always been the same: an authentic shawarma experience with the finest ingredients available. This mission has led us to achieve 58+ awards and #1 rankings from Google, TripAdvisor, The Record and other respected bodies.
        This has all been due to the love and support of our amazing customers, whose commitment to our brand proves that taste and authenticity matters above everything else. 
        </Typography>



        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Lazeez Shawarma
          </Typography>
        </Paper>
        <img src = "/images/Lazeez.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        The Lazeez story begins with the universal passion for great taste. Our founders, while each having different and unique stories, backgrounds and personalities, found a strong connection over their common love for great tasting Middle Eastern food. 
        Spiced to perfection, marinated right, and topped with our signature sauces, our food hits the local taste buds hard. Lazeez has since become the go-to place for those who love the delicious flavours of the Middle East; and as we have learned, that’s pretty much everyone.
        </Typography>

        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Tim Hortons
          </Typography>
        </Paper>
        <img src = "/images/TimHorton.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        In 1964, the first Tim Hortons restaurant in Hamilton, Ontario opened its doors and Canadians have been ordering Tim Hortons iconic Original Blend coffee, Double-Double coffees, Donuts and Timbits ever since. 
        Over the years, Tim Hortons has captured the hearts and taste buds of Canadians. More than a coffee and bake shop, Tim Hortons is part of the fabric of Canada and a proud symbol of our country and its values.
        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Mel’s Diner
          </Typography>
        </Paper>
        <img src = "/images/Mels.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Cozy little diner serving all day breakfast and home made burgers.
        </Typography>


        <Paper className={classes.paper}>
          <Typography align = 'left' variant="h3" color="inherit" noWrap>
          Pita Pit
          </Typography>
        </Paper>
        <img src = "/images/PitaPit.png"/>
         
         <div>

         </div>
        <Typography align = 'right' variant="h10" color="inherit">
        Open wide and say aah! At the Pita Pit, we’re proud of what we put into our pitas, and equally proud of what we don’t. Nothing’s deep-fried, battered or grilled in fat. We don’t add salt unless you tell us you want it. And we don’t stuff our good-for-you, great-tasting fillings in big wads of bread as thick as a mattress. Welcome to fresh thinking and healthy eating at the Pita Pit, a proudly Canadian, no b.s. place to eat.

        </Typography>

        
      </Grid>

      
      <Grid item xs={12}>
        <Paper className={classes.paper}> 
        </Paper>
      </Grid>
    </div>
  );
};




export default InfoRestaurant;