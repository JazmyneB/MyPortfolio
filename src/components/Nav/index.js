import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Header from '@material-ui/core/Header';

import { roseColor } from '../../assets/jss/material-kit-react';
import { pink } from '@material-ui/core/colors';

const styles = {
  appbar: {
    alignItems: 'center'
  }
}

function Nav() {
  const category = ['about', 'contact', 'portfolio', 'resume'];

  return (
    <div>
      <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography align='center'>
          <h1 >My Portfolio</h1>
        </Typography>
      </Toolbar>
      </AppBar>
    
    </div>

  );
}

export default Nav;

