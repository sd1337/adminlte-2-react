import './LoadingSpinner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';
import { splitIcon } from '../Utilities';

type Props = {
  icon?: string,
  size?: SizeProp
}

const LoadingSpinner = ({ icon = 'fas-sync-alt', size = '3x' }: Props) => (
  <div className="overlay">
    <FontAwesomeIcon spin icon={splitIcon(icon)} size={size} />
  </div>
);

export default LoadingSpinner;
