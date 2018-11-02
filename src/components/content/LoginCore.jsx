import React from 'react';
import PropTypes from 'prop-types';

const LoginCore = ({ children }) => (
  <div className="login-box">
    <div className="login-logo">
      <a href="/">
        <b>Sper</b>
          at
      </a>
    </div>
    <div className="login-box-body">
      {children}
    </div>
  </div>
);

LoginCore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

LoginCore.defaultProps = {
  children: null,
};

export default LoginCore;
