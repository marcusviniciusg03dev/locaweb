import { defineStore } from 'pinia';
import { ref } from 'vue';

interface UserInfo {
    name: {
        firstname: string
    }
}

export const useUserStore = defineStore('user', {
    state: () => {
        const user = ref<UserInfo | null>(null);

        const store = (data: UserInfo) => {
            user.value = data;
        }

        const resetUser = () => {
            user.value = null;
        }

        return { user, store, resetUser };
    },
    getters: {
        signedIn: state => !!state.user,
    }
});

