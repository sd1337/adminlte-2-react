import React, { Component } from 'react';

export default function asyncComponent(importComponent: Function) {
  interface AsyncComponentProps {

  }

  interface AsyncComponentState {
    component?: Function,
  }

  class AsyncComponent extends Component<AsyncComponentProps, AsyncComponentState> {
    constructor(props: AsyncComponentProps) {
      super(props);

      this.state = {
        component: undefined,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      const { component: C } = this.state;

      // eslint-disable-next-line react/jsx-props-no-spreading
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent as any;
}
