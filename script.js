const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const themeToggle = document.querySelector(".theme-toggle");

// Mobile Menu
navbarToggle.addEventListener("click", () => {
  const expanded = navbarToggle.classList.toggle("active");

  navbarMenu.classList.toggle("active");

  navbarToggle.setAttribute("aria-expanded", expanded);
});

// Load Saved Theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkmode");
  themeToggle.textContent = "☀️";
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
