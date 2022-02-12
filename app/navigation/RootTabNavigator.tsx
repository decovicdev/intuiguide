import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Animated, {
  Layout,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

import { RootTabParamList } from '../types/navigation';
import HomeStackNavigator from './HomeStackNavigator';
import ExploreStackNavigator from './ExploreStackNavigator';
import FavoritesStackNavigator from './FavoriteStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import Button from '../components/shared/button/Button';
import Card from '../components/shared/Card';
import { Image } from '../components/shared/image';
import withClassComponent from '../hoc/withClassComponent';

const Tab = createBottomTabNavigator<RootTabParamList>();
const AnimatedCard = Animated.createAnimatedComponent(withClassComponent(Card));

interface RootTabNavigatorProps {}

const RootTabNavigator: React.FC<RootTabNavigatorProps> = (props) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, focused }) => (
            <Icon
              size={size}
              focused={focused}
              focusedSrc={require('../assets/images/home-filled.png')}
              unfocusedSrc={require('../assets/images/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ExploreStack'
        component={ExploreStackNavigator}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ size, focused }) => (
            <Icon
              size={size}
              focused={focused}
              focusedSrc={require('../assets/images/clock-filled.png')}
              unfocusedSrc={require('../assets/images/clock.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name='FavoritesStack'
        component={FavoritesStackNavigator}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ size, focused }) => (
            <Icon
              size={size}
              focused={focused}
              focusedSrc={require('../assets/images/heart-filled.png')}
              unfocusedSrc={require('../assets/images/heart.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              size={size}
              focused={focused}
              focusedSrc={require('../assets/images/user-filled.png')}
              unfocusedSrc={require('../assets/images/user.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabBar: React.FC<BottomTabBarProps> = (props) => {
  const { state, descriptors, navigation } = props;
  const { tabBarVisible = true }: any =
    descriptors[state.routes[state.index].key].options;
  return tabBarVisible ? (
    <Card borderRadius={0}>
      <AnimatedCard
        layout={Layout.springify()}
        entering={SlideInDown.duration(500)}
        exiting={SlideOutDown.duration(500)}
        direction='row'
        p='m'
        m='m'
        style={{
          elevation: 8,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const focused = state.index === index;
          const color = focused ? 'teal' : '#828282';

          const onPress = () => {
            console.log('onPress');
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true } as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Button
              key={route.key}
              accessibilityRole='button'
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              flex={1}
              place='center'
            >
              {options.tabBarIcon?.({
                focused,
                color,
                size: 30,
              })}
            </Button>
          );
        })}
      </AnimatedCard>
    </Card>
  ) : null;
};

interface IconProps {
  focused: boolean;
  size: number;
  focusedSrc: any;
  unfocusedSrc: any;
}

const Icon: React.FC<IconProps> = (props) => {
  const { focused, size, focusedSrc, unfocusedSrc } = props;
  return focused ? (
    <Image size={size} source={focusedSrc} />
  ) : (
    <Image size={size} source={unfocusedSrc} />
  );
};

export default RootTabNavigator;
