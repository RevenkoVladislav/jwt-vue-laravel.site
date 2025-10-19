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
            },
            {
                path: 'users/personal',
                component: () => import('./components/User/Personal.vue'),
                name: 'user.personal',
            },
            {
                path: '/:pathMatch(.*)*',
                component: () => import('./components/NotFound.vue'),
                name: 'notFound'
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    //проверяем все страницы, кроме страницы с авторизацией и перенаправляем если мы не авторизованы.
    if (!accessToken) {
        if(to.name !== 'user.login' || to.name !== 'user.registration') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }
    next();
})

export default router;
