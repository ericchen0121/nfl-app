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
const NFL_LOGO = 'https://static.nfl.com/static/site/img/logos/svg/teams' // https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg

class DraftListItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  handleItemClick = () => {
    const { player } = this.props
    this.props.actions.selectDraftPlayer(player)
    this.props.actions.fetchYoutubeList(this.createQuery(player.PLAYER, player.POS))
  }

  createQuery = (name, position) => {
    return `${name}+${position}+highlights+draft`
  }

  render() {
    const { player } = this.props;
    const name = player.PLAYER
    const position = player.POS
    const nfl_img_id = player.NFL_IMG_ID
    const team  = player.TEAM
    const draft_rk = player.DRAFT_RK
    const query = this.createQuery(name, position)
    const handleItemClick = this.handleItemClick.bind(this)

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

    let logo_src = `${NFL_LOGO}/${team}.svg`
    let logo = <div className={s.logo} />
    if (team) {
      logo = (
        <div className={s.logo}>
          <img src={logo_src} />
        </div>
      )
    }

    return (
      <ListItem
        key={name}
        onClick={ handleItemClick }
      >
         { draft_rk }{logo} {avatar} {position} {name} {link}
      </ListItem>
    );
  }
}

export default withStyles(s)(DraftListItem);
