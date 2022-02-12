import React, { Component } from 'react';
import {
  FlatList as DefaultList,
  FlatListProps as DefaultListProps,
} from 'react-native';

export interface FlatListProps<T>
  extends Omit<DefaultListProps<T>, 'renderItem' | 'data'> {
  data: T[];
  children: DefaultListProps<T>['renderItem'];
  forwardRef?: React.RefAttributes<DefaultList<T>>['ref'];
}

class FlatList<T extends {}> extends Component<FlatListProps<T>, object> {
  constructor(props: FlatListProps<T>) {
    super(props);
  }
  render() {
    const { children, forwardRef } = this.props;

    return (
      <DefaultList
        ref={forwardRef}
        bounces={false}
        showsVerticalScrollIndicator={
          this.props.showsVerticalScrollIndicator || false
        }
        showsHorizontalScrollIndicator={
          this.props.showsHorizontalScrollIndicator || false
        }
        renderItem={children}
        {...this.props}
      />
    );
  }
}

export default FlatList;
