import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import useATSpeak from "@hooks/useATSpeak";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait, ScaleFontPortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FastImage from "react-native-fast-image";

interface IATSpeakProps {}

const placeholderTextInput = "Nhập cụm từ mà bạn muốn phát âm";
const textQuestion = "Bạn muốn nói gì nào?";

const ATSpeak = (props: IATSpeakProps) => {
  const insets = InsetStyleUtil();
  const { wordText, changeWord } = useATSpeak();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <Text style={styles.textQestion}>{textQuestion}</Text>
        <TextInput
          placeholderTextColor={Colors.grey_01}
          style={styles.textInput}
          onChangeText={changeWord}
          placeholder={placeholderTextInput}
        />
        <View style={styles.contentText}>
          <Text style={styles.textWord}>{wordText}</Text>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.contentSpeech}>
            <FastImage style={styles.imageMicro} source={Images.ic_micro} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ATSpeak;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue_04,
    paddingHorizontal: ScalePortrait(12),
  },
  textWord: {
    fontSize: ScaleFontPortrait(40),
    fontFamily: Fonts.TikTokText_Bold,
    textTransform: "uppercase",
    color: Colors.blue_01,
    textAlign: "center",
  },
  textQestion: {
    fontSize: ScaleFontPortrait(20),
    lineHeight: ScaleFontPortrait(20),
    color: Colors.white,
    fontFamily: Fonts.TikTokText_Medium,
    marginTop: ScalePortrait(24),
  },
  textInput: {
    width: "100%",
    height: ScalePortrait(60),
    borderRadius: ScalePortrait(14),
    backgroundColor: Colors.white,
    fontFamily: Fonts.TikTokText_Medium,
    paddingHorizontal: ScalePortrait(20),
    marginTop: ScalePortrait(12),
    fontSize: ScaleFontPortrait(16),
    lineHeight: ScaleFontPortrait(16),
  },
  contentSpeech: {
    width: ScalePortrait(80),
    height: ScalePortrait(80),
    borderRadius: ScalePortrait(40),
    backgroundColor: Colors.grey_01,
    alignSelf: "center",
  },
  imageMicro: {
    width: ScalePortrait(80),
    height: ScalePortrait(80),
    alignItems: "flex-end",
  },
  contentBottom: {
    width: "100%",
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: ScalePortrait(40),
    alignSelf: "center",
    paddingVertical: ScalePortrait(12),
    borderRadius: ScalePortrait(16),
  },
  contentText: {
    marginTop: ScalePortrait(24),
    width: "100%",
    height: ScalePortrait(250),
    borderRadius: ScalePortrait(16),
    backgroundColor: Colors.white,
    padding: ScalePortrait(12),
  },
});
