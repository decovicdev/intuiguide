import React from 'react';

import View from './View';

const HStack: React.FC<React.ComponentProps<typeof View>> = (props) => {
  return <View align='center' {...props} direction='row' />;
};

export default HStack;
