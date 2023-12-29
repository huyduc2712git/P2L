import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import BusinessPopup from "@screens/Dialog/Components/BusinessPopup";
import { useMemo, useState } from "react";

const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [valueSelect, setValueSelectet] = useState("");

  const handleGoBack = () => {
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

  const onShowPopupBusiness = () => {
    // setValueSelectet("Trải nghiệm văn hoá");
    AppNavigator.showDialog({
      screen: BusinessPopup,
    });
  };

  const onNextPart = () => {
    setErrorMessage("Vui lòng điền vào trường hợp này");
  };
  return {
    onHandleChageText,
    errorMessage,
    setErrorMessage,
    onShowPopupBusiness,
    handleGoBack,
    onHandleOnBlur,
    valueSelect,
    onNextPart,
  };
};
export default useRegister;
