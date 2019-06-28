import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import ShoppingList from './ShoppingList/ShoppingList';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const app = {
    render: h => h(ShoppingList),
};

new Vue(app).$mount('#main');