const app = Vue.createApp({
    data() {
        return {
            inputUser:'',
            parrafoVisible:true,
            inputBackground:''
        }
    },

    computed:{
        estilos(){
            return{
                user1:this.inputUser==='user1',
                user2:this.inputUser==='user2',
                visible:this.parrafoVisible==true,
                hidden:this.parrafoVisible==false
            }
        },
    },

    methods: {
        esconderParrafo(){
            (this.parrafoVisible == true) ? this.parrafoVisible=false : this.parrafoVisible=true;
        }
    },
});

app.mount('#assignment');