import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface PaymentDetailProps {}

const PaymentDetail = (props: PaymentDetailProps) => {
  return (
    <View style={styles.container}>
      <Text>PaymentDetail</Text>
    </View>
  );
};

export default PaymentDetail;

const styles = StyleSheet.create({
  container: {}
});
