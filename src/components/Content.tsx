import React, { Component, ReactNode } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Types } from './PropTypes';

interface ContentProps extends RouteComponentProps {
  title?: string,
  subTitle?: string,
  homeRoute?: string,
  modal?: boolean,
  modalCloseTo?: string,
  show?: boolean,
  modalFooter?: ReactNode,
  browserTitle?: string,
  onHide?: Function,
  modalSize?: ReactBootstrap.Sizes,
  modalType?: Types,
  modalCloseButton?: boolean,

}

class Content extends Component<ContentProps, {}> {
  static defaultProps = {
    title: undefined,
    subTitle: undefined,
    homeRoute: '/',
    modal: false,
    modalCloseTo: undefined,
    show: true,
    modalFooter: undefined,
    browserTitle: undefined,
    history: undefined,
    onHide: undefined,
    modalSize: undefined,
    modalType: undefined,
    modalCloseButton: true,
  };

  componentDidMount() {
    const { browserTitle } = this.props;
    if (browserTitle) { document.title = browserTitle; }
  }

  isModal() {
    const { modal } = this.props;
    return modal;
  }

  render() {
    const {
      title, subTitle, homeRoute = '/', modal, modalCloseTo, show = true,
      modalFooter, children, history, onHide, modalSize, modalType, modalCloseButton,
    } = this.props;

    if (modal) {
      const dialogClassName = modalType ? `modal-${modalType}` : undefined;
      return (
        <Modal
          backdrop
          show={show}
          // eslint-disable-next-line no-unused-expressions
          onHide={() => { if (modalCloseTo) { history.push(modalCloseTo); } if (onHide) onHide(); }}
          onExited={() => { if (modalCloseTo) { history.push(modalCloseTo); } }}
          bsSize={modalSize}
          dialogClassName={dialogClassName}
          enforceFocus={false}
        >
          <Modal.Header closeButton={modalCloseButton}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          {modalFooter && <Modal.Footer>{modalFooter}</Modal.Footer>}
        </Modal>
      );
    }

    return (
      <>
        <section className="content-header">
          <h1>
            {title}
            {' '}
            {subTitle ? <small>{subTitle}</small> : ''}
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to={homeRoute}>
                <FontAwesomeIcon icon={['fas', 'tachometer-alt']} />
                {' Home'}
              </Link>
            </li>
            <li className="active">{title}</li>
          </ol>
        </section>
        <section className="content">
          {children}
        </section>
      </>
    );
  }
}

export default withRouter(Content);
