import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [{
        path: '/',
        name: 'Главная',
        component: MainView
    },
    {
        path: '/products',
        name: 'Продукты',
        component: ProductsView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router