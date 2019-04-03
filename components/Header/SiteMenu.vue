<template>
    <ul class="site-menu">
        <li v-for="(link, id) in links" :key="id" class="site-menu-item">
            <nuxt-link :to="link.to">{{ link.title }}</nuxt-link>
            <!-- <a :href="link.to">{{ link.title }}</a> -->
        </li>
    </ul>
</template>

<script>
export default {
    name: "SiteMenu",
    data() {
        return {
            links: [
                { to: "/", title: "Home" },
                { to: "/projects", title: "Projects" },
                { to: "/blogs", title: "My Blogs" },
                { to: "/about", title: "About" }
            ]
        }
    }
}
</script>
