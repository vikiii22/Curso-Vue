<template>
  <ul>
    <li v-for="r in stored" :key="r.id">
      <base-card
        ><resource-item
          :description="r.description"
          :link="r.link"
          :title="r.title"
        ></resource-item
      ></base-card>
    </li>
  </ul>
</template>

<script>
import BaseCard from './BaseCard.vue';
import ResourceItem from './ResourceItem.vue';
export default {
  components: { ResourceItem, BaseCard },
  props: ['stored'],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>