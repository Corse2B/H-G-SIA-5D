const contents = document.querySelectorAll(".photo");
const overlay = document.getElementById("overlay");
const page = document.getElementById("page");

function openContent(content) {
  content.classList.add("active");
  overlay.style.display = "block";
  document.body.classList.add("no-scroll");
  page.classList.add("blur");
}

function closeAll() {
  document.querySelectorAll(".content.active").forEach(active => {
    active.classList.remove("active");
  });
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
  page.classList.remove("blur");
}

contents.forEach(content => {
  const closeBtn = content.querySelector(".close-btn");

  content.addEventListener("click", () => {
    openContent(content);
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAll();
  });
});

// ✅ FERMER AVEC LA TOUCHE ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAll();
  }
});

overlay.addEventListener("click", closeAll);
