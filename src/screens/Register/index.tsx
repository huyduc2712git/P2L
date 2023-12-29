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
import FastImage from "react-native-fast-image";
import { I18n } from "react-redux-i18n";

interface IRegisterProps {}

const Register = (props: IRegisterProps) => {
  const {} = props || {};
  const {
    onHandleChageText,
    errorMessage,
    setErrorMessage,
    onHandleOnBlur,
    valueSelect,
    onGoLogin,
    onNextPart,
  } = useRegister();
  const insets = InsetStyleUtil();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <ButtonAnimation
          imageButton={Images.ic_directional}
          stylesImage={{ width: ScalePortrait(24), aspectRatio: 1 }}
        />
        {/* <View style={styles.markIconBack}>
          <FastImage
            resizeMode="contain"
            source={Images.ic_directional}
            style={styles.iconBack}
          />
        </View> */}
        <Text style={styles.counter}>{"1 / 4"}</Text>
        <Text style={styles.titleRegister}>{I18n.t("titleRegister")}</Text>
        <Text style={styles.descRegister}>{I18n.t("descRegister")}</Text>
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
          onPress={onGoLogin}
          onChangeText={onHandleChageText}
          style={styles.marginTopInput}
          labelSelect={INPUT_BUSINESS.label}
          placeholder={INPUT_BUSINESS.placeholder}
          optional={INPUT_BUSINESS.optional}
        />
        <ButtonComponent
          onPress={onNextPart}
          styleContainer={styles.buttonComponent}
          title={I18n.t("continueRegister")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ScalePortrait(20),
    backgroundColor: Colors.while,
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
  iconBack: {
    width: ScalePortrait(24),
    aspectRatio: 1,
    transform: [{ rotate: "90deg" }],
  },
  counter: {
    marginTop: ScalePortrait(16),
    fontSize: ScaleFontPortrait(16),
    color: Colors.black_01,
    fontFamily: Fonts.TikTokText_Regular,
  },
  titleRegister: {
    marginTop: ScalePortrait(12),
    fontSize: ScaleFontPortrait(24),
    color: Colors.black_01,
    fontFamily: Fonts.TikTokText_Bold,
  },
  descRegister: {
    marginTop: ScalePortrait(16),
    fontSize: ScaleFontPortrait(16),
    color: Colors.grey_05,
    fontFamily: Fonts.TikTokText_Regular,
  },
  markIconBack: {
    paddingVertical: ScalePortrait(13),
  },
});
