// Default title (from the HTML <title>)
const titleNormal = document.title;

// Time-based steps (in seconds)
const steps = [
  { time: 0,  title: "Reading in progress — History & Geography" },
  { time: 15, title: "Click to come back" },
  { time: 30, title: "Resume reading — History & Geography" }
];

let startTime = null;
let timer = null;

// Detect tab visibility change
document.addEventListener("visibilitychange", () => {

  // When the user leaves the tab
  if (document.hidden) {
    startTime = Date.now();

    timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      // Get the appropriate message based on elapsed time
      const step = [...steps].reverse().find(s => elapsed >= s.time);
      if (step) {
        document.title = step.title;
      }
    }, 1000);

  } 
  // When the user comes back to the tab
  else {
    clearInterval(timer);
    document.title = titleNormal;
  }

});
