import React, { Component } from 'react';

import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MyHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';
import MySubPage from './components/MySubPage';
import MyMainPage from './components/MyMainPage';

const theme = createTheme({
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

const AppWrapper = styled('div')(({ theme }) => ({
  maxHeight: '95vh',
}));


class App extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <MyHeader />
          <Grid container xs={12}>
            <Grid item xs={0.7} style={{backgroundColor: '#EBEBEB', }}>
                <MyMenu />
              </Grid>
            <Grid item xs={2.3}>
              <MySubPage />
            </Grid>
            <Grid item xs={9}>
              <MyMainPage />
            </Grid>
          </Grid>
        </AppWrapper>
      </ThemeProvider>
      )}
}
export default App;