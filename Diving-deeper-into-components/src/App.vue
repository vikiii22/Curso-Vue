<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="pasadoProp">
      <!-- <template #default="pasadoProp"> -->
      <h2>{{ pasadoProp.pasado }}</h2>
      <p>{{ pasadoProp["nombre"] }}</p>
      <!-- </template> -->
    </course-goals>
  </div>
</template>

<script>
import CourseGoals from "./components/CourseGoals.vue";
export default {
  components: { CourseGoals },
  data() {
    return {
      activeUser: {
        name: "Jose Sánchez",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
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