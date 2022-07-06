<template>
    <h2>Active goals</h2>
    <ul>
        <li v-for="g in goals" :key="g"> {{ g }}</li>
    </ul>
    <button @click="recibe">Actualizar</button>
</template>

<script>
export default {
    props:['recibido'],
    data() {
        return {
            goals: ["Acabar el curso", "Aprender vue"],
        };
    },
    methods: {
        recibe() {
            (this.recibido==='') ? '' : this.goals.push(this.recibido);
        }
    },
}
</script>

<style scoped>
    ul{
        display: inline;
    }
</style>