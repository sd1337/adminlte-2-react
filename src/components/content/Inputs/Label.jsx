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
  xs, sm, md, lg, help, labelIcon, type, children,
  ...props
}) => {
  let { labelPosition } = props;
  const localLabel = label;
  if (!labelPosition) { labelPosition = 'left'; }
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
    const labelClasses = [
      'control-label',
      labelXs ? `col-xs-${labelXs}` : null,
      labelSm ? `col-sm-${labelSm}` : null,
      labelMd ? `col-md-${labelMd}` : null,
      labelLg ? `col-lg-${labelLg}` : null,
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
        <label htmlFor={name} className={labelClasses}>
          {labelIcon && <FontAwesomeIcon icon={localIcon} />}
          {labelIcon && ' '}
          {localLabel}
        </label>
        <Col {...colProps}>
          {children}
          {help && <p className="help-block">{help}</p>}
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
        {help && <p className="help-block">{help}</p>}
      </div>
    );
  }
  return (
    <div className={groupClasses}>
      {children}
      {help && <p className="help-block">{help}</p>}
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
  help: PropTypes.string,
  labelIcon: PropTypes.string,
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
  sm: 10,
  md: null,
  lg: null,
  help: null,
  labelIcon: null,
  type: null,
  name: uuidv4(),
};

export default Label;
