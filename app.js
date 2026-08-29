// Target: 09 September 2026, 00:00:00 Bangladesh time (UTC+06:00)
const targetDate = Date.parse("2026-09-09T00:00:00+06:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const finalMessage = document.getElementById("final-message");

function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    finalMessage.classList.add("show");
    return false;
  }

  const totalSeconds = Math.floor(distance / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);

  return true;
}

// Run immediately, then update every second.
if (updateCountdown()) {
  setInterval(updateCountdown, 1000);
}
