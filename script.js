// ========== DOM ELEMENTS ==========
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const themeToggle = document.querySelector(".theme-toggle");
const navbarLinks = document.querySelectorAll(".navbar-menu a");

// ========== MOBILE MENU TOGGLE ==========
navbarToggle.addEventListener("click", () => {
  const isActive = navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  navbarToggle.setAttribute("aria-expanded", isActive);

  // Prevent body scroll when menu is open
  document.body.style.overflow = isActive ? "hidden" : "";
});

// Close mobile menu when clicking a link
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navbarMenu.contains(e.target) &&
    !navbarToggle.contains(e.target) &&
    navbarMenu.classList.contains("active")
  ) {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

// ========== THEME TOGGLE ==========
// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkmode");
  themeToggle.textContent = "☀️";
} else if (savedTheme === "light") {
  document.body.classList.remove("darkmode");
  themeToggle.textContent = "🌙";
} else {
  // Default to light mode if no preference is saved
  document.body.classList.remove("darkmode");
  themeToggle.textContent = "🌙";
  localStorage.setItem("theme", "light");
}

// Theme toggle click event
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("darkmode");

  if (isDarkMode) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ========== SMOOTH SCROLL ENHANCEMENT ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ========== NEWSLETTER FORM HANDLING ==========
const newsletterForm = document.querySelector(".news-form");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector(".news-email");
  const email = emailInput.value;

  if (email) {
    alert(`Thank you for subscribing with: ${email}`);
    emailInput.value = "";
  }
});
