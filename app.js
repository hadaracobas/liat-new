/* START MENU */
// toggle menu
const menuIcon = document.querySelector(".header__menu-icon-container");
const menu = document.querySelector(".header__menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

// toggle submenu
const menuItems = document.getElementsByClassName("header__menu-item");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    menuItems[i].getElementsByClassName("header__submenu")[0] &&
      menuItems[i]
        .getElementsByClassName("header__submenu")[0]
        .classList.toggle("menu-active");

    if (menuItems[i].getElementsByClassName("submenu-icon-down")[0]) {
      menuItems[i].getElementsByClassName("submenu-icon")[0].innerHTML = `
        <svg class="submenu-icon-up" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 15l8-8l8 8"/></svg>
        `;
    } else {
      menuItems[i].getElementsByClassName("submenu-icon")[0].innerHTML = `
      <svg
      class="submenu-icon-down"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 9l8 8l8-8"
      />
    </svg>
      `;
    }
  });
}
/* END MENU */
