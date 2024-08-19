import { Fonts } from "@assets/index";
import Colors from "@constants/Colors";
import { IDataList } from "@data/dataList";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

interface RenderItemProps {
  index?: number;
  data?: IDataList;
}

const RenderItem = (props: RenderItemProps) => {
  const { data, index } = props ?? {};
  console.log("data", data?.images[0]);

  return (
    <View key={index} style={styles.container}>
      <FastImage resizeMode="contain" source={{ uri: data?.images[0] }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {data?.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
        <Text numberOfLines={1} style={styles.price}>
          {data?.price}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  image: {
    width: "100%",
    height: ScalePortrait(343),
    borderRadius: ScalePortrait(12)
  },
  detailsContainer: {
    height: ScalePortrait(75),
    justifyContent: "space-between",
    marginTop: ScalePortrait(8)
  },
  title: {
    fontFamily: Fonts.Manrope_SemiBold,
    fontSize: ScaleFontPortrait(15)
  },
  description: {
    fontFamily: Fonts.Manrope_Regular,
    fontSize: ScaleFontPortrait(13),
    color: Colors.grey_01
  },
  price: {
    fontFamily: Fonts.Manrope_SemiBold,
    fontSize: ScaleFontPortrait(15)
  }
});
