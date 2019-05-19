import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../PropTypes';

const DescriptionBlock = ({
  id, percentage, percentageColor, header, text, indication,
}) => (
  <div id={id} className="description-block border-right">
    <span className={`description-percentage text-${percentageColor}`}>
      <FontAwesomeIcon icon={['fas', `caret-${indication}`]} />
      {` ${percentage}%`}
    </span>
    <h5 className="description-header">{header}</h5>
    <span className="description-text">{text}</span>
  </div>
);

DescriptionBlock.propTypes = {
  id: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  percentageColor: PropTypes.oneOf(Colors).isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  indication: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired,
};

DescriptionBlock.defaultProps = {
  id: undefined,
};

export default DescriptionBlock;
