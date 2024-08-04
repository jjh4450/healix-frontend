import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import left_arrow_img from '../assets/left_arrow.webp';

function Userinfo() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const location = useLocation();
    const state = location.state || {};
    const [selectedGen, setSelectedGen] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const handleWhiteBtnClick = (text) => {
        setSelectedGen(text);
    };

    const handleAgeBtnClick = (ageRange) => {
        setSelectedAge(ageRange);
        const currentYear = new Date().getFullYear();
        let calculatedBirthYear;

        switch (ageRange) {
            case '0~12세':
                calculatedBirthYear = currentYear - 6; // 평균 나이 6세
                break;
            case '13~18세':
                calculatedBirthYear = currentYear - 15; // 평균 나이 15세
                break;
            case '19~34세':
                calculatedBirthYear = currentYear - 26; // 평균 나이 26세
                break;
            case '35~64세':
                calculatedBirthYear = currentYear - 49; // 평균 나이 49세
                break;
            case '65세 이상':
                calculatedBirthYear = currentYear - 70; // 평균 나이 70세
                break;
            default:
                calculatedBirthYear = currentYear;
        }

        setBirthYear(calculatedBirthYear);
        console.log(`태어난 년도: ${calculatedBirthYear}`);
    };

    // 흰색 버튼 컴포넌트
    const Whitebtn = ({ text, onClick }) => {
        const isSelected = selectedGen === text || selectedAge === text;

        return (
            <button
                className={`transition ease-in-out flex justify-center items-center ${isMobile ? 'w-24 h-10 m-2' : 'w-48 h-14 m-4'} rounded-full border border-solid border-healix-btn-border ${
                    isSelected ? 'bg-healix-blue text-white' : 'bg-white text-black'
                } ${isMobile ? 'text-base' : 'text-xl'} hover:bg-blue-300`}
                onClick={() => onClick(text)}
            >
                {text}
            </button>
        );
    };

    // Bluebtn 컴포넌트를 const로 정의
    const Bluebtn = ({ hover, color, text, link, disabled, state }) => {
        const isBlue = color === 'bg-healix-skyblue';
        const buttonClassNames = `${hover} transition ease-in-out flex justify-center text-white items-center rounded-full w-full max-w-xs h-16 ${
            isBlue ? disabled ? color : 'bg-healix-blue' : color
        } ${isMobile ? 'text-xl' : 'text-2xl'}`;

        const buttonContent = (
            <button className={buttonClassNames} disabled={disabled}>
                {text}
            </button>
        );

        return (
            <div className="w-full flex justify-center">
                {disabled ? (
                    buttonContent
                ) : (
                    <Link to={link} state={state} className="w-full flex justify-center">
                        {buttonContent}
                    </Link>
                )}
            </div>
        );
    };

    const genderState = selectedGen === '남' ? 'MAN' : selectedGen === '여' ? 'WOMAN' : '';

    return (
        <div className='w-full h-screen flex flex-col bg-healix-gray'>
            <Link to="/text">
                <img src={left_arrow_img} alt='left_arrow' className={`${isMobile ? 'w-[40px] h-[40px] m-2' : 'w-[50px] h-[50px] m-8'}`} />
            </Link>
            <div className='mt-14 p-4 w-full flex flex-col items-center'>
                <h1 className={`font-semibold ${isMobile ? 'text-[30px]' : 'text-4xl'} m-2`}>기본 정보를 입력해주세요.</h1>
                <p className={`font-medium ${isMobile ? 'text-[20px]' : 'text-2xl'} m-2 text-[#3C3C3C] text-center`}>
                    더 자세한 분석결과를 얻을 수 있어요
                </p>
            </div>
            <div className='p-4 w-full flex flex-col items-center mb-8'>
                <p className={`font-medium ${isMobile ? 'text-[20px]' : 'text-2xl'} m-2 text-[#3C3C3C] text-center`}>
                    성별
                </p>
                <div className='flex'>
                    <Whitebtn text={'남'} onClick={handleWhiteBtnClick} />
                    <Whitebtn text={'여'} onClick={handleWhiteBtnClick} />
                </div>
            </div>
            <div className='p-4 w-full flex flex-col items-center'>
                <p className={`font-medium ${isMobile ? 'text-[20px]' : 'text-2xl'} m-2 text-[#3C3C3C] text-center`}>
                   (만) 나이
                </p>
                <div className='flex flex-wrap justify-center'>
                    <Whitebtn text={'0~12세'} onClick={handleAgeBtnClick} />
                    <Whitebtn text={'13~18세'} onClick={handleAgeBtnClick} />
                    <Whitebtn text={'19~34세'} onClick={handleAgeBtnClick} />
                    <Whitebtn text={'35~64세'} onClick={handleAgeBtnClick} />
                    <Whitebtn text={'65세 이상'} onClick={handleAgeBtnClick} />
                </div>
            </div>
            <div className='flex flex-grow justify-center items-center flex-col w-full'>
                <Bluebtn hover="hover:bg-healix-skyblue" color="bg-healix-skyblue" text="다음" link="/analyze" disabled={!selectedGen || !selectedAge} state={{ ...state, gender: genderState, birthYear }} />
            </div>
        </div>
    );
}

export default Userinfo;