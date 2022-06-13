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
                visible:this.parrafoVisible,
                hidden:!this.parrafoVisible
            }
        },
    },

    methods: {
        esconderParrafo(){
            this.parrafoVisible = !this.parrafoVisible;
        }
    },
});

app.mount('#assignment');