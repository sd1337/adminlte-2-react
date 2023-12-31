import PropTypes from 'prop-types';

import './LoadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import { splitIcon } from '../Utilities';

type Props = {
  icon: string,
  size: SizeProp
}

function LoadingSpinner({ icon, size }: Props) {
  return (
    <div className="overlay">
      <FontAwesomeIcon spin icon={splitIcon(icon)} size={size} />
    </div>
  );
}

LoadingSpinner.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};
LoadingSpinner.defaultProps = {
  icon: 'fas-sync-alt',
  size: '3x',
};

export default LoadingSpinner;
