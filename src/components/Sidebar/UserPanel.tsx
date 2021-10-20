import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Types } from '../PropTypes';
import './UserPanel.css';

interface UserPanelProps {
  username: string,
  imageUrl?: string,
  link: string,
  status: string,
  statusType: Types
}
class UserPanel extends Component<UserPanelProps, {}> {
  static defaultProps = {
    imageUrl: undefined,
    link: '#',
    status: '',
    statusType: 'success',
  };

  state = {};

  render() {
    const {
      imageUrl, username, link, status, statusType,
    } = this.props;
    const IconWrapper = link ? Link : React.Fragment;
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src={imageUrl} className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>{username}</p>
          <IconWrapper to={link}>
            <FontAwesomeIcon icon={['fas', 'circle']} className={`text-${statusType}`} />
            {' '}
            {status}
          </IconWrapper>
        </div>
      </div>
    );
  }
}

export default UserPanel;
