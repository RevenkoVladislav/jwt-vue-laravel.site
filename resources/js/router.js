import {createWebHistory, createRouter} from 'vue-router';
import App from './components/App.vue';
import IndexComponent from './components/Fruit/IndexComponent.vue';

const routes = [
    {
        path: '/',
        children: [
            {
                path: '/fruits',
                component: IndexComponent,
                name: 'fruit.index'
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
