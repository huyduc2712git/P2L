import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { I18n } from "react-redux-i18n";

interface IHeaderRegisterProps {
  indexPart?: number;
  handleGoBack?: () => void;
  descHeader?: string;
}

const HeaderRegister = (props: IHeaderRegisterProps) => {
  const { indexPart, handleGoBack, descHeader } = props || {};
  return (
    <View style={styles.container}>
      <View style={styles.markIconBack}>
        <ButtonAnimation
          onPress={handleGoBack}
          source={Images.ic_directional}
          style={styles.iconBack}
        />
      </View>
      <View style={styles.markCouter}>
        <Text style={styles.counter}>{indexPart}</Text>
        <Text style={styles.counterMax}>{` / ${4}`}</Text>
      </View>
      <Text style={styles.titleRegister}>{I18n.t("titleRegister")}</Text>
      <Text style={styles.descRegister}>{descHeader}</Text>
    </View>
  );
};

export default HeaderRegister;

const styles = StyleSheet.create({
  container: {},
  markIconBack: {
    paddingVertical: ScalePortrait(13),
  },
  iconBack: {
    width: ScalePortrait(24),
    aspectRatio: 1,
    transform: [{ rotate: "90deg" }],
  },
  markCouter: {
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    marginTop: ScalePortrait(16),
    fontSize: ScaleFontPortrait(16),
    color: Colors.black_01,
    fontFamily: Fonts.TikTokText_Regular,
  },
  counterMax: {
    marginTop: ScalePortrait(16),
    fontSize: ScaleFontPortrait(16),
    color: Colors.grey_07,
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
});
