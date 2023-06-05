<script lang="ts">
import { defineComponent } from 'vue';
import PlanContainer from '../../../components/PlanContainer.vue';

export default defineComponent({
    props: ["plans"],
    components: { PlanContainer }
});
</script>

<template>
    <div>Escolha seu plano</div>
    <ul id="plans-list">
        <PlanContainer v-for="plan in plans"
            :mostUsed="plan.number === '2'" :number="plan.number"
            :monthlyPrice="plan.monthlyPrice"
            :for="plan.for"
            :serversLocatedAt="plan.serversLocatedAt"
            :dataCentersNationallityInPt="plan.dataCentersNationallityInPt"
            :locationFtpUsers="plan.locationFtpUsers"
            :locationProfessionalEmailQty="plan.locationProfessionalEmailQty"
            :locationFreeSubdomains="plan.locationFreeSubdomains" :freeMigrations="plan.freeMigrations"
            :mainApps="plan.mainApps"
        />
    </ul>
</template>  