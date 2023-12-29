import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 667;
const guidelineBaseHeight = 375;

export const Landscape = (size: number) =>
  (longDimension / guidelineBaseWidth) * size;

export const ScaleLandscape = (size: number, factor = 0.5) =>
  size + (Landscape(size) - size) * factor;

export const scaleFontLandscape = (size: number, factor = 0.5) => {
  const pixelRatio = PixelRatio.getFontScale();
  const dimension = longDimension;
  const baseDimension = guidelineBaseWidth;

  const newSize =
    size + (dimension / baseDimension - 1) * (size * factor * pixelRatio);
  return newSize;
};
