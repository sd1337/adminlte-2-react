/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Col from '../Col';
import { FormTypes } from '../../PropTypes';
import { splitIcon } from '../../Utilities';

type ColSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface LabelProps {
  label?: ReactNode,
  labelPosition?: 'above' | 'left' | 'none',
  labelXs?: ColSpacing,
  labelSm?: ColSpacing,
  labelMd?: ColSpacing,
  labelLg?: ColSpacing,
  name?: string,
  xs?: ColSpacing,
  sm?: ColSpacing,
  md?: ColSpacing,
  lg?: ColSpacing,
  labelIcon?: string,
  type?: FormTypes,
  children: ReactNode,
  labelClass?: string,
}

type LabelComponent = React.FC<LabelProps>;

const Label: LabelComponent = ({
  label, labelXs, labelSm, labelMd, labelLg, name,
  xs, sm, md, lg, labelIcon, type, children,
  labelClass, labelPosition,
}: LabelProps) => {
  const localLabel = label;
  let localIcon;
  if (localLabel && labelIcon) {
    const hasIcon = !!(labelIcon);
    localIcon = hasIcon ? splitIcon(labelIcon) : null;
  }
  const groupClasses = [
    'form-group',
    type ? `has-${type}` : null,
  ].filter((p) => p).join(' ');
  if (labelPosition === 'left') {
    const localLabelClasses = [
      'control-label',
      labelXs ? `col-xs-${labelXs}` : null,
      labelSm ? `col-sm-${labelSm}` : null,
      labelMd ? `col-md-${labelMd}` : null,
      labelLg ? `col-lg-${labelLg}` : null,
      labelClass,
    ].filter((p) => p).join(' ');
    let colProps: {
      xs?: ColSpacing,
      sm?: ColSpacing,
      md?: ColSpacing,
      lg?: ColSpacing,
      xsOffset?: ColSpacing
      smOffset?: ColSpacing
      mdOffset?: ColSpacing
      lgOffset?: ColSpacing
    } = {
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
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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

// Label.propTypes = {

//   label: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.number,
//   ]),
//   labelPosition: PropTypes.oneOf(['above', 'left', 'none']),
//   labelXs: PropTypes.number,
//   labelSm: PropTypes.number,
//   labelMd: PropTypes.number,
//   labelLg: PropTypes.number,
//   name: PropTypes.string,
//   xs: PropTypes.number,
//   sm: PropTypes.number,
//   md: PropTypes.number,
//   lg: PropTypes.number,
//   labelIcon: PropTypes.string,
//   type: PropTypes.oneOf(FormTypes),
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   labelClass: PropTypes.string,
// };

Label.defaultProps = {
  label: null,
  labelPosition: 'left',
  labelXs: undefined,
  labelSm: 2,
  labelMd: undefined,
  labelLg: undefined,
  xs: undefined,
  sm: 10,
  md: undefined,
  lg: undefined,
  labelIcon: undefined,
  type: undefined,
  name: uuidv4(),
  labelClass: undefined,
};

export default Label;
