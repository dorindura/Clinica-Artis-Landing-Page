const navLinks = document.querySelectorAll(".navbar-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Mini Navbar Toggle

let valueForHamburgerMenu = false;

function toggleNavbar() {
  const mainNavbar = document.querySelector(".navbar");

  const navbar = document.querySelector(".media-queries-navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const closingMenu = document.querySelector(".closing-mini-navbar-button");

  hamburgerMenu.addEventListener("click", () => {
    valueForHamburgerMenu = !valueForHamburgerMenu;

    if (valueForHamburgerMenu) {
      navbar.classList.add("visible");
      mainNavbar.classList.add("navbar-opacity-mininav-active");
    }
  });

  closingMenu.addEventListener("click", () => {
    valueForHamburgerMenu = !valueForHamburgerMenu;

    if (valueForHamburgerMenu) {
      navbar.classList.remove("visible");
      mainNavbar.classList.remove("navbar-opacity-mininav-active");
    }
  });
}

toggleNavbar();

// Swiper JS

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  },
});

var swiperTwo = new Swiper(".slide-content-first", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
