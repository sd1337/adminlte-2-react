import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './UserPanel.css';
import { Types } from '../PropTypes';

class UserPanel extends Component {
  state = {}

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

UserPanel.propTypes = {
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  link: PropTypes.string,
  status: PropTypes.string,
  statusType: PropTypes.oneOf(Types),
};

UserPanel.defaultProps = {
  imageUrl: undefined,
  link: '#',
  status: '',
  statusType: 'success',
};

export default UserPanel;
