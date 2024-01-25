import React from 'react';

interface Props {
  text: string
}

const Header = ({ text }: Props) => (<li className="header">{text}</li>);

export default Header;
