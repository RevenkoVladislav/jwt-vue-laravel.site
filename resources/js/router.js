import {createWebHistory, createRouter} from 'vue-router';
import App from './components/App.vue';
import IndexComponent from './components/Fruit/IndexComponent.vue';

const routes = [
    {
        path: '/',
        children: [
            {
                path: 'fruits',
                component: IndexComponent,
                name: 'fruit.index'
            },
            {
                path: 'users/login',
                component: () => import('./components/User/Login.vue'),
                name: 'user.login',
            },
            {
                path: 'users/registration',
                component: () => import('./components/User/Registration.vue'),
                name: 'user.registration',
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
