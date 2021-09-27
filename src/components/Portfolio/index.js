import React, { useState } from 'react';


import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem';
import NavPills from '../NavPills/NavPills';
import Modal  from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';


import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/views/profilePage"

import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { ProjectIcon } from '@primer/octicons-react';

const useStyles = makeStyles(styles);

const Portfolio = () => {
    
    const classes = useStyles();
    const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    const [projects] = useState([
        {
            title: 'Silver Stream',
            image: 'silver-stream.png',
            description: 'Silver string is a website that allows users to generate random list of movies',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/Silver-Stream-main',
            live: 'https://colesammons.github.io/Silver-Stream/'
        },
        {
            title: 'Food Festival',
            image: 'food-festival2.JPG',
            description: 'This is an app for food festivals.',
            hub: 'https://github.com/JazmyneB/food-festival',
            live: 'https://jazmyneb.github.io/food-festival/'
        },
        {
            title: 'Daily Scheduler',
            image: 'weekly2.jpeg',
            description: 'An app to keep track of the daily tasks.',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/weekly',
            live: 'https://jazmyneb.github.io/weekly/'
        },
        {
            title: 'Weather Forecast',
            image: 'weather2.jpeg',
            description: 'This project consists of getting a forecast of the weather within the work weekday in a desired city.',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/weather',
            live: 'https://jazmyneb.github.io/weather/'
        },
        {
            title: 'Code Quiz',
            image: 'code-quiz2.jpeg',
            description: 'A timed quiz to test your coding knowledge.',
            hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/code-quiz',
            live: 'https://jazmyneb.github.io/code-quiz/'

        },
        // {
        //     title: 'Project 6',
        //     image:
        //     description: 'This here',
        //     github: 'linking',
        //     live: 'live site'
        // }
    ])

    const [modalContent, setModalContent] = useState({
      title: 'Code Quiz',
      image: 'code-quiz2.jpeg',
      description: 'A timed quiz to test your coding knowledge.',
      hub: 'https://github.com/JazmyneB/JazmyneB.github.io/tree/main/code-quiz',
      live: 'https://jazmyneb.github.io/code-quiz/'

  });

    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const handleOpen = (event) => {
        setOpen(true)
        console.log(event.target.attributes[1].value)
        const index = event.target.attributes[1].value;
        setModalContent({
          title: projects[index].title,
          description: projects[index].description,
          hub: projects[index].hub,
          live: projects[index].live

      })

    };
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="Silver Stream"
                              id = "0"
                              src={require("../../assets/project/silver-stream.png").default}
                              className={navImageClasses}
                              onClick={handleOpen}
                            />
                            <img
                              alt="Food Festival"
                              id="1"
                              src={require("../../assets/project/food-festival2.JPG").default}
                              className={navImageClasses}
                              onClick={handleOpen}
                            />
                            <img
                              alt="Daily Scheduler"
                              id = "2"
                              src={require("../../assets/project/weekly2.jpeg").default}
                              className={navImageClasses}
                              onClick={handleOpen}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="Weather Forecast"
                              id = "3"
                              src={require("../../assets/project/weather2.jpeg").default}
                              className={navImageClasses}
                              onClick={handleOpen}
                            />
                            <img
                              alt="Code Quiz"
                              id="4"
                              src={require("../../assets/project/code-quiz2.jpeg").default}
                              className={navImageClasses}
                              onClick={handleOpen}
                            />
                            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h4" components="h4">
                                        {modalContent.title}
                                        </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt:2 }}>
                                    {modalContent.description}
                                    <p><a href={modalContent.hub}>GitHub Repo</a></p>
                                    <p><a href={modalContent.live}>Deployed Site</a></p>
                                    </Typography>

                                </Box>
                                </Modal>
                            {/* {projects.map((project, i) => (
                            <Modal key = {project.name} id={i} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h4" components="h4">
                                        {project.title}
                                        </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt:2 }}>
                                    {project.description}
                                    <p><a href={project.hub}>GitHub Repo</a></p>
                                    <p><a href={project.live}>Deployed Site</a></p>
                                    </Typography>

                                </Box>
                                </Modal>
                            ))} */}

                          </GridItem>
                        </GridContainer>
            
    )
}

export default Portfolio;