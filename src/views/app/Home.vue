<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../../stores/useUserStore';

export default defineComponent({
    name: 'Home',
    setup: () => {
        const { user } = useUserStore();

        return { user }
    }
});
</script>

<template>
    <div id="home-page">
        <h2>Olá, {{ user?.name.firstname }}</h2>

        <p>Seja bem vindo a sua conta de hospedagem.</p>

        <iframe
            src="https://www.youtube.com/embed/fpa2W3YNg0Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            id="youtube-video"
        />

        <p>Caso tenha alguma dúvida, <u>visite nossa central de ajuda.</u></p> 
    </div>
</template>

<style lang="scss">
@import '../../styles/views/app/Home.scss'
</style>