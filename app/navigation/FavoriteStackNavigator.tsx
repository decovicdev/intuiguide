import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import {
  FavoriteStackParamList,
  RootTabScreenProps,
} from "../types/navigation";
import Favorite from "../screens/favorite/Favorite";
import { useHideBottomTabListener } from "../hooks/useHideBottomTab";
import EditFavorite from "../screens/favorite/EditFavorite";
import Layout from "../constants/Layout";

const { height } = Layout.window;

const Stack = createStackNavigator<FavoriteStackParamList>();

interface FavoriteStackNavigatorProps
  extends RootTabScreenProps<"FavoritesStack"> {}

const FavoriteStackNavigator: React.FC<FavoriteStackNavigatorProps> = (
  props
) => {
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
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
      screenListeners={(props) => ({
        state: () => {
          if (props.route.name !== "Favorite") {
            return useHideBottomTabListener(navigation, false);
          }
          useHideBottomTabListener(navigation, true);
        },
      })}
    >
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen
        options={{
          presentation: "transparentModal",
          gestureResponseDistance: height * 0.6,
        }}
        name="EditFavorite"
        component={EditFavorite}
      />
    </Stack.Navigator>
  );
};
export default FavoriteStackNavigator;
