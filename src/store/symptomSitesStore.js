// src/stores/authStore.js
import create from 'zustand';

/**
 * Zustand store to manage authentication state
 */
const useSympthomSitesStore = create((set) => ({
    symptomSites: [],
    age: -1,
    gender: '',
    prompt: '',

    addSymptomSite: (site) => set((state) => ({
        symptomSites: state.symptomSites.includes(site)
            ? state.symptomSites
            : [...state.symptomSites, site]
    })),

    removeSymptomSite: (site) => set((state) => ({
        symptomSites: state.symptomSites.filter((s) => s !== site)
    })),

    setAge: (age) => set({age}),

    setGender: (gender) => set({gender}),

    setPrompt: (prompt) => set({prompt}),

    clearSymptomSites: () => set({symptomSites: []}),

    resetStore: () => set({
        symptomSites: [],
        age: 0,
        gender: ''
    })
}));

export default useSympthomSitesStore;