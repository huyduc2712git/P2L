import { BottomSheetMethods } from "@components/BottomSheet/BottomSheet";
import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useRef, useState } from "react";

const useHome = () => {
  const [isHeartFocus, setHeartFocus] = useState(false);
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const onFocusHeart = () => {
    setHeartFocus(!isHeartFocus);
  };

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onGoLogin = () => {
    AppNavigator.navigate(ROUTES.LOGIN_SCREEN.name);
  };

  const onShowDetail = () => {
    bottomSheetRef.current?.expand();
  };

  return {
    isHeartFocus,
    onFocusHeart,
    onGoLogin,
    onPressBack,
    bottomSheetRef,
    onShowDetail
  };
};
export default useHome;
