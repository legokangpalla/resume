import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';


const styles = (theme: Theme) => createStyles({
    smallScreenBox: {
        display: 'none',
        // borderColor: theme.palette.primary[ 500 ],
        padding: 20,
        borderTopWidth: 5,
        borderTopStyle: 'solid',
        marginBottom: 35,
        zIndex: 10,
        [theme.breakpoints.down('md')]: {
            display: 'block'
        },
    },
    paper: {
        // borderColor: theme.palette.primary[ 500 ],
        // width: 200,
        // height: 200,
        padding: 20,
        borderTopWidth: 5,
        borderTopStyle: 'solid',
        // color: '#76F782',

    },
    paperLeft: {
        marginRight: 35
    },
    paperRight: {
        marginLeft: 35
    },
    date: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: 0,
        // color: theme.palette.primary[ 500 ],
        marginTop: 10
    },
    bigScreenBox: {

        // width: 200,
        // height: 200,
        // backgroundColor: '#F77676',
        maxWidth: '50%',
        minWidth: '50%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        // color: '#757575',
        fontSize: 16,
        lineHeight: 1.5,
        marginBottom: 25,
        position: 'relative',
        zIndex: 10
    },
    boxLeft: {
        float: 'left',
        clear: 'left'
    },
    boxRight: {
        float: 'right',
        clear: 'right',
        top: 30,
    },
    dot: {
        top: 80,
        width: 8,
        height: 8,
        display: 'block',
        position: 'absolute',
        borderRadius: '50%',
        // backgroundColor: theme.palette.primary[ 500 ],
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        
    },
    arrow: {
        top: 60,
        display: 'block',
        content: "''",
        position: 'absolute',
        width: 0,
        height: 0,
        boxSizing: 'border-box',
        border: '1em solid black',
        borderColor: 'transparent transparent white white',
        transformOrigin: '0 0',
        boxShadow: '-1px 1px 1px 0 rgba(0, 0, 0, 0.2)'
    },
    arrowRight: {
        right: 4,
        top: 105,
        transform: 'rotate(-135deg)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    arrowLeft: {
        left: 35,
        top: 60,
        transform: 'rotate(45deg)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    dotRight: {
        right: 0,
        marginRight: -4,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    dotLeft: {
        left: 0,
        marginLeft: -4,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    }
});

export enum Alignment
{
    Left,
    Right
};


interface Props extends WithStyles<typeof styles> {
    alignment: Alignment
}



class _LRTimelineContainer extends PureComponent<Props> {

  render () {
    const {classes, alignment} = this.props;
    let boxCN = classes.bigScreenBox;
    let paper = classes.paper;
    let arrow = classes.arrow;
    let dot = classes.dot;
    if(alignment === Alignment.Left)
    {
      boxCN +=  " " +classes.boxLeft;
      paper +=  " " +classes.paperLeft;
      arrow +=  " " +classes.arrowRight;
      dot +=  " " +classes.dotRight;
    }
    else
    {
      boxCN +=  " " +classes.boxRight;
      paper +=  " " +classes.paperRight;
      arrow +=  " " +classes.arrowLeft;
      dot +=  " " +classes.dotLeft;
    }

    // boxCN += " " + classes.boxRight;
    // paper += classes.paperRight;
    // arrow += classes.arrowLeft;
    // dot += classes.dotLeft;
    return (
      <div >
        <div className={boxCN}>
          <Paper className={paper}>
            <span className={arrow}/>
            {this.props.children}
          </Paper>
            <span className={dot}/>
        </div>
        <Paper className={classes.smallScreenBox}>
          {this.props.children}
        </Paper>
      </div>);
  }
}

export const LRTimelineContainer =  withStyles(styles, {withTheme: true })(_LRTimelineContainer);