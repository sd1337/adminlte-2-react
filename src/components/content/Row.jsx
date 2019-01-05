// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

/* import Col from './Col';

class Row extends Component {
  render() {
    let hasColChildren = false;
    const { margin } = this.props;
    let { children } = this.props;
    React.Children.forEach(children, (el) => {
      if (hasColChildren) return;
      hasColChildren = el.type === Col;
    });
    if (!hasColChildren) {
      children = <Col xs={12}>{children}</Col>;
    }
    return (
      <div className={`row${margin ? ' margin' : ''}`}>
        {children}
      </div>
    );
  }
}

Row.propTypes = {
  children(props, propName, componentName) {
    const prop = props[propName];
    let error;
    React.Children.forEach(prop, (el) => {
      if (error) return;
      if (el.type !== Col) {
        error = new Error(
          `\`${componentName}\` only accepts \`Col's\`.`,
        );
      }
    });
    return error;
  },
  margin: PropTypes.bool,
};

Row.defaultProps = {
  children: null,
  margin: false,
}; */

export default Row;
