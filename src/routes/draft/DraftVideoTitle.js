import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Draft.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { NFL_IMG, NFL_PARAMS, NFL_LOGO } from './DraftConstants'

class DraftVideo extends React.Component {

  render() {
    const player = this.props.youtube_list.selected_player
    const selected_video = this.props.youtube_list.selected_video

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
      avatar = <img className={classnames(s.avatar_large)} src={`${NFL_IMG}/${nfl_img_id}.png`} />
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
      <span className={classnames(s.flex_container_row, s.video_title_container)}>
        <div className={s.avatar_container}>{ avatar }</div>
        <div className={classnames(s.sub_info_smaller, s.sub_info_container)}>{ logo } { position } { name }</div>
      </span>
    )

    // if (player) {
    //   return (
    //     <div className={s.video_player_title}>
    //       <div><span>{ team_position_display }</span></div>
    //     </div>
    //   )
    // }
    let title = null
    let channel = null;
    if (selected_video) {
      title = selected_video.snippet.title
      channel = selected_video.snippet.channelTitle

      return (
        <div className={classnames(s.flex_container_row, s.video_player_title_container)}>
          <div>
            <div><span>{ team_position_display }</span></div>
          </div>
          <div className={classnames(s.item_playlist, s.margin_top_title)}>
            <div className={s.item_title}>{title}</div>
            <div className={s.item_channel}>{channel}</div>
          </div>
        </div>
      )
    }
    return <div></div>
  }
}

export default withStyles(s)(DraftVideo);
