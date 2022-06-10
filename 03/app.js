const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      nameInput:''
    };
  },

  methods: {
    aumenta(number){
      return this.counter+=number;
    },

    disminuye(number){
      return this.counter-=number;
    },

    cambiaNombre(nombre){
      this.name=nombre.target.value;
    },

    enviado(){
      this.name=this.nameInput;
      alert("Holaa");
    },

    resetInput(){
      this.name='';
    }
  },
});

app.mount('#events');
