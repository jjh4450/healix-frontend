import React, {useEffect, useState} from 'react';
import useNearInfoStore from "../store/nearInfoStore.js";
import getCoordsByAddress from "../util/Geocoder.js";
import useAnalyzeResultStore from "../store/analyzeResultStore.js";
import axios from "axios";
import convertToEnglish from "../util/symptomSitesConverter.js";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import Maptest from "../components/Maptest.jsx";
import ReservationInput from "./ReservationInput.jsx";
import NearHospital from "../widgets/NearHospital.jsx";

function Near() {

    const baseurl = import.meta.env.VITE_APP_API_URL;

    const {id, updateAnalyzeResult, diseaseName, diseaseSolution} = useAnalyzeResultStore();

    const {posX, posY, nearInfoResult, setPosX, setPosY, setNearInfoResult } = useNearInfoStore();

    useEffect(() => {
        let url = "";
       if(id !== -1){
           url = `${baseurl}/hospital/search`;
       }else{
           url = `${baseurl}/hospital/search/without-examine`;
       }
        axios.get(url, {
            params:{
                latitude:37.4682787075426,
                longitude:127.039136433366,
                examineId:id,
        }
        }).then((response) => {
            setNearInfoResult(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.error('Error fetching analysis:', error);
            // setLoading(false);
        });
    }, []);

    return (
        <>
            <div className="flex w-full h-dvh">
                <Map
                    center={{
                        // 지도의 중심좌표
                        lat: 37.4682787075426,
                        lng: 127.039136433366,
                    }}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "100%",
                    }}
                    level={3} // 지도의 확대 레벨
                >
                    {
                        nearInfoResult.map((data, idx) =>{
                            return(
                                <MapMarker key={idx} position={{lat: data.latitude, lng:data.longitude}}>
                                    {data.hospitalName}
                                </MapMarker>
                            )
                        })
                    }
                </Map>
                <NearHospital/>
            </div>

        </>
    );
}

export default Near;