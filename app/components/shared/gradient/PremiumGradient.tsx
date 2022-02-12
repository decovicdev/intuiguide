import React from 'react';
import LinearGradient from './LinearGradient';

const PremiumGradient: React.FC<
  Omit<React.ComponentProps<typeof LinearGradient>, 'colors'>
> = (props) => {
  return (
    <LinearGradient
      colors={['#F1B827', '#FFD700', '#F1B622', '#FFD700']}
      {...props}
    />
  );
};
export default PremiumGradient;
