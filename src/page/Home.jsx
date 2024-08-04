import React, {useState, useEffect} from 'react';
import Lottie from "react-lottie-player";
import loading from '../assets/HEALIX.json';
import {Link} from 'react-router-dom';
import WhiteButton from "../components/WhiteButton.jsx";
import BlueButton from "../components/BlueButton.jsx";
import NavyButton from "../components/NavyButton.jsx";

function Start() {
    const [selectedParts, setSelectedParts] = useState([]);
    const [isAnySelected, setIsAnySelected] = useState(false);

    useEffect(() => {
        // selectedParts가 변경될 때마다 실행될 코드
        setIsAnySelected(selectedParts.length > 0);
    }, [selectedParts]);

    const handleWhiteBtnClick = (part) => {
        setSelectedParts((prev) => prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part]);
    };

    const bodyPart = [['머리', '얼굴', '목'], ['가슴', '복부'], ['골반', '팔', '다리'], ['기타']];

    return (<>
        <section className="body-font text-white flex justify-center items-center h-full">
            <div className="flex flex-col justify-between items-center w-11/12 h-full">
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
                                             selected={selectedParts.includes(item)}
                                             className="w-24 w-48 h-14 lg:m-4"
                                >
                                    {item}
                                </WhiteButton>))}
                        </div>))}
                </div>
                <div className="flex justify-center items-center flex-col w-[700px] max-w-full mt-4 px-2">
                    <Link state={selectedParts} to={isAnySelected ? '/text' : ''} className="w-full">
                        <BlueButton selected={isAnySelected}
                                    onClick={console.log('증상 입력하기 버튼 클릭됨')}
                                    className="w-full h-16"
                        > 증상 입력하기 </BlueButton>
                    </Link>
                    <Link to="/login" className="w-full">
                        <NavyButton className="w-full h-16"> 분석 기록 / 예약 정보 확인하기 </NavyButton>
                    </Link>
                </div>
            </div>
        </section>
    </>);
}

export default Start;
