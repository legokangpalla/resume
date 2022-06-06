import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import VerticalBar from './VerticalBar';
import TimelineCard from './TimelineCard';
import {LRTimelineContainer, Alignment} from './LRTimelineContainer';




const styles = (theme: Theme) => createStyles({
  container: {
      alignItems: 'stretch',
      justifyItems: 'center',
      [theme.breakpoints.down('md')]: {
          alignItems: 'stretch',
          justifyItems: 'space-evenly',
      },
  },
  barClass: {
      // height: 200,
      top: 80,
      [theme.breakpoints.down('md')]: {
          height: 300,
          top: 20,
          zIndex: -1
      },
  },
  relative: {
      position: 'relative',
  },
  clear: {
      position: 'relative',
      '*zoom': 1,
      
      '&:before': {
          content: '""',
          display: 'table',
      },
      
      '&:after': {
          content: '""',
          display: 'table',
          clear: 'both'
      }
  }
});

export type EventInfo = {
  time: string,
  subtitle: string,
  title: string,
  description: string,
}


interface Props extends WithStyles<typeof styles> {
  experiences: Array<EventInfo>,
  barLength: number
}



class _Timeline extends PureComponent<Props> {

  _renderCard =  (experience: EventInfo, index: number) => {
    return (
      <LRTimelineContainer key={index} alignment={index % 2 === 0 ? Alignment.Left : Alignment.Right}>
        <TimelineCard title={experience.title}
          company={experience.subtitle}
          description={experience.description}
          year={experience.time}
        />
      </LRTimelineContainer>
   );
  }
  render () {
    const classes = this.props.classes;
    return (
      <Grid
          container
          item
          xs={12}
          spacing={0}
          className={classes.container}
          direction="column"
          justify="center">
          {/* <SectionTitle title='Work Experience'/> */}
          <div style={{position: 'relative'}}>
              <div className={classes.clear}>
                  <VerticalBar barClass={classes.barClass} barHeight={this.props.barLength}/>
                  {
                      this.props.experiences && this.props.experiences.map(this._renderCard)
                  }
              </div>
          </div>
      </Grid>
    )
  }
}

export const Timeline =  withStyles(styles, {withTheme: true })(_Timeline);