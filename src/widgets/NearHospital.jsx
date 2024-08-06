import React, {useEffect, useState} from 'react';
import NavyButton from "../components/NavyButton.jsx";
import {Link} from "react-router-dom";
import useNearInfoStore from "../store/nearInfoStore.js";
function NearHospital() {

    const {posX, posY, nearInfoResult, setPosX, setPosY, setNearInfoResult } = useNearInfoStore()

    return (
        <>
            <div className="w-full h-screen bg-gray-100 p-4">
                {nearInfoResult.map((data, idx) => (
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