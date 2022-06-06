import React, { PureComponent } from 'react';
import './App.css';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, PaletteType } from '@material-ui/core';
import ResumeAppBar from './ResumeAppBar';
import Body from './Body';
import { createTheme, ThemeProvider, ThemeOptions } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark'
  },
});

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.default,

  },
});



// export const light: {
//   palette: {
//     type:  "light"
//   }
// };

// interface ldTheme
// {

// }
const light: ThemeOptions =
{
  palette:
  {
    type: "light",
  }
}

const dark: ThemeOptions =
{
  palette:
  {
    type: "dark",
  }
}
interface State {
  isDarkMode: boolean,
};
interface Props extends WithStyles<typeof styles> { }

class MainApp extends PureComponent<Props, State> {

  state = {
    isDarkMode: true,
  };

  _toggleLight = (isChecked:boolean) => {        
    this.setState({
      isDarkMode: isChecked
    });
  };



  render() {
    const appliedTheme = createTheme(this.state.isDarkMode ? dark : light);
    const classes = this.props.classes;
    return (
      <ThemeProvider theme={appliedTheme}>
        <Container className={classes.root}>
          <ResumeAppBar lightOn={this.state.isDarkMode} onLightOn={this._toggleLight} />
          <Body />
        </Container>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainApp);
