
import React, {PureComponent} from 'react';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import { colors } from '@material-ui/core';




const styles = (theme: Theme) => createStyles({
  bar: {
    content: '""',
    width: 4,
    opacity: 0.2,
    marginLeft: -2,
    position: 'absolute',
    left: '50%',
    backgroundColor: theme.palette.text.primary,
  },
});



interface Props extends WithStyles<typeof styles> {
  barClass: string,
  barHeight: number
}

class VerticalBar extends PureComponent<Props> {
  render () {
    const {classes, barClass, barHeight} = this.props;
    const barClassName = classes.bar + " " +barClass;
      return (
        <div style={{ height: barHeight}} className={barClassName}/>
      )
  }
}

export default withStyles(styles, {withTheme: true })(VerticalBar);
