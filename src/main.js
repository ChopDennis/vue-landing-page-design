import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueApexCharts from 'vue-apexcharts'
import {store} from "./store";
import './assets/css/style.scss'

Vue.use(VueApexCharts)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component('apexchart', VueApexCharts)


new Vue({
    store:store,
    router,
    render: h => h(App)
}).$mount('#app')
