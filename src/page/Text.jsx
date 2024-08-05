import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import WhiteButton from "../components/WhiteButton.jsx";
import NavyButton from "../components/NavyButton.jsx";
import useSympthomSitesStore from "../store/symptomSitesStore.js";

// 상수와 설정
const SUGGESTED_SYMPTOMS = ['쿡쿡 쑤시는', '따가운'];
const AGE_OPTIONS = [
    {label: '0~12세', value: 6},
    {label: '13~18세', value: 15},
    {label: '19~34세', value: 26},
    {label: '35~64세', value: 49},
    {label: '65세 이상', value: 70},
];
const GENDER_OPTIONS = [
    {label: '남성', value: 'MEN'},
    {label: '여성', value: 'WOMAN'},
];

function Text() {
    const baseurl = import.meta.env.VITE_APP_API_URL;
    const {symptomSites, age, gender, prompt, setAge, setGender, setPrompt} = useSympthomSitesStore();
    const [selectedParts, setSelectedParts] = useState([]);
    const [showUserInfo, setShowUserInfo] = useState(age !== -1 || gender !== '' || prompt !== '');

    useEffect(() => {
        if (symptomSites.length === 0) {
            window.location.href = '/';
        }
    }, [symptomSites]);

    const handleText = (e) => setPrompt(e.target.value);

    const handleSuggestionBtnClick = (site) => {
        setSelectedParts((prev) =>
            prev.includes(site) ? prev.filter(p => p !== site) : [...prev, site]
        );
        if (!selectedParts.includes(site)) {
            setPrompt(prompt + ' ' + site);
        }
    };

    const title = showUserInfo
        ? {main: '기본 정보를 입력해주세요.', sub: '더 자세한 진단결과를 얻을 수 있어요.'}
        : {main: '자세한 증상을 작성해 주세요.', sub: '자세한 증상 위치와 증상 기간을 포함시키면 더 좋아요.'};

    const renderAgeOptions = () => (
        <>
            <p className="mt-4"><b>나이</b></p>
            <div className="flex flex-wrap">
                {AGE_OPTIONS.map(({label, value}) => (
                    <WhiteButton
                        key={label}
                        onClick={() => setAge(value)}
                        selected={age === value}
                        className="mr-2 py-2 px-2 mb-2 text-sm"
                    >
                        {label}
                    </WhiteButton>
                ))}
            </div>
        </>
    );

    const renderGenderOptions = () => (
        <>
            <p className="mt-4"><b>성별</b></p>
            <div className="flex flex-wrap">
                {GENDER_OPTIONS.map(({label, value}) => (
                    <WhiteButton
                        key={label}
                        onClick={() => setGender(value)}
                        selected={gender === value}
                        className="mr-2 py-2 px-2 mb-2 w-1/3 text-sm"
                    >
                        {label}
                    </WhiteButton>
                ))}
            </div>
        </>
    );

    return (
        <section className="body-font flex flex-col items-center h-full m-4">
            <div className="flex flex-col max-h-dvh">
                <div className="flex flex-col justify-between text-black w-full">
                    <h1 className="font-semibold mt-2 text-2xl sm:text-4xl">{title.main}</h1>
                    <p className="mt-1 sm:mt-2">{title.sub}</p>
                </div>

                {showUserInfo && (
                    <div className="flex flex-col">
                        {renderAgeOptions()}
                        {renderGenderOptions()}
                    </div>
                )}

                <p className="mt-4"><b>세부 사항</b></p>
                <div className="flex justify-center items-center w-full">
                    <input
                        placeholder="배 안쪽이 쿡쿡쑤시는 느낌"
                        onChange={handleText}
                        value={prompt}
                        name="symptomComment"
                        className={`transition-all duration-300 ease-in-out ${showUserInfo ? 'w-full' : 'w-4/5'} min-h-14 pl-4 border-2 focus:border-blue-500 focus:outline-none rounded-full`}
                    />
                    {!showUserInfo && (
                        <NavyButton
                            className="min-w-14 min-h-14 ml-2 sm:ml-4"
                            onClick={() => setShowUserInfo(true)}
                        >
                            →
                        </NavyButton>
                    )}
                </div>

                <div className="mt-2 flex flex-wrap">
                    {SUGGESTED_SYMPTOMS.map((site) => (
                        <WhiteButton
                            key={site}
                            onClick={() => handleSuggestionBtnClick(site)}
                            selected={selectedParts.includes(site)}
                            className="mr-2 py-2 px-2 mb-2 text-xs"
                        >
                            {site}
                        </WhiteButton>
                    ))}
                </div>

                <div className="mt-4">
                    <p>
                        <b>선택한 증상부위</b>
                        <Link to='/'>&nbsp;<u className="text-gray-400">수정하기</u></Link>
                    </p>
                    <div className="flex flex-wrap">
                        {symptomSites.slice().sort().map((site) => (
                            <WhiteButton key={site} className="mr-2 my-2 py-2 px-10">
                                {site}
                            </WhiteButton>
                        ))}
                    </div>
                </div>

                {showUserInfo && (
                    <div className="mt-4">
                        <Link to="/analyze">
                            <NavyButton className="w-full py-2 px-2">
                                진단 받기
                            </NavyButton>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Text;