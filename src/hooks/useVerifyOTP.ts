import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useRef, useState } from "react";

const MAX_OTP_LENGHT = 6;
const useVerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputOTPRef = useRef(null);

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
    setErrorMessage("");
    if (otp.length === MAX_OTP_LENGHT && !errorMessage) {
      AppNavigator.navigate(ROUTES.HOME_SCREEN.name);
    }
  };

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onResetOTP = () => {
    console.log("ResetOTP");
  };

  const onGoRegister = () => {
    console.log("Go Register");
  };

  const onSumitVerification = () => {
    if (otp.length === MAX_OTP_LENGHT && !errorMessage) {
      AppNavigator.navigate(ROUTES.HOME_SCREEN.name);
    } else {
      setErrorMessage("Bạn chưa nhập đủ mã OTP hoặc sai mã OTP");
    }
  };

  return {
    onPressBack,
    handleOtpChange,
    otp,
    onResetOTP,
    onGoRegister,
    onSumitVerification,
    errorMessage,
  };
};
export default useVerifyOTP;
