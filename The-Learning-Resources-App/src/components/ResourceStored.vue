<template>
    <ul></ul>
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
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>