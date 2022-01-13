/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

interface Props {
  component: any,
  props?: { [key: string]: any },
  classPreFix: string,
  title: string,
  handleClose: Function,
  handleAccept: Function,
}
interface State {

}

class SmartTableModal extends Component<Props, State> {
  static defaultProps = {
    component: undefined,
    props: undefined,
    title: undefined,
  };

  handleAccept = () => {
    const { handleAccept } = this.props;
    handleAccept(this.updatedatableState);
    this.updatedatableState = {};
  };

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
    this.updatedatableState = {};
  };

  stateToUpdate = (newState: { [key: string]: any }) => {
    this.updatedatableState = {
      ...this.updatedatableState,
      ...newState,
    };
  };

  updatedatableState = {};

  render() {
    const {
      classPreFix, title,
      component: ModalComponent, props,
    } = this.props;
    return (
      <Modal
        backdrop
        show={ModalComponent !== undefined}
      // eslint-disable-next-line no-unused-expressions
        onHide={this.handleClose}
        dialogClassName={`${classPreFix}-modal`}
        enforceFocus={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ModalComponent && <ModalComponent stateToUpdate={this.stateToUpdate} {...props} />}
        </Modal.Body>
        <Modal.Footer><Button text="Ok" onClick={this.handleAccept} /></Modal.Footer>
      </Modal>
    );
  }
}

export default SmartTableModal;
