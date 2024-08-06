import create from 'zustand';

const useNearInfoStore = create((set) => ({
    posX : null,
    posY : null,
    nearInfoResult : [],

    setPosX: (posX) => set({posX}),

    setPosY: (posY) => set({posY}),

    setNearInfoResult: (nearInfoResult) => set({nearInfoResult}),

}));

export default useNearInfoStore;