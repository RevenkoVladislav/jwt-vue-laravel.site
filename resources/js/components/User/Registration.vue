<script>
export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            errors: null
        }
    },

    methods: {
        storeUser() {
            axios.post('/api/user',
                {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
            ).then(response => {
                localStorage.setItem('access_token', response.data.access_token)
                window.dispatchEvent(new Event('storage'))
                this.$router.push({ name: 'user.personal' })
            })
                .catch(error => {
                    this.errors = error.response.data.errors;
                })
        }
    }
}
</script>

<template>
    <div class="w-25">
        <input v-model="name" type="text" class="form-control mb-3 mt-3" placeholder="name">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="confirm password">
        <div v-if="errors" class="text-danger">{{ this.errors }}</div>
        <input @click.prevent="storeUser" type="submit" class="btn btn-success" value="Register">
    </div>
</template>

<style scoped>

</style>
