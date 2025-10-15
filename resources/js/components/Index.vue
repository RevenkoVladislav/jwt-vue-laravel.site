<script>
export default {
    name: "Index"
}
</script>

<template>
<div>
    <router-link :to="{ name: 'fruit.index' }">Fruits</router-link>
    <router-view/>
</div>
</template>

<style scoped>

</style>
