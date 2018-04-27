import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReactPlayer from 'react-player';

const VID_HEIGHT = 360
const VID_WIDTH = 640
const VID_RATIO = .85

class DraftVideo extends React.Component {

  render() {
    const { youtube_list } = this.props;

    let vid = null;
    if (youtube_list.data.length !== 0) {
      const id = youtube_list.selected_video.id.videoId;
      const HEIGHT = `${VID_HEIGHT * VID_RATIO}px`
      const WIDTH = `${VID_WIDTH * VID_RATIO}px`

      vid = (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width={WIDTH}
          height={HEIGHT}
          style={{height: HEIGHT, width: WIDTH }}
          playing
          controls={true}
          />
      );
    }

    return <div className="video_player_container">{vid}</div>;
  }
}

export default DraftVideo;
