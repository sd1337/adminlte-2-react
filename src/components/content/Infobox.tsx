import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Infobox.css';
import { Colors } from '../PropTypes';
import { splitIcon } from '../Utilities';

interface InfoboxProps {
  id?: string,
  icon: string,
  text?: string,
  number?: string | ReactNode | string[] | ReactNode[],
  color?: Colors,
  progress?: number,
  progressText?: string,
  iconColorOnly?: boolean,
}

type InfoboxComponent = React.FC<InfoboxProps>;

const Infobox: InfoboxComponent = ({
  id, icon, text, number, color, progress, progressText, iconColorOnly,
}: InfoboxProps) => {
  const hasProgressText = !!(progressText);
  const hasProgress = !!(progressText);
  const faIconClass = splitIcon(icon);
  const infoBoxClass = iconColorOnly ? 'info-box' : `info-box bg-${color}`;
  const iconClass = iconColorOnly ? `info-box-icon bg-${color}` : 'info-box-icon';
  const progressClass = iconColorOnly ? 'progress-bar progress-icon-only' : 'progress-bar';
  return (
    <div id={id} className={infoBoxClass}>
      <span className={iconClass}>
        <FontAwesomeIcon icon={faIconClass} />
      </span>

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

Infobox.defaultProps = {
  id: undefined,
  text: undefined,
  number: null,
  color: undefined,
  progress: undefined,
  progressText: undefined,
  iconColorOnly: true,
};

export default Infobox;
