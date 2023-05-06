import { createApp } from 'vue';
import { createStore } from 'vuex'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

import App from './App.vue'
import TheHeader from './components/layout/header/TheHeader.vue'

const store = createStore({
    state(){
        return {
            allLists: [],
            isDark: null,
            confirmDelete: false,
        };
    },
});

const app = createApp(App);

app.component('the-header', TheHeader);

app.use(store);
app.use(autoAnimatePlugin)

app.mount('#app');