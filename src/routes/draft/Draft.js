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
import List from 'material-ui/List';
import DraftListItem from './DraftListItem'
import PLAYERS from './DraftPlayers'

class Draft extends React.Component {

  render() {
    let list = PLAYERS.players.map(p => {
      return (
        <DraftListItem
          name={p.PLAYER}
          position={p.POS}
        />
      )
    })


    return (
      <div className={s.root}>
        <div className={s.container}>
          <List>
            { list }
          </List>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Draft);
