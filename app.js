const app = Vue.createApp({
  data() {
    return {
      courseGoal1: "Finish the course and learn vue",
      courseGoal2: "Finish the course and Master vue",
      vueLink: "https://vuejs.org",
      htmlContent: "<li>I am HTML</li>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? this.courseGoal1 : this.courseGoal2;
    },
  },
});

app.mount("#user-goal");
