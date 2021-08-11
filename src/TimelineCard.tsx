import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';




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
  }
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
        <div className={classes.date}>{year}</div>
        <h3 className={classes.header3}>{company}</h3>
        <h4 className={classes.header4}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true })(TimelineCard);