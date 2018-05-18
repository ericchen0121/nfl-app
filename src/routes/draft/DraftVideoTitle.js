import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import s from './Draft.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { NFL_IMG, NFL_PARAMS, NFL_LOGO } from './DraftConstants';
import { Icon } from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';

class DraftVideo extends React.Component {
  render() {
    const player = this.props.youtube_list.selected_player;
    const selected_video = this.props.youtube_list.selected_video;

    let nfl_img_id = null;
    let team = null;
    let position = null;
    let name = null;
    if (player) {
      nfl_img_id = player.NFL_IMG_ID;
      team = player.TEAM;
      position = player.POS;
      name = player.PLAYER;
    }

    let avatar = null;
    if (nfl_img_id)
      avatar = (
        <img
          className={classnames(s.avatar_large)}
          src={`${NFL_IMG}/${nfl_img_id}.png`}
        />
      );

    const logo_src = `${NFL_LOGO}/${team}.svg`;
    let logo = <div className={s.logo} />;
    if (team) {
      logo = (
        <span className={s.logo}>
          <img src={logo_src} />
        </span>
      );
    }

    const team_position_display = (
      <span
        className={classnames(s.flex_container_row, s.video_title_container)}
      >
        <div className={s.avatar_container}>{avatar}</div>
        <div className={classnames(s.sub_info_smaller, s.sub_info_container)}>
          {logo} <span className={s.postion_container}>{position}</span> {name}
        </div>
      </span>
    );

    let title = null;
    let channel = null;
    let channel_id = null;

    if (selected_video) {
      title = selected_video.snippet.title;
      channel = selected_video.snippet.channelTitle;
      channel_id = selected_video.snippet.channelId;
      return (
        <div
          className={classnames(s.flex_container_row, s.video_player_title_container)}
        >
          <div>
            <div>
              <span>{team_position_display}</span>
            </div>
          </div>
          <div className={classnames(s.item_playlist, s.margin_top_title)}>
            <div className={s.item_title}>{title}</div>
            <div className={classnames(s.flex_container_row)}>
              <a
                className={s.channel_link}
                href={`https://www.youtube.com/channel/${channel_id}`}
                target="blank"
              >
                <span className={classnames(s.item_channel)}>{channel}</span>
                <Icon
                  style={{ color: '#E62117' }}
                  className={s.item_yt_icon}
                  icon={socialYoutubeOutline}
                  size={12}
                />
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default withStyles(s)(DraftVideo);
