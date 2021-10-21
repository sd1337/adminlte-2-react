import React, { ReactNode } from 'react';

interface NavListProps {
  children: ReactNode,
  pills?: boolean,
  stacked?: boolean,
}

type NavListComponent = React.FC<NavListProps>;
const NavList: NavListComponent = ({ children, pills, stacked }: NavListProps) => {
  const classes = ['nav',
    pills ? 'nav-pills' : '',
    stacked ? 'nav-stacked' : '',
  ].join(' ');
  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};

NavList.defaultProps = {
  pills: false,
  stacked: false,
};

export default NavList;
