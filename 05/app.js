const app = Vue.createApp({
  data() {
    return { 
      inputGoals:'',
      goals: [] 
    };
  },
  methods: {
    addGoal(){
      (this.inputGoals==='' || this.inputGoals.length <= 10) ? "" : this.goals.push(this.inputGoals);
    },

    remove(index){
      console.log(index);
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
