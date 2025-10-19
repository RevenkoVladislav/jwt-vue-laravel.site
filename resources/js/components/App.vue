<script>
import api from '../api.js'

export default {
    name: "App",

    data() {
        return {
            accessToken: localStorage.getItem('access_token') || ''
        }
    },

    mounted() {
        window.addEventListener('storage', () => {
            this.refreshTokenStatus()
        })
    },

    methods: {
        refreshTokenStatus() {
            this.accessToken = localStorage.getItem('access_token') || ''
        },
        logout() {
            api.post('/api/auth/logout')
                .then(response => {
                    localStorage.removeItem('access_token')
                    this.accessToken = ''
                    this.$router.push({name: 'user.login'})
                })
                .catch(error => console.error(error))
        },
    },

    updated() {
        this.refreshTokenStatus()
    }
}
</script>

<template>
    <div>
        <nav>
                    <router-link class="btn btn-success"
                                 :to="{ name: 'fruit.index' }">Fruits
                    </router-link>

                    <router-link class="btn btn-primary"
                                 v-if="!accessToken"
                                 :to="{ name: 'user.login' }">Login
                    </router-link>

                    <router-link class="btn btn-primary"
                                 v-if="!accessToken"
                                 :to="{ name: 'user.registration' }">Registration
                    </router-link>

                    <router-link class="btn btn-success"
                                 v-if="accessToken"
                                 :to="{ name: 'user.personal' }">Personal
                    </router-link>

                    <a href="#"
                       v-if="accessToken"
                       @click.prevent="logout" class="btn btn-danger">Logout
                    </a>

        </nav>

        <router-view/>
    </div>
</template>

<style scoped>
nav {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
}
</style>
