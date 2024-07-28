import React, { useState } from 'react';

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
    const [selectedParts, setSelectedParts] = useState([]);

    /**
     * Whitebtn 컴포넌트의 클릭 이벤트 처리기
     * @param {string} part - 클릭된 신체 부위
     */
    const handleWhiteBtnClick = (part) => {
        setSelectedParts((prev) =>
            prev.includes(part) ? prev.filter(p => p !== part) : [...prev, part] //https://ko.react.dev/learn/updating-arrays-in-state
            /*
            ===================위 코드는 아래와 동일함===================
            if (prev.includes(part)) {
                return prev.filter(p => p !== part); // part가 포함되어 있으면 제거
            } else {
                return [...prev, part]; // part가 포함되어 있지 않으면 추가
            }

            ===================세부 설명===================

            prev.filter(p => p !== part) : 새로운 요소를 제외한 새로운 배열을 반환

            ...prev : 이전 상태의 배열 값들
            part : 새로운 요소
            [...prev, part] : 새로운 요소를 추가한 새로운 배열을 반환

            ===================왜 prev.append(part)를 사용하지 않는가?===================

            왜 prev.append(part)를 사용하지 않는가?
            append()는 배열을 수정하는 메서드이므로, 원본 배열을 수정하게 된다.
            하지만 React에서는 상태를 직접 수정하는 것을 허용하지 않는다.
            따라서, append() 대신 새로운 배열을 반환하는 연산을 사용하는 것.
            https://ko.react.dev/learn/updating-arrays-in-state 참고

             */
        );
        console.log(selectedParts);
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
        return (
            <button
                className='hover:bg-blue-300 transition ease-in-out flex justify-center items-center w-40 h-14 m-4 rounded-xl border border-solid border-black bg-white text-black text-lg'
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
    const Bluebtn = ({ text }) => {
        return (
            <button
                className='hover:bg-blue-300 transition ease-in-out flex justify-center items-center rounded-xl w-1/4 h-16 m-2 bg-blue-400 text-2xl'
            >
                {text}
            </button>
        );
    };

    /**
     * 알파벳 배열
     * @type {Array<Array<string>>}
     */
    const bodyPart = [['A-a', 'A-b', 'A-c'], ['B-a', 'B-b'], ['C-a', 'C-b', 'C-c'], ['D-a']];

    return (
        <>
            <section className="body-font text-white">
                <div className='relative flex flex-col justify-center w-full h-screen bg-white'>
                    <div className='absolute top-0 flex flex-col justify-center text-black items-center w-full h-40 mt-20'>
                        <h1 className='ml-2 mt-2 text-4xl'>증상을 통해 <br/>내 몸의 문제를 분석해드려요</h1>
                        <p className='mt-5'>증상이 있는 부위를 선택해주세요.(중복가능)</p>
                    </div>
                    <div className='w-full h-auto mt-10'>
                        {bodyPart.map((part, index) => (
                            <div key={index} className='flex justify-center items-center w-full h-16 m-2'>
                                {part.map((item, index) => (
                                    <Whitebtn key={index} text={item}/>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center flex-col w-full h-40 mt-10'>
                        <Bluebtn text={"증상 입력하기"}/>
                        <Bluebtn text={"분석 기록 / 예약 정보 확인하기"}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Start;
