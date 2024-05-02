import Colors from "@constants/Colors";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait, ScaleFontPortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FastImage from "react-native-fast-image";

interface IChatBoxProps {}

const ChatBox = (props: IChatBoxProps) => {
  const insets = InsetStyleUtil();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View></View>
    </TouchableWithoutFeedback>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue_04,
    paddingHorizontal: ScalePortrait(12),
  },
});
