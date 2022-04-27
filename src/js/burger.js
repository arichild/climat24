const btnBurger = document.querySelector('.header-middle-mob-burger');
const burgerMenu = document.querySelector('.header-mob-menu');

btnBurger.addEventListener('click', openMenuBurger);

function openMenuBurger() {
  const srcBtn = btnBurger.children[0].src.split('/icons')[1];
  const srcImgBurger = '../images/icons/header-burger.svg';
  const srcImgClose = '../images/icons/closeBurger.svg';

  if (srcBtn === '/header-burger.svg') {
    btnBurger.children[0].src = srcImgClose;
  } else {
    btnBurger.children[0].src = srcImgBurger;
  }

  burgerMenu.classList.toggle('active');
}