import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface IPhoneNumberAndPasswordProps {}

const PhoneNumberAndPassword = (props: IPhoneNumberAndPasswordProps) => {
  return (
    <View style={styles.container}>
      <Text>PhoneNumberAndPassword</Text>
    </View>
  );
};

export default PhoneNumberAndPassword;

const styles = StyleSheet.create({
  container: {},
});
