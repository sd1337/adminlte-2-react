import React from 'react';
import { Route } from 'react-router-dom';

import AsyncComponent from '../AsyncComponent';

interface AsyncContentProps {
  paths?: string | string[],
  exact?: boolean,
  component: string,
}

type AsyncContentComponent = React.FC<AsyncContentProps>;

const AsyncContent: AsyncContentComponent = ({ paths, exact, component }: AsyncContentProps) => (
  <Route
    path={paths}
    exact={exact}
    component={AsyncComponent(() => import(component))}
  />
);

AsyncContent.defaultProps = {
  paths: undefined,
  exact: false,
};

export default AsyncContent;
