import React from 'react';
import Sparkbar from './Sparkbar';

import { Colors } from '../PropTypes';

interface SparklineBoxProps {
  header?: string,
  text?: string,
  chartData: number[],
  color?: Colors
}

type SparklineBoxComponent = React.FC<SparklineBoxProps>;

const SparklineBox: SparklineBoxComponent = ({
  header, text, chartData, color,
}: SparklineBoxProps) => (
  <div className="description-block margin-bottom">
    <Sparkbar padding color={`${color || '#fff'}`} data={chartData} />
    <h5 className="description-header">{header}</h5>
    <span className="description-text">{text}</span>
  </div>
);

SparklineBox.defaultProps = {
  header: undefined,
  text: undefined,
  color: undefined,
};

export default SparklineBox;
