import React, { useState, useEffect } from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loading from '../assets/lz8ihbkj.lottie';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

/**
 * Start 컴포넌트는 사용자에게 알파벳을 선택하고 분석할 수 있는 인터페이스를 제공합니다.
 *
 * @component
 * @example
 * return (
 *   <Start />
 * )
 */
function Start() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const [selectedParts, setSelectedParts] = useState([]);
    const isAnySelected = selectedParts.length > 0;

    useEffect(() => {
        console.log(selectedParts);
    }, [selectedParts]);

    const handleWhiteBtnClick = (part) => {
        setSelectedParts((prev) =>
            prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part]
        );
    };

    const Whitebtn = ({ text }) => {
        const isSelected = selectedParts.includes(text);

        return (
            <button
                className={`hover:bg-blue-300 transition ease-in-out flex justify-center items-center w-48 h-14 ${isMobile ? 'm-2' : 'm-4'} rounded-full border border-solid border-healix-btn-border ${isSelected ? 'bg-healix-blue text-white' : isAnySelected ? 'bg-healix-gray text-black' : 'bg-white text-black'} ${isMobile ? 'text-base' : 'text-lg'}`}
                onClick={() => handleWhiteBtnClick(text)}
            >
                {text}
            </button>
        );
    };

    const Bluebtn = ({ hover, color, text, link }) => {
        const isBlue = color === 'bg-healix-skyblue';
        const buttonContent = (
            <button
                className={`${hover} transition ease-in-out flex justify-center items-center rounded-full w-full h-16 m-2 ${isBlue ? isAnySelected ? 'bg-healix-blue' : color : color} ${isMobile ? 'text-xl' : 'text-2xl'}`}
            >
                {text}
            </button>
        );

        return link ? <Link to={link} className="w-full">{buttonContent}</Link> : buttonContent;
    };

    const bodyPart = [['머리', '얼굴', '목'], ['가슴', '복부'], ['골반', '팔', '다리'], ['기타']];

    return (
        <div className='bg-healix-gray'>
            <div className={`w-full flex justify-center ${isMobile ? 'h-[300px]' : 'h-[400px]'}`}>
                <div className={isMobile ? 'w-[300px] h-full' : 'w-[400px] h-full'}>
                    <DotLottieReact
                        src={loading}
                        loop
                        autoplay
                        segments={[0, 12]}
                        mode="reverse"
                        useFrameInterpolation={false}
                    />
                </div>
            </div>

            <section className="body-font text-white flex justify-center items-center h-full">
                <div className='flex flex-col justify-between items-center w-11/12 h-full'>
                    <div className='flex flex-col text-black items-center w-full h-40'>
                        <h1 className={`ml-2 mt-2 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
                            증상을 통해 <br />내 몸의 문제를 분석해드려요
                        </h1>
                        <p className='mt-5'>증상이 있는 부위를 선택해주세요.(중복가능)</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full flex-grow'>
                        {bodyPart.map((part, index) => (
                            <div key={index} className='flex justify-center items-center w-full h-16 m-2'>
                                {part.map((item, index) => (
                                    <Whitebtn key={index} text={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center flex-col w-[700px] max-w-full mt-4 px-2'>
                        <Bluebtn hover='hover:bg-healix-skyblue' color='bg-healix-skyblue' text='증상 입력하기' link='/text' />
                        <Bluebtn hover='hover:bg-healix-navy-hover' color='bg-healix-navy' text='분석 기록 / 예약 정보 확인하기' link='/login' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Start;