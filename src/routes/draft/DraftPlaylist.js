import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Draft.css';
import Divider from 'material-ui/Divider';

class DraftPlaylist extends Component {

  render() {
    const { youtube_list } = this.props;
    let list = youtube_list.data
    let imgs = list.map((item) => {
      let url = item.snippet.thumbnails.default.url
      let title = item.snippet.title
      return (
        <div className={s.item_playlist} onClick={() => this.props.actions.selectYoutubeVideo(item)}>
          <img src={url} />
          <div className={s.item_title}>{title}</div>
          <Divider />
        </div>


      )
    })

    return (
        <div className="wrapper">
          {imgs}
        </div>
    )
  }
}

export default withStyles(s)(DraftPlaylist);
