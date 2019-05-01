<template>
    <div>
        <h1 class="mb-10">Category: <span>{{ category }}</span></h1>
        <div class="flex flex-wrap -mx-3">
            <div v-for="(blog, id) in latest" :key="id" class="w-1/3 px-3 mb-4">
                <Blog :data="blog" />
            </div>
        </div>
    </div>
</template>

<script>
import Blog from '~/components/Card/CardBlog'
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
