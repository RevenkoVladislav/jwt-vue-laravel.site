<script>
import API from "../../api.js";

export default {
    name: "IndexComponent",

    data() {
        return {
            fruits: null,
        }
    },

    mounted() {
        this.getFruits()
    },

    methods: {
        getFruits() {
            API.get('api/auth/fruits')
                .then( response => {
                    this.fruits = response.data.data;
                })
        },
    }
}
</script>

<template>
<div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col" class="text-center">id</th>
            <th scope="col" class="text-center">Name</th>
            <th scope="col" class="text-center">Price</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="fruit in fruits">
                <th scope="row" class="text-center">{{ fruit.id }}</th>
                <td class="text-center">{{ fruit.name }}</td>
                <td class="text-center">{{ fruit.price }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<style scoped>

</style>
