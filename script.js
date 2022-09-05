const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "am";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "pm";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourElement.innerHTML = hours;
  minuteElement.innerHTML = minutes;
  secondElement.innerHTML = seconds;
  ampmElement.innerHTML = ampm;

  setTimeout(() => {
    updateClock()
  }, 1000)
}
updateClock();

var color = document.getElementById("btn");
btn.onclick = function () {
  document.body.classList.toggle("different-color")
}