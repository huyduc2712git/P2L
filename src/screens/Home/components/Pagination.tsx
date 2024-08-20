import { StyleSheet, View } from "react-native";
import React from "react";
import Dot from "./Dot";

type Props = {
  paginationIndex: number;
  data: any[];
};
const Pagination = (props: Props) => {
  const { paginationIndex, data } = props ?? {};

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        return <Dot index={index} key={index} paginationIndex={paginationIndex} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
