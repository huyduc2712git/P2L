import AppNavigator from "@navigation/AppNavigator";

const useLogin = () => {
  const onPressBack = () => {
    AppNavigator.goBack()
  }
   return {
    onPressBack,
   };
};
export default useLogin;
