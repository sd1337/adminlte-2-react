import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ version = '1.0', copyright = 'a' }) => {
  const myFooter = (
    <React.Fragment>
      <strong>
        Copyright &copy; 2014-2016
        {' '}
        <a href="https://adminlte.io">Almsaeed Studio</a>
        .
      </strong>
      {' '}
      All rights reserved.
    </React.Fragment>
  );
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b>
        {' '}
        {version}
      </div>
      {copyright && myFooter}
    </footer>
  );
};

Footer.propTypes = {
  version: PropTypes.string,
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  version: '1.0',
  copyright: 'a',
};

export default Footer;
