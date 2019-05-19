import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#e91e63' },
    secondary: {
      main: '#00b0ff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <div className="header">
          <p className="title">Lista de produtos</p>
        </div>
      </AppBar>
        <div >
          <h1>Teste</h1>
        </div>
      
    </MuiThemeProvider>
  );
}

export default App;
