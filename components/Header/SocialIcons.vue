<template>
    <ul class="social-icons">
        <li v-for="(social, id) in socials" :key="id" class="social-icons-item">
            <a :href="social.to" :title="social.title" :target="social.target">
                <span :class="social.icon"></span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "SocialIcons",
    data() {
        return {
            socials: [
                { 
                    to: "https://ph.linkedin.com/in/axl-joven-363572177", 
                    title: "LinkedIn", 
                    icon: "icon ion-logo-linkedin" ,
                    target: "_blank"
                },
                { 
                    to: "https://web.facebook.com/axl.joven", 
                    title: "Facebook", 
                    icon: "icon ion-logo-facebook" ,
                    target: "_blank"
                },
                { 
                    to: "mailto:https://web.facebook.com/axl.joven", 
                    title: "Gmail", 
                    icon: "icon ion-logo-google" ,
                    target: "_blank"
                },
            ]
        }
    }
}
</script>
