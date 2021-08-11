import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  sectionTitle: {
    color: '#3d4451',
    fontSize: 34,
    lineHeight: 1.2,
    fontWeight: 600,
    textAlign: 'center',
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
      <span className={classes.sectionTitle}>{title}</span>
      )
  }
}

export default withStyles(styles, {withTheme: true })(SectionHeader);



