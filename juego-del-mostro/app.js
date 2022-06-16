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
            deshabilitado:false,
            vecesCurado: 0,
            log: []
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
        startNewGame(){
            this.playerHealth=100;
            this.mostroHealth=100;
            this.winner=null;
            this.superAtaque=0;
            this.log.splice(0, this.log.length)
        },

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
            this.log.push('Player attack with ' + damage +' of damage');
        },

        mostroAttack() {
            const damage = randomDamage(10, 16);
            this.playerHealth -= damage;
            if (this.playerHealth <= 10){
                this.playerHealth=0;
            }
        },

        specialAttack() {
            const damage = randomDamage(18, 30);
            this.mostroHealth -= damage;
            this.mostroAttack();
            this.comprobarAtaqueEspecial();
            this.log.push('Player use Super attack with ' + damage +' of damage');
        },

        curar() {
            if (this.playerHealth >= 90) {
                return
            } else {
                this.playerHealth += 10;
                this.vecesCurado++;
                this.log.push('Player heal');
            }
        },

        surrender(){
            this.winner='mostro';
            this.deshabilitado=true;
        }
    },
});

app.mount('#game');