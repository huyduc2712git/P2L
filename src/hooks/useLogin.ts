import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";

const useLogin = () => {
  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onSumitLogin = () => {
    AppNavigator.navigate(ROUTES.REGISTER_SCREEN.name);
  };

  return {
    onPressBack,
    onSumitLogin,
  };
};
export default useLogin;
