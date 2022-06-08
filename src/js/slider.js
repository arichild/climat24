// swiper slider
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
  spaceBetween: 48,
  initialSlide: 2,

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
    nextEl: '.swiper-button-next.complexity-button-next',
    prevEl: '.swiper-button-prev.complexity-button-prev',
  },
});

const client = new Swiper('.client', {
  loop: false,
  slidesPerView: 5,
  initialSlide: 2,

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
    nextEl: '.swiper-button-next.client-button-next',
    prevEl: '.swiper-button-prev.client-button-prev',
  },
});

const reviews = new Swiper('.reviews', {
  loop: false,
  slidesPerView: 3,
  initialSlide: 2,

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
    nextEl: '.swiper-button-next.reviews-button-next',
    prevEl: '.swiper-button-prev.reviews-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});