import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonComponent from "@components/ButtonComponent";
import InputComponent from "@components/InputComponent";
import Colors from "@constants/Colors";
import useLogin from "@hooks/useLogin";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import FastImage from "react-native-fast-image";

interface ILoginProps {}

const Login = (props: ILoginProps) => {
  const {} = props || {};
  const { onPressBack, onSumitLogin, setUsername, setPassword } = useLogin();
  const insets = InsetStyleUtil();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <FastImage
          resizeMode="contain"
          source={Images.ic_logo}
          style={{
            width: ScalePortrait(151),
            height: ScalePortrait(53),
            marginTop: ScalePortrait(80),
            alignSelf: "center",
          }}
        />
        <InputComponent
          placeholder={"Nhap so dien thoai hoac email"}
          onChangeText={setUsername}
          style={{ marginTop: ScalePortrait(52) }}
        />
        <InputComponent
          secureTextEntry
          placeholder={"Nhap mat khau"}
          onChangeText={setPassword}
          style={{ marginTop: ScalePortrait(20) }}
        />
        <ButtonComponent
          onPress={onSumitLogin}
          styleContainer={{ marginTop: ScalePortrait(20) }}
          title="Đăng nhập"
        />
        <Text
          onPress={() => console.log("Quên mật khẩu")}
          style={{
            marginTop: ScalePortrait(24),
            fontFamily: Fonts.TikTokText_Regular,
            color: Colors.blue_02,
            fontSize: ScaleFontPortrait(16),
            lineHeight: ScaleFontPortrait(18),
          }}
        >
          {"Quên mật khẩu"}?
        </Text>
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
