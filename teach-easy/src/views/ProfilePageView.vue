<template>
    <div>
      <NavBar/>
    </div>
    <div class="profile-page">
      <font-awesome-icon icon="fa-solid fa-user" class="profile-icon" />
      <h1 class="profile-email"> {{ user[0].email }}</h1>
      <p class="profile-status">TEACHER</p>
    
    <div class="button-container">
        <button class="navigate-button" @click="logout">LOG OUT</button>
      </div>
    </div>
  </template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';

import { onBeforeMount, ref, watch } from 'vue';
import { useStore } from 'vuex';

const loading = ref(true);
const user = ref(null);

const store = useStore();

const prods = ref([]);

const logout = () => {
    let url = 'http://localhost:8080/api/logout';

    let options = {method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('this:' + err));
    
    store.commit('change', false);
    router.push("/");
};

const fetchUser = async () => {
        loading.value = true;

        try {
           let url = 'http://localhost:8080/api/auth/check_user';

            let options = {method: 'GET', headers: { "Content-Type" : "application/json" }};

            fetch(url, options)
            .then(res => {
                if(res.status === 200) {
                    router.push("/profile");
                }
                else {
                window.prompt("Please, log in first");
                router.push("/login");
                }
                return res.json();
            })
            .then(usr => {
                user.value = usr;
                loading.value = false;
                console.log(usr);
                console.log(user.value);
                return usr;
            });
        }
        catch (error) {
            console.log(error);
        }
};

onBeforeMount(() => {
    fetchUser();
});

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
    font-size: 1.5em;
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
  