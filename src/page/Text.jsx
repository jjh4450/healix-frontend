import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import WhiteButton from "../components/WhiteButton.jsx";
import NavyButton from "../components/NavyButton.jsx";
import useSympthomSitesStore from "../store/symptomSitesStore.js";

function Text() {
    // Base URL for API requests
    const baseurl = import.meta.env.VITE_APP_API_URL;

    // Retrieve state from the previous location
    const location = useLocation();
    const {symptomSites} = useSympthomSitesStore();
    const [suggestedSymptoms, setSuggestedSymptoms] = useState(['쿡쿡 쑤시는', '따가운']);
    const [selectedParts, setSelectedParts] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        //  symptomSites가 비어 있다면 홈으로 이동
        if (symptomSites.length === 0) {
            window.location.href = '/';
        }
    }, []);

    // Handler for input text changes
    const handleText = (e) => {
        setText(e.target.value);
    };

    // Handler for suggestion button clicks
    const handleSuggestionBtnClick = (site) => {
        setSelectedParts((prev) => prev.includes(site) ? prev.filter(p => p !== site) : [...prev, site]);
        !selectedParts.includes(site) && setText((prevText) => `${prevText} ${site}`);
    }

    return (
        <section className="body-font flex flex-col items-center h-full m-4">
            <div className="flex flex-col max-h-dvh">
                <div className="flex flex-col justify-between text-black w-full">
                    <h1 className="font-semibold mt-2 text-2xl sm:text-4xl">
                        자세한 증상을 작성해 주세요.
                    </h1>
                    <p className="mt-1 sm:mt-2">
                        자세한 증상 위치와 증상 기간을 포함시키면 더 좋아요.
                    </p>
                    <p className="my-4 text-gray-400">
                        ex) 배 안쪽이 쿡쿡쑤시는 느낌,<br/>
                        오른쪽 아랫배를 누가 움켜쥔듯한 느낌
                    </p>
                </div>
                <div className="flex justify-center items-center  w-full">
                    <input
                        onChange={handleText}
                        value={text} // Bind the input value to the state
                        name="symptomComment"
                        className="w-full min-h-14 pl-4 border-2 focus:border-blue-500 focus:outline-none rounded-full"
                    />
                    <NavyButton
                        className="min-w-14 min-h-14 ml-4"
                    >
                        →
                    </NavyButton>
                </div>
                <div className="mt-2">
                    <div className="flex flex-wrap">
                        {suggestedSymptoms.map((site, index) => (
                            <WhiteButton key={index}
                                         onClick={() => handleSuggestionBtnClick(site)}
                                         selected={selectedParts.includes(site)}
                                         className="mr-2 py-2 px-2 mb-2 text-sm">
                                {site}
                            </WhiteButton>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <p>선택한 증상부위
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
            </div>
        </section>
    );
}

export default Text;
