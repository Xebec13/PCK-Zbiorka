const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuOpen.addEventListener("click", () => {
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  mobileMenu.classList.add("opacity-100");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("opacity-0", "pointer-events-none");
  mobileMenu.classList.remove("opacity-100");
});