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
    },
  },

  messages: {
    name: {
      required: "Пожалуйста, введите ваше Имя",
      name: "Ваше имя не может состоять из цифр",
    },

    tel: {
      required: "Пожалуйста, введите ваш номер телефона",
      name: "Введите номер мобильного телефона",
    },
  }
});

jQuery.validator.addMethod(
  "tel",
  function (value, element) {
    return (
      this.optional(element) ||
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
    );
  }, "Введите номер мобильного телефона"
);

jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
  }, "Ваше имя не может состоять из цифр"
);