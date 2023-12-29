import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import BusinessPopup from "@screens/Dialog/Components/BusinessPopup";
import { useMemo, useState } from "react";

const useRegister = () => {
  const [part, setPart] = useState(1);
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
      setValueSelectet: setValueSelectet,
    });
  };

  const onNextPart = (part: number) => {
    setPart(part);
  };

  const onBackPart = (part: number) => {
    setPart(part);
  };
  return {
    part,
    onHandleChageText,
    errorMessage,
    setErrorMessage,
    onShowPopupBusiness,
    handleGoBack,
    onHandleOnBlur,
    valueSelect,
    onNextPart,
    onBackPart,
  };
};
export default useRegister;
