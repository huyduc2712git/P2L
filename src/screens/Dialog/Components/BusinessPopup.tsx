import Colors from "@constants/Colors";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface IBusinessPopupProps {
  closeDialog?: () => void;
}

const BusinessPopup = (props: IBusinessPopupProps) => {
  const { closeDialog } = props || {};
  console.log("Close dialogggg", closeDialog);
  return (
    <View style={styles.container}>
      <Text>BusinessPopup</Text>
      <Button onPress={() => closeDialog?.()} title="colosdsd" />
    </View>
  );
};

export default BusinessPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.opacity_black_50,
    alignItems: "center",
    justifyContent: "center",
  },
});
