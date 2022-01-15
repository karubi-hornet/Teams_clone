import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles'
import MyHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';
import MySubPage from './components/MySubPage';
import MyMainPage from './components/MyMainPage';
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
        <Box sx={{ pverflow: 'auto', display: 'flex'}}>
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
        <Box sx={{ marginTop: 8, marginLeft: 9, display: 'flex'}}>
          <MySubPage />
          <MyMainPage />
        </Box>
      </ThemeProvider>
      )}
}
export default App;