import { Images } from '@assets/images';
import { Fonts } from '@assets/index';
import ButtonAnimation from '@components/ButtonAnimation';
import Colors from '@constants/Colors';
import useLogin from '@hooks/useLogin';
import { ScaleFontPortrait, ScalePortrait } from '@utils/ScalePortraitUtil';
import React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ILoginProps {}

const Login = (props: ILoginProps) => {
  const {} = props || {};
  const {onPressBack} = useLogin();
  const insets = useSafeAreaInsets();

  const renderBottom = () => {
    return (
      <>
      <View style={[styles.containerRenderBottom, {paddingTop: insets.top, paddingBottom: insets.bottom} ]}>
        <TextInput style={{ width:'100%', borderRadius: ScalePortrait(8), backgroundColor: Colors.green_02, paddingHorizontal: ScalePortrait(16), fontSize: ScaleFontPortrait(16), paddingVertical: ScalePortrait(14), borderColor: Colors.blue_01, color: Colors.brown_01, fontFamily: Fonts.Manrope_Regular}} placeholderTextColor={Colors.blue_01} placeholder='Nhập số điện thoại'/>
        <ButtonAnimation onPress={onPressBack}>
          <View style={{backgroundColor: Colors.brown_02, width: '100%', height: ScalePortrait(54), borderRadius: ScalePortrait(8)}}>

          </View>
        </ButtonAnimation>
      </View>
      </>
    )
  }
  return (
    <>
      <FastImage source={Images.bg_background_login} style={StyleSheet.absoluteFill}/>
      {renderBottom()}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
  },
  containerRenderBottom: {
    position: 'absolute',
    width:'100%',
    height: '60%',
    bottom: 0,
    backgroundColor:Colors.while,
    paddingHorizontal: ScalePortrait(12),
    borderTopLeftRadius: ScalePortrait(32),
    borderTopRightRadius: ScalePortrait(32),
  },
});
