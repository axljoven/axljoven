<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Ooops! We can't find what you're looking</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Page-404',
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page,
}
</script>