import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../PropTypes';

interface DescriptionBlockProps {
  id?: string,
  percentage: number,
  percentageColor: Colors,
  header: string,
  text: string,
  indication: 'left' | 'right' | 'up' | 'down',
}

type DescriptionBlockComponent = React.FC<DescriptionBlockProps>;

const DescriptionBlock: DescriptionBlockComponent = ({
  id, percentage, percentageColor, header, text, indication,
}: DescriptionBlockProps) => (
  <div id={id} className="description-block border-right">
    <span className={`description-percentage text-${percentageColor}`}>
      <FontAwesomeIcon icon={['fas', `caret-${indication}`]} />
      {` ${percentage}%`}
    </span>
    <h5 className="description-header">{header}</h5>
    <span className="description-text">{text}</span>
  </div>
);

DescriptionBlock.defaultProps = {
  id: undefined,
};

export default DescriptionBlock;
