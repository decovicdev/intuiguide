import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, {
  SvgProps,
  Defs,
  Rect,
  RadialGradient as RG,
  RadialGradientProps as RGProps,
  Stop,
} from 'react-native-svg';

interface RadialGradientProps {
  colors: string[];
  opacity?: number;
  offset?: number;
  RGProps?: Exclude<RGProps, RGProps['id']>;
  SvgProps?: SvgProps;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  colors,
  opacity,
  offset,
  RGProps,
  SvgProps,
}) => {
  return (
    <Svg {...SvgProps} style={StyleSheet.absoluteFill}>
      <Defs>
        <RG id='myGradient' {...RGProps}>
          {colors.map((color, index) => {
            const opacityValue = opacity ? opacity : 1;
            const _offset = offset
              ? offset
              : colors.length === 1
              ? 0
              : index / (colors.length - 1);
            return (
              <Stop
                stopOpacity={opacity}
                stopColor={color}
                key={index}
                offset={_offset}
              />
            );
          })}
        </RG>
      </Defs>
      <Rect x={0} y={0} width='100%' height='100%' fill='url(#myGradient)' />
    </Svg>
  );
};
export default RadialGradient;
