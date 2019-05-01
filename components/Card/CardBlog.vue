<template>
    <article class="card blog-card">

        <!-- Thumbnail -->
        <div class="card-thumbnail">
            <a :href="`/blogs/${data.slug}`"><img src="~/static/images/blogs/default-thumbnail.jpg" alt=""></a>
        </div>

        <!-- Body -->
        <div class="card-body">
            <!-- Title -->
            <h2 class="card-title"><a :href="`/blogs/${data.slug}`">{{ data.title }}</a></h2>

            <!-- Meta -->
            <p class="card-meta">{{ data.posted_on }}</p>
            <p class="card-excerpt">{{ data.excerpt }}... <a class="card-read-more" :href="`/blogs/${data.slug}`">Read More</a></p>

            <!-- Categories -->
            <template v-if="data.categories.length > 0">
                <Categories :list="data.categories" />
            </template>
        </div>
    </article>
</template>

<script>
import Categories from '~/components/Categories'

export default {
    name: "CardBlog",
    components: {
        Categories
    },
    props: ['data']
}
</script>
