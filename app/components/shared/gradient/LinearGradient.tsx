import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  Defs,
  Stop,
  LinearGradient as LG,
  Rect,
  LinearGradientProps,
} from 'react-native-svg';

interface Props
  extends Exclude<LinearGradientProps, LinearGradientProps['id']> {
  colors: [string, string, ...string[]];
  opacity?: number;
  offset?: number;
}

const LinearGradient: React.FC<Props> = ({
  children,
  colors,
  opacity,
  offset,
  ...props
}) => {
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Defs>
        <LG id='gradient' {...props}>
          {colors.map((color, index) => {
            const offset = index / (colors.length - 1);
            return (
              <Stop
                stopOpacity={opacity}
                stopColor={color}
                key={index}
                offset={offset}
              />
            );
          })}
        </LG>
      </Defs>
      <Rect x={0} y={0} width='100%' height='100%' fill='url(#gradient)' />
    </Svg>
  );
};

export default LinearGradient;
