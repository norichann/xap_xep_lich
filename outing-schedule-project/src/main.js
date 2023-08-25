import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

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
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);

app.component("ScrollPanel", ScrollPanel);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Toast", Toast);

app.mount("#app");
