import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductCardView from '../views/ProductCardView.vue'
import CartView from '../views/CartView.vue'

const routes = [{
        path: '/',
        name: 'Главная',
        component: MainView
    },
    {
        path: '/products',
        name: 'Продукты',
        component: ProductsView
    },
    {
        path: '/products/:id',
        component: ProductCardView
    },
    {
        path: '/cart',
        component: CartView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router