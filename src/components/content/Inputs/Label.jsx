/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   FormGroup, ControlLabel, FormControl, HelpBlock,
// } from 'react-bootstrap';

import Col from '../Col';
import { FormTypes } from '../../PropTypes';
import { splitIcon } from '../../Utilities';

const Label = ({
  label, labelXs, labelSm, labelMd, labelLg, name,
  xs, sm, md, lg, labelIcon, type, children,
  labelClass, labelPosition,
  ...props
}) => {
  const localLabel = label;
  let localIcon;
  if (localLabel && labelIcon) {
    const hasIcon = !!(labelIcon);
    localIcon = hasIcon ? splitIcon(labelIcon) : null;
  }
  const groupClasses = [
    'form-group',
    type ? `has-${type}` : null,
  ].filter(p => p).join(' ');
  if (labelPosition === 'left') {
    const localLabelClasses = [
      'control-label',
      labelXs ? `col-xs-${labelXs}` : null,
      labelSm ? `col-sm-${labelSm}` : null,
      labelMd ? `col-md-${labelMd}` : null,
      labelLg ? `col-lg-${labelLg}` : null,
      labelClass,
    ].filter(p => p).join(' ');
    let colProps = {
      xs, sm, md, lg,
    };
    if (!localLabel) {
      colProps = {
        xsOffset: labelXs,
        smOffset: labelSm,
        mdOffset: labelMd,
        lgOffset: labelLg,
        ...colProps,
      };
    }
    return (
      <div className={groupClasses}>
        <label htmlFor={name} className={localLabelClasses}>
          {labelIcon && <FontAwesomeIcon icon={localIcon} />}
          {labelIcon && ' '}
          {localLabel}
        </label>
        <Col {...colProps}>
          {children}
        </Col>
      </div>
    );
  } if (labelPosition === 'above') {
    return (
      <div className={groupClasses}>
        <label htmlFor={name}>
          {labelIcon && <FontAwesomeIcon icon={localIcon} />}
          {labelIcon && ' '}
          {label}
        </label>
        {children}
      </div>
    );
  }
  return (
    <div className={groupClasses}>
      {children}
    </div>
  );
};

Label.propTypes = {

  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.number,
  ]),
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
  labelIcon: PropTypes.string,
  type: PropTypes.oneOf(FormTypes),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  labelClass: PropTypes.string,
};

Label.defaultProps = {
  label: null,
  labelPosition: 'left',
  labelXs: null,
  labelSm: 2,
  labelMd: null,
  labelLg: null,
  xs: null,
  sm: 10,
  md: null,
  lg: null,
  labelIcon: null,
  type: null,
  name: uuidv4(),
  labelClass: null,
};

export default Label;
