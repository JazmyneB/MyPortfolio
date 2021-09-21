import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Header from '@material-ui/core/Header';

function Nav() {
  const category = ['about', 'contact', 'portfolio', 'resume'];

  return (
    <div>
      <AppBar position="static" color="transparent"> 
      <Toolbar>
        <Typography>
          My Portfolio
        </Typography>
      </Toolbar>
      </AppBar>
    
    </div>

  );
}

export default Nav;

