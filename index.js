const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const newYearTime = new Date(2024, 00, 01, 0, 0, 0).getTime(); // we have used 00 beacuse january is 00 and december is 11

updateCountdown()

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  dayEl.innerText = remainingDays
  hourEl.innerText = remainingHours
  minuteEl.innerText = remainingMinutes
  secondEl.innerText = remainingSeconds

  setInterval(updateCountdown, 1000)
}
