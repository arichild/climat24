const btnBurger = document.querySelector('.header-middle-mob-burger');
const burgerMenu = document.querySelector('.header-mob-menu');

// open menu burger
btnBurger.addEventListener('click', openMenuBurger);

function openMenuBurger() {
  btnBurger.classList.toggle('active-toggler');
  burgerMenu.classList.toggle('active');
}
