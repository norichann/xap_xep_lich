import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// PrimeVue Component
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

// PrimeVue Icon
import "primeicons/primeicons.css";

// PrimeVue CSS
import "/node_modules/primeflex/primeflex.css";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import ScrollPanel from "primevue/scrollpanel";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("ScrollPanel", ScrollPanel);

app.mount("#app");
