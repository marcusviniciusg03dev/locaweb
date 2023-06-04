<script lang="ts">
export default {
    name: 'PlanContainer',
    props: {
        number: String,
        monthlyPrice: Number,
        for: String,
        serversLocatedAt: String,
        dataCentersNationallityInPt: String,
        locationFtpUsers: [Number, String],
        locationProfessionalEmailQty: [Number, String],
        locationFreeSubdomains: Number,
        mainApps: Array<String>,
        freeMigrations: Boolean,
        mostUsed: Boolean,
        choosedPlan: Boolean,
    }
}
</script>

<template>
    <span class="plan-container">
        <div v-if="choosedPlan" class="plan-flag" id="choosed-plan-flag">
            PLANO ESCOLHIDO
        </div>
        <div v-else-if="mostUsed" class="plan-flag" id="most-used-plan-flag">
            MAIS USADO
        </div>

        <h3>{{ `Hospedagem ${number}` }}</h3>
        
        <strong v-if="monthlyPrice === 0" class="plan-price">Grátis</strong>

        <strong v-else class="plan-price"><small>R$</small>{{monthlyPrice}}<small>/mês</small></strong>

        <p v-if="monthlyPrice === 0">você não paga nada para usar</p>

        <p v-else>cobrado mensalmente</p>

        <p>sem taxa de setup</p>

        <hr />

        <div class="plan-for">{{for}}</div>

        <hr />

        <button
            v-if="!choosedPlan"
            @click.prevent="() => $router.push(`/cadastrar?plano=${number}`)"
        >ESCOLHA ESSE PLANO</button>

        <span class="plan-details">
            <h4>Seu site em servidores <u>no {{serversLocatedAt}}</u>.</h4>

            <ul>
                <li>Servidores em nossos data centers {{dataCentersNationallityInPt}};</li>
                <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
                <li>
                    <u v-if="locationFtpUsers === 'Ilimitadas'">Ilimitadas</u>
                    <template v-else>{{locationFtpUsers}}</template> 
                    usuário de FTP para upload ou download;</li>
                <li>
                    <u v-if="locationProfessionalEmailQty === 'Ilimitadas'">Ilimitadas</u>
                    <template v-else>{{locationProfessionalEmailQty}}</template> 
                    contas de e-mails profissionais;</li>
                <li>
                    <template v-if="locationFreeSubdomains === 1">
                        <u>1 subdomínio</u> gratuito;
                    </template>
                    <template v-else>
                       <u>{{locationFreeSubdomains}} subdomínios</u> gratuitos; 
                    </template>
                </li>
            </ul>

            <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>

            <h4>Aplicativos disponíveis;</h4>
            <ul>
                <li v-for="app in mainApps">{{ app }}</li>
                <li>entre outros...</li>
            </ul>

            <template v-if="freeMigrations">
                <h4>Migração Gratuita;</h4>
                <ul>
                    <li>Migramos todos seus sites para nossos servidores;</li>
                </ul>
            </template>

            <h4>Você ainda tem</h4>
            <ul>
                <li>Webmail RoundCube;</li>
                <li>AntiSpam;</li>
                
                <span v-if="choosedPlan" id="change-plan-span">
                    <RouterLink to="/cadastrar" id="change-plan-button">Trocar plano</RouterLink>
                </span>
                <template v-else>
                    <li>Painel de gerenciamento de DNS;</li>
                    <li>Painel de controle web;</li>
                    <li>Configurações de PHP personalizáveis;</li>
                    <li>Certificado SSL Grátis;</li>
                    <li>Transferência ilimitada.</li>
                </template>  
            </ul>
        </span>
    </span>
</template>

<style lang="scss">
@import '../styles/components/PlanContainer.scss'
</style>