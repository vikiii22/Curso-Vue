const app = Vue.createApp({
    data() {
        return {
            metaDelCurso: [
                { meta: "Aprender vue" },
                { meta: "Ver los simpsons" }
            ],
            a:'Macarrones con queso',
            b:'Paella',
            vueLink: 'https://vuejs.org/'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.a;
            } else {
                return this.b;
            }
        }
    }
});

app.mount('#user-goal');