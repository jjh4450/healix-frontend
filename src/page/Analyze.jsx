import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import convertToEnglish from '../util/symptomSitesConverter.js';
import useSymptomSitesStore from "../store/symptomSitesStore.js";
import axios from "axios";
import DownArrow from "../assets/navigate_next.svg?react";
import NavyButton from "../components/NavyButton.jsx";
import useAnalyzeResultStore from "../store/analyzeResultStore.js";

/**
 * Analyze component for sending symptom data to backend and displaying analysis results.
 * It checks if there are symptom sites selected; if not, redirects to the home page.
 */
function Analyze() {
    const baseurl = import.meta.env.VITE_APP_API_URL;

    const defaultResult = {
        diseaseName: '알수없음',
        diseaseSolution: '알수없음은 입력된 증상만으로는 특정한 질병을 판단하기 어려운 경우를 의미해요. 증상이 아직 명확하지 않거나 흔하지 않은 경우일 수 있어요. 너무 걱정하지 마시고, 더 정확한 진단을 위해 병원에 방문해보시는 게 좋아요. 전문의와 상담을 통해 필요한 검사를 받아보세요. 조기에 진단을 받으면 치료가 더 쉬워질 수 있어요!',
    };

    // State to manage loading status
    const [loading, setLoading] = useState(true);

    // State and actions from stores
    const { updateAnalyzeResult, diseaseName, diseaseSolution } = useAnalyzeResultStore((state) => ({
        updateAnalyzeResult: state.updateAnalyzeResult,
        diseaseName: state.diseaseName,
        diseaseSolution: state.diseaseSolution,
    }));
    const { symptomSites, age, gender, prompt, realAge } = useSymptomSitesStore();

    const navigate = useNavigate();

    useEffect(() => {
        if (symptomSites.length === 0) {
            navigate('/');
        } else {
            axios.post(`${baseurl}/examine`, {
                symptomSites: convertToEnglish(symptomSites),
                symptomComment: `${prompt} ${realAge}`,
                gender: gender,
                birthYear: new Date().getFullYear() - age,
            }).then((response) => {
                updateAnalyzeResult(response.data.id, response.data.diseaseName, response.data.diseaseSolution);
                console.log('Analysis result:', response.data);
                setLoading(false);
            }).catch((error) => {
                if (error.response && error.response.status === 400) {
                    updateAnalyzeResult(0, defaultResult.diseaseName, defaultResult.diseaseSolution);
                } else {
                    console.error('Error fetching analysis:', error);
                }
                setLoading(false);
            });
        }
    }, [symptomSites, age, gender, prompt, realAge, baseurl, navigate, updateAnalyzeResult]);

    return (
        <section className={`body-font flex flex-col items-center h-full m-4 ${!loading && 'sm:w-1/3 px-4'}`}>
            {loading ? (<span></span>) : (
                <div className="flex flex-col max-h-dvh">
                    <div className="flex flex-col justify-between text-black w-full">
                        <h1 className="font-semibold mt-2 text-2xl sm:text-4xl">분석 결과</h1>
                        <p className="mt-1 sm:mt-2 text-gray-500">
                            아픈 부위: {symptomSites.join(', ')}
                            <br />
                            증상: {prompt}
                            <br />
                            {gender}, {realAge}
                        </p>
                    </div>
                    <div className="bg-gray-200 p-4 mt-4 rounded-lg border border-blue-500 shadow-lg">
                        <p className="text-blue-600 text-lg font-bold">{diseaseName}</p>
                        <p className="text-gray-700 mt-2">{diseaseSolution}</p>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <div className="flex items-center justify-center mb-2">
                            <DownArrow className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-center text-gray-700 mb-4">
                            근처에 진찰과 상담을 받아볼 만한 병원으로<br />
                            예약을 도와드릴까요?
                        </p>
                    </div>
                    <Link to="/near">
                        <NavyButton className=" w-full h-16">
                            내 근처 병원 찾고 예약하기
                        </NavyButton>
                    </Link>
                </div>
            )}
        </section>
    );
}

export default Analyze;