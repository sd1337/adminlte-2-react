import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert as BsAlert } from 'react-bootstrap';
import { Types } from '../PropTypes';
import { splitIcon } from '../Utilities';
import './Alert.css';


class Alert extends Component {
  state = { closed: false }

  constructor() {
    super();
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ closed: true });
  }

  render() {
    const {
      id, closable, type, icon, title, children, onDismiss,
    } = this.props;
    const { closed } = this.state;
    return (
      !closed && (
        <BsAlert id={id} bsStyle={type} onDismiss={onDismiss || (closable ? this.onDismiss : null)}>
          {(icon || title) && (
            <h4>
              {icon && <FontAwesomeIcon className="icon" icon={splitIcon(icon)} />}
              {' '}
              <span>{title}</span>
            </h4>
          )}
          {children}
        </BsAlert>
      )
    );
  }
}
Alert.propTypes = {
  id: PropTypes.string,
  closable: PropTypes.bool,
  onDismiss: PropTypes.func,
  type: PropTypes.oneOf(Types),
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Alert.defaultProps = {
  id: undefined,
  closable: false,
  onDismiss: null,
  type: null,
  icon: null,
  title: null,
  children: null,
};

export default Alert;
