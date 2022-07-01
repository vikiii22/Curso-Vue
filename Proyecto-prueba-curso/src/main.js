import { createApp } from 'vue';

import App from './App.vue';
import ContactosAmigos from './components/ContactosAmigos.vue';
import AmigoNuevo from './components/AmigoNuevo.vue';

const app=createApp(App);

app.component('contactos-amigos', ContactosAmigos);
app.component('amigo-nuevo', AmigoNuevo)

app.mount('#app');
