<script>
export default {
    name: "App"
}
</script>

<template>
<div>
    <nav>
        <ul>
            <li><router-link class="btn btn-primary" :to="{ name: 'fruit.index' }">Fruits</router-link></li>
            <li><router-link class="btn btn-primary" :to="{ name: 'user.login' }">Login</router-link></li>
            <li><router-link class="btn btn-primary" :to="{ name: 'user.registration' }">Registration</router-link></li>
        </ul>
    </nav>

    <router-view/>
</div>
</template>

<style scoped>
nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
}
</style>
