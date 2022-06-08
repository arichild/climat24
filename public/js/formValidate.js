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