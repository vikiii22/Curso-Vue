const app = Vue.createApp({
    data(){
        return{
            cajaASeleccionada:false,
            cajaBSeleccionada:false,
            cajaCSeleccionada:false
        };
    },

    methods: {
        cajaSeleccionada(caja){
            if(caja==='A'){
                if(this.cajaASeleccionada==false){
                    return this.cajaASeleccionada=true;
                }else{
                    return this.cajaASeleccionada=false;
                }
            }else if(caja==='B'){
                if(this.cajaBSeleccionada==false){
                    return this.cajaBSeleccionada=true;
                }else{
                    return this.cajaBSeleccionada=false;
                }
            }else if(caja==='C'){
                if(this.cajaCSeleccionada==false){
                    return this.cajaCSeleccionada=true;
                }else{
                    return this.cajaCSeleccionada=false;
                }
            }
        }
    },
});

app.mount('#styling')