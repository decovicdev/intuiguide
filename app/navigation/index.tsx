import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import RootStackNavigator from './RootStackNavigator';

const Navigation: React.FC = (props) => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
