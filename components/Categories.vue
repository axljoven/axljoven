<template>
    <ul class="categories">
        <li class="category badge" v-for="(item, id) in list" :key="id">
            <!-- <a :href="`/category/${item}`">{{ item }}</a> -->
            <nuxt-link :to="`/category/${item}`">{{ item }}</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Categories",
    props: ['list']
}
</script>

