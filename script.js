document.addEventListener("DOMContentLoaded", () => {

  const contents = document.querySelectorAll(".content");
  const overlay = document.getElementById("overlay");
  const page = document.getElementById("page");

  function openContent(content) {
    content.classList.add("active");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
    page.classList.add("blur");
  }

  function closeAllContents() {
    contents.forEach(c => c.classList.remove("active"));
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
    page.classList.remove("blur");
  }

  contents.forEach(content => {
    content.addEventListener("click", (e) => {
      e.stopPropagation();

      if (content.classList.contains("active")) {
        closeAllContents();
      } else {
        closeAllContents();
        openContent(content);
      }
    });
  });

  overlay.addEventListener("click", closeAllContents);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllContents();
    }
  });

});


