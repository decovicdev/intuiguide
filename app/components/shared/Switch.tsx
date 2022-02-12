import Color from 'color';
import React, { useMemo, useState } from 'react';
import {
  Switch as DefaultSwitch,
  SwitchProps as DefaultSwitchProps,
} from 'react-native';
import Animated, {
  interpolateColor,
  interpolateColors,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import withClassComponent from '../../hoc/withClassComponent';

import { useThemeColors } from '../../hooks/useThemeColor';
import Button from './button/Button';
import View from './View';

const width = 54;
const AnimatedView = Animated.createAnimatedComponent(withClassComponent(View));
const AnimatedButton = Animated.createAnimatedComponent(
  withClassComponent(Button)
);

interface SwitchProps {
  onChange?: (value: boolean) => void;
  value?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { onChange, value } = props;
  const {
    secondaryText,
    tint: { primary },
  } = useThemeColors();

  const [isEnabled, setIsEnabled] = useState(value ?? false);

  const translateX = useDerivedValue(() => (isEnabled ? width - 30 : 0));

  const containerStyle = useAnimatedStyle(() => {
    const bg = interpolateColor(
      translateX.value,
      [0, width - 30],
      ['gray', primary]
    );

    return {
      backgroundColor: bg,
    };
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(translateX.value) }],
    };
  });

  return (
    <AnimatedButton
      w={width}
      h={30}
      style={containerStyle}
      onPress={() => {
        setIsEnabled(!isEnabled);
        props.onChange?.(!isEnabled);
      }}
      isRound
      justify='center'
      px={3}
    >
      <AnimatedView size={24} style={style} bg='white' isRound />
    </AnimatedButton>
  );
};
export default Switch;
