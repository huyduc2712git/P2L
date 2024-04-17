import React, { memo, useMemo } from "react";
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import ButtonAnimation from "./ButtonAnimation";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import Colors from "@constants/Colors";
import { Fonts } from "@assets/index";

interface IButtonComponentProps {
  styleContainer?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  styleTitleButton?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
  ColorType?: "blue" | "red" | "green";
}

export interface IAttributeColor {
  borderColor?: string;
  backgroundColor?: string;
  shadowColor?: string;
}

const ButtonComponent = (props: IButtonComponentProps) => {
  const {
    styleContainer,
    styleTitleButton,
    style,
    title,
    onPress,
    ColorType = "blue",
  } = props || {};

  const SET_COLORS: Record<string, IAttributeColor> = useMemo(() => {
    return {
      blue: {},
      red: {},
      green: {},
    };
  }, []);
  const attribute = SET_COLORS[ColorType];
  return (
    <View style={styleContainer}>
      <ButtonAnimation onPress={onPress}>
        <View style={[styles.containerButton, style]}>
          <Text style={[styles.titleButton, styleTitleButton]}>{title}</Text>
        </View>
      </ButtonAnimation>
    </View>
  );
};

export default memo(ButtonComponent);

const styles = StyleSheet.create({
  containerButton: {
    width: "100%",
    height: ScalePortrait(50),
    backgroundColor: Colors.blue_02,
    borderRadius: ScalePortrait(12),
    alignItems: "center",
    justifyContent: "center",
  },
  titleButton: {
    fontSize: ScaleFontPortrait(16),
    fontFamily: Fonts.TikTokText_Medium,
    lineHeight: ScaleFontPortrait(18),
    color: Colors.white,
  },
});
