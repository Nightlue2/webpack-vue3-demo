import App from "./App.vue";
import { createApp } from "vue";

const app = createApp(App);
console.log(app);
console.log(app.mount("#app"));
