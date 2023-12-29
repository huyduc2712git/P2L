import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import dataCategory, { ICategoryData } from "@data/dataCategory";
import useHome from "@hooks/useHome";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScalePortrait, ScaleFontPortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import { I18n } from "react-redux-i18n";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {} = props || {};
  const { isHeartFocus, onFocusHeart, onGoLogin, onPressBack } = useHome();
  const insets = InsetStyleUtil();
  const renderCategory = () => {
    return (
      <View style={styles.containerCategory}>
        {dataCategory.map((item: ICategoryData, index: number) => {
          return (
            <ButtonAnimation onPress={onPressBack}>
              <View
                style={[
                  styles.contentCategory,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <FastImage
                  resizeMode="contain"
                  source={{ uri: item.imageCategory }}
                  style={styles.imageCategory}
                />
                <Text style={styles.titleCategory}>{item.text}</Text>
              </View>
            </ButtonAnimation>
          );
        })}
      </View>
    );
  };
  const renderSearch = () => {
    return (
      <View
        style={{
          width: "100%",
          paddingVertical: ScalePortrait(10),
          paddingHorizontal: ScalePortrait(4),
        }}
      >
        <ButtonAnimation onPress={onGoLogin}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: Colors.grey_02,
              borderRadius: ScalePortrait(60),
              alignItems: "center",
              paddingHorizontal: ScalePortrait(16),
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                paddingVertical: ScalePortrait(10),
                fontFamily: Fonts.Manrope_Regular,
                fontSize: ScaleFontPortrait(14),
                color: Colors.brown_01,
              }}
            >
              {I18n.t("homeQuestionSearch")}
            </Text>
            <FastImage
              resizeMode="contain"
              source={Images.ic_search}
              style={{ width: ScalePortrait(20), aspectRatio: 1 }}
            />
          </View>
        </ButtonAnimation>
      </View>
    );
  };
  return (
    <View style={[styles.container, insets]}>
      {renderSearch()}
      {renderCategory()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerScrollView}
        style={styles.scrollView}
      >
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <View style={styles.imageContainer}>
              <FastImage source={Images.bg_shoes} style={styles.image}>
                <View
                  style={{
                    backgroundColor: Colors.while,
                    padding: ScalePortrait(8),
                    position: "absolute",
                    borderRadius: ScalePortrait(20),
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: ScalePortrait(10),
                    right: ScalePortrait(10),
                  }}
                >
                  <ButtonAnimation onPress={onFocusHeart}>
                    <FastImage
                      source={
                        isHeartFocus ? Images.ic_heart_focus : Images.ic_heart
                      }
                      style={{ width: ScalePortrait(20), aspectRatio: 1 }}
                    />
                  </ButtonAnimation>
                </View>
              </FastImage>
              <View style={styles.detailsContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {I18n.t("homeTitle")}
                </Text>
                <Text numberOfLines={2} style={styles.description}>
                  {I18n.t("homeDescription")}
                </Text>
                <Text numberOfLines={1} style={styles.price}>
                  {"6,999,000đ"}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ScalePortrait(12),
  },
  containerScrollView: {
    alignItems: "center",
    gap: ScalePortrait(16),
  },
  scrollView: {
    width: "100%",
    borderRadius: ScalePortrait(12),
    marginBottom: ScalePortrait(12),
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: ScalePortrait(343),
    borderRadius: ScalePortrait(12),
  },
  detailsContainer: {
    height: ScalePortrait(75),
    justifyContent: "space-between",
    marginTop: ScalePortrait(8),
  },
  title: {
    fontFamily: Fonts.Manrope_SemiBold,
    fontSize: ScaleFontPortrait(15),
  },
  description: {
    fontFamily: Fonts.Manrope_Regular,
    fontSize: ScaleFontPortrait(13),
    color: Colors.grey_01,
  },
  price: {
    fontFamily: Fonts.Manrope_SemiBold,
    fontSize: ScaleFontPortrait(15),
  },
  containerCategory: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: ScalePortrait(12),
  },
  contentCategory: {
    width: ScalePortrait(70),
    gap: ScalePortrait(6),
    alignItems: "center",
    borderRadius: ScalePortrait(4),
    paddingVertical: ScalePortrait(6),
  },
  imageCategory: {
    width: ScalePortrait(40),
    aspectRatio: 1,
  },
  titleCategory: { fontFamily: Fonts.Manrope_Medium, color: Colors.while },
});
