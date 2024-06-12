<script>
import NavBar from "@/components/NavBar.vue";

    export default {
    components: {
      NavBar
    },
  methods: {
    goToAnotherPage() {
      this.$router.push('/login');
    }
  }
  
}
  
    
</script>

<template>
  <div>
    <NavBar/>
  </div>
  <main>
    <div id="image">
      <img src="../assets/mainp.png">
    </div>
    <h2>To add the subject, just click the button below</h2>
    <div class="button-container">
      <button class="navigate-button" @click="goToAnotherPage">CREATE COURSE</button>
    </div>
  </main>
</template>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 33%;
  z-index: 100;
}

h2 {
  text-align: center;
  color: #59C4AF;
  font-weight: bold;
  font-size: 25px;
  font-family: "SF Pro Text", monospace;
  padding-top: -50%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh; 
}

button[class="navigate-button"] {
  padding: 1em 3em;
  border: none;
  border-radius: 0.3em;
  background-color: #5580ED;
  font-size: 15px;
  font-family: "Roboto";
  color: white;
  cursor: pointer;
}
</style>
