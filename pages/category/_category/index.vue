<template>
    <div>
        <h1 class="mb-10">Category: <span>{{ category }}</span></h1>
        <Blog v-for="(blog, id) in latest" :key="id" :data="blog" />
    </div>
</template>

<script>
import Blog from '~/components/Card/Blog'
import blogs from '~/data/models/blogs.js'
import helpers from '~/mixins/mixins.js'

export default {
    name: "Categories",
    components: { Blog },
    data: function() {
        return { blogs }
    },
    

    //
    // Validate if category is valid
    //

    validate ({ params }) {
        return params.category != "" || params.category != undefined || params.category != null
    },


    //
    // Get data
    //

    asyncData ({ params }, callback) {
        let matched = blogs.getAllWithCategory(params.category)

        if (matched.length > 0) {
            callback(null, { blogs: matched, category: params.category })
        } else {
            callback({ statusCode: 404, message: `No items found under \'${params.category}\'` })
        }
    },


    //
    // Update meta
    //

    head () {
        return {
            title: `Category: ${this.category}`,
            meta: [{
                hid: 'description',
                name: 'description',
                content: `Blogs under ${this.category}`
            }]
        }
    },

    computed: {
        latest: function() {
            return helpers.sortToLatest(this.blogs, 'id')
        }
    }

}
</script>
