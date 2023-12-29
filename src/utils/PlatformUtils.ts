import { Platform, Dimensions } from "react-native";

function isAndroid() {
  return Platform.OS === "android";
}

function isIOS() {
  return Platform.OS === "ios";
}

function isIPad() {
  return Platform.OS === "ios" && Dimensions.get("window").height === 1024;
}

function isTablet() {
  const { height, width } = Dimensions.get("window");
  const aspectRatio = height / width;

  const isTabletDevice =
    Platform.OS === "ios" ? aspectRatio < 1.6 : aspectRatio < 1.1;

  return isTabletDevice && !isIPad();
}

export const PlatformUtils = {
  isAndroid,
  isIOS,
  isIPad,
  isTablet,
};
