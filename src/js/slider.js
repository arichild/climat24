const design = new Swiper('.design', {
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
  slidesPerView: 5,

  breakpoints: {
    1025: {
      slidesPerView: 5,
    },

    400: {
      slidesPerView: 3,
    },

    300: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next client',
    prevEl: '.swiper-button-prev client',
  },
});

const feedback = new Swiper('.reviews', {
  loop: false,
  slidesPerView: 3,

  breakpoints: {
    1025: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
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