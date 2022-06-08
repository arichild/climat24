const btnBurger = document.querySelector('.header-middle-mob-burger');
const burgerMenu = document.querySelector('.header-mob-menu');

// open menu burger
btnBurger.addEventListener('click', openMenuBurger);

function openMenuBurger() {
  btnBurger.classList.toggle('active-toggler');
  burgerMenu.classList.toggle('active');
}
// validator for forms
$(".section-questions-validate").validate({
  errorElement: "span",

  rules: {
    name: {
      required: true,
      lettersonly: true,
    },

    tel: {
      required: true,
      minlength: 6,
    },
  },

  messages: {
    name: {
      required: "Пожалуйста, введите ваше Имя",
      lettersonly: "Ваше имя не может состоять из цифр",
    },

    tel: {
      required: "Пожалуйста, введите ваш номер телефона",
      minlength: "Минимальная длина 6 символов",
    },
  }
});

$(".section-gift-validate").validate({
  errorElement: "span",

  rules: {
    name: {
      required: true,
      lettersonly: true,
    },

    tel: {
      required: true,
      minlength: 6,
    },
  },

  messages: {
    name: {
      required: "Пожалуйста, введите ваше Имя",
      lettersonly: "Ваше имя не может состоять из цифр",
    },

    tel: {
      required: "Пожалуйста, введите ваш номер телефона",
      minlength: "Минимальная длина 6 символов",
    },
  }
});

jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
  }, "Ваше имя не может состоять из цифр"
);

let inpTel = document.querySelectorAll('input[type=tel]');
let mask;

for(var i = 0; i < inpTel.length; i++) {
  inpTel[i].addEventListener('focus', function(){
    mask = IMask(this, {
        mask: '+{375} (00) 000 00 00',
        overwrite: true,
        lazy: false,
        autofix: true
    });
  })
  inpTel[i].addEventListener('blur', function(){
    if(this.value.match('_')){
      mask.masked.reset()
    }
  })
};
document.getElementById('dynamic').addEventListener('click', function() {
  lightGallery(document.getElementById('dynamic'), {
      dynamic: true,
      download: false,
      counter: false,
      hideBarsDelay: 0,
      controls: true,

      // prevHtml: ".zxc",

      dynamicEl: [{
          "src": './images/qualification-popup.jpg',
          'thumb': './images/qualification-popup.jpg',
      }, {
          'src': './images/qualification-popup2.jpg',
          'thumb': './images/qualification-popup2.jpg',
      }, {
          'src': './images/qualification-popup3.jpg',
          'thumb': './images/qualification-popup3.jpg',
      }]
  })
});
//карта магазинов на странице контакты
function mapContactInit() {

    // описывавем опции, карты, там впринципе все понятно
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(52.440045, 31.007221),
        mapTypeControl:false,
        scrollwheel: false,
        zoomControl: false,
        scaleControl:false,
        disableDefaultUI: true,

        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },

        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
    }

    //инициализациия карты
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var myCenter = new google.maps.LatLng(52.440045, 31.007221);
    var marker = new google.maps.Marker({position:myCenter});

    marker.setMap(map);

    $("#contact-map-place").change(function() {
        let thsLat = parseFloat($(this).find(':selected').attr('data-lat'));
        let thsLng = parseFloat($(this).find(':selected').attr('data-lng'));

        map.setCenter(new google.maps.LatLng(thsLat, thsLng));

        var myCenter = new google.maps.LatLng(thsLat, thsLng);

        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    });
}

jQuery(document).ready(function($) {
    if($('.contact-map')) {
        //Инициализируем карту магазинов
        mapContactInit();
    }
});
$(document).on("click", ".mfp-link", function () {
  var a = $(this);
  $.magnificPopup.open({
    items: { src: a.attr("data-href") },
    type: "ajax",
    overflowY: "scroll",
    removalDelay: 610,
    mainClass: "my-mfp-zoom-in",
    ajax: {
      tError: "Error. Not valid url",
    },
    callbacks: {
      open: function () {
        setTimeout(function () {
          $(".mfp-wrap, .mfp-bg").addClass("delay-back");
          $(".mfp-popup").addClass("delay-back");
        }, 700);
      },
    },
  });
  return false;
});
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