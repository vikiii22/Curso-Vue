<template>
  <ul  v-for="r in storedResources" :key="r">
    <h1>{{ r.title }}</h1>
    <li>{{ r.link }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'Guía oficial',
          title: 'Guía oficial',
          description: 'La guía oficial de VUE.js',
          link: 'https://vuejs.org'
        },
        {
            id: 'google',
            title:'Google',
            description: 'Aprender google',
            link: 'https://google.org'
        }
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
html {
  font-family: Arial, Helvetica, sans-serif;
}
</style>