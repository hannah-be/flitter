/*jshint esversion: 6 */
const getAvatarHeight = avatar => {
  return avatar.height;
};

const getAvatarWidth = avatar => {
  return avatar.width;
};

const replaceAvatars = avatars => {
  const baseImageUrl = "https://www.placepuppy.net/";
  let height, width, avatar;
  for (let i = 0; i < avatars.length; i++) {
    avatar = avatars[i];
    height = getAvatarHeight(avatar);
    width = getAvatarWidth(avatar);
    if (height && width) {
      avatar.src = baseImageUrl + height + "/" + width;
    }
  }
};
