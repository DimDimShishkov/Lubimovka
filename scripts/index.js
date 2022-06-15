import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const page = document.querySelector(".page");
const header = page.querySelector(".header");
const mobileMenu = header.querySelector(".header__menu");
const headerMobile = header.querySelector(".header__mobile");
const headerContainer = header.querySelector(".header__container");
const headerNav = header.querySelector(".header__nav");

const openMobileMenu = (evt) => {
  mobileMenu.classList.add("header__menu_selected");
  headerNav.classList.add("header__nav_selected");
  page.classList.add("page_active");
  headerContainer.classList.add("header__container_active");
  headerContainer.addEventListener("mousedown", closeMenu);
  headerMobile.addEventListener("click", closeMobileMenu);
};

const closeMobileMenu = (evt) => {
  mobileMenu.classList.remove("header__menu_selected");
  headerNav.classList.remove("header__nav_selected");
  page.classList.remove("page_active");
  headerContainer.classList.remove("header__container_active");
  headerContainer.removeEventListener("mousedown", closeMenu);
  headerMobile.removeEventListener("click", closeMobileMenu);
};

headerMobile.addEventListener("click", openMobileMenu);

const closeMenu = (evt) => {
  if (evt.target == evt.currentTarget) {
    closeMobileMenu();
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.slider__points',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button_type_right',
    prevEl: '.slider__button_type_left',
  },

  breakpoints: {
    // when window width is >= 320px
    950: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})
