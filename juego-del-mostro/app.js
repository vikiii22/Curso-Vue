function randomDamage(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            mostroHealth: 100,
            superAtaque: 0,
            winner:'',
            deshabilitado:false
        }
    },

    computed: {
        bajarVidaMostro() {
            return { width: this.mostroHealth + '%' }
        },

        bajarVidaPlayer() {
            return { width: this.playerHealth + '%' }
        }
    },

    watch: {
        playerHealth(value){
            if(value <= 0 && this.mostroHealth <= 0){
                this.winner='empate';
            }else if(value==0){
                this.winner='mostro';
            }
        },

        mostroHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner='empate';
            }else if(value<=0){
                this.winner='player';
                this.deshabilitado=true;
            }
        }
    },

    methods: {
        comprobarAtaqueEspecial() {
            if (this.superAtaque < 3) {
                this.superAtaque++;
            } else {
                this.superAtaque = 0;
            }
        },

        playerAttack() {
            const damage = randomDamage(5, 12);
            this.mostroHealth -= damage;
            this.mostroAttack();
            this.comprobarAtaqueEspecial();
            if (this.mostroHealth <= 10){
                this.mostroHealth=0;
            }
        },

        mostroAttack() {
            const damage = randomDamage(5, 12);
            this.playerHealth -= damage;
        },

        specialAttack() {
            const damage = randomDamage(10, 25);
            this.mostroHealth -= damage;
            this.mostroAttack();
            this.comprobarAtaqueEspecial();
        },

        curar() {
            if (this.playerHealth >= 90) {
                return
            } else {
                this.playerHealth += 10;
            }
        },

        surrender(){
            this.winner='mostro';
            this.deshabilitado=true;
        }
    },
});

app.mount('#game');