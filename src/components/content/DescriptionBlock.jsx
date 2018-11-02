import React from 'react';
import PropTypes from 'prop-types';

import { Colors } from '../PropTypes';

const DescriptionBlock = ({
  percentage, percentageColor, header, text, indication,
}) => (
  <div className="description-block border-right">
    <span className={`description-percentage text-${percentageColor}`}>
      <i className={`fa fa-caret-${indication}`} />
      {` ${percentage}%`}
    </span>
    <h5 className="description-header">{header}</h5>
    <span className="description-text">{text}</span>
  </div>
);

DescriptionBlock.propTypes = {
  percentage: PropTypes.number.isRequired,
  percentageColor: PropTypes.oneOf(Colors).isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  indication: PropTypes.oneOf(['left', 'right', 'up', 'down']).isRequired,
};

export default DescriptionBlock;
