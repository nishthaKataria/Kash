// Countdown Timer
const birthdayNextYear = new Date(2025, 10, 29); // 29 November 2025 (Month is 0-based, so November is 10)
const countdownElement = document.getElementById('countdown');

setInterval(() => {
  const now = new Date();
  const diff = birthdayNextYear - now;

  // Calculate remaining time components
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update the countdown text
  countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left! 🎉`;
}, 1000);

// Music Controls
const bgMusic = document.getElementById('bg-music');
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}
