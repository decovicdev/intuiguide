import React from 'react';
import styled from '@emotion/native';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

import withBg from '../../../hoc/withBg';
import withBorder from '../../../hoc/withBorder';
import withFlex from '../../../hoc/withFlex';
import withPosition from '../../../hoc/withPosition';
import withSize from '../../../hoc/withSize';
import withSpacing from '../../../hoc/withSpacing';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}
const Button = withBg(
  withSpacing(
    withSize(
      withFlex(
        withBorder(
          withPosition(
            styled((props: ButtonProps) => {
              const { style, ...rest } = props;
              return (
                <Pressable
                  style={({ pressed }) => [
                    style,
                    {
                      opacity: pressed || props.disabled ? 0.3 : 1,
                    },
                  ]}
                  {...rest}
                />
              );
            })({})
          )
        )
      )
    )
  )
);
export default Button;
