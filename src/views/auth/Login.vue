<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { toast } from 'vue3-toastify';
import { storeToRefs } from 'pinia';

import { useUserStore } from '../../stores/useUserStore.js';
import { useRouter } from 'vue-router';

export default defineComponent({
     setup: () => {
          const form = reactive({
               email: '',
               password: '',
          });

          const userStore = useUserStore();
          const { user } = storeToRefs(userStore);

          const router = useRouter();
          const handleLogin = () => {
               fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                         'accept': 'application/json',
                    },
                    body: JSON.stringify({
                         username: "johnd",
                         password: form.password,
                    })
               })
                    .then(res => res.json())
                    .then(async () => {
                         userStore.store({ name: { firstname: 'João' } });
                         await router.push('/app');
                         toast.success('bem-vindo (a) de volta!');
                    })
                    .catch(() => {
                         toast.error('verifique suas credenciais.', { autoClose: 3000 });
                    });
          }

          return { form, user, handleLogin };
     }
});
</script>

<template>
     <main id="center-wrapper">
          <img src="../../assets/locaweb.svg" id="logo" />
          <div id="login-container">
               <h2>Entre na sua conta</h2>
               <small>
                    Para acessar sua conta informe seu e-mail e senha
               </small>
               <form @submit.prevent="handleLogin">
                    <label for="email">
                         E-mail
                         <input type="email" placeholder="Seu e-mail" id="email" v-model="form.email" required />
                    </label>

                    <label for="password">
                         Senha
                         <input type="password" placeholder="Sua senha" id="password" v-model="form.password" required />
                    </label>

                    <RouterLink to="/esqueci-minha-senha" id="forgot-password-link">Esqueci minha senha</RouterLink>

                    <button type="submit">FAZER LOGIN</button>
               </form>
          </div>
          <small id="not-signed-item">
               Ainda não tem conta?
               <RouterLink to="/cadastrar">Cadastre-se</RouterLink>
          </small>
     </main>
</template>

<style lang="scss">
@import '../../styles/views/Login.scss';
</style>