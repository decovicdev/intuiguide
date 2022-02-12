import styled from '@emotion/native';

import withSpacing from '../../hoc/withSpacing';
import withFlex from '../../hoc/withFlex';
import withColor from '../../hoc/withColor';
import withSize from '../../hoc/withSize';
import withBg from '../../hoc/withBg';
import withFont from '../../hoc/withFont';
import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColor';

export type TextProps = React.ComponentProps<typeof StyledText>;

const StyledText = withFont(
  withSpacing(
    withSize(
      withFlex(
        withBg(
          withColor(
            styled.Text({
              fontFamily: 'poppins-regular',
            })
          )
        )
      )
    )
  )
);

const Text: React.FC<TextProps> = (props) => {
  const { text } = useThemeColors();
  return <StyledText color={text} {...props} />;
};

export default Text;
