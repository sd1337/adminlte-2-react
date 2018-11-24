import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (<li className="header">{text}</li>);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
