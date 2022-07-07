<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">Ver Recurso</a>
    </nav>
    <base-button tipo="flat" texto="Delete"></base-button>
  </li>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  props: {
    title: String,
    description: String,
    link: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #00c0ce;
}

a:hover,
a:active {
  color: #360fe4;
}
</style>