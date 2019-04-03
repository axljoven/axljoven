<template>
    <div class="site-header">

        <!-- Logo -->
        <Logo />

        <!-- Menu -->
        <SiteMenu />

        <!-- Social Icons -->
        <SocialIcons />

    </div>
</template>

<script>
import Logo from '~/components/Logo'
import SiteMenu from '~/components/Header/SiteMenu'
import SocialIcons from '~/components/Header/SocialIcons'

export default {
    name: "SiteHeader",
    components: {
        Logo,
        SiteMenu,
        SocialIcons
    }
}
</script>
