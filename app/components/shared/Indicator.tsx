import React from 'react';

import View from './View';

interface IndicatorProps {}

const Indicator: React.FC<IndicatorProps> = (props) => {
  return <View alignS='center' borderRadius={5} h={5} w={50} bg='#F5F5F5' />;
};
export default Indicator;
