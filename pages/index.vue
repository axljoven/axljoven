<template>
    <div class="page-home pt-10">

        <h1 class="hidden">Home</h1>




        <!-- Projects -->
        <div class="section mb-32">
            <div class="with-sidebar flex">

                <!-- Sidebar -->
                <div class="sidebar w-1/3 pr-12">
                    <h2 class="mb-10">Projects</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore
                        maiores ratione dicta deleniti.
                    </p>

                    <!-- Button -->
                    <a class="mt-12 button button-bordered" href="/blogs">View All My Projects</a>
                </div>
                <!-- sidebar -->

                <!-- Main -->
                <div class="main w-2/3"></div>

            </div>
            <!-- with-sidebar -->
        </div>
        <!-- section -->




        <!-- Recent Blog -->
        <div class="section">
            <div class="with-sidebar flex">

                <!-- Sidebar -->
                <div class="sidebar w-1/3 pr-12">
                    <h2 class="mb-10">My Blogs</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore
                        maiores ratione dicta deleniti quis nam nulla repellendus.
                    </p>

                    <!-- Button -->
                    <a class="mt-12 button button-bordered" href="/blogs">View All Blog Posts</a>
                </div>
                <!-- sidebar -->

                <!-- Main -->
                <div class="main w-2/3">
					<div class="flex flex-wrap -mx-3">
						<div v-for="(blog, id) in latest" :key="id" class="w-1/2 px-3 mb-4">
							<CardBlog :data="blog" />
						</div>
					</div>
				</div>

            </div>
            <!-- with-sidebar -->
        </div>
        <!-- section -->

    </div>
</template>

<script>
import CardBlog from '~/components/Card/CardBlog'
import blogs from '~/data/models/blogs.js'
import helpers from '~/mixins/mixins.js'
import '~/node_modules/masonry-layout/dist/masonry.pkgd.min.js'

export default {
    name: "Home",
   	components: { CardBlog },
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