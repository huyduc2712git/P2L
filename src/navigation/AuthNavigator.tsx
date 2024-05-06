import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES, TRoute } from "./routes";
import SCREENS from "@screens";
import { PlatformUtils } from "@utils/PlatformUtils";
import AppNavigator from "./AppNavigator";
const Stack = createNativeStackNavigator();
type TypeScreen = keyof typeof SCREENS;

function AuthNavigator() {
  const { isAndroid } = PlatformUtils;
  const optionDefault: any = isAndroid()
    ? { statusBarHidden: true, statusBarTranslucent: true }
    : {};
  const configTranslate = isAndroid()
    ? {
        presentation: "modal",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
      }
    : {};

  return (
    <NavigationContainer
      ref={(ref: any) => AppNavigator.setRootNavigator(ref)}
      onStateChange={AppNavigator.onTrackScreenChange}
      onReady={AppNavigator.onTrackScreenChange}
    >
      <Stack.Navigator
        initialRouteName={ROUTES.LOGIN_SCREEN.name}
        screenOptions={{ gestureEnabled: false }}
      >
        {Object.values(ROUTES).map((route: TRoute, index: number) => {
          const { name, options = {} } = route;
          return (
            <Stack.Screen
              key={`${index}`}
              options={{
                headerShown: false,
                ...optionDefault,
                ...options,
                ...configTranslate,
              }}
              name={name}
              component={SCREENS[name as TypeScreen]}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
