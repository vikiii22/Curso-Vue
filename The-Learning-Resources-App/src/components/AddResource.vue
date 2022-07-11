<template>
  <base-card>
    <form @submit.prevent="pre">
      <div class="form-control">
        <label>Título</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          type="text"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="text" ref="linkInput" />
      </div>
      <div>
        <button type="submit" @click="enviarDatos">Enviar</button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  inject: ['addResource'],
  methods: {
    enviarDatos() {
      const titulo = this.$refs.titleInput.value;
      const descripcion = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;

      if (
        titulo.trim() === '' ||
        descripcion.trim() === '' ||
        link.trim() === ''
      ) {
        return;
      } else {
        this.addResource(titulo, descripcion, link);
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>