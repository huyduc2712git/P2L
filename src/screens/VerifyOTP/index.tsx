import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Fonts } from "@assets/index";
import Colors from "@constants/Colors";
import useVerifyOTP from "@hooks/useVerifyOTP";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import FastImage from "react-native-fast-image";
import { Images } from "@assets/images";
import { I18n } from "react-redux-i18n";
import ButtonAnimation from "@components/ButtonAnimation";
import Conter from "./Conter";

interface IVerifyOTPProps {
  numberPhone?: number;
}
const TIME_RESET_OTP = 1000 * 60 * 1; // 1mins;

const VerifyOTP = (props: IVerifyOTPProps) => {
  const { numberPhone = "0349751007" } = props || {};

  const {
    onPressBack,
    handleOtpChange,
    otp,
    onResetOTP,
    onGoRegister,
    onSumitVerification,
    errorMessage,
  } = useVerifyOTP();
  const insets = InsetStyleUtil();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <View style={styles.containerIconChevron}>
          <FastImage
            resizeMode="contain"
            source={Images.ic_directional}
            style={styles.iconChevron}
          />
        </View>
        <Text style={styles.textTitleVerification}>
          {I18n.t("titleVerification")}
        </Text>
        <Text style={styles.descVerification}>
          {I18n.t("descVerification")?.replace(
            "$numberPhone",
            numberPhone.toString()
          )}
        </Text>
        <OTPInputView
          style={styles.containerOTPInput}
          pinCount={6}
          code={otp}
          onCodeChanged={handleOtpChange}
          autoFocusOnLoad
          codeInputFieldStyle={styles.inputField}
          codeInputHighlightStyle={styles.inputHighlight}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        {errorMessage ? (
          <Text
            style={{
              fontSize: ScaleFontPortrait(12),
              fontFamily: Fonts.Manrope_Medium,
              color: "red",
              marginTop: ScalePortrait(4),
            }}
          >
            {errorMessage}
          </Text>
        ) : null}
        <View style={styles.containerBelow}>
          <Conter initTimeRemain={TIME_RESET_OTP} isDisableResend={false} />
          <ButtonAnimation onPress={onGoRegister}>
            <Text style={styles.textGoRegister}>
              {I18n.t("goRegisterVerification")}
            </Text>
          </ButtonAnimation>
          <View style={styles.contentButton}>
            <ButtonAnimation onPress={onSumitVerification}>
              <View style={styles.markButton}>
                <Text style={styles.titleButton}>
                  {I18n.t("continueVerification")}
                </Text>
              </View>
            </ButtonAnimation>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ScalePortrait(16),
    backgroundColor: Colors.white,
    width: "100%",
  },
  containerOTPInput: {
    width: "100%",
    height: ScalePortrait(45),
    marginTop: ScalePortrait(24),
  },
  containerBelow: {
    marginTop: ScalePortrait(82),
    alignItems: "center",
    flex: 1,
  },
  inputField: {
    width: ScalePortrait(44),
    height: ScalePortrait(44),
    fontFamily: Fonts.Manrope_Bold,
    fontSize: ScaleFontPortrait(20),
    backgroundColor: Colors.white,
    borderRadius: ScalePortrait(8),
    color: Colors.black,
    borderColor: Colors.grey_02,
  },
  inputHighlight: {
    borderColor: Colors.purple_01,
  },
  containerIconChevron: {
    paddingVertical: ScalePortrait(10),
    width: "100%",
  },
  iconChevron: {
    width: ScalePortrait(24),
    height: ScalePortrait(24),
  },
  textTitleVerification: {
    fontSize: ScaleFontPortrait(20),
    fontFamily: Fonts.Manrope_ExtraBold,
    color: Colors.blue_01,
    marginTop: ScalePortrait(24),
  },
  descVerification: {
    marginTop: ScalePortrait(8),
    fontSize: ScaleFontPortrait(14),
    fontFamily: Fonts.Manrope_Regular,
    color: Colors.blue_01,
  },
  textGoRegister: {
    fontSize: ScaleFontPortrait(14),
    fontFamily: Fonts.Manrope_SemiBold,
    color: Colors.purple_01,
    paddingVertical: ScalePortrait(13),
  },
  contentButton: {
    width: "100%",
    marginTop: ScalePortrait(9),
  },
  markButton: {
    height: ScalePortrait(54),
    backgroundColor: Colors.purple_01,
    width: "100%",
    borderRadius: ScalePortrait(12),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.purple_01,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 2,
  },
  titleButton: {
    color: Colors.white,
    fontSize: ScaleFontPortrait(14),
    fontFamily: Fonts.Manrope_SemiBold,
  },
});
