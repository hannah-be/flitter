const projectName = "flitter";
const versionNumber = "0.0.1";
const currentDate = new Date();

const currentTime =
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
  currentDate.getSeconds();

const userName = prompt("Hello, what's your name?");
document.body.innerHTML =
  "<h1>Hello, " +
  userName +
  "!</h1>" +
  "<p>" +
  projectName +
  " " +
  versionNumber +
  " accessed on: " +
  currentTime +
  "</p>";
