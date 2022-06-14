const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            listaTareasVisible: true
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
        },

        ocultarLista() {
            this.listaTareasVisible = !this.listaTareasVisible;
        }
    },
});

app.mount('#assignment');