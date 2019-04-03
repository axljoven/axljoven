<template>
  <div class="layout-default flex flex-row justify-start items-stretch">

    <!-- Left Section -->
    <div class="layout-default-left self-stretch">
      <!-- Site header -->
      <SiteHeader />
    </div>

    <!-- Right Section -->
    <div class="layout-default-right self-stretch w-100">
      <nuxt />
    </div>

  </div>
</template>

<script>
import SiteHeader from '~/components/Header/SiteHeader'
export default {
  components: {
    SiteHeader
  }
}
</script>
