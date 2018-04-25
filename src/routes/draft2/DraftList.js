import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import DraftListItem from './DraftListItem';

class DraftList extends React.Component {

  render() {
    return (
      <List>
        <DraftListItem />
      </List>
    );
  }
}

export default DraftList;
