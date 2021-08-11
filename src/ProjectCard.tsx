import React, {Component, PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TestImg from './resources/icons/C10Icon.png'; // Tell webpack this JS file uses this image
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';


      // [theme.breakpoints.up('sm')]: {
      //   width: "51%",

      // },
      // [theme.breakpoints.down('sm')]: {
      //   width: "70%",
      // },


const __thumbnailSize = 200;


const styles = (theme: Theme) =>createStyles({
    root: {
      height: __thumbnailSize,
      width: "70%",
      transitionProperty: "width, height",
      transitionDuration: "0.5s, 0.5s",
      transitionDelay: "0.5s, 0s",
    },
    rootExpanded: {
      height: 500,
      width: "90%",
      transitionProperty: "width, height",
      transitionDuration: "0.5s, 0.5s",
      transitionDelay: "0s, 0.5s",    },

    mediaContainer:{
      width: __thumbnailSize,
      height: __thumbnailSize
    },
    media: {
      // paddingTop: '56.25%', // 16:9
      width: __thumbnailSize,
      height: __thumbnailSize,
      marginLeft: "auto",
      marginRight: "auto",
    },
    expand: {

      transform: 'rotate(0deg)',
      marginLeft: 0,
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
});


interface State{
    expanded: boolean,
};


interface Props extends WithStyles<typeof styles> {
}

class ProjectCard extends PureComponent<Props, State> {
    state = {
        expanded: false,
    };

  handleExpandClick = () => {
    this.setState({expanded: !this.state.expanded});
  };
  
  render () {
      const classes = this.props.classes;
      let expandedBttnName = classes.expand + " ";
      expandedBttnName += this.state.expanded? classes.expandOpen : ""; 
      const rootName = this.state.expanded? classes.rootExpanded : classes.root;
      return (
        <Card className={rootName}>
          <Grid container spacing={3}>
            <Grid item xs>
              <CardHeader
                title="C10"
                subheader="September 14, 2016"
                
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  3D LCD resin printer for dentistry
                </Typography>
                <div >
                  <Chip label="Basic" variant="outlined" />
                  <Chip label="Disabled" disabled variant="outlined" />
                  <Chip label="Disabled" disabled variant="outlined" />
                  <Chip label="Disabled" disabled variant="outlined" />
                </div>
                                <IconButton
                  className={expandedBttnName}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardContent>

            </Grid>
            <Grid item className={classes.mediaContainer} >
              <CardMedia
                className={classes.media}
                image={TestImg}
                title="Paella dish"
              />
            </Grid>
          </Grid>


        </Card>
      );
    }
}

export default withStyles(styles, {withTheme: true })(ProjectCard);
