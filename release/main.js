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
const userName = prompt("Hello, what's your name?");

if (!userName) {
  prompt("You didn't enter a name. Really, what's your name?");
}

switch (userName) {
  case "Hannah":
    greeting = "Hi, ";
    break;
  case "Grace":
    greeting = "What are you doing here,";
    break;
  default:
    greeting = "Hello ";
    break;
}

const phoneNumber = prompt(
  "Hello, " + userName + ", what's your mobile number?"
);

let output = "<h1>" + greeting + userName + "!</h1>";

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

// console.log(output);
// document.body.innerHTML = output;

/*jshint esversion: 6 */
const icons = document.querySelectorAll("h1.Icon--bird");
console.log("icons", icons);
