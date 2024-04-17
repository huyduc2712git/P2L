import useATSpeak from "@hooks/useATSpeak";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface IATSpeakProps {}

const ATSpeak = (props: IATSpeakProps) => {
  const insets = InsetStyleUtil();
  const { wordText, changeWord } = useATSpeak();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, insets]}>
        <Text>{wordText}</Text>
        <TextInput
          style={{ width: 300, height: 100, backgroundColor: "red" }}
          onChangeText={changeWord}
        ></TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ATSpeak;

const styles = StyleSheet.create({
  container: {},
});
