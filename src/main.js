import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

store.subscribe(() => {
  // localStorage.setItem("state", JSON.stringify(state));
  store.commit("INIT_STORE");
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
