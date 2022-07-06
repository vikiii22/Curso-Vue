<template>
  <div>
    <the-header></the-header>
    <button @click="setSelected('active-goals')">Active goals</button>
    <button @click="setSelected('manage-goals')">Manage goals</button>
    <keep-alive><active-goals v-if="selectedComponent==='active-goals'" :recibido="recibido"></active-goals></keep-alive>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="pasadoProp">
      <template #default="pasadoProp">
      <h2>{{ pasadoProp.pasado }}</h2>
      <p>{{ pasadoProp["nombre"] }}</p>
      </template>
    </course-goals> -->
    <keep-alive><ManageGoals v-if="selectedComponent === 'manage-goals'" @recibe-goal="recibe"></ManageGoals></keep-alive>
    <!-- <keep-alive><component :is="selectedComponent"></component></keep-alive> -->
  </div>
</template>

<script>
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
// import CourseGoals from "./components/CourseGoals.vue";
export default {
  components: { ManageGoals, ActiveGoals },
  emits:['valor-emitido'],
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: "Jose Sánchez",
        description: "Site owner and admin",
        role: "admin",
      },
      recibido: '',
    };
  },

  methods:{
    setSelected(c){
      this.selectedComponent=c;
    },

    recibe(valor){
      this.recibido=valor;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>