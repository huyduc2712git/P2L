import { Fonts } from "@assets/index";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useMemo, useState } from "react";
import { Text, StyleSheet, Button, Pressable } from "react-native";
import SectionListItem from "./SectionListItem";
import Colors from "@constants/Colors";
import Animated, { withTiming } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { Images } from "@assets/images";

interface IItem {
  imageUrl: string;
  title: string;
}

interface ISectionListComponentProps {
  itemSection?: any;
  indexSection?: number;
}

const SectionListComponent = (props: ISectionListComponentProps) => {
  const { itemSection, indexSection } = props ?? {};
  const { title, item } = itemSection || {};
  const [showMore, setShowMore] = useState(false);

  const sectionData = useMemo(() => {
    return showMore ? item : item?.slice(0, 4);
  }, [item, showMore]);

  const onToggleShowSection = () => {
    setShowMore((prev) => !prev);
  };

  function CustomLayoutTransition(values: any) {
    "worklet";
    return {
      animations: {
        height: withTiming(values.targetHeight, { duration: 200 }),
      },
      initialValues: {
        height: values.currentHeight,
      },
    };
  }

  function CustomButtonLayout(values: any) {
    "worklet";
    return {
      animations: {
        originY: withTiming(values.targetOriginY, { duration: 200 }),
      },
      initialValues: {
        originY: values.currentOriginY,
        height: values.currentHeight,
      },
    };
  }

  return (
    <Animated.View layout={CustomButtonLayout} style={styles.container}>
      <Text style={styles.titleContainer}>{title}</Text>
      <Animated.View layout={CustomLayoutTransition} style={styles.content}>
        {sectionData.map((itemContent: IItem, indexContent: number) => {
          return <SectionListItem item={itemContent} index={indexContent} />;
        })}
      </Animated.View>

      {item.length > 4 && (
        <Pressable onPress={onToggleShowSection}>
          <Animated.View
            layout={CustomButtonLayout}
            style={{
              alignSelf: "center",
              backgroundColor: "#FE8361",
              width: ScalePortrait(60 - 4),
              height: ScalePortrait(26),
              borderBottomRightRadius: ScalePortrait(16),
              borderBottomLeftRadius: ScalePortrait(16),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FastImage
              style={[
                styles.iconArrow,
                { transform: [{ rotate: !showMore ? "-90deg" : "90deg" }] },
              ]}
              tintColor={Colors.white}
              source={Images.ic_left_arrow}
            />
          </Animated.View>
        </Pressable>
      )}
    </Animated.View>
  );
};

export default SectionListComponent;

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    paddingVertical: ScalePortrait(16),
    fontFamily: Fonts.TikTokText_Bold,
    fontSize: ScaleFontPortrait(26),
    lineHeight: ScaleFontPortrait(34),
  },
  content: {
    width: "100%",
    backgroundColor: Colors.white,
    paddingVertical: ScalePortrait(6),
    paddingHorizontal: ScalePortrait(12),
    overflow: "hidden",
    borderRadius: ScalePortrait(12),
  },
  iconArrow: {
    width: ScalePortrait(12),
    aspectRatio: 1,
  },
});
