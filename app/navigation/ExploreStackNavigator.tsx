import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import { ExploreStackParamList, RootTabScreenProps } from "../types/navigation";
import Explore from "../screens/explore/Explore";
import ExploreDetail from "../screens/explore/ExploreDetail";
import { useHideBottomTabListener } from "../hooks/useHideBottomTab";
import { Image } from "../components/shared/image";

const Stack = createStackNavigator<ExploreStackParamList>();

interface ExploreStackNavigatorProps
  extends RootTabScreenProps<"ExploreStack"> {}

const ExploreStackNavigator: React.FC<ExploreStackNavigatorProps> = (props) => {
  const { navigation } = props;
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        gestureEnabled: true,
        gestureDirection: "vertical",
        cardOverlayEnabled: true,
        cardOverlay: () => (
          <Image
            w="100%"
            h={300}
            source={require("../assets/images/bg3.png")}
          />
        ),
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
      screenListeners={(props) => ({
        state: () => {
          if (props.route.name !== "Explore") {
            return useHideBottomTabListener(navigation, false);
          }
          useHideBottomTabListener(navigation, true);
        },
      })}
    >
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="ExploreDetail" component={ExploreDetail} />
    </Stack.Navigator>
  );
};

export default ExploreStackNavigator;
