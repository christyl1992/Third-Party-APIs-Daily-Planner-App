
let currentDay = document.getElementById("currentDay");

// Get the current date using Day.js
var currentDate = dayjs();

// Display the current date
currentDay.innerText = currentDate.format("D MMM YYYY");