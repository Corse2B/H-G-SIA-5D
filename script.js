const contents = document.querySelectorAll(".content");
const overlay = document.getElementById("overlay");

contents.forEach(content => {
  const closeBtn = content.querySelector(".close-btn");

  content.addEventListener("click", () => {
    content.classList.add("active");
    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // empêche le clic de rouvrir
    content.classList.remove("active");
    overlay.style.display = "none";
  });
});

overlay.addEventListener("click", () => {
  document.querySelectorAll(".content.active").forEach(active => {
    active.classList.remove("active");
  });
  overlay.style.display = "none";
});
