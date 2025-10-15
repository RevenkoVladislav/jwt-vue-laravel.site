import { createWebHistory, createRouter } from 'vue-router';
import Index from './components/Index.vue';

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/fruits',
        component: () => import('./components/Fruit/IndexComponent.vue'),
        name: 'fruit.index'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
