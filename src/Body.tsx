
import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import {ProjectCard, Language, Mediatype} from './ProjectCard';
import {Timeline, EventInfo}from './Timeline'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SectionHeader from './SectionHeader';
import LinearProgress from '@material-ui/core/LinearProgress';

import c10Thumb from './resources/icons/C10Icon.png';
import dsThumb from './resources/icons/dentslicerIcon.png';
import hixThumb from './resources/icons/hixIcon.png';
import efThumb from './resources/icons/ozEFormIcon.png';
import ffThumb from './resources/projects/Farflung/img0.png';
import w10Thumb from './resources/projects/Farflung/wip.svg';
import weddingThumb from './resources/icons/weddingIcon.gif';
import CSS from 'csstype';



const styles = (theme: Theme) => createStyles({
    container: {
        // marginLeft: '20px',
        // marginRight: '20px',
    },
    content: {
        backgroundColor: theme.palette.background.default,
        zIndex: 2,
        position: 'relative',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 80,
        [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        paddingLeft: 0,        },
    },
    padding0: {
        padding: '0 !important'
    },
    paragraph: {
      textIndent: "0.5rem",
    },

    bulletPts: {
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
      height: 200,
      width: "100%",
    },
  hello: {
    color: theme.palette.text.primary,
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: 'left',
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
  },

  skillContainer: {
    width: '70%',
  },

  skillTxt: {
    color: theme.palette.text.primary,
    fontSize: 13,
    lineHeight: 1,
    fontWeight: 600,
    textAlign: 'left',
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
  },

});

function toPara(text: string)
{
  return text.split("\n").map((i, key) => {
    return <p key={key}>{i}</p>;
  });
}
function toLi(text: string)
{
  const style: CSS.Properties =  {
      listStylePosition: "outside",
    };

  return (
  <ul style={style}>
  {
    text.split("\n").map((i, key) => {
      if (i.match(/\S/))
        return <li  key={key}>{i}</li>;
      })
  }
  </ul>);
}


interface Props extends WithStyles<typeof styles> {
}

//argh move this to db sometime later...
const c10 ={
  title: "C10",
  subtitle: "LCD resin printer firmware for dentistry",
  date: "2019-2020",
  imgSrc: c10Thumb,
  languages: [Language.Cpp, Language.Qt, Language.React],
  mediaInfo: [
    {type: Mediatype.img, src: require("./resources/projects/C10/main_menu.png").default as string, desc: "Firmware main menu."},
    {type: Mediatype.img, src: require("./resources/projects/C10/print_info.png").default as string, desc: "Firmware print info UI."},
    {type: Mediatype.img, src: require("./resources/projects/C10/print_menu.png").default as string, desc: "Firmware main UI."},
    {type: Mediatype.img, src: require("./resources/projects/C10/setting_menu.png").default as string, desc: "Firmware settings menu."},
    {type: Mediatype.img, src: require("./resources/projects/C10/web_menu.jpg").default as string, desc: "Web UI."},
  ]
}
const ds ={
  title: "DentSlicer",
  subtitle: "3D model builder, dental CAD, slicer",
  date: "2019-2021",
  imgSrc: dsThumb,
  languages: [Language.Cpp, Language.Qt, Language.OpenGL, Language.CMake],
  mediaInfo: [
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/HJp02qNoPMo", desc: "Model builder with auto-repair, auto-leveling, auto-smoothing."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/dMVU2Z66J1w", desc: "Support generation using ray-casting, various clipping algorithms."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/RxIfdI1Bq5k", desc: "Labeling using BVH accelerated CSG algorithm + ray-casted depth estimation."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/MgAci5Ix9T4", desc: "Freecut using CSG algorithms + BVH acceleration."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/D8aGtxvl67g", desc: "Arranging using polygonal+ box fit algorithms."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/qBB_EighESM", desc: "Face extension using DCEL(with const time access) structure + two manifold surface algorithms."},
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/rbJxayQYOGI", desc: "GPU slicer using stencil operations + face culling"},
    {type: Mediatype.img, src: require("./resources/projects/DentSlicer/ds0.PNG").default as string, desc: "Socket based license instance."},
  ]
}
const hixSite ={
  title: "Hix.co.kr",
  subtitle: "Company site with OAuth, product authentication, automated billing",
  date: "2020-2021",
  imgSrc: hixThumb,
  languages: [Language.Django, Language.Javascript, Language.React, Language.Python],
  mediaInfo: [
    {type: Mediatype.img, src: require("./resources/projects/HixSite/site0.PNG").default as string, desc: "Landing"},
    {type: Mediatype.img, src: require("./resources/projects/HixSite/site1.PNG").default as string, desc: "OAuth Login"},

  ]
  
}
const w10 ={
  title: "W10",
  subtitle: "Dental model/crown washer",
  date: "2021~",
  imgSrc: w10Thumb,
  languages: [Language.Dart, Language.Flutter, Language.SPICE],
  mediaInfo: [
    {type: Mediatype.img, src: require("./resources/projects/W10/w0.PNG").default as string, desc: "Firmware main UI."},
    {type: Mediatype.img, src: require("./resources/projects/W10/w1.PNG").default as string, desc: "Firmware progress UI."},
  ]
}
const wedding ={
  title: "Wedding Site",
  subtitle: "Wedding celebration site, hurrah!",
  date: "2021",
  imgSrc: weddingThumb,
  link: "https://legokangpalla.github.io/#/",
  languages: [Language.Dart, Language.Flutter],
}
const eForm ={
  title: "OZ eForm",
  subtitle: "e-paper signage/signing platform",
  date: "2016-2018",
  imgSrc: efThumb,
  languages: [Language.Cpp, Language.Javascript, Language.OpenCV, Language.UWP],
  mediaInfo: [
    {type: Mediatype.img, src: require("./resources/projects/eForm/eform.png").default as string, desc: "OZ eForm"},
    {type: Mediatype.img, src: require("./resources/projects/eForm/eform2.png").default as string, desc: "demo"},
  ]
}
const farflung ={
  title: "FarflungUE4",
  subtitle: "3D \"accurate\" galaxy gen, Elite clone",
  date: "2018~",
  imgSrc: ffThumb,
  languages: [Language.Cpp, Language.UE4],
  mediaInfo: [
    {type: Mediatype.ytb, src: "https://www.youtube.com/embed/glakdBOnvLw", desc: "Galaxy generation from surrogate model."},
  ]
}

class Body extends PureComponent<Props> {

    _renderSkill = (name: string, amt: number) =>
    {
      return(
        <div className={this.props.classes.skillContainer}>
          <Typography variant="h5" className={this.props.classes.skillTxt} color="textPrimary">
            {name + ": " + amt}
          </Typography> 
          <LinearProgress variant="determinate" value={amt} />
        </div>
      );
    }

    render () {
    const careerData: EventInfo[] = [
      {subtitle: "FORCS", time: "2016-2018, Seoul, Korea", title:"Native/Hybrid Application Developer",
        description: 
        "-Developed Oz Reporting Solutions for UWP\n"
        +"-Developed Android NDK client modules\n"
        +"-Developed native CFF font subsetting/embedding library\n"
        +"-Developed hybrid(webview) application framework for crossplatform UI\n"
        +"-Developed and maintained CV algorithm for document scanning and analysis\n"
      },

      {subtitle: "Hix", time: "2019-2021, Daejon, Korea", title:"PM, Software Engineer, Electrical Engineer",
        description: 
        "-Developed firmwares for 3D printers and washers\n"
        +"-Developed dental CAD/slicer\n"
        +"-Developed company site + auth server\n"
        +"-Developed in-company tools\n"
        +"-Ran circuit analysis, hardware acqusition\n"
      }
    ];

    const educationData: EventInfo[] = [
      {subtitle: "UNSW / Bsc CS", time: "2012 - 2015, Sydney, NSW, Australia", title:"",description:""},
      {subtitle: "UNSW / Be EE(Not completed)", time: "2012 - 2015, Sydney, NSW, Australia", title:"",description:""},
    ];

      const classes = this.props.classes;
      return (
          <Grid
              container
              justify={'center'}
              className={classes.content}>
            
              <Typography variant="h3" color="textSecondary">
                Wonbin -John- Kang, a software engineer
              </Typography> 
              <Typography variant="body1" className={classes.paragraph} color="textPrimary" paragraph>
                {toPara(
                `Hi, I'm a software engineer specializing in 3D graphics, high performance computing, native/web/mobile development.
                My approach to engineering is minimalism with focus in longevity and ease of maintanence, leveraging both open-source community and professional tools to minimize project scope.
                Striving for balance in practicality and performance, meticulously profiling projects for data-driven optimization process.
                I believe each project I produce is an asset not a technical debt to the company.
                Currently working and living in Daejon, South Korea.`
                )}
              </Typography> 
              <Button size="small" href="https://bitbucket.org/legokangpalla/">bitbucket.org/legokangpalla</Button>
              <Button size="small" href="https://github.com/legokangpalla">github.com/legokangpalla</Button>
              <Button size="small" href="legokangpalla@gmail.com">legokangpalla@gmail.com</Button>
              <Button size="small" href="https://www.linkedin.com/in/john-kang-8a37a453/">linkedin</Button>
              <Button size="small" href="tel:+821099788577">+821099788577</Button>

              <SectionHeader title="Education"/>
              <Timeline experiences={educationData}></Timeline>
              <SectionHeader title="Career"/>
              <Timeline experiences={careerData}></Timeline>
              <SectionHeader title="Projects"/>
              <ProjectCard {...c10}>
                <Typography variant="subtitle1"  className={classes.paragraph} color="textSecondary">
                  {toPara(
                    `
                    Role: PM, senior engineer.
                    Product: firmware for 3D printer.
                    `
                  )}
                </Typography>  
                <Typography variant="body1" className={classes.bulletPts} color="textPrimary">
                  {toLi(
                   `
                   Qt application framework running on top of X server with a seperate MCU program to handle motor control and various peripheral activities.
                    Both C10 project and Dentslicer projects share many of the basic UI elements which delegated most of control functionalities to C++ for increased static check and runtime safety. 
                    Included a web server and basic IOT functionality to allow remote usage and better interfacing with a user PC. 
                    IOT functionality is also used for over-the-air updates and updating resin database.
                    Learned basic hardware UX planning and update/factory reset protocol on kernel(non-user) level.
                    In hardware side, contributed to initial LED light simulator(UWP) to achieve 90% or above UV distribution. Written in UWP.
                    Hardware accelerated SDF(signed distance field) based thickness alteration. Used to shrink or thicken model accurately post-slice for different resins.
                    `
                  )}

                </Typography>               
              </ProjectCard>
              <ProjectCard {...ds}>
                <Typography variant="subtitle1"  className={classes.paragraph} color="textSecondary">
                  {toPara(
                    `
                    Role: PM, main engineer.
                    Product: dental CAD
                    `
                  )}
                </Typography>  
                <Typography variant="subtitle1" className={classes.paragraph} color="textSecondary">
                  {toPara(
                    `
                    Windows native application built on Qt. 3D elements were later converted to OpenGL + GLFW.
                    Also, product authentication is user instance based! So you are automatically logged out when accessing from different computer.
                    `
                  )}

                </Typography>     
                <Typography variant="subtitle1" className={classes.paragraph} color="textSecondary">
                  Technologies used:
                </Typography>   
                <Typography variant="body1" className={classes.paragraph} color="textPrimary">

                  {toLi(
                   `
                    Ray-casting was used extensively for both collision detection and interior/exterior classification.
                    Clipping algorithms and wound-count used for graphical slice analysis, later replaced by GPU accelerated uniform sampling.
                    BVH and AABB for general purpose accelerators, used pretty much everywhere.
                    Multisampling and random dithering for both anti-aliasing and degenerative case handling.
                    Greedy mesh repair algorithm(uses accelerator for more practical performace).
                    Signed Distance Field for generating uniform sampled grid.
                    Marching cubes and poisson reconstruction for both repair, CSG, and offsetting.
                    Automated differentiation library for better degenerate handling and performance.
                    `
                  )}

                </Typography> 
              </ProjectCard>
              <ProjectCard {...hixSite}>
                <Typography variant="subtitle1"   className={classes.paragraph} color="textSecondary">

                  {toPara(
                    `
                    Role: PM, senior engineer.
                    Company site with OAuth based social log-in.
                    `
                  )}
                </Typography>   
                <Typography variant="body1" className={classes.paragraph} color="textPrimary">
                  {toLi(
                   `
                    Socket based product instance, so that user can install software on multiple hardwares, but only one concurrent instance is allowed per license.
                    Resin database.
                    Product purchase and automated billing, CC info is stored in secured 3rd party provider, token based.
                    `
                  )}

                </Typography>  
              </ProjectCard>
              <ProjectCard {...w10}>
                <Typography variant="subtitle1" className={classes.paragraph} color="textSecondary">
                  {toPara(
                    `
                    Role: PM, senior engineer.
                    Product: firmware for 3D printer washer.
                    `
                  )}
                </Typography>   
                <Typography variant="body1" className={classes.paragraph} color="textPrimary">
                  {toLi(
                   `
                    Pretty much what I think C10 firmware should have been, based on experiences from C10 of course.
                    Most funtionalities are contained within application launcher(customized flutter engine) and the main application, even touch calibration data itself.
                    Very little kernel-level functions are used, even periphery.
                    MCU board has been removed, to be replaced with cheap H-bridge circuit and multi-channel MOSFETs(this might not even be neccessary).
                    Remaining GPIO on our SBC board(same as C10) and even hardware PWMs have been plenty for all our purposes.
                    Working with Dart and Flutter have been immensely pleasurable.
                    `
                  )}

                </Typography>  
              </ProjectCard>
              <ProjectCard {...wedding}>
              </ProjectCard>
              <ProjectCard {...eForm}>
                <Typography variant="subtitle1" className={classes.paragraph} color="textSecondary">
                  {toPara(
                    `
                    Role: UWP/backend engineer.
                    Product: firmware for 3D printer.
                    `
                  )}
                </Typography>   
                <Typography variant="body1" className={classes.paragraph} color="textPrimary">
                  {toLi(
                   `
                    Pretty much all-in-one digital form submission application.
                    Supports pretty much all types of inputs from boring texts, numbers, and dates to camera capture(with image recognition!), barcode/seal scan, sign with pen(touch) with pressure, GPS(yes really!), image editor(MSPaint at your finger tips!), and too many to list.
                    Supports existing UI in form of web(with OzToto Framework, hybrid app) or PDF(by automatically embedding each pages to the form.)
                    Input validation and data submission built in!
                    Various standard report tools like db data into various tables etc.
                    Scripting in our own OZ scripting language or Javascript.
                    Custom UI and application(it's a control library so you can embed it in whatever UWP application you are building).
                    `
                   )}    
                </Typography>  
                <Button size="small" href="https://www.microsoft.com/en-au/p/oz-mobile/9wzdncrdjj7s?">Link to demo</Button>
              </ProjectCard>
              <ProjectCard {...farflung}>
                <Typography variant="body1" className={classes.paragraph} color="textPrimary">

                  {toLi(
                   `
                  UE4 Port of my previous Farflung project. Procedural galaxy generation. WIP
                  Currently working features:
                  Realistic spiral shape using elliptical paths(Wave density theorem).
                  Uses pre-generated surrogate model to procedurally generate stars.
                  Markov star name generation.
                  Modular, but all modules now depend on UE4 core library.
                    `
                   )}    

                </Typography>  
              </ProjectCard>
              <SectionHeader title="Skills"/>
              {this._renderSkill("English", 100)}
              {this._renderSkill("Korean", 100)}
              {this._renderSkill("C++", 100)}
              {this._renderSkill("CMake", 90)}
              {this._renderSkill("WebAssembly/WebGL", 50)}
              {this._renderSkill("Dart/Flutter", 90)}
              {this._renderSkill("OpenGL/GLSL", 90)}
              {this._renderSkill("SPICE/EE", 40)}
              {this._renderSkill("Typescript", 90)}
              {this._renderSkill("Javascript", 60)}
              {this._renderSkill("Qt", 90)}
              {this._renderSkill("React", 70)}
              {this._renderSkill("Python/Django", 50)}
              {this._renderSkill("Static code analysis", 90)}
              {this._renderSkill("Profiling", 80)}
              {this._renderSkill("TDD", 90)}
              {this._renderSkill("Test engineering", 80)}




              <Box className={classes.endFooter}></Box>
          </Grid>
      )
    }
}

export default withStyles(styles, {withTheme: true })(Body);