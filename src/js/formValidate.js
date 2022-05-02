// validator
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

jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
  }, "Ваше имя не может состоять из цифр"
);

var elementZ = document.getElementById('tel');

var maskOptions = {
  mask: '+{000}(00)000-00-00'
};

var mask = IMask(elementZ, maskOptions);