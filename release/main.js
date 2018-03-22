/*jshint esversion: 6 */
const currentDate = new Date();

const values = {
  projectName: "flitter",
  versionNumber: "0.0.1",
  currentTime:
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " at " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds()
};

/*jshint esversion: 6 */
const getUserName = () => {
  let userName = prompt("Hello, what's your name?");

  if (!userName) {
    userName = prompt("You didn't enter a name. Really, what's your name?");
  }
  return userName;
};

const getPhoneNumber = userName => {
  let phoneNumber = prompt(
    "Hello, " + userName + ", what's your mobile number?"
  );

  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt("Please enter a valid phone number.");
  }
  return phoneNumber;
};

const phoneNumberPattern = /(?:\+?61|0)\s?4\s?[\d]{2}[\-\s]?\d{3}[\-\s]?\d{3}/;

const validatePhoneNumber = phoneNumber => {
  return phoneNumber.match(phoneNumberPattern);
};

// document.body.innerHTML = output;

/*jshint esversion: 6 */

let output = document.querySelectorAll("img.avatar");

const getAvatars = () => {
  return output;
};

// document.body.innerHTML = getAvatars();

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
