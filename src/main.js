import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueApexCharts from 'vue-apexcharts'
import {store} from "./store";
import './assets/css/style.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueApexCharts)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component('apex-chart', VueApexCharts)


new Vue({
    created() {
        AOS.init({duration: 1000,})
    },
    store: store,
    router,
    render: h => h(App)
}).$mount('#app')
