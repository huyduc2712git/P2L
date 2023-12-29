import { Fonts } from "@assets/index";
import ButtonAnimation from "@components/ButtonAnimation";
import Colors from "@constants/Colors";
import { ScaleFontPortrait, ScalePortrait } from "@utils/ScalePortraitUtil";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { I18n } from "react-redux-i18n";

interface IConterProps {
  initTimeRemain?: number;
  isDisableResend?: boolean;
}

const TIME_DEFAULT = 1000 * 60 * 2; //2mins
const Conter = (props: IConterProps) => {
  const { initTimeRemain = TIME_DEFAULT, isDisableResend } = props || {};
  const timerOut = useRef<NodeJS.Timeout>();
  const [remainTime, setRemainTime] = useState(initTimeRemain || TIME_DEFAULT);

  const onStartCounter = () => {
    clearInterval(timerOut.current);
    timerOut.current = setInterval(() => {
      setRemainTime((prev) => {
        if (prev === 0) {
          return prev;
        }
        return prev - 1000;
      });
    }, 1000);
  };

  const onResetCounter = () => {
    setRemainTime(initTimeRemain || TIME_DEFAULT);
    onStartCounter();
  };

  const disabledResend = useMemo(() => {
    return (
      isDisableResend || remainTime > (initTimeRemain || TIME_DEFAULT) - 30000
    );
  }, [remainTime, isDisableResend, initTimeRemain, TIME_DEFAULT]);

  useEffect(() => {
    onStartCounter();
    return () => {
      clearInterval(timerOut.current);
    };
  }, []);

  const remainTimeDisplay = useMemo(() => {
    // const minutes = `0${Math.floor(remainTime / 60000)}`;
    let seconds = ((remainTime % 60000) / 1000).toFixed(0);
    seconds = Number(seconds) < 10 ? `0${seconds}` : seconds;
    // return `${minutes}:${seconds}`;
    return `${seconds}`;
  }, [remainTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.questionResetOTP}>{I18n.t("questionResetVerification")}</Text>
      <ButtonAnimation disabled={disabledResend} onPress={onResetCounter}>
        <Text
          style={[
            styles.waittingResetTime,
            {
              color: disabledResend ? Colors.grey_02 : Colors.purple_01,
            },
          ]}
        >
          {" "}
          {I18n.t("descWaittingTimeVerification")?.replace(
            "$waittingTime",
            remainTimeDisplay.toString()
          )}
        </Text>
      </ButtonAnimation>
    </View>
  );
};

export default Conter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: ScalePortrait(13),
  },
  questionResetOTP: {
    fontSize: ScaleFontPortrait(14),
    fontFamily: Fonts.Manrope_Regular,
    color: Colors.blue_01,
  },
  waittingResetTime: {
    fontSize: ScaleFontPortrait(14),
    fontFamily: Fonts.Manrope_SemiBold,
  },
});
