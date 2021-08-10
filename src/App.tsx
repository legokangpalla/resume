import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ResumeAppBar from './ResumeAppBar';
import Body from './Body';

// theme

const theme = createTheme({
    palette: {
        primary: {
            main: '#182e52',
        },
        secondary: {
            main: '#f1eff1',
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div>
            <ResumeAppBar/>
            <Body/>
        </div>
    </ThemeProvider>
  );
}

export default App;
