<template>
    <header>
        <h1>{{ titulo }}</h1>
    </header>
</template>

<script>
export default {
    props:['titulo'],
}
</script>

<style>
header{
    background-color: brown;
    color: wheat;
    font-family: 'Courier New', Courier, monospace;
    font-size:x-large;
}

@media (max-width: 600px) {
    header{
        font-size: medium;
    }
}

h1{
    margin-left: auto;
    margin-right: auto;
}
</style>