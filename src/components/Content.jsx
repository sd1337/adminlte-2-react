import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Content extends Component {
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
      title, subTitle, homeRoute = '/', modal, modalCloseTo, show = true, modalFooter, children, history,
    } = this.props;

    if (modal) {
      return (
        <Modal
          backdrop
          show={show}
          onHide={() => { history.push(modalCloseTo); }}
          onExited={() => { history.push(modalCloseTo); }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>{modalFooter}</Modal.Footer>
        </Modal>
      );
    }

    return (
      <React.Fragment>
        <section className="content-header">
          <h1>
            {title}
            {' '}
            {subTitle ? <small>{subTitle}</small> : ''}
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to={homeRoute}>
                <i className="fa fa-dashboard" />
                {' '}
                Home
              </Link>
            </li>
            <li className="active">{title}</li>
          </ol>
        </section>
        <section className="content">
          {children}
        </section>
      </React.Fragment>);
  }
}

Content.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  homeRoute: PropTypes.string,
  modal: PropTypes.bool,
  modalCloseTo: PropTypes.func,
  show: PropTypes.bool,
  modalFooter: PropTypes.node,
  children: PropTypes.node,
  browserTitle: PropTypes.string,
  history: ReactRouterPropTypes.history,
};

Content.defaultProps = {
  title: null,
  subTitle: null,
  homeRoute: '/',
  modal: false,
  modalCloseTo: null,
  show: true,
  modalFooter: null,
  children: null,
  browserTitle: null,
  history: null,
};

export default withRouter(Content);
