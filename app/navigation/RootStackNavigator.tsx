import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';
import NotFoundScreen from '../screens/NotFoundScreen';
import RootTabNavigator from './RootTabNavigator';
import Onboarding from '../screens/Onboarding';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RootStackNavigatorProps {}

const RootStackNavigator: React.FC<RootStackNavigatorProps> = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='RootTab' component={RootTabNavigator} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} />
    </Stack.Navigator>
  );
};
export default RootStackNavigator;
