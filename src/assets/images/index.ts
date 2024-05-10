const DOMAIN = "https/";

const getLinkFile = (fileName: string) => {
  return `${DOMAIN}${fileName}`;
};

export const AppImages = {
  background_kid_song: getLinkFile("image.png"),
  ic_directional: require("./ic_directional.png"),
  ic_closed: require("./ic_closed.png"),
  ic_logo: require("./ic_logo.png"),
  ic_left_arrow: require("./ic_left_arrow.png")
};

export const LoginImages = {
  bg_background_login: require("./bg_background_login.png"),
  bg_login_corgi: require("./bg_login_corgi.png")
};

export const ATSpeakImages = {
  ic_micro: require("./ic_micro.png")
};

export const SettingImages = {};

export const ChatImages = {
  ic_send: require("./ic_send.png")
};

export const HomeImages = {
  bg_shoes: require("./bg_shoes.png"),
  ic_search: require("./ic_search.png"),
  ic_heart: require("./ic_heart.png"),
  ic_heart_focus: require("./ic_heart_focus.png")
};
export const ProfileImage = {};

export const Images = {
  ...AppImages,
  ...HomeImages,
  ...LoginImages,
  ...ProfileImage,
  ...ATSpeakImages,
  ...SettingImages,
  ...ChatImages
};
