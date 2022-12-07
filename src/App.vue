<template>

  <div class="container">

    <HeaderTop projectname= "New York City's 6 Iconic Pizzeria!" author="Vaishnavi Salaskar"/>
    <PizzaBox :pizzeria="pizzeria"/>

  </div>

</template>


<script>

import HeaderTop from './components/HeaderTop.vue'
import PizzaBox from './components/PizzaBox.vue'

export default{
    name: 'App',
    components: {
      HeaderTop,
      PizzaBox
    },
    data(){
      return {
        pizzeria: []
      }
    },
    methods: {
        async fetchPizzeria (){
          const res = await fetch("http://localhost:8080/api")
          const data = await res.json()
          console.log(data)

          return data
        }
    },
    async created(){
        this.pizzeria = await this.fetchPizzeria()
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');


  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: "Montserrat", sans-serif;
  }

  .container{
    background: #F2B900;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 0.2em solid black;
    padding: 30px;
    border-radius: 5px;
    color: #890B3B;
  }


</style>