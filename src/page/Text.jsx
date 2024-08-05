import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import WhiteButton from "../components/WhiteButton.jsx";
import NavyButton from "../components/NavyButton.jsx";
import useSympthomSitesStore from "../store/symptomSitesStore.js";

function Text() {
    // Base URL for API requests
    const baseurl = import.meta.env.VITE_APP_API_URL;

    const {symptomSites, age, gender, prompt, setAge, setGender, setPrompt} = useSympthomSitesStore();

    const [suggestedSymptoms, setSuggestedSymptoms] = useState(['쿡쿡 쑤시는', '따가운']);
    const [selectedParts, setSelectedParts] = useState([]);
    const [showUserInfo, setShowUserInfo] = useState(age !== -1 || gender !== '' || prompt !== '');

    // Redirect to home if symptomSites is empty
    useEffect(() => {
        if (symptomSites.length === 0) {
            window.location.href = '/';
        }
    }, [symptomSites]);

    // Handler for input text changes
    const handleText = (e) => {
        setPrompt(e.target.value);
    };

    // Handler for suggestion button clicks
    const handleSuggestionBtnClick = (site) => {
        setSelectedParts((prev) =>
            prev.includes(site) ? prev.filter(p => p !== site) : [...prev, site]
        );
        if (!selectedParts.includes(site)) {
            setPrompt(prompt + ' ' + site);
        }
    };

    // Handler for Navy button click
    const handleNavyButtonClick = () => {
        setShowUserInfo(true);
    };

    // Titles and subtitles based on showUserInfo state
    const title = {
        main: !showUserInfo ? '자세한 증상을 작성해 주세요.' : '기본 정보를 입력해주세요.',
        sub: !showUserInfo ? '자세한 증상 위치와 증상 기간을 포함시키면 더 좋아요.' : '더 자세한 진단결과를 얻을 수 있어요.'
    };

    // Age options and helper function
    const ageOptions = {
        options: ['0~12세', '13~18세', '19~34세', '35~64세', '65세 이상'],
        getValue: (value) => {
            const index = ageOptions.options.indexOf(value);
            switch (index) {
                case 0:
                    return 6;
                case 1:
                    return 15;
                case 2:
                    return 26;
                case 3:
                    return 49;
                case 4:
                    return 70;
                default:
                    return 0;
            }
        }
    };

    // Gender options and helper function
    const genderOptions = {
        options: ['남성', '여성'],
        getValue: (value) => {
            return value === '남성' ? 'MEN' : 'WOMAN';
        }
    };

    console.log('ShowUserInfo: ' + showUserInfo);

    return (
        <section className="body-font flex flex-col items-center h-full m-4">
            <div className="flex flex-col max-h-dvh">
                <div className="flex flex-col justify-between text-black w-full">
                    <h1 className="font-semibold mt-2 text-2xl sm:text-4xl">
                        {title.main}
                    </h1>
                    <p className="mt-1 sm:mt-2">
                        {title.sub}
                    </p>
                </div>
                {showUserInfo && (
                    <div className="flex flex-col">
                        <p className="mt-4"><b>나이</b></p>
                        <div className="flex flex-wrap">
                            {ageOptions.options.map((option, index) => (
                                <WhiteButton
                                    key={index}
                                    onClick={() => setAge(ageOptions.getValue(option))}
                                    selected={age === ageOptions.getValue(option)}
                                    className="mr-2 py-2 px-2 mb-2 text-sm"
                                >
                                    {option}
                                </WhiteButton>
                            ))}
                        </div>


                        <p className="mt-4"><b>성별</b></p>
                        <div className="flex flex-wrap">
                            {genderOptions.options.map((option, index) => (
                                <WhiteButton
                                    key={index}
                                    onClick={() => setGender(genderOptions.getValue(option))}
                                    selected={gender === genderOptions.getValue(option)}
                                    className="mr-2 py-2 px-2 mb-2 w-1/3 text-sm"
                                >
                                    {option}
                                </WhiteButton>
                            ))}
                        </div>
                    </div>
                )}
                <p className="mt-4"><b>세부 사항</b></p>
                <div className="flex justify-center items-center w-full">
                    <input
                        placeholder="배 안쪽이 쿡쿡쑤시는 느낌"
                        onChange={handleText}
                        value={prompt} // Bind the input value to the state
                        name="symptomComment"
                        className={`transition-all duration-300 ease-in-out ${showUserInfo ? 'w-full' : 'w-4/5'} min-h-14 pl-4 border-2 focus:border-blue-500 focus:outline-none rounded-full`}
                    />
                    {!showUserInfo && (
                        <NavyButton
                            className="min-w-14 min-h-14 ml-2 sm:ml-4"
                            onClick={handleNavyButtonClick}
                        >
                            →
                        </NavyButton>
                    )}
                </div>
                <div className="mt-2">
                    <div className="flex flex-wrap">
                        {suggestedSymptoms.map((site, index) => (
                            <WhiteButton
                                key={index}
                                onClick={() => handleSuggestionBtnClick(site)}
                                selected={selectedParts.includes(site)}
                                className="mr-2 py-2 px-2 mb-2 text-xs"
                            >
                                {site}
                            </WhiteButton>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <p><b>선택한 증상부위</b>
                        <Link to='/'>
                            &nbsp;<u className="text-gray-400">수정하기</u>
                        </Link>
                    </p>
                    <div className="flex flex-wrap">
                        {symptomSites.slice().sort().map((site, index) => (
                            <WhiteButton key={index} className="mr-2 my-2 py-2 px-10">
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
