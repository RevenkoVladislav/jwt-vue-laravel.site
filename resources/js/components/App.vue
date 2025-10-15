<script>
export default {
    name: "App"
}
</script>

<template>
<div>
    <nav>
        <router-link :to="{ name: 'fruit.index' }">Fruits</router-link>
    </nav>
    <router-view/>
</div>
</template>

<style scoped>

</style>
