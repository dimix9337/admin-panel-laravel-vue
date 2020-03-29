import Vue from 'vue';
import Vuex from 'vuex';
import company from './modules/company.js';
import employee from "./modules/employee";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        company,
        employee
    }
});
