import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useState } from "react";

const useHome = () => {
  const [isHeartFocus, setHeartFocus] = useState(false);

  const onFocusHeart = () => {
    setHeartFocus(!isHeartFocus)
  }

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onGoLogin = () => {
    AppNavigator.navigate(ROUTES.LOGIN_SCREEN.name)
  }
   return {
    isHeartFocus,
    onFocusHeart,
    onGoLogin,
    onPressBack,
   };
};
export default useHome;
