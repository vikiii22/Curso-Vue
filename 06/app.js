const app = Vue.createApp({
    data() {
        return {
            contacts: [],
        }
    },

    methods: {

    },
})

app.component('user-contact', {

    template: ` <li>
    <h2>{{contact.name}}</h2>
    <button @Click="mostrarDetalles">Show details</button>
    <ul v-if="datoVisible">
      <li><strong>Phone:</strong> {{contact.phone}}</li>
      <li><strong>Email:</strong> {{contact.email}}</li>
    </ul>
  </li>`,

    data() {
        return {
            datoVisible: false,
            contact: {
                name: 'Jose',
                phone: 727701591,
                email: 'joseviki10@gmail.com'
            }
        }
    },

    methods: {
        mostrarDetalles() {
            this.datoVisible = !this.datoVisible;
        }
    }
});

app.mount('#app');