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
import PLAYERS from './DraftPlayers';

import List from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Draft extends React.Component {
  render() {
    const { classes } = this.props;
    const list = PLAYERS.players.map(p => (
      <DraftListItem
        name={p.PLAYER}
        position={p.POS}
        nfl_img_id={p.NFL_IMG_ID}
        {...this.props}
      />
    ));
    return (
      <div className={s.wrapper}>
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
