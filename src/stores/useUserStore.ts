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

        return { user, store };
    },
    getters: {
        signedIn: state => !!state.user,
    }
});

