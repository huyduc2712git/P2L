import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 667;
const guidelineBaseHeight = 375;

export const Portrait = (size: number) =>
  (shortDimension / guidelineBaseHeight) * size;

export const ScalePortrait = (size: number, factor = 0.5) =>
  size + (Portrait(size) - size) * factor;

export const ScaleFontPortrait = (size: number, factor = 0.5) => {
  const pixelRatio = PixelRatio.getFontScale();
  const dimension = shortDimension;
  const baseDimension = guidelineBaseHeight;

  const newSize =
    size + (dimension / baseDimension - 1) * (size * factor * pixelRatio);
  return newSize;
};
