var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minsEl = document.getElementById('mins');
var secondsEl = document.getElementById('seconds');

var newYears = '1 Jan 2022';

function countdown() {
  var newYearsDate = new Date(newYears);
  var currentDate = new Date();

  var totalSeconds = (newYearsDate - currentDate) / 1000;

  var days = Math.floor(totalSeconds / 3600 / 24);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var mins = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML =  formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);

// Part of 10 JavaScript Projects in 10 Hours - Coding Challenge https://www.youtube.com/watch?v=dtKciwk_si4
