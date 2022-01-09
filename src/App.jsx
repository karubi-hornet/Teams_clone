import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { createMuiTheme, ThemeProvider } from '@mui/material/styles'

import MyHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';

const drawerWidth = 75;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#464775"
    },
    secondary: {
      main: "#EBEBEB"
    },
    info: {
      main: "#ffffff"
    }
  }
});

class App extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
        <MyHeader />
        <Box sx={{ pverflow: 'auto' }}>
          <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#EBEBEB',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            <MyMenu />
          </Drawer>
        </Box>
      </ThemeProvider>
      )}
}

export default App;
