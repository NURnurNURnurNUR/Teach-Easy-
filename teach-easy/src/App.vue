<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>

<script setup>

import { RouterView } from "vue-router";
import router from "@/router";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount( async () => {
        if (store.state.account == false) {

        
        try {
           let url = 'http://localhost:8080/api/auth/check_user';

            let options = {method: 'GET', headers: { "Content-Type" : "application/json" }};

            const res = await fetch(url, options); 

            if(res.status === 200) {
                store.commit('change', true);
            }
        }
        catch (error) {
            console.log(error);
        };
        }
});

</script>