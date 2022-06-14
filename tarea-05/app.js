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
        },

        remove(task){
            this.tasks.splice(task, 1);
        }
    },
});

app.mount('#assignment');