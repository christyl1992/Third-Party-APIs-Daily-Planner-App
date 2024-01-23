
let currentDay = document.getElementById("currentDay");

// Get the current date using Day.js
var currentDate = dayjs();

// Display the current date
currentDay.innerText = currentDate.format("D MMM YYYY");



//Function to save data
function saveData(rowNumber) {
    var inputValue = document.querySelectorAll('input')[rowNumber].value;
    console.log("Saving data:", inputValue);
    // Add your save logic here
  }

// Function to update the colour of the task based on the time 
function updateColors() {
    var currentTime = dayjs().format('HH:mm');
    
    document.querySelectorAll('.time-block').forEach(function(timeBlock) {
      var blockTime = timeBlock.textContent;
      var row = timeBlock.closest('tr');

      if (blockTime < currentTime) {
        row.classList.remove('present', 'future');
        row.classList.add('past');
      } else if (blockTime === currentTime) {
        row.classList.remove('past', 'future');
        row.classList.add('present');
      } else {
        row.classList.remove('past', 'present');
        row.classList.add('future');
      }
    });
  }