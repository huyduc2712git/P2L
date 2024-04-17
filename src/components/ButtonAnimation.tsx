import React, { memo, useState } from "react";
import {
  Pressable,
  StyleProp,
  View,
  ImageStyle as RNImageStyle,
} from "react-native";
import FastImage, {
  ImageStyle as FastImageStyle,
  Source,
} from "react-native-fast-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

type CustomImageStyle = RNImageStyle & FastImageStyle;
interface IButtonProps {
  children?: React.ReactNode;
  style?: StyleProp<CustomImageStyle>;
  source?: Source;
  onPress?: () => void;
  disabled?: boolean;
  stiffness?: number;
}

const STIFFNESS = 2000;

const ButtonAnimation = (props: IButtonProps) => {
  const {
    style,
    source,
    onPress,
    children,
    disabled,
    stiffness = STIFFNESS,
  } = props;
  const [isPressing, setIsPressing] = useState(false);
  const [disable, setDisable] = useState(false);

  const scale = useSharedValue(1);

  const handleButtonPressIn = () => {
    if (!isPressing) {
      setIsPressing(true);

      scale.value = withSpring(0.9, { stiffness: stiffness });
    }
  };
  const onEvent = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 300);
    onPress && onPress();
  };

  const handleButtonPressOut = () => {
    setIsPressing(false);
    scale.value = withSpring(1, { stiffness: stiffness }, () =>
      runOnJS(onEvent)()
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View>
      <Pressable
        disabled={disable || disabled}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
      >
        <Animated.View style={[animatedStyle]}>
          {source ? (
            <FastImage resizeMode="contain" style={style} source={source} />
          ) : (
            children
          )}
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default memo(ButtonAnimation);
