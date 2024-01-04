import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import AnimatiedPopup, { AnimatiedPopupRef } from "@components/AnimatedPopup";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { IDataBusines, dataBusiness } from "@data/dataBusiness";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useRef } from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBusinessPopupProps {
  closeDialog?: () => void;
  data?: IDataBusines[];
  setValueSelectet?: (value: string) => void;
  titleHeader?: string;
  timeAniamtion?: number;
}

const VALUE_OFFSET = ScalePortrait(650);
const TIME_DEFAULT = 300;
const BusinessPopup = (props: IBusinessPopupProps) => {
  const {
    closeDialog,
    data = dataBusiness,
    setValueSelectet,
    timeAniamtion = TIME_DEFAULT,
    titleHeader,
  } = props || {};

  const insets = useSafeAreaInsets();
  const offset = useSharedValue(VALUE_OFFSET);
  const animatedPopupRef = useRef<AnimatiedPopupRef>(null);

  const onClosed = () => {
    closeDialog?.();
  };

  const handleClosedStyleY = () => {
    animatedPopupRef.current?.downAnimation(() => {
      onClosed();
    });
  };

  const handleSetItem = (value: string) => {
    if (setValueSelectet) {
      setValueSelectet(value);
    }
    handleClosedStyleY();
  };

  const _renderItem = (item: IDataBusines) => {
    return (
      <Pressable onPress={() => handleSetItem(item.field ?? "")}>
        <View style={styles.containerRender}>
          <Text style={styles.fieldItem}>{item.field}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <AnimatiedPopup
      ref={animatedPopupRef}
      valueOffset={VALUE_OFFSET}
      style={styles.backgroundModal}
      offset={offset}
      timeAnimation={timeAniamtion}
    >
      <View style={styles.markHeader}>
        <Text style={styles.titleHeader}>{titleHeader}</Text>
        <View style={styles.markButtonClosed}>
          <ButtonAnimation
            onPress={handleClosedStyleY}
            source={Images.ic_closed}
            style={styles.iconClosed}
          />
        </View>
      </View>
      <View
        style={[
          styles.markContent,
          {
            marginBottom: insets.bottom,
          },
        ]}
      >
        <FlatList data={data} renderItem={({ item }) => _renderItem(item)} />
      </View>
    </AnimatiedPopup>
  );
};

export default BusinessPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  markContent: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: ScalePortrait(12),
    paddingHorizontal: ScalePortrait(16),
  },
  fieldItem: {
    fontFamily: Fonts.TikTokText_Regular,
    fontSize: ScaleFontPortrait(16),
    color: Colors.black_01,
    lineHeight: ScaleFontPortrait(18),
    paddingBottom: ScalePortrait(20),
  },
  containerRender: {
    marginTop: ScalePortrait(20),
    borderBottomWidth: 0.5,
    borderColor: Colors.grey_03,
  },
  titleHeader: {
    textAlign: "center",
    fontSize: ScaleFontPortrait(18),
    fontFamily: Fonts.TikTokText_Medium,
    lineHeight: ScaleFontPortrait(20),
  },
  backgroundModal: {
    backgroundColor: Colors.grey_04,
    height: "77.5%",
    borderTopRightRadius: ScalePortrait(12),
    borderTopLeftRadius: ScalePortrait(12),
    paddingHorizontal: ScalePortrait(16),
  },
  markHeader: {
    paddingVertical: ScalePortrait(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconClosed: {
    width: ScalePortrait(24),
    aspectRatio: 1,
  },
  markButtonClosed: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
});
