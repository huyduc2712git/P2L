import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { I18n } from "react-redux-i18n";

interface SearchProps {
  onPress?: () => void;
}

const Search = (props: SearchProps) => {
  const { onPress } = props ?? {};
  return (
    <View style={styles.container}>
      <ButtonAnimation onPress={onPress}>
        <View style={styles.bodyContainer}>
          <Text style={styles.titleSearch}>{I18n.t("homeQuestionSearch")}</Text>
          <FastImage source={Images.ic_search} style={styles.imageSearch} />
        </View>
      </ButtonAnimation>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: ScalePortrait(10),
    paddingHorizontal: ScalePortrait(4)
  },
  bodyContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.grey_02,
    borderRadius: ScalePortrait(60),
    alignItems: "center",
    paddingHorizontal: ScalePortrait(16),
    justifyContent: "space-between"
  },
  titleSearch: {
    paddingVertical: ScalePortrait(10),
    fontFamily: Fonts.Manrope_Regular,
    fontSize: ScaleFontPortrait(14),
    color: Colors.brown_01
  },
  imageSearch: {
    width: ScalePortrait(20),
    aspectRatio: 1,
    resizeMode: "contain"
  }
});
