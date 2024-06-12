<template>
    <main>
      <NavBar/>
      <div class="container">
        <button class="add-button" @click="add">+</button>
        <h1>THE LIST OF THE COURSES: </h1>
      </div>
    </main>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  
  export default {
    components: {
      NavBar
    },
    methods: {
      add() {
        this.$router.push('/new');
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
  }
  
  h1 {
    font-size: 2em;
    margin: 2em auto;
  }
  
  .add-button {
    margin-left: 10em; 
    height: 3em;
    width:3em;
    font-size: large;
  }
  </style>
  