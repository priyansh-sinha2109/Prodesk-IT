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

  document.body.style.overflow = isActive ? "hidden" : "";
});

// Close mobile menu
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Close mobile menu
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

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbarMenu.classList.contains("active")) {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

// ========== THEME TOGGLE ==========
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("darkmode");
  themeToggle.textContent = "☀️";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
} else if (savedTheme === "light") {
  document.body.classList.remove("darkmode");
  themeToggle.textContent = "🌙";
  themeToggle.setAttribute("aria-label", "Switch to dark mode");
} else {
  // Default to light mode
  document.body.classList.remove("darkmode");
  themeToggle.textContent = "🌙";
  themeToggle.setAttribute("aria-label", "Switch to dark mode");
  localStorage.setItem("theme", "light");
}

// Theme toggle click event
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("darkmode");

  if (isDarkMode) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
    localStorage.setItem("theme", "light");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
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

  if (email && email.includes("@")) {
    alert(`Thank you for subscribing with: ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// ========== PERFORMANCE: Lazy load Font Awesome ==========
if ("IntersectionObserver" in window) {
  const lazyIcons = document.querySelectorAll(".fa-brands");
  const iconObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
      }
    });
  });

  lazyIcons.forEach((icon) => iconObserver.observe(icon));
}
