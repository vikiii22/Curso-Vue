<template>
    <button :type="tipo">{{ texto }}</button>
</template>

<script>
export default {
    props:['texto', 'tipo']
}
</script>

<style scoped>
button{
    border-radius: 10px;
    background-color: brown;
    color: white;
    font-weight: bold;
    margin-left: 90%;
}

button:hover{
    background-color: aquamarine;
    color: black;
}
</style>