import React from 'react';
import PropTypes from 'prop-types';
import packageInfo from '../../package.json';

const { name, version: packageVersion, repository: { url } } = packageInfo;

const Footer = ({ children, includeVersionInfo }) => (
  <footer className="main-footer">
    {includeVersionInfo
      && (
      <div className="pull-right hidden-xs">
        <a href={url.replace('git+', '')} target="_blank" rel="noopener noreferrer">{name}</a>
        {' v'}
        {packageVersion}
      </div>
      )}
    {'\u00A0'}
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
  includeVersionInfo: PropTypes.bool,
};

Footer.defaultProps = {
  children: null,
  includeVersionInfo: true,
};

export default Footer;
