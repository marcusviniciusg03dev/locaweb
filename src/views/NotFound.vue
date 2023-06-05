<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/useUserStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    name: 'NotFound',
    setup: () => {
        const { signedIn } = storeToRefs(useUserStore());
        return { signedIn };
    },
});
</script>

<template>
    <main id="not-found-page">
       <h1>Não encontrado :(</h1>
       <RouterLink to="/app" v-if="signedIn">IR PARA APP</RouterLink>
       <RouterLink to="/" v-else>IR PARA LOGIN</RouterLink>
    </main>
</template>

<style lang="scss">
#not-found-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
</style>