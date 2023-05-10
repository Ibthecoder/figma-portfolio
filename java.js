const modeToggle = document.getElementById("mode-toggle");
const body = document.querySelector("body");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});