import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import left_arrow_img from '../assets/left_arrow.webp';

function Text() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const location = useLocation();
    const symptomSites = location.state || [];
    const [text, setText] = useState('');
    const isAnyText = text !== '';

    const handleText = (e) => {
        setText(e.target.value);
    };

    const Bluebtn = ({ hover, color, link, disabled }) => {
        const isBlue = color === 'bg-healix-skyblue';
        const buttonClassNames = `${hover} text-white transition ease-in-out flex justify-center items-center rounded-full w-full h-16 m-2 ${
            isBlue ? (isAnyText ? 'bg-healix-blue' : color) : color
        } ${isMobile ? 'text-xl' : 'text-2xl'} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`;

        return (
            <div className="flex justify-center w-full">
                {disabled ? (
                    <button className={buttonClassNames} disabled={disabled}>
                        기본 정보 입력하기
                    </button>
                ) : (
                    <Link
                        state={{ symptomSites, symptomComment: text }}
                        to={link}
                        className="flex justify-center w-full"
                    >
                        <button className={buttonClassNames} disabled={disabled}>
                            기본 정보 입력하기
                        </button>
                    </Link>
                )}
            </div>
        );
    };

    return (
        <div className="w-full h-[900px] flex flex-col bg-healix-gray">
            <Link to="/">
                <img src={left_arrow_img} alt='left_arrow' className={`${isMobile ? 'w-[40px] h-[40px] m-2' : 'w-[50px] h-[50px] m-8'}`} />
            </Link>
            <div className="p-4 w-full h-3/5 flex justify-center flex-col items-center">
                <h1 className={`font-semibold ${isMobile ? 'text-[30px]' : 'text-4xl'} m-2`}>자세한 증상을 작성해주세요.</h1>
                <p className={`font-medium ${isMobile ? 'text-[20px]' : 'text-2xl'} m-2 text-[#3C3C3C] text-center`}>
                    자세한 증상위치와 증상기간을 포함시키면
                    <br />
                    더 좋아요
                </p>
                <p className={`${isMobile ? 'text-[15px]' : 'text-xl'} text-center m-2 text-[#BCBDC2]`}>
                    ex) 배 안쪽이 쿡쿡쑤시는 느낌,
                    <br />
                    오른쪽 아랫배를 누가 움켜쥔 듯한 느낌
                </p>
                <div className="flex justify-center items-center flex-col w-full max-w-[700px] mt-4 px-2">
                    <input
                        onChange={handleText}
                        name="symptomComment"
                        className={`p-4 mt-[30px] w-full ${isMobile ? 'h-[60px] text-lg' : 'h-[80px] text-2xl'} rounded-full outline-none transition ease-in-out duration-200 ring-2 ring-gray-300 focus:ring-2 focus:ring-healix-blue`}
                    />
                </div>
            </div>
            <div className="w-full h-2/5 flex flex-col items-center">
                <p className="text-2xl m-2 text-[#3C3C3C]">선택한 증상부위</p>
                <div className="flex flex-row">
                    {symptomSites.map((site, index) => (
                        <div key={index} className={`flex justify-center items-center text-[#3C3C3C] ${isMobile ? 'w-20 h-10 text-base' : 'w-48 h-14 text-xl'} bg-healix-gray border border-solid rounded-full border-healix-btn-border m-2`}>
                            {site}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center flex-col w-full max-w-[700px] mt-4 px-2">
                    <Bluebtn hover="hover:bg-healix-skyblue" color="bg-healix-skyblue" link="/userinfo" disabled={!isAnyText} />
                </div>
            </div>
        </div>
    );
}

export default Text;