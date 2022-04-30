import React, { ComponentType, FC } from "react";

const createThemedComponent = <T extends object>(
  Component: ComponentType<T>
) => {
  return (arg: ((props: T) => Partial<T>) | Partial<T>): FC<T> => {
    return (props: T) => {
      const themedProps = typeof arg === "function" ? arg(props) : arg;
      return <Component {...themedProps} {...props} />;
    };
  };
};

export default createThemedComponent;
