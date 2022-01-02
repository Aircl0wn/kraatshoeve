// Mobile menu handling
const menuBtn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Open Menu on lcick
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (!menu.classList.contains("hidden")) {
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Close menu on ESC
document.addEventListener("keyup", (e) => {
  // ESC pressed
  if (e.key == "ESC" || e.key == "Escape") {
    // If menu is open
    if (!menu.classList.contains("hidden")) {
      // Hide menu - Reset expanded state - Move focus
      menu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  }
});
