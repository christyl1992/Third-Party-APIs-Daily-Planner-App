//Code to print the current date at the top of the page
let currentDay = document.getElementById("currentDay");
// Get the current date using Day.js
var currentDate = dayjs();
// Display the current date
currentDay.innerText = currentDate.format("D MMM YYYY");

//Function to change colour of row based on time 
function updateColors() {
    var currentTime = dayjs().format('HH:mm');
    
    document.querySelectorAll('.time-block').forEach(function(timeElement) {
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


//Function to save the tasks to local storage
function saveData(rowNumber) {
    // Get the input element for the corresponding row
    var inputElement = document.querySelectorAll('input')[rowNumber];
  
    // Get the input value
    var inputValue = inputElement.value;
  
    // Save the data to local storage, using a key that includes the row number
    localStorage.setItem('taskData_' + rowNumber, inputValue);
    console.log(inputValue);
  }
  
  // Function to load data from local storage when the page is loaded
  function loadData() {
    // Loop through each row
    for (var i = 0; i < 9; i++) {
      // Construct the key for the local storage item
      var key = 'taskData_' + i;
  
      // Get the data from local storage
      var data = localStorage.getItem(key);
  
      // If data exists, set the input value for the corresponding row
      if (data !== null) {
        document.querySelectorAll('input')[i].value = data;
      }
    }
  }
  
  // Call the loadData function when the page is loaded
  window.onload = function() {
    loadData();
    updateColors();
  };


