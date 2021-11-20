import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Company from '@/components/Company'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home,
        mode: 'abstract'
    },
    {
        path: '/company',
        name: 'Company',
        component: Company,
        mode: 'abstract'
    }
]
})
