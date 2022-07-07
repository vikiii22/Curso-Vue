<template>
<the-header :titulo="titulo"></the-header>
  <resource-stored :stored="storedResources"></resource-stored>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ResourceStored from './components/ResourceStored.vue';
export default {
  components: { ResourceStored, TheHeader },

  data() {
    return {
      titulo:'App de prueba de Jose',
      storedResources: [
        {
          id: 'Guía oficial',
          title: 'Guía oficial',
          description: 'La guía oficial de VUE.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Aprender google',
          link: 'https://google.org',
        },
      ],
    };
  },
  methods: {
    hola() {
      return;
    },
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