const btnDarkMode = document.querySelector("#theme-checkbox");
let darkMode = localStorage.getItem("darkMode");

// enable dark mode function
function enableDarkMode() {
  btnDarkMode.checked = true;
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

// disable dark mode function
function disableDarkMode() {
  btnDarkMode.checked = false;
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
}

// event handler function
function darkModeEventHandler() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// to set the value in localStorage
if (darkMode === "enabled") {
  enableDarkMode();
}

// event listener
btnDarkMode.addEventListener("click", darkModeEventHandler);
