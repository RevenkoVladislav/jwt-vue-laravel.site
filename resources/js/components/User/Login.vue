<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
                .then( response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    this.$router.push({name: 'user.personal'})
                })
        },
    }
}
</script>

<template>
<div class="w-25">
    <input type="email" v-model="email" class="form-control mt-3 mb-3" placeholder="email">
    <input type="password" v-model="password" class="form-control mb-3" placeholder="password">
    <input type="submit" @click.prevent="login" class="btn btn-primary" value="Login">
</div>
</template>

<style scoped>

</style>
