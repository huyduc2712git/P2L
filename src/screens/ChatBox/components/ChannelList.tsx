import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IChannelListProps {}

const ChannelList = (props: IChannelListProps) => {
  const {} = props ?? {};
  return (
    <View>
      <Text>ChannelList</Text>
    </View>
  );
};

export default ChannelList;

const styles = StyleSheet.create({
  container: {}
});
