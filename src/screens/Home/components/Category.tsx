import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { ICategoryData } from "@data/dataCategory";
import { ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

interface CategoryProps {
  data?: ICategoryData[];
  onPress?: () => void;
}

const Category = (props: CategoryProps) => {
  const { data, onPress } = props ?? {};
  return (
    <View style={styles.container}>
      {data?.map((item: ICategoryData, index: number) => {
        return (
          <ButtonAnimation key={index} onPress={onPress}>
            <View
              key={index}
              style={[styles.bodyContainer, { backgroundColor: item.backgroundColor }]}
            >
              <FastImage source={{ uri: item.imageCategory }} style={styles.imageCategory} />
              <Text style={styles.titleCategory}>{item.text}</Text>
            </View>
          </ButtonAnimation>
        );
      })}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: ScalePortrait(12)
  },
  bodyContainer: {
    width: ScalePortrait(70),
    gap: ScalePortrait(6),
    alignItems: "center",
    borderRadius: ScalePortrait(4),
    paddingVertical: ScalePortrait(6)
  },
  imageCategory: {
    width: ScalePortrait(40),
    aspectRatio: 1,
    resizeMode: "contain"
  },
  titleCategory: {
    fontFamily: Fonts.Manrope_Medium,
    color: Colors.white
  }
});
