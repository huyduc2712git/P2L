import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import { useMemo, useState } from "react";

const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [valueSelect, setValueSelectet] = useState("");

  const onPressBack = () => {
    AppNavigator.goBack();
  };

  const onHandleChageText = (value: string) => {
    if (value.length <= 5) {
      setErrorMessage("Lỗi rồi bạn ơi");
    } else {
      setErrorMessage("");
    }
  };

  const onHandleOnBlur = () => {
    if (errorMessage) {
      setErrorMessage("Lỗi rồi bạn ơi");
    } else {
      setErrorMessage("");
    }
  };

  const onGoLogin = () => {
    setValueSelectet("Trải nghiệm văn hoá");
    // AppNavigator.navigate(ROUTES.LOGIN_SCREEN.name);
  };

  const onNextPart = () => {
    setErrorMessage("Vui lòng điền vào trường hợp này");
  };
  return {
    onHandleChageText,
    errorMessage,
    setErrorMessage,
    onGoLogin,
    onPressBack,
    onHandleOnBlur,
    valueSelect,
    onNextPart,
  };
};
export default useRegister;
