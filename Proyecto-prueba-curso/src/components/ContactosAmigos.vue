<template>
    <ul v-for="(amigo, index) in amigos" v-bind:key="index">
        <li>
            <h2>{{ amigo.name }}</h2>
            <button @click="verDetalles()">{{ detallesVisibles ? 'Ocultar':'Mostrar detalles'}}</button>
        </li>
        <ul v-if="detallesVisibles">
            <li><strong>Teléfono:</strong>{{ amigo.telefono }}</li>
            <li><strong>Email:</strong>{{ amigo.email }}</li>
        </ul>
    </ul>
</template>


<script>
    export default{
        props:[
            'nombre',
            'numero',
            'email'
        ],

        data() {
            return {
                detallesVisibles:false,
                amigos: [
                    {
                        name:this.nombre,
                        telefono:this.numero,
                        email:this.email
                    }
                ]
            }
        },

        methods:{
            verDetalles(){
                this.detallesVisibles = !this.detallesVisibles;
            }
        }
    };
</script>