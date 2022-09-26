import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import Todo from '../pages/Todo.vue';
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        component: Product,
    },
    {
        path: '/todo',
        component: Todo,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router