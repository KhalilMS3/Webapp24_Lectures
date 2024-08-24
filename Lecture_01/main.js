const darkModeButton = document.getElementById("dark-mode");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  darkModeButton.innerHTML = "Toggle light mode";
}

darkModeButton.addEventListener("click", toggleDarkMode);
