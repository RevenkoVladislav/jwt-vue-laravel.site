import axios from 'axios';
import router from './router';

const api = axios.create();

//начало запроса, перед каждым запросом добавляем токен
api.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => Promise.reject(error))
//конец запроса

//начало ответа
api.interceptors.response.use(
    response => response,
    error => {
    if(error.response.data.message === 'Token has expired'){
        return axios.post('api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(response => {
            localStorage.setItem('access_token', response.data.access_token)
            error.config.headers.Authorization = `Bearer ${response.data.access_token}`
            return api.request(error.config)
        })
    }
    if (error.response.status === 401) {
        router.push({ name: 'user.login' })
    }
    return Promise.reject(error)
})

//конец ответа
export default api
