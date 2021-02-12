/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

class SmartTableModal extends Component {
  updatedatableState = {};

  stateToUpdate = (newState) => {
    this.updatedatableState = {
      ...this.updatedatableState,
      ...newState,
    };
  }

  handleAccept = () => {
    const { handleAccept } = this.props;
    handleAccept(this.updatedatableState);
    this.updatedatableState = {};
  }

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
    this.updatedatableState = {};
  }

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
        centered
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

SmartTableModal.propTypes = {
  component: PropTypes.node,
  props: PropTypes.shape({ }),
  classPreFix: PropTypes.string.isRequired,
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  handleAccept: PropTypes.func.isRequired,
};

SmartTableModal.defaultProps = {
  component: undefined,
  props: undefined,
  title: undefined,
};

export default SmartTableModal;
