import Vue from "nativescript-vue";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";

Vue.config.silent = false;

new Vue({
  render: h => h("frame", [h(HomePage)])
}).$start();
