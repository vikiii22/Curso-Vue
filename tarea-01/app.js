const app = Vue.createApp({
    data() {
        return {
            name: "Jose",
            age: 21,
            favNum: Math.random(),
            image: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
        };
    },

    methods: {
        calculaEdad() {
            return this.age + 5;
        }
    },
});

app.mount('#assignment');