import Colors from "@constants/Colors";
import { ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useMemo } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import FastImage from "react-native-fast-image";

interface PicturesProps {
  data?: any;
  currentIndex?: number;
}

const Pictures = (props: PicturesProps) => {
  const { data, currentIndex } = props ?? {};
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `image_${index}`}
        renderItem={({ item, index }) => {
          return (
            <FastImage
              source={item}
              style={[
                styles.imageItem,
                {
                  borderColor: currentIndex === index ? Colors.red_03 : Colors.grey_01
                }
              ]}
            />
          );
        }}
      />
    </View>
  );
};

export default Pictures;

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {
    gap: ScalePortrait(6)
  },
  imageItem: {
    height: ScalePortrait(50),
    width: ScalePortrait(50),
    resizeMode: "contain",
    borderWidth: 1
  }
});
