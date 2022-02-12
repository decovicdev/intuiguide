import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useHideBottomTabListener } from '../hooks/useHideBottomTab';
import EditProfile from '../screens/profile/EditProfile';
import Profile from '../screens/profile/Profile';
import UpgradeToPro from '../screens/profile/UpgradeToPro';
import { ProfileStackParamList, RootTabScreenProps } from '../types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

interface ProfileStackNavigatorProps
  extends RootTabScreenProps<'ProfileStack'> {}

const ProfileStackNavigator: React.FC<ProfileStackNavigatorProps> = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
      screenListeners={(props) => ({
        state: () => {
          console.log('transitionStart');
          if (props.route.name !== 'Profile') {
            useHideBottomTabListener(navigation, false);
          } else {
            useHideBottomTabListener(navigation, true);
          }
        },
      })}
    >
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
      <Stack.Screen name='UpgradeToPro' component={UpgradeToPro} />
    </Stack.Navigator>
  );
};
export default ProfileStackNavigator;
