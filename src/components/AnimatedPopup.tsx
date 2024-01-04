import Colors from "@constants/Colors";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { StyleProp, ViewStyle, ViewProps, View } from "react-native";
import Animated, {
  SharedValue,
  runOnJS,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface IAnimatiedPopupProps extends ViewProps {
  offset?: SharedValue<number>;
  timeAnimation?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  valueOffset?: number;
}

export interface AnimatiedPopupRef {
  downAnimation: (callback?: () => void) => void;
}

const AnimatiedPopup: React.ForwardRefRenderFunction<
  AnimatiedPopupRef,
  IAnimatiedPopupProps
> = ({ offset, timeAnimation, children, style, valueOffset, ...rest }, ref) => {
  useEffect(() => {
    if (offset) {
      offset.value = withTiming(0, { duration: timeAnimation });
    }
  }, []);

  const downAnimation = (callback?: () => void) => {
    if (offset && valueOffset) {
      offset.value = withTiming(
        valueOffset,
        { duration: timeAnimation },
        () => callback && runOnJS(callback)()
      );
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      downAnimation,
    }),
    []
  );

  const animatedStyleY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset?.value ?? 0 }],
  }));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: Colors.opacity_black_50,
      }}
    >
      <Animated.View style={[animatedStyleY, style]} {...rest}>
        {children}
      </Animated.View>
    </View>
  );
};

export default forwardRef(AnimatiedPopup);
