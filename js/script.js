// Set your launch date here (YYYY-MM-DDTHH:MM:SS)
const launchDate = new Date("2025-12-01T00:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = launchDate - now;
  if (diff < 0) return; // already launched

  const secs = Math.floor((diff/1000) % 60);
  const mins = Math.floor((diff/1000/60) % 60);
  const hrs  = Math.floor((diff/1000/60/60) % 24);
  const days = Math.floor(diff/1000/60/60/24);

  document.getElementById("days").textContent = String(days).padStart(2,'0');
  document.getElementById("hours").textContent = String(hrs).padStart(2,'0');
  document.getElementById("minutes").textContent = String(mins).padStart(2,'0');
  document.getElementById("seconds").textContent = String(secs).padStart(2,'0');
}

// kick off
updateCountdown();
setInterval(updateCountdown, 1000);
