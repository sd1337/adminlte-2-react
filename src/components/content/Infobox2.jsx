import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const Infobox2 = ({
  color, title, subTitle, text, footerText, iconClass, footerIconClass, onFooterClick, to,
}) => {
  const fullIconClass = iconClass.startsWith('fa') ? `fa ${iconClass}` : `ion ${iconClass}`;
  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {title}
          {subTitle && <sup style={{ fontSize: '20px' }}>{subTitle}</sup>}
        </h3>
        <p>{text}</p>
      </div>
      <div className="icon">
        <i className={fullIconClass} />
      </div>
      <a href={to} onClick={onFooterClick} className="small-box-footer">
        {footerText}
        {' '}
        <i className={`fa ${footerIconClass}`} />
      </a>
    </div>
  );
};

Infobox2.propTypes = {
  color: PropTypes.oneOf(Colors),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  footerText: PropTypes.string,
  iconClass: PropTypes.string,
  footerIconClass: PropTypes.string,
  onFooterClick: PropTypes.func,
  to: PropTypes.string,
};

Infobox2.defaultProps = {
  color: null,
  title: null,
  subTitle: null,
  text: null,
  footerText: null,
  iconClass: null,
  footerIconClass: null,
  onFooterClick: null,
  to: '/',
};

export default Infobox2;
