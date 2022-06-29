<template>
    <ul v-for="(amigo, index) in amigos" v-bind:key="index">
        <li>
            <h2>{{ amigo.name }} {{ (contactoFavorito === '1' ? "(Favorito)" : "" )}}</h2>
            <button @click="verDetalles()">{{ detallesVisibles ? 'Ocultar':'Mostrar detalles'}}</button>
        </li>
        <ul v-if="detallesVisibles" class="desplegable">
            <li><strong>Teléfono:</strong>{{ amigo.telefono }}</li>
            <li><strong>Email:</strong>{{ amigo.email }}</li>
            <li><button @click="cambiarFavorito">{{ (contactoFavorito === '1' ? "Desmarcar Favorito" : "Marcar favorito" )}}</button></li>
        </ul>
    </ul>
</template>


<script>
    export default{
        // props:[
        //     'nombre',
        //     'numero',
        //     'email',
        //     'favorito'
        // ],
        props:{
            nombre:String,
            numero:String,
            email:String,
            favorito:String
        },

        data() {
            return {
                detallesVisibles:false,
                amigos: [
                    {
                        name:this.nombre,
                        telefono:this.numero,
                        email:this.email
                    }
                ],
                contactoFavorito:this.favorito
            }
        },

        methods:{
            verDetalles(){
                this.detallesVisibles = !this.detallesVisibles;
            },

            cambiarFavorito(){
                if(this.contactoFavorito==="1") return this.contactoFavorito="0";
                if(this.contactoFavorito==="0") return this.contactoFavorito="1";
            }
        }
    };
</script>