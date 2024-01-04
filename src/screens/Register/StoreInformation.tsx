import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import ButtonComponent from "@components/ButtonComponent";
import InputComponent from "@components/InputComponent";
import Colors from "@constants/Colors";
import { INPUT_BUSINESS, INPUT_CODE, INPUT_NAME } from "@constants/index";
import useRegister from "@hooks/useRegister";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { I18n } from "react-redux-i18n";
import HeaderRegister from "./HeaderRegister";
import AppNavigator from "@navigation/AppNavigator";

interface IStoreInformationProps {
  onNextPart?: (part: number) => void;
}

const StoreInformation = (props: IStoreInformationProps) => {
  const { onNextPart } = props || {};
  const {
    onHandleChageText,
    errorMessage,
    setErrorMessage,
    onHandleOnBlur,
    valueSelect,
    onShowPopupBusiness,
    part,
  } = useRegister();
  const insets = InsetStyleUtil();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <HeaderRegister
          handleGoBack={() => AppNavigator.goBack()}
          indexPart={part}
          descHeader={I18n.t("descRegister")}
        />
        <InputComponent
          onChangeText={onHandleChageText}
          style={styles.marginTopInputFirst}
          label={INPUT_NAME.label}
          onBlur={onHandleOnBlur}
          placeholder={INPUT_NAME.placeholder}
          error={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <InputComponent
          onChangeText={onHandleChageText}
          style={styles.marginTopInput}
          label={INPUT_CODE.label}
          placeholder={INPUT_CODE.placeholder}
          error={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <InputComponent
          type={"SELECT"}
          editable={false}
          value={valueSelect}
          onPress={onShowPopupBusiness}
          onChangeText={onHandleChageText}
          style={styles.marginTopInput}
          labelSelect={INPUT_BUSINESS.label}
          placeholder={INPUT_BUSINESS.placeholder}
          optional={INPUT_BUSINESS.optional}
        />
        <ButtonComponent
          onPress={() => onNextPart && onNextPart?.(part + 1)}
          styleContainer={styles.buttonComponent}
          title={I18n.t("continueRegister")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ScalePortrait(20),
    backgroundColor: Colors.white,
  },
  buttonComponent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  marginTopInput: {
    marginTop: ScalePortrait(24),
  },
  marginTopInputFirst: {
    marginTop: ScalePortrait(32),
  },
});
