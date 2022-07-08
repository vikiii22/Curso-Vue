<template>
  <the-header :titulo="titulo"></the-header>
  <!-- <resource-stored :stored="storedResources"></resource-stored> -->
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import ResourceStored from './components/ResourceStored.vue';
import TheResources from './components/TheResources.vue';
export default {
  components: { TheHeader, TheResources },

  data() {
    return {
      titulo: 'App de prueba de Jose',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>