document.addEventListener("DOMContentLoaded", () => {
const intro = document.getElementById("intro");
intro.volume = 0.25;

setTimeout(() => {
  intro.muted = false;
}, 50);
});
