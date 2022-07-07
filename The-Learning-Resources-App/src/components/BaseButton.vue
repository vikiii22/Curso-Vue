<template>
    <button>{{ texto }}</button>
</template>

<script>
export default {
    props:['texto']
}
</script>

<style scoped>
button{
    border-radius: 30px;
    background-color: brown;
    color: white;
    font-weight: bold;
}

button:hover{
    background-color: aquamarine;
    color: black;
}
</style>