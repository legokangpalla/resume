import React, {PureComponent} from 'react';
import './App.css';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ResumeAppBar from './ResumeAppBar';
import Body from './Body';



const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.default,

    },
});

interface Props extends WithStyles<typeof styles> {}

class MainApp extends PureComponent<Props> {
    render () {

        const classes = this.props.classes;
        return (
            <Container className={classes.root}>
                <ResumeAppBar/>
                <Body/>
            </Container>
        );
    }
}

export default withStyles(styles, {withTheme: true })(MainApp);

