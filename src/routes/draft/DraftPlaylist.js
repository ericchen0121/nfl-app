import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Draft.css';
import Divider from 'material-ui/Divider';

class DraftPlaylist extends Component {
  render() {
    const { youtube_list } = this.props;
    const list = youtube_list.data;
    const imgs = list.map(item => {
      const url = item.snippet.thumbnails.medium.url;
      const title = item.snippet.title;
      const channel = item.snippet.channelTitle;

      return (
        <div
          className={s.item_playlist}
          onClick={() => this.props.actions.selectYoutubeVideo(item)}
        >
          <img className={s.yt_img} src={url} />
          <div className={s.item_title}>{title}</div>
          <div className={s.item_channel}>{channel}</div>
          <Divider />
        </div>
      );
    });

    return <div className="wrapper">{imgs}</div>;
  }
}

export default withStyles(s)(DraftPlaylist);
