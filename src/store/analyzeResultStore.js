// src/store/analyzeResultStore.js
import create from 'zustand';

/**
 * Zustand store to manage analysis result state
 */
const useAnalyzeResultStore = create((set) => ({
    id: -1,
    diseaseName: '알수없음',
    diseaseSolution: '알수없음은 입력된 증상만으로는 특정한 질병을 판단하기 어려운 경우를 의미해요. 증상이 아직 명확하지 않거나 흔하지 않은 경우일 수 있어요. 너무 걱정하지 마시고, 더 정확한 진단을 위해 병원에 방문해보시는 게 좋아요. 전문의와 상담을 통해 필요한 검사를 받아보세요. 조기에 진단을 받으면 치료가 더 쉬워질 수 있어요!',

    updateAnalyzeResult: (id, diseaseName, diseaseSolution) => set({
        id,
        diseaseName,
        diseaseSolution,
    }),
}));

export default useAnalyzeResultStore;