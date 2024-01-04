import AppNavigator from "@navigation/AppNavigator";
import { ROUTES } from "@navigation/routes";
import BusinessPopup from "@screens/Dialog/Components/BusinessPopup";
import { useEffect, useMemo, useState } from "react";

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
    if (part === 2) {
      console.log("sddsdss");
    } else {
      AppNavigator.showDialog({
        screen: BusinessPopup,
        setValueSelectet: setValueSelectet,
        titleHeader: "Lĩnh vực kinh doanh",
      });
    }
  };

  const onNextPart = (partValue: number) => {
    setPart(partValue);
  };

  const onBackPart = (partValue: number) => {
    setPart(partValue);
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
