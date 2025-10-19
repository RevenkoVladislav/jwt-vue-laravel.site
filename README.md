# Учебный проект JWT + Vue.js + Laravel

Небольшое приложение **SPA** с регистрацией и получением JWT токена.

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Использованные технологии:
| Технология         | Назначениe                      |
|--------------------|---------------------------------|
| **Laravel v.12**   | Backend + api                   |
| **Vue.js v 3**   | Frontend (SPA)                  |
| **vite.config.js** | Сборка frontend                 |
| **Vue-router v.4** | Маршрутизация                   |
| **Axios**          | Http запросы к API (`/api.php`) |
| **tymon/jwt**      | Библиотека JWT      |
| **bootstrap**      | Базовая стилизация              |
| **postman** | для имитации запросов|


## Реализовано:
- Регистрация с получением токена и автоматическая авторизация
- jwt токен хранится в **localStorage**
- JWT-токен живет 1 минуту, после чего автоматически обновляется через **axios interceptors**
- Расширение axios с использованием **interceptors**
- **beforeEach** для перенаправления в router
- **logout** с удалением jwt

## Цель проекта:
Изучение jwt авторизации в Laravel с использованием Vue.js в рамках SPA приложения.

## Маршруты
| Путь | Назначение |
|------|-------------|
| `/users/login` | Авторизация |
| `/users/registration` | Регистрация |
| `/users/personal` | Личный кабинет |
| `/fruits` | Главная страница |


## Скриншоты:
<img width="1655" height="812" alt="главная" src="https://github.com/user-attachments/assets/f774d9fc-d4b2-4741-a03a-257e972a9371" />
<img width="1647" height="827" alt="получение токена" src="https://github.com/user-attachments/assets/261f643d-ddcb-4a5c-a566-e4b67aed11d7" />
<img width="1074" height="778" alt="токен через постман" src="https://github.com/user-attachments/assets/c53ebefb-fc46-4541-807e-502afb9addf4" />
<img width="1039" height="799" alt="постман обращение к me" src="https://github.com/user-attachments/assets/fb14d023-1786-4635-bddf-585375ab3de9" />
<img width="973" height="803" alt="получение страницы для не авторизованного пользователя" src="https://github.com/user-attachments/assets/c4fca147-878b-4490-9c54-f7022f041c64" />
<img width="1012" height="822" alt="получение страницы для авторизованного пользователя" src="https://github.com/user-attachments/assets/dac53c2f-6d85-42ac-8913-3c95fd1baf95" />



## Установка:
```bash
# клонировать репозиторий
git clone https://github.com/RevenkoVladislav/vuejs-laravel.site.git
#Установка зависимостей
composer install
#Установка npm завиcимостей
npm install
#сборка фронтенда
npm run dev
#запуск встроенного сервера
php artisan serve
```
