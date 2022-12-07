<template>
    
    <div class="pizzabox">
        <div v-for="pizza in pizzeria" :key="pizza.id" >
        <PizzaItem :pizza="pizza"/>
        </div>

    </div>

</template>

<script>

    import PizzaItem from './PizzaItem.vue'
    export default{
        name:'PizzaBox',
        components:{
            PizzaItem
        },
        props:{
            pizzeria: Array
        }
    }

</script>

<style scoped>

.pizzabox{
    background-color: #F25330;
    padding: 1em;
    color: black;
}

</style>