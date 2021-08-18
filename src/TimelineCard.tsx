import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const styles = (theme: Theme) => createStyles({
  container: {
    align: "center"
  },
});


interface Props extends WithStyles<typeof styles> {
    classes: any,
    year: string,
    company: string,
    title: string,
    description: string,
}



class TimelineCard extends PureComponent<Props> {

  render () {
    const {
        classes,
        year,
        title,
        company,
        description
    } = this.props;
    return (


      <Grid className={classes.container} container direction="column" spacing={0}>

        <Typography  variant="subtitle1" gutterBottom>
          {year}
        </Typography>
        <Typography variant="h6" >
          {company}
        </Typography>
        <Typography variant="subtitle1">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {
            description.split("\n").map(function(item, idx) {
                return (
                    <span key={idx}>
                        {item}
                        <br/>
                    </span>
                )
            })
          }
        </Typography>
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true })(TimelineCard);