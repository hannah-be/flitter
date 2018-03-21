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
