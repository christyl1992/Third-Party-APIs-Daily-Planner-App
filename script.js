//Code to print the current date at the top of the page
let currentDay = document.getElementById("currentDay");
// Get the current date using Day.js
var currentDate = dayjs();
// Display the current date
currentDay.innerText = currentDate.format("D MMM YYYY");


//Function to change colour of row based on time 
function updateColors() {
    var currentTime = dayjs().format('HH:mm');
    
    document.querySelectorAll('.time-block.hour time').forEach(function(timeElement) {
      var blockTime = timeElement.textContent.trim();
      var row = timeElement.closest('tr');

      var blockTimeObj = dayjs(blockTime, 'HH:mm');
      var currentTimeObj = dayjs(currentTime, 'HH:mm');

      if (blockTimeObj.isBefore(currentTimeObj)) {
        row.classList.remove('present', 'future');
        row.classList.add('past');
      } else if (blockTimeObj.isSame(currentTimeObj, 'hour')) {
        row.classList.remove('past', 'future');
        row.classList.add('present');
      } else {
        row.classList.remove('past', 'present');
        row.classList.add('future');
      }
    });
}


