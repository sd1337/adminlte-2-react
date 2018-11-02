import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../PropTypes';

const Infobox = ({
  iconClass, iconColor, text, number,
}) => (
  <div className="info-box">
    <span className={`info-box-icon bg-${iconColor}`}><i className={iconClass} /></span>

    <div className="info-box-content">
      <span className="info-box-text">{text}</span>
      <span className="info-box-number">{number}</span>
    </div>
  </div>
);

Infobox.propTypes = {
  iconClass: PropTypes.string,
  iconColor: PropTypes.oneOf(Colors),
  text: PropTypes.string,
  number: PropTypes.oneOf([PropTypes.string, PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOf([PropTypes.string, PropTypes.node]))]),
};

Infobox.defaultProps = {
  iconClass: null,
  iconColor: null,
  text: null,
  number: null,
};

export default Infobox;
