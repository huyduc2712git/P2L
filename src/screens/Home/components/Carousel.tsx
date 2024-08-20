import React from "react";
import { Text, View, StyleSheet, useWindowDimensions, ImageSourcePropType } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle
} from "react-native-reanimated";

interface CarouselProps {
  item: any;
  index: number;
  x: SharedValue<number>;
}

const Carousel = (props: CarouselProps) => {
  const { item, index, x } = props ?? {};
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolation.CLAMP
    );
    return {
      opacity: opacityAnim
    };
  });

  return (
    <View style={{ width: width, height: width }}>
      <Animated.Image source={item} style={[styles.titleImage, animatedStyle]} />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  titleImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: null,
    resizeMode: "contain"
  }
});
