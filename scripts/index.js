const page = document.querySelector(".page");
const header = page.querySelector(".header");
const mobileMenu = header.querySelector(".header__menu");
const headerMobile = header.querySelector(".header__mobile");
const headerContainer = header.querySelector(".header__container");
const headerNav = header.querySelector(".header__nav");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("header__menu_selected");
  headerNav.classList.toggle("header__nav_selected");
  page.classList.toggle("page_active");
  headerContainer.classList.toggle("header__container_active");
};

headerMobile.addEventListener("click", toggleMobileMenu);

headerContainer.addEventListener("mousedown", function (evt) {
  if (evt.target == evt.currentTarget) {
    toggleMobileMenu();
  }
});
