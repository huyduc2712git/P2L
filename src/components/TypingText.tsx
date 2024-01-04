import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Text, TextStyle } from "react-native";

interface TypingTextProps {
  text: string;
  speed?: number;
  onStart?: () => void;
  onReset?: () => void;
  onCompleted?: () => void;
  autoPlay?: boolean;
  loop?: boolean;
  style?: TextStyle;
}

export interface TypingTextRef {
  startAnimation: (callback?: () => void) => void;
  resetAnimation: (callback?: () => void) => void;
}

const TypingText: React.ForwardRefRenderFunction<
  TypingTextRef,
  TypingTextProps
> = (
  { text, speed = 50, onStart, onReset, onCompleted, autoPlay = true, loop = false, style },
  ref
) => {
  const [displayedText, setDisplayedText] = useState("");
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const onStartRef = useRef(onStart);
  const onResetRef = useRef(onReset);
  const onCompletedRef = useRef(onCompleted);

  useEffect(() => {
    onStartRef.current = onStart;
    onResetRef.current = onReset;
    onCompletedRef.current = onCompleted;

    if (autoPlay) {
      startAnimation();
    }

    return () => {
      resetAnimation();
    };
  }, [autoPlay]);

  const startAnimation = (callback?: () => void) => {
    if (!intervalIdRef.current || loop) {
      let currentIndex = 0;

      clearInterval(intervalIdRef.current!);

      intervalIdRef.current = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        currentIndex += 1;

        if (currentIndex === text.length) {
          clearInterval(intervalIdRef.current!);
          intervalIdRef.current = null;
          setTimeout(() => {
            onCompletedRef.current && onCompletedRef.current();
          }, 500);

          if (loop) {
            setTimeout(() => {
            setDisplayedText("");
            currentIndex = 0;
            onStartRef.current && onStartRef.current();
            startAnimation();
            }, 500);
          } else {
            if (callback) {
              callback();
            }
          }
        }
      }, speed);

      onStartRef.current && onStartRef.current();
    }
  };

  const resetAnimation = (callback?: () => void) => {
    clearInterval(intervalIdRef.current!);
    intervalIdRef.current = null;
    setDisplayedText("");

    onResetRef.current && onResetRef.current();

    if (callback) {
      callback();
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      startAnimation,
      resetAnimation,
    }),
    []
  );

  return <Text style={style}>{displayedText}</Text>;
};

export default forwardRef(TypingText);