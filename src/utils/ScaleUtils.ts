import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 667;
const guidelineBaseHeight = 375;

export const Portrait = (size: number) => (shortDimension / guidelineBaseHeight) * size;
export const Landscape = (size: number) => (longDimension / guidelineBaseWidth) * size;
export const ScaleLandscape = (size: number, factor = 0.5) => size + (Landscape(size) - size) * factor;
export const ScalePortrait = (size: number, factor = 0.5) => size + (Portrait(size) - size) * factor;

export const scaleFont = (size: number, factor = 0.5) => {
  const pixelRatio = PixelRatio.getFontScale();
  const isLandscape = width > height;
  const dimension = isLandscape ? longDimension : shortDimension;
  const baseDimension = isLandscape ? guidelineBaseWidth : guidelineBaseHeight;

  const newSize = size + (dimension / baseDimension - 1) * (size * factor * pixelRatio);
  return newSize;
};
