import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { createStore } from "vuex";

library.add(faUser);

const store = createStore({
    state: {
        account: false
    },
    mutations: {
        change(state, value) {
            state.account = value;
        }
    }
});


const app = createApp(App);


app.use(router);
app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
