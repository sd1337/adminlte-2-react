import React, { ReactNode } from 'react';

interface LoginCoreProps {
  children?: ReactNode
}

type LoginCoreComponent = React.FC<LoginCoreProps>;

const LoginCore: LoginCoreComponent = ({ children }: LoginCoreProps) => (
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

LoginCore.defaultProps = {
  children: undefined,
};

export default LoginCore;
