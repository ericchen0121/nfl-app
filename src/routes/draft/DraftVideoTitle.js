import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Draft.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { NFL_IMG, NFL_PARAMS, NFL_LOGO } from './DraftFilterConstants'

class DraftVideo extends React.Component {

  render() {
    const player = this.props.youtube_list.selected_player
    let nfl_img_id = null
    let team = null
    let position = null
    let name = null
    if (player) {
      nfl_img_id = player.NFL_IMG_ID
      team = player.TEAM
      position = player.POS
      name = player.PLAYER
    }

    let avatar = null
    if (nfl_img_id) (
      avatar = <img className={s.avatar} src={`${NFL_IMG}/${nfl_img_id}.png`} />
    )

    let logo_src = `${NFL_LOGO}/${team}.svg`
    let logo = <div className={s.logo} />
    if (team) {
      logo = (
        <span className={s.logo}>
          <img src={logo_src} />
        </span>
      )
    }

    let team_position_display = (
      <span className={s.flex_container}>
        <div>{ logo } { avatar }</div>
        <div className={s.sub_info_larger}>{ position } { name }</div>
      </span>
    )

    let title = null
    if (player) {
      return (
        <div className={s.video_player_title}>
          <div><span>{ team_position_display }</span></div>
        </div>
      )
    }
    return <div></div>
  }
}

export default withStyles(s)(DraftVideo);
