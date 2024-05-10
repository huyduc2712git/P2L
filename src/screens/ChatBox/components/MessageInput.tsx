import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo, useState } from "react";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import { Images } from "@assets/images";

interface IMessageInputProps {
  onChangeText?: (text: string) => void;
  onSendMessage?: (text: string) => void;
  textValue: string;
}

const defaultMessage = "✌️";

const MessageInput = (props: IMessageInputProps) => {
  const { onChangeText, onSendMessage, textValue = "" } = props ?? {};
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Aa"
        style={[styles.textInput, { width: isFocus ? "70%" : "40%" }]}
      />

      <View style={{ marginLeft: ScalePortrait(10) }}>
        {textValue ? (
          <ButtonAnimation
            onPress={() => onSendMessage?.(textValue)}
            source={Images.ic_send}
            style={styles.iconSend}
            tintColor="blue"
          />
        ) : (
          <ButtonAnimation onPress={() => onSendMessage?.(defaultMessage)}>
            <Text style={styles.textDefault}>{defaultMessage}</Text>
          </ButtonAnimation>
        )}
      </View>
    </View>
  );
};

export default memo(MessageInput);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: ScalePortrait(20),
    alignItems: "center",
    fontFamily: Fonts.TikTokDisplay_Regular,
    fontSize: ScaleFontPortrait(16),
    paddingVertical: ScalePortrait(8),
    paddingHorizontal: ScalePortrait(12),
    flex: 1,
    height: ScalePortrait(34)
  },
  textDefault: {
    fontSize: ScaleFontPortrait(24)
  },
  iconSend: {
    width: ScalePortrait(22),
    aspectRatio: 1
  }
});
