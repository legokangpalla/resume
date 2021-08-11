
import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import {ProjectCard, Language} from './ProjectCard';
import {Timeline, EventInfo}from './Timeline'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


import c10Thumb from './resources/icons/C10Icon.png';
import dsThumb from './resources/icons/dentslicerIcon.png';
import hixThumb from './resources/icons/hixIcon.png';
import efThumb from './resources/icons/ozEFormIcon.png';



const styles = (theme: Theme) => createStyles({
    container: {
        // marginLeft: '20px',
        // marginRight: '20px',
    },
    content: {
        zIndex: 2,
        position: 'relative',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 80,
    },
    padding0: {
        padding: '0 !important'
    },
    bodyTxt: {
      margin: 30,
    },
    media: {
      // paddingTop: '56.25%', // 16:9
      width: "100%",
      height: "100%",
      objectFit: 'contain',
      // flex: 1
      // margin: 'auto',

      // .MuiCardMedia-img:{
      // objectFit: 'contain'
      // }
      // marginLeft: "auto",
      // marginRight: "auto",
    },
    endFooter: {
      height: 400,
      width: "100%",
    }
});


interface Props extends WithStyles<typeof styles> {
}

//argh move this to db sometime later...
const c10 ={
  title: "C10",
  subtitle: "LCD resin printer firmware for dentistry",
  date: "2019-2020",
  imgSrc: c10Thumb,
  languages: [Language.Cpp, Language.Qt, Language.React],
}

const ds ={
  title: "DentSlicer",
  subtitle: "3D model builder, dental CAD, slicer",
  date: "2019-2021",
  imgSrc: dsThumb,
  languages: [Language.Cpp, Language.Qt, Language.OpenGL, Language.CMake],
}


const hixSite ={
  title: "Hix.co.kr",
  subtitle: "Company site with OAuth, product authentication, automated billing",
  date: "2020-2021",
  imgSrc: hixThumb,
  languages: [Language.Django, Language.Javascript, Language.React, Language.Python],
}


const eForm ={
  title: "OZ eForm",
  subtitle: "e-paper signage/signing platform",
  date: "2016-2018",
  imgSrc: efThumb,
  languages: [Language.Cpp, Language.Javascript, Language.OpenCV, Language.UWP],
}


class Body extends PureComponent<Props> {

    render () {
    let data: EventInfo[] = [
      {description: "asdfasdf", subtitle: "FORCS", time: "2020", title:"Native/Hybrid Application Developer"},
      {description: "asdfasdf", subtitle: "FORCS", time: "2020", title:"Native/Hybrid Application Developer"},
      {description: "asdfasdf", subtitle: "FORCS", time: "2020", title:"Native/Hybrid Application Developer"},
      {description: "asdfasdf", subtitle: "FORCS", time: "2020", title:"Native/Hybrid Application Developer"},

      ];
      const classes = this.props.classes;
      return (
          <Grid
              container
              justify={'center'}
              className={classes.content}>
            
              <Grid xs={12}
                    sm={12}
                    md={8}
                    item
                    container
                    direction={"column"}
                    className={classes.padding0}
                    lg={8}>
              </Grid>
              <Timeline experiences={data}></Timeline>
              <ProjectCard {...c10}>
                <Grid container spacing={3}>
                  <Grid  item xs={6}>
                    <Grid direction={'column'} >
                      <img src={require("./resources/projects/C10/main_menu.png").default}  className={classes.media} />
                      <img src={require("./resources/projects/C10/print_info.png").default}  className={classes.media} />
                      <img src={require("./resources/projects/C10/print_menu.png").default}  className={classes.media} />
                      <img src={require("./resources/projects/C10/setting_menu.png").default}  className={classes.media} />
                      <img src={require("./resources/projects/C10/web_menu.jpg").default}  className={classes.media} />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h2"  className={classes.bodyTxt} color="textPrimary">
                      Role: PM, senior engineer.<br/>
                      Product: firmware for 3D printer.<br/>
      
                    </Typography>  
                    <Typography variant="h6" className={classes.bodyTxt} color="textPrimary">
                      Qt application framework running on top of X server with a seperate MCU program to handle motor control and various pheripheral activities.<br/>
                      <br/>
                      Both C10 project and Dentslicer projects share many of the basic UI elements which delegated most of control functionalities to C++ for increased static check and runtime safety. <br/>
                      <br/>
                      Included a web server and basic IOT functionality to allow remote usage and better interfacing with a user PC. <br/>
                      IOT functionality is also used for over-the-air updates and updating resin database.<br/>
                      <br/>
                      Learned basic hardware UX planning and update/factory reset protocol on kernel(non-user) level.<br/>
                      <br/>
                      In hardware side, contributed to initial LED light simulator(UWP) to achieve 90% or above UV distribution. Written in UWP.<br/>
                      Hardware accelerated SDF(signed distance field) based thickness alteration. Used to shrink or thicken model accurately post-slice for different resins.<br/>
                    </Typography>               
                  </Grid>
                </Grid>
              </ProjectCard>

              <ProjectCard {...ds}>
                <Grid container spacing={3}>
                  <Grid  item xs={6}>
                    <Grid direction={'column'} >
                     <img src={require("./resources/projects/DentSlicer/ds0.PNG").default}  className={classes.media} />
   
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h2"  className={classes.bodyTxt} color="textPrimary">
                      Role: PM, main engineer.<br/>
                      Product: dental CAD<br/>
      
                    </Typography>  
                    <Typography variant="h5" className={classes.bodyTxt} color="textPrimary">
                      Windows native application built on Qt. 3D elements were later converted to OpenGL + GLFW.<br/><br/>
                      Also, product authentication is user instance based! So you are automatically logged out when accessing from different computer.<br/><br/>
                    </Typography>     
                    <Typography variant="h5" className={classes.bodyTxt} color="textPrimary">
                      Technologies used:<br/>
                    </Typography>   
                    <Typography variant="h6" className={classes.bodyTxt} color="textPrimary">
                      Ray-casting was used extensively for both collision detection and interior/exterior classification.<br/><br/>
                      Clipping algorithms and wound-count used for graphical slice analysis, later replaced by GPU accelerated uniform sampling.<br/><br/>
                      BVH and AABB for general purpose accelerators, used pretty much everywhere.<br/><br/>
                      Multisampling and random dithering for both anti-aliasing and degenerative case handling.<br/><br/>
                      Greedy mesh repair algorithm(uses accelerator for more practical performace).<br/><br/>
                      Signed Distance Field for generating uniform sampled grid.<br/><br/>
                      Marching cubes and poisson reconstruction for both repair, CSG, and offsetting.<br/><br/>
                      Automated differentiation library for better degenerate handling and performance.<br/><br/>
                    </Typography> 
                  </Grid>
                </Grid>
              </ProjectCard>
              <ProjectCard {...hixSite}>
                <Grid container spacing={3}>
                  <Grid  item xs={6}>
                    <Grid direction={'column'} >
                      <img src={require("./resources/projects/HixSite/site0.PNG").default}  className={classes.media} />
                      <img src={require("./resources/projects/HixSite/site1.PNG").default}  className={classes.media} />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h2"  className={classes.bodyTxt} color="textPrimary">
                      Role: PM, senior engineer.<br/><br/>
                      Company site with OAuth based social log-in.<br/><br/>
                      Socket based product instance, so that user can install software on multiple hardwares, but only one concurrent instance is allowed per license.<br/><br/>
                      Resin database.<br/><br/>
                      Product purchase and automated billing, CC info is stored in secured 3rd party provider, token based.<br/><br/>
                    </Typography>  
                  </Grid>
                </Grid>
              </ProjectCard>
              <ProjectCard {...eForm}>
                <Grid container spacing={3}>
                  <Grid  item xs={6}>
                    <Grid direction={'column'} >
                      <img src={require("./resources/projects/eForm/eform.png").default}  className={classes.media} />
                      <img src={require("./resources/projects/eForm/eform2.png").default}  className={classes.media} />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" component="h2"  className={classes.bodyTxt} color="textPrimary">
                      Role: UWP/backend engineer.<br/><br/>
                      Pretty much all-in-one digital form submission application.<br/><br/>
                      Supports pretty much all types of inputs from boring texts, numbers, and dates to camera capture(with image recognition!), barcode/seal scan, sign with pen(touch) with pressure, GPS(yes really!), image editor(MSPaint at your finger tips!), and too many to list.<br/><br/>
                      Supports existing UI in form of web(with OzToto Framework, hybrid app) or PDF(by automatically embedding each pages to the form.)<br/><br/>
                      Input validation and data submission built in!<br/><br/>
                      Various standard report tools like db data into various tables etc.<br/><br/>
                      Scripting in our own OZ scripting language or Javascript.<br/><br/>
                      Custom UI and application(it's a control library so you can embed it in whatever UWP application you are building).<br/><br/>
                    </Typography>  
                    <Button size="small" href="https://www.microsoft.com/en-au/p/oz-mobile/9wzdncrdjj7s?">Link to demo</Button>

                  </Grid>
                </Grid>
              </ProjectCard>
              <Box className={classes.endFooter}>
              </Box>
          </Grid>
      )
    }
}

export default withStyles(styles, {withTheme: true })(Body);