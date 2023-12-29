import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import Colors from "@constants/Colors";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { memo, useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from "react-native";
import FastImage from "react-native-fast-image";
import ButtonAnimation from "./ButtonAnimation";

interface IInputComponentProps extends TextInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  error?: string;
  setErrorMessage?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: "SELECT";
  onPress?: () => void;
  labelSelect?: string;
  optional?: string;
}

const InputComponent = (props: IInputComponentProps) => {
  const {
    label,
    style,
    error,
    setErrorMessage,
    onFocus,
    onBlur,
    onPress,
    labelSelect,
    optional,
    type,
    ...textInputProps
  } = props || {};

  const [isFocused, setIsFocused] = useState(false);

  const borderColor = useMemo(() => {
    return error ? Colors.red_06 : isFocused ? Colors.blue_02 : Colors.grey_03;
  }, [error, isFocused]);

  const onHandleOnBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur?.();
    }
  };

  const onHandleOnFocus = () => {
    setErrorMessage?.("");
    setIsFocused(true);
    if (onFocus) {
      onFocus?.();
    }
  };

  return (
    <View style={style}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {labelSelect ? (
        <View style={styles.rowLabelSelect}>
          <Text style={styles.label}>{labelSelect}</Text>
          <Text style={styles.labelSelect}>{optional}</Text>
        </View>
      ) : null}
      {!type ? (
        <TextInput
          placeholderTextColor={Colors.grey_06}
          style={[styles.containerTextInput, { borderColor }]}
          onFocus={onHandleOnFocus}
          onBlur={onHandleOnBlur}
          {...textInputProps}
        />
      ) : (
        <ButtonAnimation onPress={onPress}>
          <View pointerEvents="none" style={styles.backgroundInputSelect}>
            <TextInput
              placeholderTextColor={Colors.grey_06}
              style={[styles.containerTextInputSelect]}
              onFocus={onHandleOnFocus}
              onBlur={onHandleOnBlur}
              {...textInputProps}
            />
            <FastImage
              resizeMode="contain"
              source={Images.ic_directional}
              style={styles.iconDirectional}
            />
          </View>
        </ButtonAnimation>
      )}

      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
};

export default memo(InputComponent);

const styles = StyleSheet.create({
  label: {
    color: Colors.black_01,
    fontSize: ScaleFontPortrait(15),
    fontFamily: Fonts.TikTokText_Regular,
    lineHeight: ScaleFontPortrait(17),
  },
  labelSelect: {
    color: Colors.grey_06,
    fontSize: ScaleFontPortrait(15),
    fontFamily: Fonts.TikTokText_Regular,
    lineHeight: ScaleFontPortrait(17),
  },
  rowLabelSelect: {
    flexDirection: "row",
  },
  iconDirectional: {
    width: ScalePortrait(18),
    aspectRatio: 1,
  },
  backgroundInputSelect: {
    borderWidth: 0.5,
    marginTop: ScalePortrait(8),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: ScalePortrait(16),
    backgroundColor: Colors.grey_04,
    borderRadius: ScalePortrait(12),
    borderColor: Colors.grey_03,
  },
  containerTextInput: {
    width: "100%",
    borderWidth: 0.5,
    height: ScalePortrait(50),
    backgroundColor: Colors.grey_04,
    borderRadius: ScalePortrait(12),
    borderColor: Colors.grey_03,
    paddingHorizontal: ScalePortrait(16),
    fontFamily: Fonts.TikTokText_Regular,
    fontSize: ScaleFontPortrait(16),
    marginTop: ScalePortrait(8),
    color: Colors.black_01,
  },
  containerTextInputSelect: {
    flex: 1,
    width: "100%",
    height: ScalePortrait(50),
    borderColor: Colors.grey_03,
    fontFamily: Fonts.TikTokText_Regular,
    fontSize: ScaleFontPortrait(16),
    color: Colors.black_01,
  },
  errorMessage: {
    color: Colors.red_06,
    marginTop: ScalePortrait(4),
    fontFamily: Fonts.TikTokText_Regular,
    fontSize: ScaleFontPortrait(13),
    lineHeight: ScalePortrait(15),
  },
});
