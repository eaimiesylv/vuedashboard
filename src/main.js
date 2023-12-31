import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App);
//app.component('base-layout', BaseLayout);
app.use(router);
app.mount("#app");
