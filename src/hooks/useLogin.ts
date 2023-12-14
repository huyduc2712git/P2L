import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useState } from "react";

const MAX_OTP_LENGHT = 6;
const useLogin = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (otp: string) => {
    setOtp(otp)
    if(otp.length === MAX_OTP_LENGHT) {
      AppNavigator.navigate(ROUTES.HOME_SCREEN.name);
    }
  }

  const onPressBack = () => {
    AppNavigator.goBack()
  }

   return {
    onPressBack,
    handleOtpChange,
    otp,
   };
};
export default useLogin;
