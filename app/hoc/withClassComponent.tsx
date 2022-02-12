import React from 'react';

const withClassComponent = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  return class extends React.Component<T, {}> {
    constructor(props: T) {
      super(props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withClassComponent;
