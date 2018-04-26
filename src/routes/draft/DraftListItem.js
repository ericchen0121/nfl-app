import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Icon from 'react-icons-kit';
import { socialYoutubeOutline } from 'react-icons-kit/ionicons/socialYoutubeOutline';

class DraftListItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  render() {
    const { name, position } = this.props;
    const query = `${name}+${position}+highlights+draft`;

    const yt = `https://www.youtube.com/results?search_query=${query}`;
    const link = (
      <a href={yt} target="_blank">
        <Icon icon={socialYoutubeOutline} />
      </a>
    );

    const list = null;
    return (
      <ListItem
        key={name}
        onClick={() => this.props.actions.fetchYoutubeList(query)}
      >
        {position} {name} {link}
      </ListItem>
    );
  }
}

export default DraftListItem;
