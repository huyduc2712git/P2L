import BottomSheet from "@components/BottomSheet/BottomSheet";
import dataCategory from "@data/dataCategory";
import useHome from "@hooks/useHome";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Search from "./components/Search";
import Category from "./components/Category";
import dataList, { IDataList } from "@data/dataList";
import RenderItem from "./components/RenderItem";
import Detail from "./components/Detail";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {} = props || {};
  const { isHeartFocus, onFocusHeart, onGoLogin, onPressBack, onShowDetail, bottomSheetRef } =
    useHome();
  const insets = InsetStyleUtil();
  const { images }: IDataList = dataList?.[0] ?? {};

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
          renderItem={({ item, index }) => (
            <RenderItem data={item} index={index} onShowDetail={onShowDetail} />
          )}
        />
        <Detail imageData={images} bottomSheetRef={bottomSheetRef} />
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
    paddingBottom: ScalePortrait(16)
  },
  scrollView: {
    width: "100%",
    borderRadius: ScalePortrait(12)
  },
  imageContainer: {
    width: "100%"
  }
});
