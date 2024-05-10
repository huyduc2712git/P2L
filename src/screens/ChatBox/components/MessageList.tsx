import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IMessageListProps {}

const MessageList = (props: IMessageListProps) => {
  const {} = props ?? {};
  return (
    <View style={styles.container}>
      <Text>MessageList</Text>
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {}
});
