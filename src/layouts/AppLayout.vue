<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from '../stores/useUserStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'AppLayout',
    setup: () => {
        const { user, resetUser } = useUserStore();

        const router = useRouter();

        const isOptionsOpen = ref(false);

        const handleClickProfileCircle = () => {
            isOptionsOpen.value = !isOptionsOpen.value;
        }

        const handleLogout = async () => {
            resetUser();
            await router.push('/');
        }

        return { handleClickProfileCircle, isOptionsOpen, user, handleLogout };
    }
})
</script>

<template>
    <main id="layout-wrapper">
        <header id="app-layout-header">
            <img src="../assets/locaweb.svg" id="logo" />

            <span id="user-profile-box">
                <button @click.prevent="handleClickProfileCircle" id="user-profile-circle">
                    {{ user?.name.firstname.charAt(0).toUpperCase() }}
                </button>
                <span id="profile-options" v-if="isOptionsOpen">
                    <RouterLink @click.prevent="handleLogout" to="/" id="logout-button">Sair</RouterLink>
                </span>
            </span>
        </header>
        <div id="app-layout-content">
            <RouterView />
        </div>
    </main>
</template>

<style lang="scss">
@import '../styles/layouts/AppLayout.scss';
</style>