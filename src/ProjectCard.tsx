import React, {Component, PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
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
const __thumbnailSizeRightMargin = -50;


const styles = (theme: Theme) =>createStyles({
    root: {
      height: __thumbnailSize,
      width: "70%",
      transitionProperty: "width, height",
      transitionDuration: "0.5s, 0.5s",
      transitionDelay: "0.5s, 0s",
      marginTop: 20, 
      marginBottom: 20,
    },
    rootExpanded: {
      height: "100%",
      width: "90%",
      transitionProperty: "width, height",
      transitionDuration: "0.5s, 0.5s",
      transitionDelay: "0s, 0.5s", 
      marginTop: 20, 
      marginBottom: 20,   
    },
    chipContainer: {
      marginBottom: 5,
    },
    mediaContainer:{
      width: __thumbnailSize,
      // right: "0px",
      // height: __thumbnailSize + __thumbnailSizeRightMargin
    },
    media: {
      // paddingTop: '56.25%', // 16:9
      width: __thumbnailSize + __thumbnailSizeRightMargin,
      height: __thumbnailSize,
      objectFit: 'contain',
      // .MuiCardMedia-img:{
      // objectFit: 'contain'
      // }
      // marginLeft: "auto",
      // marginRight: "auto",
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

    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


interface State{
    expanded: boolean,
};


export enum Language {
  Javascript = "JScript",
  Typescript = "TScript",
  Cpp = "C++",
  CSharp = "C#",
  Flutter= "Flutter",
  Dart= "Dart",
  React= "React",
  Wasm= "WASM",
  CMake= "CMake",
  Qt= "Qt",
  OpenGL= "OpenGL",
  OpenCV= "OpenCV",
  Python= "Python",
  Django= "Django",
  UWP= "UWP",
  UE4= "UE4",
  SPICE="SPICE",

}



interface Props extends WithStyles<typeof styles> {
  languages: Array<Language>,
  date: string,
  title: string,
  subtitle: string,
  imgSrc: string,
  link?: string
}

class _ProjectCard extends PureComponent<Props, State> {
    state = {
        expanded: false,
    };

  handleExpandClick = () => {
    this.setState({expanded: !this.state.expanded});
  };
  _renderChip =  (lng: Language, index: number) => {
    return (
      <Chip label={lng as string} disabled variant="outlined" />
   );
  }
  _renderLinkOrExpand =  () => {
    if(this.props.link)
    {
      return (
        <Button size="small" href={this.props.link} >Learn More</Button>
      );
    }
    else
    {
      let expandedBttnName = this.props.classes.expand + " ";
      expandedBttnName += this.state.expanded? this.props.classes.expandOpen : ""; 
      return (
        <IconButton
          className={expandedBttnName}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>      
      );
    }
  }
  render () {
      const classes = this.props.classes;

      const rootName = this.state.expanded? classes.rootExpanded : classes.root;
      return (
        <Card className={rootName}>
          <Grid container spacing={3}>
            <Grid item xs>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {this.props.date}
                </Typography>
                <Typography variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {this.props.subtitle}
                </Typography>

                <div className={classes.chipContainer}>
                  {
                      this.props.languages && this.props.languages.map(this._renderChip)
                  }
                </div>
                {this._renderLinkOrExpand()}
              </CardContent>
            </Grid>
            <Grid item className={classes.mediaContainer} >
              <img src={this.props.imgSrc}  className={classes.media} />
            </Grid>
          </Grid>
          {this.props.children}
        </Card>
      );
    }
}

export const ProjectCard = withStyles(styles, {withTheme: true })(_ProjectCard);
