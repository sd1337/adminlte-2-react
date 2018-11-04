import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infobox.css';
import { Colors } from '../PropTypes';


const Infobox = ({
  iconClass, iconColor, text, number,
}) => {
  const isIonIcon = iconClass.startsWith('ion');
  const icon = isIonIcon ? <Ionicon icon={iconClass} fontSize="45px" color="#ffffff" /> : <FontAwesomeIcon icon={iconClass.match(/^([fab|fas]*)-?(.+)/).splice(1, 2).filter(p => p.length > 0)} />;
  return (
    <div className="info-box">
      <span className={`info-box-icon bg-${iconColor}${isIonIcon ? ' info-box-ionicon' : ''}`}>{icon}</span>

      <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">{number}</span>
      </div>
    </div>
  );
};

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
