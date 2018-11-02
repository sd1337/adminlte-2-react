/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';

import Col from '../Col';
import { FormTypes } from '../../PropTypes';

const Label = ({
  label, labelXs, labelSm = 2, labelMd, labelLg, name,
  xs, sm = 10, md, lg, help, labelIconClass, type, children,
}) => {
  let { labelPosition } = this.props;
  let localLabel = label;
  labelPosition = label ? 'left' : 'none';
  if (localLabel && labelIconClass) { localLabel = ` ${localLabel}`; }
  const groupClasses = [
    'form-group',
    type ? `has-${type}` : null,
  ].filter(p => p).join(' ');
  if (labelPosition === 'left') {
    const labelClasses = [
      'control-label',
      labelXs ? `col-xs-${labelXs}` : null,
      labelSm ? `col-sm-${labelSm}` : null,
      labelMd ? `col-md-${labelMd}` : null,
      labelLg ? `col-lg-${labelLg}` : null,
    ].filter(p => p).join(' ');

    return (
      <div className={groupClasses}>
        <label htmlFor={name} className={labelClasses}>
          {labelIconClass && <i className={`fa ${labelIconClass}`} />}
          {localLabel}
        </label>
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          {children}
        </Col>
      </div>
    );
  } if (labelPosition === 'above') {
    return (
      <div className={groupClasses}>
        <label htmlFor={name}>
          {labelIconClass && <i className={`fa ${labelIconClass}`} />}
          {label}
        </label>
        {children}
        {help && <p className="help-block">{help}</p>}
      </div>
    );
  }
  return children;
};

Label.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['above', 'left', 'none']),
  labelXs: PropTypes.number,
  labelSm: PropTypes.number,
  labelMd: PropTypes.number,
  labelLg: PropTypes.number,
  name: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  help: PropTypes.string,
  labelIconClass: PropTypes.string,
  type: PropTypes.oneOf(FormTypes),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Label.defaultProps = {
  label: null,
  labelPosition: null,
  labelXs: null,
  labelSm: 2,
  labelMd: null,
  labelLg: null,
  xs: null,
  sm: 2,
  md: null,
  lg: null,
  help: null,
  labelIconClass: null,
  type: null,
  name: uuidv4(),
};

export default Label;
