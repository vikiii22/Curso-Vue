const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      nameInput:''
    };
  },

  methods: {
    aumenta(){
      return this.counter++;
    },

    disminuye(){
      return this.counter--;
    },

    cambiaNombre(nombre){
      this.name=nombre.target.value;
    },

    enviado(){
      this.name=this.nameInput;
      alert("Holaa");
    }
  },
});

app.mount('#events');
