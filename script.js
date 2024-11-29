// Countdown Timer
const birthday = new Date(new Date().getFullYear() + 1, 12, 0); // Change the date to Kashish's actual next birthday
const countdownElement = document.getElementById('countdown');

setInterval(() => {
  const now = new Date();
  const diff = birthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
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
