<template>
  <ul>
    <li>
      <h2>
        {{ nombre }} {{ contactoFavorito === true ? "(Favorito)" : "" }}
      </h2>
      <button @click="verDetalles()">
        {{ detallesVisibles ? "Ocultar" : "Mostrar detalles" }}
      </button>
    </li>
    <ul v-if="detallesVisibles" class="desplegable">
      <li><strong>Teléfono:</strong>{{ numero }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
      <li>
        <button @click="cambiarFavorito">
          {{
            contactoFavorito === true ? "Desmarcar Favorito" : "Marcar favorito"
          }}
        </button>
      </li>
    </ul> 
  </ul>
</template>


<script>
export default {
  // props:[
  //     'nombre',
  //     'numero',
  //     'email',
  //     'favorito'
  // ],
  props: {
    nombre: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    favorito: {
      type: Boolean,
      required: false,
      default: false,
    //   validator: function(valor){
    //     return valor===true || valor===false;
    //   }
    },
  },

  data() {
    return {
      detallesVisibles: false,
      contactoFavorito: this.favorito,
    };
  },

  methods: {
    verDetalles() {
      this.detallesVisibles = !this.detallesVisibles;
    },

    cambiarFavorito() {
      if (this.contactoFavorito === true) return (this.contactoFavorito = false);
      if (this.contactoFavorito === false) return (this.contactoFavorito = true);
    },
  },
};
</script>