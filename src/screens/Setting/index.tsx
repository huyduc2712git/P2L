import { Fonts } from "@assets/index";
import Colors from "@constants/Colors";
import InsetStyleUtil from "@utils/InsetStyleUtil";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import SectionListComponent from "./components/SectionListComponent";
import data from "@data/data";
import ButtonAnimation from "@components/ButtonAnimation";
import dataSection, { SectionData } from "@data/dataSection";

interface ISettingProps {
  data?: SectionData;
}

const Setting = (props: ISettingProps) => {
  const { data = dataSection } = props;
  const { avatar, name, phone, sectionList } = data;
  const insets = InsetStyleUtil();

  return (
    <View style={[styles.container, insets]}>
      {/* <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={styles.bodyProfile}>
              <View style={styles.profileTopSection}>
                <View style={styles.avatarContainer}>
                  <FastImage
                    source={{ uri: avatar }}
                    style={styles.avatarImage}
                  />
                </View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.phoneText}>{phone}</Text>
              </View>
              <View style={styles.borderBottomLine}></View>
            </View>
          );
        }}
        keyExtractor={(_, index) => "Item" + index}
        renderItem={({ item, index }) => {
          return (
            <SectionListComponent itemSection={item} indexSection={index} />
          );
        }}
        data={[...sectionList, ...sectionList]}
      /> */}
      <ScrollView
        contentContainerStyle={{ paddingVertical: ScalePortrait(20) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bodyProfile}>
          <View style={styles.profileTopSection}>
            <View style={styles.avatarContainer}>
              <FastImage source={{ uri: avatar }} style={styles.avatarImage} />
            </View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.phoneText}>{phone}</Text>
          </View>
          <View style={styles.borderBottomLine}></View>
        </View>
        {sectionList.map((item, index) => {
          return (
            <SectionListComponent itemSection={item} indexSection={index} />
          );
        })}
        <View
          style={{
            width: "100%",
            backgroundColor: Colors.white,
            marginTop: ScalePortrait(12),
            flexDirection: "row",
            paddingVertical: ScalePortrait(16),
            paddingHorizontal: ScalePortrait(12),
            borderRadius: ScalePortrait(12),
          }}
        >
          <Text style={styles.settingTitle}>{"Ngôn ngữ"}</Text>
        </View>
        <View
          style={{
            width: "100%",
            // height: 100,
            borderWidth: 1,
            marginTop: ScalePortrait(12),
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: 20,
          }}
        >
          <ButtonAnimation>
            <View
              style={{ backgroundColor: "red", height: 40, flex: 1 }}
            ></View>
          </ButtonAnimation>

          <View style={{ backgroundColor: "blue", height: 40, flex: 1 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey_04,
    paddingHorizontal: ScalePortrait(12),
  },
  bodyProfile: {
    backgroundColor: Colors.white,
    width: "100%",
    borderRadius: ScalePortrait(12),
    justifyContent: "flex-end",
    marginTop: ScalePortrait(30),
  },
  profileTopSection: {
    width: "100%",
    borderTopRightRadius: ScalePortrait(12),
    borderTopLeftRadius: ScalePortrait(12),
    alignItems: "center",
    paddingVertical: ScalePortrait(8),
  },
  avatarContainer: {
    width: ScalePortrait(100),
    height: ScalePortrait(100),
    backgroundColor: Colors.white,
    borderRadius: ScalePortrait(50),
    alignItems: "center",
    justifyContent: "center",
    marginTop: ScalePortrait(-40),
  },
  avatarImage: {
    width: ScalePortrait(90),
    height: ScalePortrait(90),
  },
  nameText: {
    marginTop: ScalePortrait(4),
    fontFamily: Fonts.TikTokText_Bold,
    fontSize: ScaleFontPortrait(24),
    lineHeight: ScaleFontPortrait(32),
  },
  phoneText: {
    fontFamily: Fonts.TikTokDisplay_Regular,
    fontSize: ScaleFontPortrait(16),
    lineHeight: ScaleFontPortrait(24),
    color: Colors.grey_05,
  },
  borderBottomLine: {
    width: "100%",
    height: ScalePortrait(40),
    alignSelf: "flex-end",
    borderBottomRightRadius: ScalePortrait(12),
    borderBottomLeftRadius: ScalePortrait(12),
    borderWidth: 0.3,
  },
  settingListContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    paddingVertical: ScalePortrait(6),
    paddingHorizontal: ScalePortrait(12),
    justifyContent: "center",
    borderRadius: ScalePortrait(12),
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ScalePortrait(14),
  },
  settingItemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingIcon: {
    width: ScalePortrait(18),
    height: ScalePortrait(18),
  },
  settingTitle: {
    // marginLeft: ScalePortrait(14),
    fontFamily: Fonts.TikTokText_Medium,
    fontSize: ScaleFontPortrait(16),
  },
  settingArrowIcon: {
    transform: [{ rotateY: "-180deg" }],
    width: ScalePortrait(16),
    height: ScalePortrait(16),
  },
});
