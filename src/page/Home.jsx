import React, { useState, useEffect } from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loading from '../assets/lz8ihbkj.lottie';
import { useMediaQuery } from 'react-responsive';

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
    /**
     * 선택된 알파벳을 추적하기 위한 상태
     * @type {Array}
     */
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' }); // 미디어 쿼리 라이브러리를 활용한 반응형 제작
    const [selectedParts, setSelectedParts] = useState([]);
    const isAnySelected = selectedParts.length > 0;

    useEffect(() => {
        console.log(selectedParts);
    
    }, [selectedParts]); // 리액트는 비동기적으로 업데이트가 이루어지기에 이전 내용이 나올 수 있다. 따라서 배열이 업데이트 될 때마다 바로바로 렌더링 해주는 useEffect를 썼다

    /**
     * Whitebtn 컴포넌트의 클릭 이벤트 처리기
     * @param {string} part - 클릭된 신체 부위
     */
    const handleWhiteBtnClick = (part) => {
        setSelectedParts((prev) =>
            prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part]
        );
    };

    /**
     * White 버튼 컴포넌트
     *
     * @component
     * @param {Object} props - 컴포넌트 props
     * @param {string} props.text - 버튼에 표시될 텍스트
     * @example
     * return (
     *   <Whitebtn text="머리" />
     * )
     */
    const Whitebtn = ({ text }) => {
        const isSelected = selectedParts.includes(text);

        return (
            <button
                className={`hover:bg-blue-300 transition ease-in-out flex justify-center items-center w-48 h-14 m-4 rounded-full border border-solid border-black ${isSelected ? 'bg-[#007AFF] text-white' : isAnySelected ? 'bg-[#F5F5F5] text-black' : 'bg-white text-black'} text-lg`}
                onClick={() => handleWhiteBtnClick(text)}
            >
                {text}
            </button>
        );
    };

    /**
     * Blue 버튼 컴포넌트
     *
     * @component
     * @param {Object} props - 컴포넌트 props
     * @param {string} props.text - 버튼에 표시될 텍스트
     * @example
     * return (
     *   <Bluebtn text="입력하기" />
     * )
     */
    const Bluebtn = ({ hover, color, text }) => {
        const isBlue=color=='bg-[#62ADFF]';
        return (
            <button
                className={`${hover} transition ease-in-out flex justify-center items-center rounded-full w-full h-16 m-2 ${isBlue? isAnySelected?'bg-[#007AFF]':color:color} ${isMobile ? 'text-xl' : 'text-2xl'}`}
            >
                {text}
            </button>
        );
    };

    /**
     * 알파벳 배열
     * @type {Array<Array<string>>}
     */
    const bodyPart = [['머리', '얼굴', '목'], ['가슴', '복부'], ['골반', '팔', '다리'], ['기타']];

    return (
        <div className='bg-[#F5F5F5]'>
            {isMobile ? <div className='w-full h-[300px] flex justify-center'>
                <div className=" w-[300px] h-full">
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
                :
                <div className='w-full h-[400px] flex justify-center'>
                    <div className=" w-[400px] h-full">
                        <DotLottieReact
                            src={loading}
                            loop
                            autoplay
                            segments={[0, 12]}
                            mode="reverse"
                            useFrameInterpolation={false}
                        />
                    </div>
                </div>}



            <section className="body-font text-white flex justify-center items-center h-full">
                <div className='flex flex-col justify-between items-center w-11/12 h-full'>
                    <div className='flex flex-col text-black items-center w-full h-40'>
                        {isMobile ? <h1 className='ml-2 mt-2 text-3xl'>증상을 통해 <br />내 몸의 문제를 분석해드려요</h1> : <h1 className='ml-2 mt-2 text-4xl'>증상을 통해 <br />내 몸의 문제를 분석해드려요</h1>}
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
                    <div className='flex justify-center items-center flex-col w-[700px] max-w-full mt-4'>
                        <Bluebtn hover={'hover:bg-blue-300'} color={'bg-[#62ADFF]'} text={"증상 입력하기"} />
                        <Bluebtn hover={'hover:bg-[#2F4FA5]'} color={'bg-[#092A82]'} text={"분석 기록 / 예약 정보 확인하기"} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Start;