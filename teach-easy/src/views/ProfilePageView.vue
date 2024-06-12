<template>
    <div>
      <NavBar/>
    </div>
    <div class="profile-page">
      <font-awesome-icon icon="fa-solid fa-user" class="profile-icon" />
      <h1 class="profile-name">John Doe</h1>
      <h2 class="profile-email">john@mail.com</h2>
      <p class="profile-status">TEACHER</p>
    
    <div class="button-container">
        <button class="navigate-button" @click="goToAnotherPage">LOG OUT</button>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default {
    components: {
      NavBar,
      FontAwesomeIcon
    },
  methods: {
    goToAnotherPage() {
      this.$router.push('/');
    }
  }
  
}
  </script>
  
  <style scoped>
  .profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #fff;
    color: #000;
  }
  
  .profile-icon {
    font-size: 10em;
    margin-bottom: 0.5em;
  }
  
  .profile-name {
    font-size: 2em;
    margin: 0.5em 0;
  }
  .profile-email {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
  }
  .profile-status {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
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
  