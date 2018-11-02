import React, { Component } from 'react';
import PropTypes from 'prop-types';

const $ = require('jquery');
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

class Col extends Component {
  componentDidMount() {
    const { sortable } = this.props;
    if (!sortable) { return; }
    const { main } = this;
    $(main).sortable({
      placeholder: 'sort-highlight',
      connectWith: '.connectedSortable',
      handle: '.box-header, .nav-tabs',
      forcePlaceholderSize: true,
      zIndex: 999999,
    });
    $('.box-header, .nav-tabs-custom', main).css('cursor', 'move');
  }

  render() {
    const {
      textCenter, size, span, xs, sm, md, lg, offsetXs, offsetSm,
      offsetMd, offsetLg, classes: propClasses, children,
    } = this.props;
    /* eslint-disable-next-line no-nested-ternary */
    const classes = typeof propClasses === 'string' ? propClasses : propClasses ? propClasses.length ? propClasses.map(p => `col-${p.size}-${p.span}`).join(' ') : `col-${propClasses.size}-${propClasses.span}` : null;
    const { sortable = false } = this.props;
    const xsClass = xs ? `col-xs-${xs}` : null;
    const smClass = sm ? `col-sm-${sm}` : null;
    const mdClass = md ? `col-md-${md}` : null;
    const lgClass = lg ? `col-lg-${lg}` : null;
    const offsetXsClass = offsetXs ? `col-xs-offset-${offsetXs}` : null;
    const offsetSmClass = offsetSm ? `col-sm-offset-${offsetSm}` : null;
    const offsetMdClass = offsetMd ? `col-md-offset-${offsetMd}` : null;
    const offsetLgClass = offsetLg ? `col-lg-offset-${offsetLg}` : null;
    const newClasses = [
      xsClass,
      smClass,
      mdClass,
      lgClass,
      offsetXsClass,
      offsetSmClass,
      offsetMdClass,
      offsetLgClass,
      textCenter ? 'text-center' : '',
    ].filter(p => p).join(' ');

    const allClasses = newClasses || (classes || (size && span ? `col-${size}-${span}` : ''));

    if (!sortable) {
      return (
        <div className={allClasses}>
          {children}
        </div>);
    }
    return (
      <section ref={(c) => { this.main = c; }} className={`${allClasses} connectedSortable`}>
        {children}
      </section>);
  }
}

Col.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    span: PropTypes.any, // oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  }).isRequired),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  span: PropTypes.string,
  sortable: PropTypes.bool,
  textCenter: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  offsetXs: PropTypes.number,
  offsetSm: PropTypes.number,
  offsetMd: PropTypes.number,
  offsetLg: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Col.defaultProps = {
  classes: null,
  size: null,
  span: null,
  sortable: false,
  textCenter: false,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  offsetXs: null,
  offsetSm: null,
  offsetMd: null,
  offsetLg: null,
  children: null,
};

export default Col;
