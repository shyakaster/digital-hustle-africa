const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("hidden") === false;
  btn.setAttribute("aria-expanded", String(open));
});
