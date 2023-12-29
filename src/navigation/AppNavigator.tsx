import React, { ReactElement, ReactNode } from "react";
import { Keyboard } from "react-native";

interface IShowDialog {
  screen?: React.FC;
}

let navigator: any;
let debounce: any;
let dialogInstanceRef: any;

function showDialog(params: IShowDialog | any) {
  console.log("showDialog", params);
  Keyboard.dismiss();
  dialogInstanceRef?.showDialog(params);
}

function dismissAllPopup() {
  dialogInstanceRef?.closeDialog?.();
}

function setRefDialog(ref: object) {
  dialogInstanceRef = ref;
}

const setRootNavigator = (navigationRef = {}) => {
  if (!navigator || navigationRef) {
    navigator = navigationRef;
  }
};

function navigate(
  name: string,
  params = {},
  key = `${name}_${new Date().getTime()}`
) {
  Keyboard.dismiss();
  if (navigator) {
    if (debounce) {
      console.log("Debounce effect");
      return;
    }

    debounce = setTimeout(() => {
      clearTimeout(debounce);
      debounce = null;
    }, 1200);

    if (navigator?.getRootState()) {
      navigator.navigate({
        name,
        params,
        key,
      });
    }
  }
}

function goBack() {
  if (navigator?.canGoBack?.()) {
    navigator?.goBack?.();
  }
}

function onTrackScreenChange() {
  const currentRouteName = navigator?.getCurrentRoute()?.name;
  console.log("currentRouteName", navigator?.getCurrentRoute().name);
  // setOrientation(currentRouteName);
  // AppNativeModules.logFile("SCREEN-CHANGE",JSON.stringify(navigator?.getCurrentRoute()))
  // if (currentRouteName) {
  //    analytics().logScreenView({
  //       screen_name: currentRouteName,
  //       screen_class: currentRouteName,
  //    }).then(()=> null);
  // }
  // if (SCREENS_MUTE_SOUND.includes(currentRouteName)) {
  //    AudioManager.pauseSoundBase()
  // } else {
  //    AudioManager?.playSoundBase()
  // }
}

export default {
  navigate,
  setRootNavigator,
  onTrackScreenChange,
  goBack,
  showDialog,
  setRefDialog,
  dismissAllPopup,
};
