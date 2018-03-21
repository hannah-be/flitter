/*jshint esversion: 6 */
const userName = prompt("Hello, what's your name?");
const phoneNumber = prompt("Hello " + userName + ", what's your phone number?");

let output = "<h1>Hello, " + userName + "!</h1>";

const phoneNumberPattern = /(?:\+?61|0)\s?4\s?[\d]{2}[\-\s]?\d{3}[\-\s]?\d{3}/;

if (phoneNumberPattern.test(phoneNumber)) {
  output =
    output +
    "<p>" +
    values.projectName +
    " " +
    values.versionNumber +
    " accessed on: " +
    values.currentTime +
    "</p>";
} else {
  output =
    output + "<h2>That phone number is invalid: " + phoneNumber + "</h2>";
}

document.body.innerHTML = output;
