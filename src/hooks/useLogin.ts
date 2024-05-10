import { login } from "@features/auth/thunk";
import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const dispatch = useDispatch<any>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onSumitLogin = () => {
    dispatch(
      login({
        username: username.toLowerCase(),
        password: password.toLowerCase(),
        callback: () => AppNavigator.navigate(ROUTES.CHAT_BOX_SCREEN.name)
      })
    );
  };

  return {
    onPressBack,
    onSumitLogin,
    setUsername,
    setPassword
  };
};
export default useLogin;
