import PropTypes from 'prop-types';
import './LoadingSpinner.css';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
declare type Props = {
    icon: string;
    size: SizeProp;
};
declare const LoadingSpinner: {
    ({ icon, size }: Props): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
    defaultProps: {
        icon: string;
        size: string;
    };
};
export default LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.d.ts.map