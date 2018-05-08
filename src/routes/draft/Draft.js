/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Draft.css';

import DraftListItem from './DraftListItem';
import DraftVideo from './DraftVideo';
import DraftVideoTitle from './DraftVideoTitle';
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import PLAYERS from './DraftPlayers';
import { FILTERS, DEFAULT_TOP_LEVEL_FILTER } from './DraftFilterConstants'
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Draft extends React.Component {
  state = {
    top_level_filter_selected: DEFAULT_TOP_LEVEL_FILTER,
    lower_level_filter_selected: FILTERS[DEFAULT_TOP_LEVEL_FILTER][0]
  }

  onTopLevelFilterChange = (filter) => () => {
    this.setState({
      top_level_filter_selected: filter,
      lower_level_filter_selected: FILTERS[filter][0] // select the first lower level filter
    })
  }

  onLowerLevelFilterChange = (e, filter) => {
    this.setState({
      lower_level_filter_selected: filter // select the first lower level filter
    })
  }

  // players is ARRAY of player objects
  // returns filtered array of player objects based on top and lower level filters
  filterResults = (players) => {
    let {top_level_filter_selected, lower_level_filter_selected} = this.state
    let key = null
    if(top_level_filter_selected === 'ROUND') {
      key = 'DRAFT_RD'
    } else if (top_level_filter_selected === 'TEAM') {
      key = 'TEAM'
    } else if (top_level_filter_selected === 'POSITION') {
      key = 'POS'
    }

    let filtered_players = players.filter(player => {
      return player[key] === lower_level_filter_selected
    })

    return filtered_players
  }

  sortResults = (players) => {
    return players.sort((a,b) => a.DRAFT_RK - b.DRAFT_RK)
  }

  removeUndrafted = (players) => {
    return players.filter(player => {
      return player['DRAFT_RD'] !== 0
    })
  }

  render() {
    const { classes } = this.props;
    const { top_level_filter_selected, lower_level_filter_selected  } = this.state
    let order_players = this.sortResults(this.filterResults(this.removeUndrafted(PLAYERS.players)))

    const list = order_players.map(p => (
      <DraftListItem
        player={p}
        name={p.PLAYER}
        position={p.POS}
        nfl_img_id={p.NFL_IMG_ID}
        team={p.TEAM}
        draft_rk={p.DRAFT_RK}
        {...this.props}
      />
    ))

    return (
      <div>
        <DraftFilters
          filters = {FILTERS}
          onTopLevelFilterChange={this.onTopLevelFilterChange}
          onLowerLevelFilterChange={this.onLowerLevelFilterChange}
          top_level_filter_selected={top_level_filter_selected}
          lower_level_filter_selected= {lower_level_filter_selected}
        />
        <div className={s.wrapper_container}>
          <div className={s.item_list}>
            <List>{list}</List>
          </div>
          <div className={s.item_vids}>
            <DraftVideoTitle {...this.props} />
            <DraftVideo {...this.props} />
          </div>
          <div className={s.item_playlist}>
            <DraftPlaylist {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default withStyles(s)(
  connect(mapStateToProps, mapDispatchToProps)(Draft),
);
