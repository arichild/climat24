const swiper = new Swiper('.swiper', {
  loop: false,
  setWrapperSize: true,
  autoHeight: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});