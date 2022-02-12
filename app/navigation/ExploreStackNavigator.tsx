import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExploreStackParamList, RootTabScreenProps } from '../types/navigation';
import Explore from '../screens/explore/Explore';
import ExploreDetail from '../screens/explore/ExploreDetail';
import { useHideBottomTabListener } from '../hooks/useHideBottomTab';

const Stack = createNativeStackNavigator<ExploreStackParamList>();

interface ExploreStackNavigatorProps
  extends RootTabScreenProps<'ExploreStack'> {}

const ExploreStackNavigator: React.FC<ExploreStackNavigatorProps> = (props) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      initialRouteName='Explore'
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'slide_from_bottom',
      }}
      screenListeners={(props) => ({
        state: () => {
          if (props.route.name !== 'Explore') {
            return useHideBottomTabListener(navigation, false);
          }
          useHideBottomTabListener(navigation, true);
        },
      })}
    >
      <Stack.Screen name='Explore' component={Explore} />
      <Stack.Screen name='ExploreDetail' component={ExploreDetail} />
    </Stack.Navigator>
  );
};

export default ExploreStackNavigator;
