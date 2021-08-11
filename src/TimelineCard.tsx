import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const styles = (theme: Theme) => createStyles({
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 0,
    // color: theme.palette.primary[ 500 ],
    marginTop: 10
  },
  header3: {
    color: '#414141',
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: 'center',
    marginBottom: 0,
    marginToo: 0
  },
  header4: {
    color: '#878787',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.1,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  description: {
    wordWrap: 'break-word',
    width: '100%'
  },
  container: {
    align: "center"
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {year}
        </Typography>
        <Typography variant="h5" component="h2">
          {company}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
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