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
