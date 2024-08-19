import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import dataCategory, { ICategoryData } from "@data/dataCategory";
import useHome from "@hooks/useHome";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait, ScaleFontPortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { I18n } from "react-redux-i18n";
import Search from "./components/Search";
import Category from "./components/Category";
import dataList from "@data/dataList";
import RenderItem from "./components/RenderItem";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {} = props || {};
  const { isHeartFocus, onFocusHeart, onGoLogin, onPressBack, onShowDetail, bottomSheetRef } =
    useHome();
  const insets = InsetStyleUtil();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, insets]}>
        <Search />
        <Category data={dataCategory} />
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerScrollView}
          style={styles.scrollView}
          data={dataList}
          renderItem={({ item, index }) => <RenderItem data={item} index={index} />}
        />
        <BottomSheet
          ref={bottomSheetRef}
          snapTo={"90%"}
          backgroundColor={"white"}
          backDropColor={"black"}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ScalePortrait(12)
  },
  containerScrollView: {
    alignItems: "center",
    gap: ScalePortrait(16),
    borderWidth: 1
  },
  scrollView: {
    width: "100%",
    borderRadius: ScalePortrait(12),
    marginBottom: ScalePortrait(12)
  },
  imageContainer: {
    width: "100%"
  }
});
