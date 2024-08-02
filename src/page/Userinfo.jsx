import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Userinfo() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const location = useLocation();
    const state = location.state || {};

    return (
        <div>
            <Link to="/text">
                <svg className={` ${isMobile ? 'w-[30px] h-[30px] m-4' : 'w-[40px] h-[40px] m-8'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
            </Link>
            <h1>증상 부위:</h1>
            <ul>
                {state.symptomSites && state.symptomSites.length > 0 ? (
                    state.symptomSites.map((site, index) => (
                        <li key={index}>{site}</li>
                    ))
                ) : (
                    <li>선택한 증상 부위가 없습니다.</li>
                )}
            </ul>
            <h2>증상 설명:</h2>
            <p>{state.symptomComment || '증상 설명이 없습니다.'}</p>
        </div>
    );
}

export default Userinfo;