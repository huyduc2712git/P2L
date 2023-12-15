import { Images } from '@assets/images';
import { Fonts } from '@assets/index';
import ButtonAnimation from '@components/ButtonAnimation';
import Colors from '@constants/Colors';
import useLogin from '@hooks/useLogin';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { ScaleFontPortrait, ScalePortrait } from '@utils/ScalePortraitUtil';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { I18n } from 'react-redux-i18n';

interface ILoginProps {}

const Login = (props: ILoginProps) => {
  const {} = props || {};
  const {onPressBack, handleOtpChange , otp} = useLogin();
  const insets = useSafeAreaInsets();



  const renderBottom = () => {
    return (
      <>
      <View style={[styles.containerRenderBottom, {paddingTop: insets.top, paddingBottom: insets.bottom, } ]}>
        {/* <TextInput style={{ width:'100%', borderRadius: ScalePortrait(8), backgroundColor: Colors.green_02, paddingHorizontal: ScalePortrait(16), fontSize: ScaleFontPortrait(16), paddingVertical: ScalePortrait(14), borderColor: Colors.blue_01, color: Colors.brown_01, fontFamily: Fonts.Manrope_Regular}} placeholderTextColor={Colors.blue_01}
        placeholder={I18n.t('loginImportNumberPhone')}/>
        <ButtonAnimation onPress={onPressBack}>
          <View style={{backgroundColor: Colors.brown_02, width: '100%', height: ScalePortrait(54), borderRadius: ScalePortrait(8)}}>

          </View> */}
        {/* </ButtonAnimation> */}
        <OTPInputView
          style={{width: '100%', height: 200, borderWidth: 1}}
          pinCount={6}
          code={otp}
          onCodeChanged={handleOtpChange}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: ScalePortrait(40),
            height: ScalePortrait(40),
            // borderWidth: 1,
            fontFamily: Fonts.Manrope_Bold,
            fontSize: ScaleFontPortrait(20),
            backgroundColor: Colors.while,
            borderRadius: ScalePortrait(8),
            color: Colors.black,
            borderColor: Colors.grey_02,
            margin: ScalePortrait(6)
          }}
          codeInputHighlightStyle={{borderColor: '#5865F2'}}
          onCodeFilled = {(code) => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
        />
      </View>
      </>
    )
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <FastImage source={Images.bg_background_login} style={StyleSheet.absoluteFill}> */}
      {renderBottom()}
      {/* </FastImage> */}
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
  },
  containerRenderBottom: {
    position: 'absolute',
    width:'100%',
    height: '100%',
    bottom: 0,
    backgroundColor:Colors.while,
    paddingHorizontal: ScalePortrait(12),
    // borderTopLeftRadius: ScalePortrait(32),
    // borderTopRightRadius: ScalePortrait(32),
  },
});
