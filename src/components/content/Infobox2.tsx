import React, { MouseEventHandler } from 'react';

import Ionicon from 'react-ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infobox2.css';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';

interface Infobox2Props {
  id?: string,
  color?: Colors,
  title?: string,
  subTitle?: string,
  text?: string,
  footerText?: string,
  icon: string,
  footerIcon?: string,
  onFooterClick?: MouseEventHandler<HTMLAnchorElement>,
  to?: string,
}

type Infobox2Component = React.FC<Infobox2Props>;

const Infobox2: Infobox2Component = ({
  id, color, title, subTitle, text, footerText, icon, footerIcon, onFooterClick, to,
}: Infobox2Props) => {
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

Infobox2.defaultProps = {
  id: undefined,
  color: undefined,
  title: undefined,
  subTitle: undefined,
  text: undefined,
  footerText: undefined,
  footerIcon: 'fas-arrow-alt-circle-right',
  onFooterClick: undefined,
  to: '/',
};

export default Infobox2;
