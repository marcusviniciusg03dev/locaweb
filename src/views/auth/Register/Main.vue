<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

import plans from '../../../data/plans.json';


import ChoosePlan from './ChoosePlan.vue';
import FinishRegistration from './FinishRegistration.vue';

const choosedPlan = ref<typeof plans[0] | undefined>();

export default defineComponent({
    name: "Register",
    components: { FinishRegistration, ChoosePlan },
    data: () => {
        const { query: {plano} } = useRoute();

        choosedPlan.value = plans.find(p => p.number == plano);

        return { plans, choosedPlan }
    },
    watch: {
        $route: ({ query }) => {
            choosedPlan.value = plans.find(p => p.number == query.plano);
        }
    },

})
</script>

<template>
    <main id="register-page">
        <img src="../../../assets/locaweb.svg" id="logo" />
        <h1 id="title">
            Você está muito próximo de mudar a forma de
            <br />
            <div class="primary-decorated-text">hospedar seu site</div>
        </h1>
        <FinishRegistration :plan="choosedPlan" v-if="choosedPlan" />
        <ChoosePlan :plans="plans" v-else />
    </main>
</template>

<style lang="scss">
@import '../../../styles/views/Register.scss';
</style>