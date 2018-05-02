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
import DraftPlaylist from './DraftPlaylist';
import DraftFilters from './DraftFilters';
import PLAYERS from './DraftPlayers';

import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const FILTERS = {
  ROUND: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    'udfa'
  ],
  TEAM: [
    'ARI',
    'ATL',
    'BAL',
    'BUF',
    'CAR',
    'CHI',
    'CIN',
    'CLE',
    'DAL',
    'DEN',
    'DET',
    'GB',
    'HOU',
    'IND',
    'JAX',
    'KC',
    'LAC',
    'LAR',
    'MIA',
    'MIN',
    'NE',
    'NO',
    'NYG',
    'NYJ',
    'OAK',
    'PHI',
    'PIT',
    'SEA',
    'SF',
    'TB',
    'TEN',
    'WSH'
  ],
  POSITION: [
    'QB',
    'RB',
    'WR',
    'TE',
    'FB',
    'OT',
    'OG',
    'C',
    'DE',
    'DT',
    'ILB',
    'OLB',
    'CB',
    'S',
    'LS',
    'K',
    'P'
  ]
}

const DEFAULT_TOP_LEVEL_FILTER = 'ROUND'

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

  render() {
    const { classes } = this.props;
    const { top_level_filter_selected, lower_level_filter_selected  } = this.state
    let order_players = PLAYERS.players.sort((a,b) => b.DRAFT_RK - a.DRAFT_RK)
    const list = order_players.map(p => (
      <DraftListItem
        name={p.PLAYER}
        position={p.POS}
        nfl_img_id={p.NFL_IMG_ID}
        team={p.TEAM}
        draft_rk = {p.DRAFT_RK}
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
