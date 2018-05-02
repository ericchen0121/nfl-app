import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import s from './Draft.css';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


class DraftFilters extends Component {

  render() {
    const { classes, onTopLevelFilterChange, onLowerLevelFilterChange, top_level_filter_selected, lower_level_filter_selected, filters } = this.props;
    // let handleLowerLevel = this.handleLowerLevel.bind(this)

    let top_level_buttons = (
      Object.keys(filters).map((filter) => {
        return (
          <Button
            color="primary"
            className={classes.button}
            onClick={ onTopLevelFilterChange(filter) }
          >
            { filter }
          </Button>
        )
      })
    )

    // NOTE: BUTTONS - BACKUP BUT NOT CURRENTLY USED
    // let lower_level_buttons = filters[top_level_filter_selected].map(filter => { <Button size="small" color='secondary' className={classes.button}>{ filter }</Button> })

    let lower_level_appbar = (
      <AppBar position="static" color="default">
        <Tabs
          value={ lower_level_filter_selected }
          onChange = { onLowerLevelFilterChange }
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          {
            filters[top_level_filter_selected].map(filter => <Tab label={ filter } value = { filter }/>)
          }
        </Tabs>
      </AppBar>
    )

    return (
        <div className="filter_container">
          { top_level_buttons }
          { lower_level_appbar }
        </div>
    )
  }
}

export default withStyles(styles)(DraftFilters);
