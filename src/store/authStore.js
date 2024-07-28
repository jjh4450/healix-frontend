// src/stores/authStore.js
import create from 'zustand';
import Cookies from 'js-cookie';

/**
 * Zustand store to manage authentication state
 */
const useAuthStore = create((set) => ({
    isLoggedIn: !!Cookies.get('Authorization'),
    login: () => set({ isLoggedIn: true }),
    logout: () => {
        Cookies.remove('authToken');
        set({ isLoggedIn: false });
    },
}));

export default useAuthStore;
