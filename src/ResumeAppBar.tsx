import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import { Switch, FormControlLabel, colors } from "@material-ui/core";
import DarkModeToggle from "react-dark-mode-toggle";
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
    headerBar: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            minHeight: 0,
            maxHeight: "2rem"
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '2rem',
            maxHeight: "2rem"

        },
        backgroundColor:"rgba(0,0,0,0.0)",
        // opacity: 0.2,
        boxShadow: 'none',
    },
    toggle: {
        opacity: 1,
    },
    title: {
        flexGrow: 1,
    },
    
});
enum Position
{
    Static,
    Fixed
}
interface State{
    position: Position,
    navigationItemClass: boolean,
    isDrawerVisible: boolean,
    // isDarkMode: boolean,
};

interface Props extends WithStyles<typeof styles> {
    lightOn: boolean;
    onLightOn: (lightOn: boolean) => void;
}

class ResumeAppBar extends PureComponent<Props, State> {
    state = {
        position: Position.Static,
        navigationItemClass: true,
        isDrawerVisible: false,
    };
    

    _showDrawer = () => {
        this.setState({
            isDrawerVisible: true
        })
    }
    
    _hideDrawer = () => {
        this.setState({
            isDrawerVisible: false
        })
    }

    render () {
        // const classes = this.props.classes;
        // const headerClass = classNames({
        //     [classes.headerBar]: true,
        //     [classes.headerBarFixed]: position === 'fixed',
        // });
        const classes = this.props.classes;
        return (
            <AppBar position="fixed" className = {classes.headerBar}>
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <DarkModeToggle
                        className={classes.toggle}
                        onChange={this.props.onLightOn}
                        checked={this.props.lightOn}
                        size="5rem"
                    />
                </Toolbar>
            </AppBar>
        );
    }
}


export default withStyles(styles, {withTheme: true })(ResumeAppBar);