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

const complexity = new Swiper('.complexity', {
  loop: false,
  setWrapperSize: true,
  autoHeight: true,
  slidesPerView: 4,

  breakpoints: {
    1025: {
      slidesPerView: 4,
    },

    300: {
      slidesPerView: 3,
      spaceBetween: 18
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const client = new Swiper('.client', {
  loop: false,
  // setWrapperSize: true,
  // autoHeight: true,
  slidesPerView: 5,
  spaceBetween: 25,

  grid: {
      rows: 2,
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const feedback = new Swiper('.reviews', {
  loop: false,
  slidesPerView: 3,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    300: {
      slidesPerView: 1,
      spaceBetween: 18
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});