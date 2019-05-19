import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './pages/common/Header'
import Home from './pages/home'


import './App.css'

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
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  )
}

export default App
