<template>
    <h1>Página no encontrada: {{ ruta }}</h1>
</template>

<script>
export default {
    data(){
        return{
            ruta:this.$route.params.notFound,
        }
    }
}
</script>