import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infobox.css';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';


const Infobox = ({
  id, icon, text, number, color, progress, progressText, iconColorOnly,
}) => {
  const hasProgressText = !!(progressText);
  const hasProgress = !!(progressText);
  const isIonIcon = icon.startsWith('ion') || icon.startsWith('ios');
  const faIconClass = splitIcon(icon);
  const iconLocal = isIonIcon ? <Ionicon icon={icon} fontSize="45px" color="#ffffff" /> : <FontAwesomeIcon icon={faIconClass} />;
  const infoBoxClass = iconColorOnly ? 'info-box' : `info-box bg-${color}`;
  const iconClass = iconColorOnly ? `info-box-icon bg-${color}${isIonIcon ? ' info-box-ionicon' : ''}` : `info-box-icon${isIonIcon ? ' info-box-ionicon' : ''}`;
  const progressClass = iconColorOnly ? 'progress-bar progress-icon-only' : 'progress-bar';
  return (
    <div id={id} className={infoBoxClass}>
      <span className={iconClass}>{iconLocal}</span>

      <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">{number}</span>
        {hasProgress && (
          <div className="progress">
            <div className={progressClass} style={{ width: `${progress}%` }} />
          </div>
        )}
        {hasProgressText && (
          <span className="progress-description">
            {progressText}
          </span>
        )}
      </div>
    </div>
  );
};

Infobox.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))]),
  color: PropTypes.oneOf(Colors),
  progress: PropTypes.number,
  progressText: PropTypes.string,
  iconColorOnly: PropTypes.bool,
};

Infobox.defaultProps = {
  id: undefined,
  text: null,
  number: null,
  color: null,
  progress: null,
  progressText: null,
  iconColorOnly: true,
};

export default Infobox;
