import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  text: string
}

const Header = ({ text }: Props) => (<li className="header">{text}</li>);

export default Header;
