import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  FavoriteStackParamList,
  RootTabScreenProps,
} from '../types/navigation';
import Favorite from '../screens/favorite/Favorite';
import { useHideBottomTabListener } from '../hooks/useHideBottomTab';
import EditFavorite from '../screens/favorite/EditFavorite';

const Stack = createNativeStackNavigator<FavoriteStackParamList>();

interface FavoriteStackNavigatorProps
  extends RootTabScreenProps<'FavoritesStack'> {}

const FavoriteStackNavigator: React.FC<FavoriteStackNavigatorProps> = (
  props
) => {
  const { navigation } = props;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
      screenListeners={(props) => ({
        state: () => {
          if (props.route.name !== 'Favorite') {
            return useHideBottomTabListener(navigation, false);
          }
          useHideBottomTabListener(navigation, true);
        },
      })}
    >
      <Stack.Screen name='Favorite' component={Favorite} />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name='EditFavorite'
        component={EditFavorite}
      />
    </Stack.Navigator>
  );
};
export default FavoriteStackNavigator;
