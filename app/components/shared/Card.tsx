import React from 'react';
import { useThemeColors } from '../../hooks/useThemeColor';

import View from './View';

// const Card = styled(View)((props) => ({
//   // elevation: 2,
//   // margin: 4,
// }));

const Card: React.FC<React.ComponentProps<typeof View>> = (props) => {
  const { card } = useThemeColors();
  return <View bg={card} borderRadius='l' {...props} />;
};

export default Card;
