<template>
    <h2>Manage goals</h2>
    <input type="text" v-model="enterValue">
    <button @click="setGoal">Set goal</button>
</template>

<script>
export default {
    emits:['recibe-goal'],
    data(){
        return{
            enterValue:'',
        }
    },

    methods:{
        setGoal(){
            (this.enterValue==='') ? "" : this.$emit('recibe-goal', this.enterValue);
        }
    }
}
</script>