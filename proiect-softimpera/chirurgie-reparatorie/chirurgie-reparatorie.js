// Mini Navbar Toggle

let valueForHamburgerMenu = false;

function toggleNavbar() {
  const mainNavbar = document.querySelector(".navbar-main");

  const navbar = document.querySelector(".media-queries-navbar");
  const navbarOpacity = document.querySelector(".navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const closingMenu = document.querySelector(".closing-mini-navbar-button");

  hamburgerMenu.addEventListener("click", () => {
    valueForHamburgerMenu = !valueForHamburgerMenu;

    if (valueForHamburgerMenu) {
      navbarOpacity.classList.add("visible");
      navbar.classList.add("visible");
      mainNavbar.classList.add("navbar-opacity-mininav-active");
    }
  });

  closingMenu.addEventListener("click", () => {
    valueForHamburgerMenu = !valueForHamburgerMenu;

    if (valueForHamburgerMenu) {
      navbarOpacity.classList.remove("visible");
      navbar.classList.remove("visible");
      mainNavbar.classList.remove("navbar-opacity-mininav-active");
    }
  });
}

toggleNavbar();
