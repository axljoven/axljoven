<template>
    <div class="blog-post">
        <!-- Banner -->
        <div class="banner mb-12">
            <img class="w-100" src="~/static/images/blogs/default-banner.jpg" alt="">
        </div>


        <div class="flex flex-inline -mx-12">
            <!-- Main -->
            <div class="main w-2/3 mx-12">
                <h1 class="mb-10">{{ blog.title }}</h1>
                <div class="content">
                    <div v-html="blog.content"></div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar w-1/3 mx-12">
                <!-- Date -->
                <p class="mb-10"><span class="font-bold">Posted on</span> <br/>{{ blog.posted_on }}</p>

                <!-- Categories -->
                <div v-if="blog.categories.length > 0" class="mb-10">
                    <p class="font-bold mb-2">Categories</p>
                    <Categories :list="blog.categories" />
                </div>

                <!-- Recent Blogs -->
                <div class="mb-10" v-if="latest.length > 0">
                    <p class="font-bold mb-2">Recent Blog Posts</p>
                    <ListBlog v-for="(blog, id) in latest" :key="id" :data="blog" />
                </div>

            </div> <!-- sidebar -->
        </div> <!-- flex -->

    </div>
</template>

<script>
import Categories from '~/components/Categories'
import ListBlog from '~/components/List/ListBlog'
import blogs from '~/data/models/blogs.js'
import helpers from '~/mixins/mixins.js'

export default {
    name: "Blog",
    components: { Categories, ListBlog },
    
    //
    // Validate if slug is valid
    //

    validate ({ params }) {
        return params.slug != "" || params.slug != undefined || params.slug != null
    },


    //
    // Get data
    //

    asyncData ({ params }, callback) {
        // Get blog post with the matched slug
        let blog = blogs.get(params.slug)

        if (blog) {
            callback(null, { blog, recent: blogs.getRecent() })
        } else {
            callback({ statusCode: 404, message: 'Post not found' })
        }
    },


    //
    // Update meta
    //

    head () {
        return {
            title: this.blog.title,
            meta: [{
                hid: 'description',
                name: 'description',
                content: this.blog.excerpt
            }]
        }
    },


    //
    // Computed
    //

    computed: {
        latest: function() {
            return helpers.sortToLatest(this.recent, 'id')
        }
    }
}
</script>
