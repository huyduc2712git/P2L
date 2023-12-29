import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import ButtonComponent from "@components/ButtonComponent";
import InputComponent from "@components/InputComponent";
import Colors from "@constants/Colors";
import useLogin from "@hooks/useLogin";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FastImage from "react-native-fast-image";
import { I18n } from "react-redux-i18n";

interface ILoginProps {}

const Login = (props: ILoginProps) => {
  const {} = props || {};
  const { onPressBack, onSumitLogin } = useLogin();
  const insets = InsetStyleUtil();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <InputComponent
          placeholder={"Nhap so dien thoai hoac email"}
          style={{ marginTop: ScalePortrait(132) }}
        />
        <InputComponent
          secureTextEntry
          placeholder={"Nhap mat khau"}
          style={{ marginTop: ScalePortrait(20) }}
        />
        <ButtonComponent
          onPress={onSumitLogin}
          styleContainer={{ marginTop: ScalePortrait(20) }}
          title="Dang xuat"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: ScalePortrait(20),
  },
  containerRenderBottom: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
  },
});
