import axios from 'axios';
import router from './router';

const api = axios.create();

//отдельный экземпляр без interceptors - только для refresh
const plainAxios = axios.create()

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
    async error => {
        const originalRequest = error.config

        //если это не 401 или нет сообщения - уходим
        if (!error.response || error.response.status !== 401) {
            return Promise.reject(error)
        }

        //если токен просто истек
        if (error.response.data.message === 'Token has expired') {
            try {
                //refresh токен
                const response = await plainAxios.post('/api/auth/refresh', {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                })

                const newToken = response.data.access_token
                localStorage.setItem('access_token', newToken)

                //Обновляем заголовок и повторяем оригинальный запрос
                originalRequest.headers.Authorization = `Bearer ${newToken}`
                return api.request(originalRequest)
            } catch (refreshError) {
                console.error('Refresh failed', refreshError)
                router.push({name: 'user.login'})
                return Promise.reject(refreshError)
            }
        }

        //если токена вообще нет или другая ошибка
        router.push({name: 'user.login'})
        return Promise.reject(error)
    })

    // прошлая версия interceptors.response
    // if(error.response.data.message === 'Token has expired'){
    //     return axios.post('api/auth/refresh', {}, {
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('access_token')}`
    //         }
    //     }).then(response => {
    //         localStorage.setItem('access_token', response.data.access_token)
    //         error.config.headers.Authorization = `Bearer ${response.data.access_token}`
    //         return api.request(error.config)
    //     })
    // }
    // if (error.response.status === 401) {
    //     router.push({ name: 'user.login' })
    // }
    // return Promise.reject(error)
    //})

//конец ответа
export default api
