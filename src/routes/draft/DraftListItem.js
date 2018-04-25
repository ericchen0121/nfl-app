import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

class DraftListItem extends React.Component {

  static propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  render() {
    const { first_name, last_name, position } = this.props
    let list = null
    return (
      <ListItem>
        {position} {first_name} {last_name}
      </ListItem>
    );
  }
}

export default DraftListItem;
