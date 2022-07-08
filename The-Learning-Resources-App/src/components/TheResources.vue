<template>
  <base-card>
    <base-button
      texto="Stored resources"
      @click="setSelectedTab('resource-stored')"
    ></base-button>
    <base-button
      texto="Add Resource"
      @click="setSelectedTab('add-resource')"
    ></base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import BaseCard from './BaseCard.vue';
import BaseButton from './BaseButton.vue';
import ResourceStored from './ResourceStored.vue';
import AddResource from './AddResource.vue';
export default {
  components: { BaseCard, BaseButton, ResourceStored, AddResource },
  data() {
    return {
      selectedTab: 'resource-stored',
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

  provide() {
    return {
      stored: this.storedResources,
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5%;
  margin-right: auto;
  font-size: 30px;
}
</style>