const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    aumenta(){
      return this.counter++;
    },

    disminuye(){
      return this.counter--;
    }
  },
});

app.mount('#events');
