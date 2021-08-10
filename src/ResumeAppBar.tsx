import React, {Component} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import { PureComponent } from 'react';

const styles = (theme: Theme) => createStyles({
    header: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            minHeight: 0,
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '30px',
        },
    },
    headerBackground: {
        height: '515px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: 'url(cover.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat'
    },
    flex: {
        flex: 1,
    },
    horizontalNavigation: {
        flex: 1,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    verticalNavigation: {
        flex: 1,
        minWidth: 300,
    },
    hamburger: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
    
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
};

interface Props extends WithStyles<typeof styles> {
}

export class ResumeAppBar extends PureComponent<Props, State> {
    state = {
        position: Position.Static,
        navigationItemClass: true,
        isDrawerVisible: false,
    };
    
    componentDidMount () {
        // window.addEventListener('scroll', this.handleScroll.bind(this));
        // this.handleScroll();
    }
    
    // handleScroll () {
    //     if (ReactDOM.findDOMNode(this).getBoundingClientRect) {
    //         let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    //         let position = 'static';
    //         let navigationItemClass = false;
    //         if (rect) {
    //             if ((rect.y || rect.top) < -45) {
    //                 position = 'fixed';
    //                 navigationItemClass = true
    //             }
    //             this.setState({
    //                 position,
    //                 navigationItemClass
    //             })
    //         }
    //     }
    // }
    
    _showDrawer () {
        this.setState({
            isDrawerVisible: true
        })
    }
    
    _hideDrawer () {
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
            <div className={classes.header}>
                <div className={classes.headerBackground}/>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton className={classes.hamburger}
                            // color="contrast"
                            onClick={this._showDrawer.bind(this)}
                            aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <div className={classes.flex}>
                        </div>
                        <Grid
                            // className={classes.horizontalNavigation}
                            container
                            spacing={0}
                            direction="row"
                        >
                            {/* <LinkTo to="profile"
                                    title="About"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="experience"
                                    title="Experience"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="skills"
                                    title="Skills"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="education"
                                    title="Education"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="blog"
                                    title="Blog"
                                    enableNavigationItemClass={navigationItemClass}/>
                            <LinkTo to="contact"
                                    title="Contact"
                                    offset={-400}
                                    enableNavigationItemClass={navigationItemClass}/> */}
                        </Grid>
                       
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="left"
                    open={this.state.isDrawerVisible}
                    onClose={() => this._hideDrawer()}>
                    <Grid
                        className={classes.verticalNavigation}
                        container
                        alignItems="center"
                        justify="center"
                        spacing={0}
                        direction="column"
                    >
                        {/* <LinkTo to="profile"
                                title="About"
                                enableNavigationItemClass={navigationItemClass}/>
                        <LinkTo to="experience"
                                title="Experience"
                                enableNavigationItemClass={navigationItemClass}/>
                        <LinkTo to="skills"
                                title="Skills"
                                enableNavigationItemClass={navigationItemClass}/>
                        <LinkTo to="education"
                                title="Education"
                                enableNavigationItemClass={navigationItemClass}/>
                        <LinkTo to="blog"
                                title="Blog"
                                enableNavigationItemClass={navigationItemClass}/>
                        <LinkTo to="contact"
                                title="Contact"
                                offset={-400}
                                enableNavigationItemClass={navigationItemClass}/> */}
                    </Grid>
                </Drawer>
            </div>
        );
    }
}

// ResumeAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default withStyles(styles, {withTheme: true })(ResumeAppBar);