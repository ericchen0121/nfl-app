import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactPlayer from 'react-player';

class DraftVideo extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  render() {
    const { youtube_list } = this.props;

    let vid = null;
    if (youtube_list.data.length !== 0) {
      const id = youtube_list.data[0].id.videoId;
      vid = (
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} playing />
      );
    }

    return <div className="video_player_container">{vid}</div>;
  }
}

export default DraftVideo;
