<template>
  <h1>Amigo nuevo</h1>
  <form @submit.prevent="submitData">
    <div>
      <label>Nombre </label>
      <input type="text" v-model="nombreInput" />
    </div>
    <div>
        <label>Télefono </label>
        <input type="number" v-model="telefonoInput" />
    </div>
    <div>
        <label>Correo </label>
        <input type="email" v-model="correoInput" />
    </div>
    <br />
    <button @click="anyadirAmigo">OK</button>
  </form>
</template>

<script>
export default {
  emits: ['anyadir-amigo'],
  data() {
    return {
      nombreInput: "",
      telefonoInput:"",
      correoInput:""
    };
  },

  methods: {
    anyadirAmigo() {
        if(this.nombreInput=="" || this.telefonoInput=="" || this.correoInput==""){
            return
        }else{
            this.$emit('anyadir-amigo', this.nombreInput, this.telefonoInput, this.correoInput);
        }
    },
  },
};
</script>

<style>
form {
  text-align: center;
}
</style>