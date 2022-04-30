const swiper = new Swiper('.swiper', {
  loop: false,
  setWrapperSize: true,
  slideShadows: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});