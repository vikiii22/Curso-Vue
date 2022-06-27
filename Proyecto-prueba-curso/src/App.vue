<template>
    <h2>Amigos</h2>
    <ul>
        <li v-for="amigo in amigos" v-bind:key="amigo.id">{{ amigo.name }}</li>
    </ul>
</template>

<script>
export default{
    data() {
        return {
            amigos: [
                {
                    id:1,
                    name:"Pepe",
                    telefono:666112233,
                    email:"pepepepito@correo.es"
                },
                {
                    id:2,
                    name:"Julia",
                    telefono:666112233,
                    email:"julia@correo.es"
                }
            ]
        }
    },

    methods: {
        
    },
}
</script>