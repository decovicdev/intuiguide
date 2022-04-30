import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "poppins-thin": require("../assets/fonts/Poppins-Thin.ttf"),
          "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
          "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "poppins-light": require("../assets/fonts/Poppins-Light.ttf"),
          "poppins-extra-light": require("../assets/fonts/Poppins-ExtraLight.ttf"),
          "poppins-semi-bold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "poppins-extra-bold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
          "poppins-black": require("../assets/fonts/Poppins-Black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
