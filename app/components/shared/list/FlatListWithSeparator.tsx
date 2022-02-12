import React from 'react';

import FlatList, { FlatListProps } from './FlatList';
import Divider from '../spacer/Divider';
import useThemeColor from '../../../hooks/useThemeColor';

interface FlatListWithSeparatorProps<T extends { id: string | number }>
  extends Exclude<
    FlatListProps<T>,
    FlatListProps<T>['ItemSeparatorComponent']
  > {}

const FlatListWithSeperator = <T extends { id: string }>(
  props: FlatListWithSeparatorProps<T>
) => {
  const color = useThemeColor({}, 'text');
  return (
    <FlatList
      showsVerticalScrollIndicator
      ItemSeparatorComponent={Divider}
      {...props}
    />
  );
};

export default FlatListWithSeperator;
