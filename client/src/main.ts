import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "bulma/css/bulma.min.css";

createApp(App).use(router).mount("#app");
