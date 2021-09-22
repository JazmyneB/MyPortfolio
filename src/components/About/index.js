import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/views/profilePage";


const useStyles = makeStyles(styles);


const About = () => {
  const classes = useStyles();
  
    return (
        <div className = {classes.description}>
            <p>
            Hey There! Welcome to my portfolio! I attended the University of Arizona where I received my B.S in Information Science and Technology with minors in Systems Engineering as well as in Africana Studies.</p>
            <p>While I get distracted with work on the weekdays, I like to go hiking, going to the gym and trying new foods either at restaurants or daring myself to recreate a dish.</p>
            <p>You know when people go take a walk to clear their mind or wind down, programming is my "winding down". I used to love solving logic puzzles in elementary school and still to this day. I know it's kind of odd seeing a kid solve logic puzzles rather word searches. However, coding and programming are my logic puzzles. I love the thrill of challenges and figuring out a problem to not only solve, but to develop something!</p>
          </div>
      )
    }

export default About;