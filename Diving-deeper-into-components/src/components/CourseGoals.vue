<template>
  <ul>
    <li v-for="g in goals" :key="g">
      <slot :pasado="g" nombre="jose"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Acabar el curso", "Aprender Vue"],
    };
  },
};
</script>

<style scoped>
ul {
  display: inline;
}
</style>