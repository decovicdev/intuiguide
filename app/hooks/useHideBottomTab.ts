import { useLayoutEffect } from 'react';
import { RootTabScreenProps } from '../types/navigation';

const useHideBottomTabListener = (
  navigation: RootTabScreenProps<any>['navigation'],
  option?: boolean
) => {
  if (option) {
    navigation.setOptions({ tabBarVisible: option } as any);
    return () => {};
  }
  navigation.setOptions({ tabBarVisible: false } as any);

  return () => {
    navigation.setOptions({ tabBarVisible: true } as any);
  };
};

const useHideBottomTab = (
  navigation: RootTabScreenProps<any>['navigation']
) => {
  useLayoutEffect(() => {
    const unsubscribe = useHideBottomTabListener(navigation);
    return () => {
      unsubscribe();
    };
  }, [navigation]);
};

export { useHideBottomTab, useHideBottomTabListener };
