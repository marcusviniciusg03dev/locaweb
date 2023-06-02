<script lang="ts">
import { defineComponent } from 'vue';
import PlanContainer from '../components/PlanContainer.vue';

export default defineComponent({
    name: "Register",
    components: { PlanContainer }
})
</script>

<template>
    <main id="register-page">
        <img src="../assets/locaweb.svg" id="logo" />
        <h1 id="title">
            Você está muito próximo de mudar a forma de
            <br />
            <div class="primary-decorated-text">hospedar seu site</div>
        </h1>
        <div>Escolha seu plano</div>
        <ul id="plans-list">
            <PlanContainer name="Hospedagem 1" :monthlyPrice="0" for="Ideal para quem está começando."
                serversLocatedAt="Estados Unidos" dataCentersNationallityInPt="americanos" :locationFtpUsers="1"
                :locationProfessionalEmailQty="1" :locationFreeSubdomains="1" :freeMigrations="false" :mainApps="[
                    'Wordpress',
                    'Drupal'
                ]" />
            <PlanContainer name="Hospedagem 2" :mostUsed="true" :monthlyPrice="499" for="Ideal para site com mais mais de 30k de visitas."
                serversLocatedAt="Brasil" dataCentersNationallityInPt="São Paulo" :locationFtpUsers="10"
                :locationProfessionalEmailQty="30" :locationFreeSubdomains="10" :freeMigrations="true" :mainApps="[
                    'Wordpress',
                    'Drupal'
                ]" />
            <PlanContainer name="Hospedagem 3" :monthlyPrice="999" for="Ideal para site com mais mais de 60k de visitas."
                serversLocatedAt="Brasil" dataCentersNationallityInPt="São Paulo" locationFtpUsers="Ilimitadas"
                locationProfessionalEmailQty="Ilimitadas" :locationFreeSubdomains="1" :freeMigrations="true" :mainApps="[
                    'Wordpress',
                    'Drupal'
                ]" />
        </ul>
    </main>
</template>

<style lang="scss">
@import '../styles/views/Register.scss';
</style>