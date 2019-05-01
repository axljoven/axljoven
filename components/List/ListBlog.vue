<template>
    <article class="list blog-list">
        <a :href="`/blogs/${data.slug}`">
            <h1 class="blog-list-title">{{ data.title }}</h1>
            <p class="blog-list-meta">{{ data.posted_on }}</p>
        </a>
    </article>
</template>

<script>
export default {
    name: "ListBlog",
    props: ['data']
}
</script>
