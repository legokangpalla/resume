import React, {Component, PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme, makeStyles} from '@material-ui/core/styles';
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
import Collapse from '@material-ui/core/Collapse';
import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './customCarousel.css'
// import { Carousel } from 'react-responsive-carousel/lib/js'



      // [theme.breakpoints.up('sm')]: {
      //   width: "51%",

      // },
      // [theme.breakpoints.down('sm')]: {
      //   width: "70%",
      // },


const __thumbnailSize = 150;
const __thumbnailSizeRightMargin = -30;





const styles = (theme: Theme) =>createStyles({

    root: {
      width: "70%",
      transitionProperty: "width",
      transitionDuration: "0.2s",
      transitionDelay: "0.5s",
      marginTop: 20, 
      marginBottom: 20,

      [theme.breakpoints.down('sm')]: {
        width: "100%",
      },
    },
    rootExpanded: {
      width: "90%",
      transitionProperty: "width",
      transitionDuration: "0.2s",
      marginTop: 20, 
      marginBottom: 20,   
      [theme.breakpoints.down('sm')]: {
        width: "100%",
      },
    },
    chipContainer: {
      marginBottom: 5,
    },
    mediaContainer:{
      width: __thumbnailSize,
    },
    media: {
      // paddingTop: '56.25%', // 16:9
      width: __thumbnailSize + __thumbnailSizeRightMargin,
      height: __thumbnailSize,
      objectFit: 'contain',

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

    ytbFrame:
    {
      width: "auto",
      height: 600,

    }
});


interface State{
    expanded: boolean,
};

export enum Mediatype
{
  ytb,
  img
}
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
  GLSL = "GLSL",
  AUTOSAR = "AUTOSAR",
}
interface MediaInfo{
 type: Mediatype,
 src: string,
  desc: string
}


interface Props  extends WithStyles<typeof styles>{
  languages: Array<Language>,
  date: string,
  title: string,
  subtitle: string,
  imgSrc: string,
  link?: string
  mediaInfo?: Array<MediaInfo>
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

  _renderMedia =  (info: MediaInfo, index: number) => {

    if(info.type === Mediatype.ytb )
    {
      return (
        <div key={index}>
          <iframe className={this.props.classes.ytbFrame} src={info.src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <p className="legend">{info.desc}</p>
        </div>
     );
    }
    else{
      return (
        <div key={index}>
         <img alt="" src={info.src} />
          <p className="legend">{info.desc}</p>
        </div>
     );
    }

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
      let media;
      if(this.props.mediaInfo)
      {
        media = this.props.mediaInfo!.map(this._renderMedia);
      }
      const rootName = this.state.expanded? classes.rootExpanded : classes.root;
      return (
        <Card className={rootName}>
          <Grid container spacing={3}>
            <Grid item xs>
              <CardContent>
                <Typography  variant="subtitle1"gutterBottom>
                  {this.props.date}
                </Typography>
                <Typography  variant="h6" gutterBottom>
                  {this.props.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
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
         <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Carousel>
              {
                  this.props.mediaInfo && this.props.mediaInfo!.map(this._renderMedia)
              }

            </Carousel>
            {this.props.children}
          </CardContent>
        </Collapse>
        </Card>
      );
    }
}

export const ProjectCard = withStyles(styles, {withTheme: true })(_ProjectCard);
