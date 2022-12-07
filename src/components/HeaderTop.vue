<template>
  
    <div>
        <h1> {{projectname}} </h1><br>
        <h2> {{author}} </h2><br>
    </div>

</template>


<script>

    export default{
        name: 'HeaderTop',
        props:{
            projectname: String,
            author:String
        }
    }
</script>

<style scoped>

div{
    text-align: center;
}

</style>