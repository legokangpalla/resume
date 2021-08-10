
import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    container: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    content: {
        zIndex: 2,
        position: 'relative',
        paddingRight: 10,
        paddingLeft: 20
    },
    padding0: {
        padding: '0 !important'
    }
});


interface Props extends WithStyles<typeof styles> {
}


class Content extends PureComponent<Props> {
    render () {
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
          </Grid>
      )
    }
}

export default withStyles(styles, {withTheme: true })(Content);