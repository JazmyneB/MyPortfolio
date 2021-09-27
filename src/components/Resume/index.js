import React from 'react';
import DownloadLink from "react-download-link";

import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem';
import NavPills from '../NavPills/NavPills';
import { Link } from '@material-ui/core';

import resume from './Jazmyne_Bradley.pdf';


import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/views/profilePage"

import ArchiveIcon from '@mui/icons-material/Archive';const useStyles = makeStyles(styles);


const Resume = () => {
    const classes = useStyles();
    const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  

    return (
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <p>Front-End Skills</p>
                 <ul>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>BootStrap</li>
                 <li>JavaScript</li>
                 <li>Material-Ui</li>
                 </ul>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <p>Back-End Capabilities</p>
                    <ul>
                    <li>SQL</li>
                    <li>NoSQL, Sequelize</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>DOM</li>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>Insomnia Core</li>
                    <li>JEST</li>
                    </ul>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <a href={resume} download>My Resume</a>
                            </GridItem>
                        </GridContainer>
    )
}


export default Resume;