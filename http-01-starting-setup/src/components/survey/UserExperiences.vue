<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="load">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },

  methods: {
    load() {
      fetch(
        'https://vue-http-demo-jose-default-rtdb.europe-west1.firebasedatabase.app/hola.json'
      )
        .then((r) => {
          if (r.ok) {
            return r.json();
          }
        })
        .then((data) => {
          const result = [];
          for (let id in data) {
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results=result;
        });
    },
  },
  mounted(){
    this.load();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>