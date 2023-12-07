const DOMAIN = "https/";

const getLinkFile = (fileName: string) => {
  return `${DOMAIN}${fileName}`;
};

export const AppImages = {
  background_kid_song: getLinkFile("image.png"),
};

export const HomeImages = {
  bg_shoes: require('./bg_shoes.png'),
  ic_search: require('./ic_search.png'),
  ic_heart: require('./ic_heart.png'),
  ic_heart_focus: require('./ic_heart_focus.png'),
};
export const ProfileImage = {};

export const Images = {
  // name: require('./name.png'),
  ...AppImages,
  ...HomeImages,
  ...ProfileImage,
};
