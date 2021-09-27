import React, { useState } from 'react';
//Components
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Parallax from './components/Parallax';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import NavPills from './components/NavPills/NavPills';
import { Button } from '@mui/material'
import styles from "./assets/jss/views/profilePage";
//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ArchiveIcon from '@mui/icons-material/Archive';
import InfoIcon from '@mui/icons-material/Info';


import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from '@mui/material/colors';

import profile from "./assets/cover/cover-image.jpg"


const useStyles = makeStyles(styles);

function App(props) {

  const [currentPage, setPage] = useState('about');

  const switchPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio/>
      case 'contact':
        return <ContactForm />
      case 'resume':
        return <Resume />
    }
  }

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
  classes.imgRaised,
  classes.imgRoundedCircle,
  classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  

  return (
    <div>
      <Nav>
      </Nav>
      <Parallax 
      small
      filter
      image={require("./assets/cover/JBGoogle.jpg").default}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jazmyne Bradley</h3>
                    <h6>SOFWARE DEVELOPER</h6>
                    <Button justIcon className={classes.margin5} onClick={()=> window.open('https://github.com/JazmyneB')}>
                      <GitHubIcon sx={{ color: pink[400] }}> </GitHubIcon>
                    </Button>
                    <Button justIcon className={classes.margin5} onClick={()=> window.open('https://linkedin.com/in/jazmynebradley)}')}>
                      <LinkedInIcon sx={{ color: pink[400] }}></LinkedInIcon>
                    </Button>
                    <Button justIcon className={classes.margin5} onClick={() => window.open("mailto:bradleyj1@email.arizona.edu")}>
                      <MarkEmailUnreadIcon sx={{ color: pink[400] }}></MarkEmailUnreadIcon>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <About></About>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color='rose'
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: DeveloperModeIcon,
                      tabContent: <Portfolio/>
                      },
                      {
                        tabButton: "Resume",
                        tabIcon: ArchiveIcon,
                        tabContent: <Resume/>
                      },
                      { 
                         tabButton: "Contact",
                        tabIcon: InfoIcon,
                        tabContent: <ContactForm/>
                      }
                  ]}
                  />
            </GridItem>
            </GridContainer>
            </div>
            </div>
            </div>
    </div>
  );
}

export default App;
