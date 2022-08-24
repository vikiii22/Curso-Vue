import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import ErrorComponent from './components/err/ErrorComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/equipos'},
        {path: '/equipos', component: TeamsList },
        {path: '/usuarios', component: UsersList },
        {path: '/equipos/:id', component: TeamMembers},
        {path: '/:notFound(.*)', component: ErrorComponent}
        // {path: '/equipos/nuevo'}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.use(router);

app.mount('#app');
