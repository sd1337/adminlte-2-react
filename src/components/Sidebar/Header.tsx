import React from 'react';

interface Props {
  text: string
}

function Header({ text }: Props) {
  return <li className="header">{text}</li>;
}

export default Header;
