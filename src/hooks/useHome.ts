import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useState } from "react";

const useHome = () => {
  const [isHeartFocus, setHeartFocus] = useState(false);

  const onFocusHeart = () => {
    setHeartFocus(!isHeartFocus)
  }

  const onNavigatorLogin = () => {
    AppNavigator.navigate(ROUTES.LOGIN_SCREEN.name)
  }
   return {
    isHeartFocus,
    onFocusHeart,
    onNavigatorLogin,
   };
};
export default useHome;
