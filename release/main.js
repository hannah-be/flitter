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
document.body.innerHTML =
  "<h1>Hello, " +
  userName +
  "!</h1>" +
  "<p>" +
  values.projectName +
  " " +
  values.versionNumber +
  " accessed on: " +
  values.currentTime +
  "</p>";
