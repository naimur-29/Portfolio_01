const navbarList = document.querySelector(".navbar__list");
const navbarListContainer = document.querySelector(".navbar__list__container");
const navbarMobileMenu = document.querySelector(".navbar__mobile__menu");
const mainSection = document.querySelector("main");
const homeMenu = document.querySelector(".home__page");
const aboutMenu = document.querySelector(".about__page");
const projectsMenu = document.querySelector(".projects__page");
const contactMenu = document.querySelector(".contact__page");
const navHighlight = document.querySelector(".highligh");

// NAVBAR MOBILE MENU
navbarMobileMenu.addEventListener("click", () => {
  navbarMobileMenu.classList.toggle("navbar__mobile__menu__active");
  navbarListContainer.classList.toggle("navbar__list__container__active");
  navbarList.classList.toggle("navbar__list__active");
});

[homeMenu, aboutMenu, projectsMenu, contactMenu].forEach((menu) => {
  menu.addEventListener("click", () => {
    navbarMobileMenu.classList.toggle("navbar__mobile__menu__active");
    navbarListContainer.classList.toggle("navbar__list__container__active");
    navbarList.classList.toggle("navbar__list__active");
  });
});

// SCROLL HIGHLIGHT
"scroll click".split(" ").forEach((event) => {
  window.addEventListener(event, () => {
    // GET SCROLL POSITION
    let scrollPos = window.scrollY;

    // ADD HIGHLIGHT CLASS TO NAVBAR MENU
    if (scrollPos < 700) {
      homeMenu.textContent = "✨Home✨";
      aboutMenu.textContent = "About";
      projectsMenu.textContent = "Projects";
      contactMenu.textContent = "Contact";
    } else if (scrollPos > 700 && scrollPos < 1500) {
      homeMenu.textContent = "Home";
      aboutMenu.textContent = "✨About✨";
      projectsMenu.textContent = "Projects";
      contactMenu.textContent = "Contact";
    } else if (scrollPos > 1500 && scrollPos < 2300) {
      homeMenu.textContent = "Home";
      aboutMenu.textContent = "About";
      projectsMenu.textContent = "✨Projects✨";
      contactMenu.textContent = "Contact";
    } else if (scrollPos > 2300) {
      homeMenu.textContent = "Home";
      aboutMenu.textContent = "About";
      projectsMenu.textContent = "Projects";
      contactMenu.textContent = "✨Contact✨";
    }
  });
});
