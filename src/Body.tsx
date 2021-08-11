
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import {Timeline, EventInfo}from './Timeline'

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
    }
});


interface Props extends WithStyles<typeof styles> {
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
              <ProjectCard />
              <ProjectCard />
          </Grid>
      )
    }
}

export default withStyles(styles, {withTheme: true })(Body);