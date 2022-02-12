import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import BackButton from './BackButton';

const BackButtonIos: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <BackButton>
      <Ionicons name='ios-chevron-back' size={24} color={color} />
    </BackButton>
  );
};

export default BackButtonIos;
