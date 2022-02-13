import React, { Component } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material'
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
        <Grid container>
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
          <Grid item xs={2}>
            <MySubPage />
          </Grid>
          <Grid item xs={9}>
            <MyMainPage />
          </Grid>
      </Grid>
      </ThemeProvider>
      )}
}
export default App;