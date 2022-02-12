import React from 'react';
import { Platform } from 'react-native';
import { useThemeColors } from '../../../hooks/useThemeColor';

import BackButtonAndroid from './BackButtonAndroid';
import BackButtonIos from './BackButtonIOS';

const BackButtonNative: React.FC<{ color?: string }> = ({ color }) => {
  const { text } = color ? { text: color } : useThemeColors();

  return Platform.OS === 'android' ? (
    <BackButtonAndroid color={text} />
  ) : (
    <BackButtonIos color={text} />
  );
};

export default BackButtonNative;
