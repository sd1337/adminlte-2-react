import React, { ReactNode } from 'react';
import packageInfo from '../../package.json';

interface FooterProps {
  children?: ReactNode,
  includeVersionInfo?: boolean
}

type FooterComponent = React.FC<FooterProps>;

const { name, version: packageVersion, repository: { url } } = packageInfo;

const Footer: FooterComponent = ({ children, includeVersionInfo }: FooterProps) => (
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

Footer.defaultProps = {
  children: null,
  includeVersionInfo: true,
};

export default Footer;
