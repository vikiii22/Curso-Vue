<template>
  <amigo-nuevo @anyadir-amigo="anyadirAmigo"></amigo-nuevo>
  <h1>Amigos</h1>
  <contactos-amigos
    v-for="amigo in amigos"
    v-bind:key="amigo.id"
    :nombre="amigo.nombre"
    :numero="amigo.numero"
    :email="amigo.email"
    :favorito="amigo.favorito"
    @delete="deleteAmigo(amigo.id)"
  />
</template>
<!-- <keep-alive>

</keep-alive> -->
<script>
export default {
  data() {
    return {
      amigos: [
        {
          id: 1,
          nombre: "Aintzane",
          numero: 610546413,
          email: "ainza@gmail.com",
          favorito: true, 
        },
        {
          id:2,
          nombre: "Jose",
          numero: 727701591,
          email: "jose@gmail.com",
          favorito: true,
        },
        {
          id:3,
          nombre: "Manolo",
          numero: 610546413,
          email: "manolico@gmail.com",
          favorito: false,
        },
        {
          id:4,
          nombre: "Elisa",
          numero: 610546413,
          email: "elisa@gmail.com",
          favorito: false,
        },
      ],
    };
  },

  methods: {
    anyadirAmigo(nombreR, telefono, correoR) {
      const nuevoAmigo = {
        id: this.amigos.length + 1,
        nombre: nombreR,
        numero: telefono,
        email: correoR,
      };
      this.amigos.push(nuevoAmigo);
    },

    deleteAmigo(amigoId){
      this.amigos=this.amigos.filter((amigos)=> amigos.id != amigoId);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}

h1 {
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.desplegable li {
  background-color: gray;
}
</style>