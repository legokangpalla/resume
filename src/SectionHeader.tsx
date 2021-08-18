import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  sectionTitle: {
    color: theme.palette.text.primary,
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: 'center',
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
  },
});



interface Props extends WithStyles<typeof styles> {
  title: string
}

class SectionHeader extends PureComponent<Props> {
  render () {
    const { classes, title } = this.props;
      return (
      // <span className={classes.sectionTitle}>{title}</span>

        <Typography variant="h6" className={classes.sectionTitle}>
          {title}
        </Typography> 
      )
  }
}

export default withStyles(styles, {withTheme: true })(SectionHeader);



