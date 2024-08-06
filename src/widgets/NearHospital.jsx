import React, {useEffect, useState} from 'react';
import NavyButton from "../components/NavyButton.jsx";
import {Link} from "react-router-dom";
function NearHospital(hospitalInfo) {

    const tmp = [
        {
            "hospitalId": 40867,
            "hospitalAddress": "강원특별자치도 춘천시 중앙로 69-1, (중앙로2가)",
            "hospitalName": "김성권치과의원",
            "reason": " 이비인후과 전문이라 도움이 될 수 있어요.  ",
            "distance": 404.55790592105217,
            "waiting": 0,
            "latitude": 37.8790396,
            "longitude": 127.7263742
        },
        {
            "hospitalId": 4354,
            "hospitalAddress": "강원특별자치도 춘천시 금강로 62, (조양동)",
            "hospitalName": "박이비인후과의원",
            "reason": " 이비인후과 전문이라 도움이 될 수 있어요.  ",
            "distance": 240.55833768284228,
            "waiting": 0,
            "latitude": 37.8796451,
            "longitude": 127.7282286
        },
        {
            "hospitalId": 25490,
            "hospitalAddress": "강원특별자치도 춘천시 중앙로 91-1, (중앙로2가)",
            "hospitalName": "연세통증의학과의원",
            "reason": " 재활의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 631.6455125207032,
            "waiting": 0,
            "latitude": 37.8775574,
            "longitude": 127.7245737
        },
        {
            "hospitalId": 32792,
            "hospitalAddress": "강원특별자치도 춘천시 중앙로 63, (중앙로2가)",
            "hospitalName": "중앙재활의학과의원",
            "reason": " 재활의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 337.27746358280206,
            "waiting": 0,
            "latitude": 37.879461,
            "longitude": 127.7269295
        },
        {
            "hospitalId": 23210,
            "hospitalAddress": "강원특별자치도 춘천시 금강로 68-2, (조양동,대원빌딩 4층)",
            "hospitalName": "안정신건강의학과의원",
            "reason": " 정신건강의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 259.2376942696663,
            "waiting": 0,
            "latitude": 37.8792388,
            "longitude": 127.7286278
        },
        {
            "hospitalId": 12393,
            "hospitalAddress": "강원특별자치도 춘천시 중앙로 60-0, (중앙로2가)",
            "hospitalName": "영인요양병원",
            "reason": " 가정의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 309.4531020769683,
            "waiting": 0,
            "latitude": 37.8799974,
            "longitude": 127.7268652
        },
        {
            "hospitalId": 16124,
            "hospitalAddress": "강원특별자치도 춘천시 중앙로 68, 4층 (중앙로2가)",
            "hospitalName": "그랜드아름다운의원",
            "reason": " 가정의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 382.91454174180757,
            "waiting": 0,
            "latitude": 37.8795065,
            "longitude": 127.7262581
        },
        {
            "hospitalId": 26720,
            "hospitalAddress": "전라남도 여수시 율촌면 당머리길 10, 10",
            "hospitalName": "온누리의원",
            "reason": " 영상의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 333668.4731882827,
            "waiting": 0,
            "latitude": 34.8830115,
            "longitude": 127.5793736
        },
        {
            "hospitalId": 11447,
            "hospitalAddress": "강원특별자치도 춘천시 금강로 39, (낙원동)",
            "hospitalName": "인성병원",
            "reason": " 영상의학과 전문이라 도움이 될 수 있어요.  ",
            "distance": 271.8351283822535,
            "waiting": 0,
            "latitude": 37.8812798,
            "longitude": 127.7268737
        },
        {
            "hospitalId": 11187,
            "hospitalAddress": "대구광역시 달서구 와룡로 48-48, (본동)",
            "hospitalName": "우리병원",
            "reason": " 소아청소년과 전문이라 도움이 될 수 있어요.",
            "distance": 238414.2610377563,
            "waiting": 0,
            "latitude": 35.836811,
            "longitude": 128.537375
        }
    ]


    return (
        <>
            <div className="w-full h-screen bg-gray-100 p-4">
                {tmp.map((data, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
                    >
                        <h2 className="text-lg font-bold text-gray-800">{data.hospitalName}</h2>
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">주소:</span> {data.hospitalAddress}
                        </p>
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">이유:</span> {data.reason}
                        </p>
                        <Link to='/start_reservation' state={data.hospitalId}>
                            <NavyButton>
                                예약하기
                            </NavyButton>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NearHospital;