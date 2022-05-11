var app = new Vue({
  el: '.section-quiz',
  data: {
    step: 0,
    totalSteps: 5,
    // @todo: выбранные значения пушить в массив (или лучше сделать массив с объектам ключ:значение?)
    answer: [],

    // @todo: с помощью цикла проходить, и title заносить где должен быть вопрос
    // value, в input
    form: [
      {
        title: 'Укажите площадь Вашего объекта:',
        values: ['До 50 кв.м', 'От 50 кв.м до 70кв.м', 'От 70кв.м до 90кв.м', 'От 90кв.м до 110кв.м', 'От  110кв.м до 130кв.м',
        ],
      },

      // {
      //   title: 'Вопрос 2:',
      //   values: ['Ответ: 1', 'Ответ: 2', 'Ответ: 3', 'Ответ: 4', 'Ответ: 5'],
      // },
    ],
  },

  methods: {
    toNextStep() {
      this.step++;
    },

    toPrevStep() {
      this.step--;
    },

    getValue(e) {
      this.answer.push(e.target.value);
      console.log(this.answer);
    },
  },
});
