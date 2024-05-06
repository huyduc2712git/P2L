import { login } from "@features/auth/authSlice";
import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLogin = () => {
  const dispatch = useDispatch<any>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: any) => state.auth.token);

  useEffect(() => {
    console.log("token", token);
  }, []);

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onSumitLogin = () => {
    dispatch(login(username, password));
    if (token !== null) {
      AppNavigator.navigate(ROUTES.REGISTER_SCREEN.name);
    }
  };

  return {
    onPressBack,
    onSumitLogin,
    setUsername,
    setPassword,
  };
};
export default useLogin;
