import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { ScalePortrait } from "@utils/ScalePortraitUtil";

interface ICustomMessageProps {
  message?: string;
  isMyMessage?: any;
}

const CustomMessage = (props: ICustomMessageProps) => {
  const { message, isMyMessage } = props ?? {};
  return (
    <View
      style={
        (styles.container,
        {
          alignSelf: isMyMessage ? "flex-end" : "flex-start",
          backgroundColor: isMyMessage ? "#ADD8E6" : "#ededed"
        })
      }
    >
      <Text>{message}</Text>
    </View>
  );
};

export default memo(CustomMessage);

const styles = StyleSheet.create({
  container: {
    padding: ScalePortrait(10),
    margin: ScalePortrait(10),
    borderRadius: ScalePortrait(10),
    width: "70%"
  }
});
