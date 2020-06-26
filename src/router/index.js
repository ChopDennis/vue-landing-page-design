import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHeader from "../components/TheHeader";
import PageHome from '../view/PageHome.vue'
import PageService from "../view/PageService";
import PageExamples from "../view/PageExamples";
import PageContactUs from "../view/PageContactUs";
import PageEms from "../view/PageEms";
Vue.use(VueRouter)

const routes = [
  {
        path: '/',
        name: 'PageHome',
        components: {
            default: PageHome,
            nav: TheHeader
        }
    },
    {
        path: '/service',
        name: 'PageService',
        components: {
            default: PageService,
            nav: TheHeader
        }
    },
    {
        path: '/examples',
        name: 'PageExamples',
        components: {
            default: PageExamples,
            nav: TheHeader
        }
    },{
        path: '/contact-us',
        name: 'PageContactUS',
        components: {
            default: PageContactUs,
            nav: TheHeader
        }
    }, {
        path: '/ems',
        name: 'PageEms',
        components: {
            default: PageEms,
            nav: TheHeader
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
