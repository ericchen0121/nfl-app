import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Draft.css';

import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Icon from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';


const NFL_IMG = "https://static.nfl.com/static/content/static/img/combine/2018/headshots/1400x1000"
const NFL_PARAMS = "&f=png&w=308&c=71"

class DraftListItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  render() {
    const { name, position, nfl_img_id } = this.props;
    const query = `${name}+${position}+highlights+draft`;

    const yt = `https://www.youtube.com/results?search_query=${query}`;
    const link = (
      <a href={yt} target="_blank">
        <Icon icon={socialYoutubeOutline} />
      </a>
    );


    let avatar = null
    if (nfl_img_id) (
      avatar = <img className={s.avatar} src={`${NFL_IMG}/${nfl_img_id}.png`} />
    )

    return (
      <ListItem
        key={name}
        onClick={() => this.props.actions.fetchYoutubeList(query)}
      >
         {avatar} {position} {name} {link}
      </ListItem>
    );
  }
}

export default withStyles(s)(DraftListItem);
