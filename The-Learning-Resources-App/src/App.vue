<template>
  <ul>
    <li v-for="r in storedResources" :key="r.id">
      <resource-item
        :description="r.description"
        :link="r.link"
        :title="r.title"
      ></resource-item>
    </li>
  </ul>
</template>

<script>
import ResourceItem from './components/ResourceItem.vue';
export default {
  components: { 'resource-item': ResourceItem },

  data() {
    return {
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