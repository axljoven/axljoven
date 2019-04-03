<template>
    <div>
        <h1 class="mb-10">Blogs</h1>

        <div class="flex flex-wrap -mx-3">
            <div v-for="(blog, id) in latest" :key="id" class="w-1/3 px-3 mb-4">
                <Blog :data="blog" />
            </div>
        </div>
    </div>
</template>

<script>
import Blog from '~/components/Card/Blog'
import blogs from '~/data/models/blogs.js'
import helpers from '~/mixins/mixins.js'

export default {
    name: "Blogs",
    components: { Blog },
    data() { 
        return { blogs: blogs.getAll() } 
    },
    computed: {
        latest: function() {
            return helpers.sortToLatest(this.blogs, 'id')
        }
    }
}
</script>
