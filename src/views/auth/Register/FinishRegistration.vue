<script lang="ts">
import { defineComponent, reactive } from 'vue';
import PlanContainer from '../../../components/PlanContainer.vue';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const form = reactive({
    completeName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    website: {
        name: "",
    },
    acceptedTerms: false,
});

export default defineComponent({
    props: ["plan"],
    data: () => {
        return { form };
    },
    components: { PlanContainer },
    setup: () => {
        const router = useRouter();

        const handleRegister = () => {
            if (!form.acceptedTerms) {
                toast.info('os termos e políticas precisam ser aceitos.');
                return;
            }
            
            if (form.password !== form.passwordConfirmation) {
                toast.error('as senhas não coincidem.');
                return;
            }

            fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email: form.email,
                        username:'johnd',
                        password: form.password,
                        name:{
                            firstname:form.completeName.split(' ')[0],
                            lastname:form.completeName.split(' ')[1]
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone: form.phone,
                    }
                )
            })
                .then(res => res.json())
                .then(async _json => {
                    await router.push('/');
                    toast.success('conta criada!');
                })
                .catch(() => toast.error('algum erro occoreu, tente mais tarde.'))
        };

        return { handleRegister };
    }
})
</script>

<template>
    <div id="register-grid">
        <div id="register-container">
            <form @submit.prevent="handleRegister">
                <h2>Dados pessoais</h2>
                <small>
                    Informe seus dados pessoais para acesso à sua conta
                </small>

                <label for="complete-name">
                    Nome completo
                    <input placeholder="Informe seu nome completo" id="complete-name" v-model="form.completeName"
                        required />
                </label>

                <label for="phone">
                    Telefone
                    <input type="tel" placeholder="(99) 99999-0000" id="phone" v-model="form.phone" required v-maska data-maska="(##) #####-####" />
                </label>

                <label for="email">
                    E-mail
                    <input type="email" placeholder="Informe seu e-mail" id="email" v-model="form.email" required />
                </label>

                <label for="password">
                    Senha
                    <input type="password" id="password" v-model="form.password" required />
                </label>

                <label for="password-confirmation">
                    Confirmar senha
                    <input type="password" id="password-confirmation" v-model="form.passwordConfirmation" required />
                </label>

                <hr />

                <h2>Dados do seu site</h2>

                <label for="website-name">
                    Nome do seu site
                    <input type="text" id="website-name" placeholder="Meu site" v-model="form.website.name" required />
                    <small>Exatamente igual o título do seu site</small>
                </label>

                <hr />

                <label id="terms-of-use-and-privacy-policy-label" for="terms-of-use-and-privacy-policy">
                    <input type="checkbox" id="terms-of-use-and-privacy-policy" v-model="form.acceptedTerms" />
                    <span />
                    <small>Ao concluir com seu cadastro você concorda com nossos <u>termos de uso</u> e <u>politicas de privacidade</u>.</small>
                </label>

                <button type="submit">CRIAR CONTA</button>
            </form>
        </div>
        <PlanContainer :number="plan.number" :choosedPlan="true" :monthlyPrice="plan.monthlyPrice" :for="plan.for"
            :serversLocatedAt="plan.serversLocatedAt" :dataCentersNationallityInPt="plan.dataCentersNationallityInPt"
            :locationFtpUsers="plan.locationFtpUsers" :locationProfessionalEmailQty="plan.locationProfessionalEmailQty"
            :locationFreeSubdomains="plan.locationFreeSubdomains" :freeMigrations="plan.freeMigrations"
            :mainApps="plan.mainApps" />
    </div>
</template>