import { PlatformUtils } from "@utils/PlatformUtils";
import React, { useState } from "react";
import { Pressable, StyleProp, View, Image, ImageStyle } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from "react-native-reanimated";

interface buttonProps {
  children?: React.ReactNode;
  stylesImage?: StyleProp<ImageStyle>;
  imageButton?: string;
  onPress?: () => void;
  disabled?: boolean
}
const { isAndroid } = PlatformUtils;

const ButtonAnimation = (props: buttonProps) => {
  const { stylesImage, imageButton, onPress, children, disabled } = props;
  const [isPressing, setIsPressing] = useState(false);
  const [disable, setDisable] = useState(false);

  const scale = useSharedValue(1);

  const handleButtonPressIn = () => {
    if (!isPressing) {
      setIsPressing(true);

      scale.value = withSpring(0.9, { stiffness: 200 });
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
    scale.value = withSpring(1, { stiffness: 2000 }, () => runOnJS(onEvent)());
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View>
      <Pressable disabled={disable || disabled} onPressIn={handleButtonPressIn} onPressOut={handleButtonPressOut}>
        <Animated.View style={[animatedStyle]}>
          {imageButton ? <Image resizeMode='contain' style={stylesImage} source={{ uri: imageButton }} /> : children}
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default ButtonAnimation;
