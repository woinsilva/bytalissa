const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && menu) {
  navToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
