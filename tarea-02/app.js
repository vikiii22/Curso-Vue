const app = Vue.createApp({
    data(){
        return{
            name:'',
            nameEnter:''
        };
    },

    methods: {
        mostrar(){
            alert('Alerta random');
        },

        registrar(event){
            this.name=event.target.value;
        },

        registrarEnter(event){
            this.nameEnter=event.target.value;
        }
    },
});

app.mount('#assignment')