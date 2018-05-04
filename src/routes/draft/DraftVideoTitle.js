import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

class DraftVideo extends React.Component {

  render() {
    // {} = this.props
    console.log(this.props.youtube_list.selected_player)
    const player = this.props.youtube_list.selected_player
    let title = null
    if (player) {
      return (
        <div className="video_player_title">
            { player.POS } { player.PLAYER }
        </div>
      )
    }
    return <div></div>
  }
}

export default DraftVideo;
