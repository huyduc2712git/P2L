import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import HeaderRegister from "./HeaderRegister";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait } from "@utils/ScalePortraitUtil";
import Colors from "@constants/Colors";
import useRegister from "@hooks/useRegister";
import { I18n } from "react-redux-i18n";
import InputComponent from "@components/InputComponent";
import { INPUT_ADDRESS, INPUT_EMAIL, INPUT_USER_INFO } from "@constants/index";
import ButtonComponent from "@components/ButtonComponent";

interface IContactInformationProps {
  onBackPart?: (part: number) => void;
}

const ContactInformation = (props: IContactInformationProps) => {
  const { onBackPart } = props || {};
  const { part, onShowPopupBusiness, onNextPart } = useRegister();
  const insets = InsetStyleUtil();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <HeaderRegister
          indexPart={part + 1}
          descHeader={I18n.t("desccontactInfoRegister")}
          handleGoBack={() => onBackPart && onBackPart?.(1)}
        />
        <InputComponent
          // onChangeText={onHandleChageText}
          style={styles.marginTopInputFirst}
          label={INPUT_USER_INFO.label}
          // onBlur={onHandleOnBlur}
          placeholder={INPUT_USER_INFO.placeholder}
          // error={errorMessage}
          // setErrorMessage={setErrorMessage}
        />
        <InputComponent
          // onChangeText={onHandleChageText}
          style={styles.marginTopInputNext}
          label={INPUT_EMAIL.label}
          // onBlur={onHandleOnBlur}
          placeholder={INPUT_EMAIL.placeholder}
          // error={errorMessage}
          // setErrorMessage={setErrorMessage}
        />
        <InputComponent
          type={"SELECT"}
          hiddenDirectional
          editable={false}
          onPress={onShowPopupBusiness}
          // onChangeText={onHandleChageText}
          style={styles.marginTopInputNext}
          label={INPUT_ADDRESS.label}
          // onBlur={onHandleOnBlur}
          placeholder={INPUT_ADDRESS.placeholder}
          // error={errorMessage}
          // setErrorMessage={setErrorMessage}
        />
        <ButtonComponent
          onPress={() => onNextPart && onNextPart?.(3)}
          styleContainer={styles.buttonComponent}
          title={I18n.t("continueRegister")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ScalePortrait(20),
    backgroundColor: Colors.white,
  },
  marginTopInputFirst: {
    marginTop: ScalePortrait(32),
  },
  marginTopInputNext: {
    marginTop: ScalePortrait(24),
  },
  buttonComponent: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
