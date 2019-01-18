import React from 'react';
import PropTypes from 'prop-types';
import Sparkbar from './Sparkbar';

import { Colors } from '../PropTypes';

const SparklineBox = ({
  header, text, chartData, color,
}) => (
  <div className="description-block margin-bottom">
    <Sparkbar padding color={`${color || '#fff'}`} data={chartData} />
    <h5 className="description-header">{header}</h5>
    <span className="description-text">{text}</span>
  </div>
);

SparklineBox.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.oneOf(Colors),
};

SparklineBox.defaultProps = {
  header: null,
  text: null,
  color: null,
};


export default SparklineBox;
