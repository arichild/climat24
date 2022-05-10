var app = new Vue({
  el: '.section-quiz',
  data: {
    step: 0,
    totalSteps: 6,
    form: [
      {
        title: 'Укажите площадь Вашего объекта:',
        values: ['До 50 кв. м', 'От 50 кв. м до 70кв. м', 'От 70 кв. м до 100кв. м']
      }
    ],
  },

  methods: {
    toNextStep() {
      this.step++
    },

    toPrevStep() {
      this.step--
    }
  }
})