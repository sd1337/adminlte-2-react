import React, { Component, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert as BsAlert } from 'react-bootstrap';
import { Types } from '../PropTypes';
import { splitIcon } from '../Utilities';
import './Alert.css';

type Props = {
  id?: string,
  closable?: boolean,
  onDismiss?: Function,
  type?: Types,
  icon?: string,
  title?: string,
  children?: ReactNode
};

type State = {
  closed: boolean
};

class Alert extends Component<Props, State> {
  static defaultProps = {
    id: undefined,
    closable: false,
    onDismiss: null,
    type: null,
    icon: null,
    title: null,
    children: null,
  };

  constructor(props: Props) {
    super(props);
    this.state = { closed: false };
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
        <BsAlert id={id} bsStyle={type} onDismiss={onDismiss || (closable ? this.onDismiss : undefined)}>
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

export default Alert;
