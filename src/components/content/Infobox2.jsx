import React from 'react';
import PropTypes from 'prop-types';

import Ionicon from 'react-ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infobox2.css';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';

const Infobox2 = ({
  id, color, title, subTitle, text, footerText, icon, footerIcon, onFooterClick, to,
}) => {
  const isIonIcon = icon.startsWith('ion') || icon.startsWith('ios');
  let iconLocal;
  if (!isIonIcon) {
    const faIconClass = splitIcon(icon);
    iconLocal = <FontAwesomeIcon icon={faIconClass} size="sm" />;
  } else {
    iconLocal = <Ionicon icon={icon} fontSize="90px" color="rgba(0,0,0,0.15)" />;
  }
  const localFooterIcon = splitIcon(footerIcon);
  return (
    <div id={id} className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {title}
          {subTitle && <sup style={{ fontSize: '20px' }}>{subTitle}</sup>}
        </h3>
        <p>{text}</p>
      </div>
      <div className={`icon ${isIonIcon ? ' icon-ion' : ''}`}>
        {iconLocal}
      </div>
      <a href={to} onClick={onFooterClick} className="small-box-footer">
        {footerText}
        {' '}
        <FontAwesomeIcon icon={localFooterIcon} />
      </a>
    </div>
  );
};

Infobox2.propTypes = {
  id: PropTypes.string,
  color: PropTypes.oneOf(Colors),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  footerText: PropTypes.string,
  icon: PropTypes.string.isRequired,
  footerIcon: PropTypes.string,
  onFooterClick: PropTypes.func,
  to: PropTypes.string,
};

Infobox2.defaultProps = {
  id: undefined,
  color: null,
  title: null,
  subTitle: null,
  text: null,
  footerText: null,
  footerIcon: 'fas-arrow-alt-circle-right',
  onFooterClick: null,
  to: '/',
};

export default Infobox2;
