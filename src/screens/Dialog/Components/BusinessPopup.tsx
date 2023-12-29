import { Images } from "@assets/images";
import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { IDataBusines, dataBusiness } from "@data/dataBusiness";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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
  console.log("data", data);

  const insets = useSafeAreaInsets();
  const offsetY = useSharedValue(VALUE_OFFSET);
  const offsetOpacity = useSharedValue(1);

  const animatedStyleY = useAnimatedStyle(() => ({
    transform: [{ translateY: offsetY.value }],
  }));

  const animatedStyleOpdacity = useAnimatedStyle(() => ({
    backgroundColor: Colors.opacity_black_60,
  }));

  const onClosed = () => {
    closeDialog?.();
  };

  const handleClosedStyleY = () => {
    offsetY.value = withTiming(
      VALUE_OFFSET,
      { duration: timeAniamtion },
      () => {
        runOnJS(handleClosedStyleOpacity)();
        runOnJS(onClosed)();
      }
    );
  };

  const handleClosedStyleOpacity = () => {
    offsetOpacity.value = withTiming(0, { duration: 500 });
  };

  useEffect(() => {
    offsetY.value = withTiming(0, { duration: timeAniamtion });
  }, []);

  const handleSetItem = (value: string) => {
    if (setValueSelectet) {
      setValueSelectet(value);
    }
    offsetY.value = withTiming(
      VALUE_OFFSET,
      { duration: timeAniamtion },
      () => {
        runOnJS(handleClosedStyleOpacity)();
        runOnJS(onClosed)();
      }
    );
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
    <Animated.View style={[styles.container, animatedStyleOpdacity]}>
      <Animated.View style={[styles.backgroundModal, animatedStyleY]}>
        <View style={styles.markHeader}>
          <Text style={styles.titleHeader}>{"Lĩnh vực kinh doanh"}</Text>
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
      </Animated.View>
    </Animated.View>
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
