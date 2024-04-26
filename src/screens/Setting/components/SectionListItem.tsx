import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import Colors from "@constants/Colors";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { memo } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
interface IItem {
  imageUrl?: string;
  title?: string;
}

interface ISectionListItemProps {
  item?: IItem;
  index?: number;
}

const SectionListItem = (props: ISectionListItemProps) => {
  const { item, index } = props ?? {};

  return (
    <TouchableOpacity key={index}>
      <View style={[styles.container]}>
        <View style={styles.content}>
          <FastImage source={{ uri: item?.imageUrl }} style={styles.icon} />
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <FastImage
          source={Images.ic_left_arrow}
          tintColor={Colors.grey_05}
          style={styles.iconArrow}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(SectionListItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ScalePortrait(14),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: ScalePortrait(18),
    height: ScalePortrait(18),
  },
  title: {
    marginLeft: ScalePortrait(14),
    fontFamily: Fonts.TikTokText_Medium,
    fontSize: ScaleFontPortrait(16),
  },
  iconArrow: {
    transform: [{ rotateY: "-180deg" }],
    width: ScalePortrait(16),
    height: ScalePortrait(16),
  },
});
