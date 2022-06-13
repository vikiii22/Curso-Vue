const app = Vue.createApp({
    data(){
        return{
            result:0
        }
    },

    computed:{
        resultTotal(){
            if(this.result<=36){
                return 'No has llegado';
            }else if(this.result===37){
                return this.result
            }else{
                return 'Te has pasado';
            }
        }
    },

    watch: {
        resultTotal() {
          setTimeout(() => {
            this.result = 0;
          }, 5000);
        }
      },
    

    methods: {
        add(num){
            return this.result+=num;
        }
    },
});

app.mount('#assignment')