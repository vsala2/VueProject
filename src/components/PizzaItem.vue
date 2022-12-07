<template>
    

    <div>

        <h2> #{{pizza.id}}</h2>
        <h2>  Name: {{pizza.name}} </h2>
        <br>
        <h3> Description: {{pizza.description}} </h3>
        <br>
        <h3> Type of Pizza Preferred: {{pizza.typepizza}} </h3>
        <br>
        <h3> Addess: {{pizza.address}} </h3>
        <br>
        <h3> Prize: {{pizza.prize}} </h3>
        <br>
        <h3> Opening Hours: {{pizza.openinghours}} </h3>
        <br>
        <h3> Web Link: {{pizza.weblink}} </h3>

    </div>

</template>

<script>

    export default{
        name: 'PizzaItem',
        props:{
            pizza: Array
        }
    }

</script>

<style scoped>

h4{
    margin: 2px;
}

div{
    background-color: #890B3B;
    color: white;
    padding: 1em;
    text-align: justify;
    margin: 7px;
}

</style>