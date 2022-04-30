import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import CreateItinerary from "../screens/home/CreateItinerary";
import Home from "../screens/home/Home";
import { HomeStackParamList, RootTabScreenProps } from "../types/navigation";
import { useHideBottomTabListener } from "../hooks/useHideBottomTab";

const Stack = createStackNavigator<HomeStackParamList>();

interface HomeStackNavigatorProps extends RootTabScreenProps<"HomeStack"> {}

const HomeStackNavigator: React.FC<HomeStackNavigatorProps> = (props) => {
  const { navigation } = props;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "vertical",
        presentation: "modal",
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
      screenListeners={(props) => ({
        state: () => {
          if (props.route.name !== "Home") {
            useHideBottomTabListener(navigation, false);
          } else {
            useHideBottomTabListener(navigation, true);
          }
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CreateItinerary"
        getId={(route) => route.params?.currentStep.toString()}
        component={CreateItinerary}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
