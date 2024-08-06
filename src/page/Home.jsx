import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import WhiteButton from "../components/WhiteButton.jsx";
import BlueButton from "../components/BlueButton.jsx";
import NavyButton from "../components/NavyButton.jsx";
import useSympthomSitesStore from "../store/symptomSitesStore.js";

function Start() {
    const {symptomSites, addSymptomSite, removeSymptomSite} = useSympthomSitesStore();
    const [isAnySelected, setIsAnySelected] = useState(false);

    useEffect(() => {
        // selectedParts가 변경될 때마다 실행될 코드
        setIsAnySelected(symptomSites.length > 0);
    }, [symptomSites]);

    const handleWhiteBtnClick = (part) => {
        symptomSites.includes(part) ? removeSymptomSite(part) : addSymptomSite(part);
    };

    const bodyPart = [['머리', '얼굴', '목'], ['가슴', '복부'], ['골반', '팔', '다리'], ['기타']];

    return (<>
        <section className="body-font flex justify-center items-center h-full">
            <div className="flex flex-col justify-between items-center h-full">
                <div className="flex flex-col text-black items-center w-full mb-5">
                    <h1 className="font-semibold ml-2 mt-2 text-2xl sm:text-4xl ">
                        증상을 통해<br/> 내 몸의 문제를 분석해드려요
                    </h1>
                    <p className="mt-2">증상이 있는 부위를 선택해주세요.(중복가능)</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full flex-grow">
                    {bodyPart.map((part, index) => (
                        <div key={index} className="flex justify-center items-center w-full h-16 m-2">
                            {part.map((item, index) => (
                                <WhiteButton key={index} onClick={() => handleWhiteBtnClick(item)}
                                             selected={symptomSites.includes(item)}
                                             className="w-1/2 lg:w-1/4 h-14 lg:m-4 m-2"
                                >
                                    {item}
                                </WhiteButton>))}
                        </div>))}
                </div>
                <div className="flex justify-center items-center flex-col w-full max-w-full mt-4 px-2">
                    <Link to={isAnySelected ? '/text' : ''} className="w-full">
                        <BlueButton selected={isAnySelected}
                                    onClick={console.log('증상 입력하기 버튼 클릭됨')}
                                    className="w-full h-16"
                        > 증상 입력하기 </BlueButton>
                    </Link>
                    <Link to="/reservation" className="w-full">
                        <NavyButton className="mt-4 w-full h-16"> 분석 기록 / 예약 정보 확인하기 </NavyButton>
                    </Link>
                </div>
            </div>
        </section>
    </>);
}

export default Start;
