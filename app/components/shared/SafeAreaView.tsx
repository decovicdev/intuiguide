import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Sizes } from '../../constants/Styles';

const { s } = Sizes.spacing;

import View from './View';

const SafeAreaView: React.FC<React.ComponentProps<typeof View>> = ({
  style,
  ...props
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top + s;
  return <View style={[{ paddingTop }, style]} {...props} />;
};
export default SafeAreaView;
