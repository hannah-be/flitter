/*jshint esversion: 6 */
const main = () => {
  const userName = getUserName();
  const phoneNumber = getPhoneNumber(userName);
  let images = getAvatars();
  replaceAvatars(images);

  setInterval(() => {
    images = getAvatars();
    replaceAvatars(images);
  }, 3000);
};

main();
