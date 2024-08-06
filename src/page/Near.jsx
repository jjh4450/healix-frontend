import React, { useEffect, useState } from 'react';
import useNearInfoStore from "../store/nearInfoStore.js";
import getCoordsByAddress from "../util/Geocoder.js";
import useAnalyzeResultStore from "../store/analyzeResultStore.js";
import axios from "axios";
import convertToEnglish from "../util/symptomSitesConverter.js";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Maptest from "../components/Maptest.jsx";
import ReservationInput from "./ReservationInput.jsx";
import NearHospital from "../widgets/NearHospital.jsx";

/**
 * Near component to display nearby hospitals based on the analysis result.
 * Utilizes Kakao Maps API to display locations on the map.
 */
function Near() {
    const baseurl = import.meta.env.VITE_APP_API_URL;
    const { id, updateAnalyzeResult, diseaseName, diseaseSolution } = useAnalyzeResultStore();
    const { posX, posY, nearInfoResult, setPosX, setPosY, setNearInfoResult } = useNearInfoStore();

    // Default map center coordinates
    const DEFAULT_LATITUDE = 37.4682787075426;
    const DEFAULT_LONGITUDE = 127.039136433366;
    const MAP_LEVEL = 3;

    useEffect(() => {
        // Determine the URL based on whether the ID is available
        const url = id !== -1 ? `${baseurl}/hospital/search` : `${baseurl}/hospital/search/without-examine`;

        // Fetch nearby hospitals data
        axios.get(url, {
            params: {
                latitude: DEFAULT_LATITUDE,
                longitude: DEFAULT_LONGITUDE,
                examineId: id,
            }
        })
            .then((response) => {
                setNearInfoResult(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching analysis:', error);
            });
    }, []); // Include dependencies in the useEffect hook

    return (
        <div className="flex w-full h-dvh">
            <Map
                center={{ lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE }}
                style={{ width: "100%", height: "100%" }}
                // level={MAP_LEVEL}
            >
                {nearInfoResult.length > 0 &&
                    nearInfoResult.map((data, idx) => (
                        <MapMarker key={idx} position={{ lat: data.latitude, lng: data.longitude }}>
                            {data.hospitalName}
                        </MapMarker>
                    ))
                }
            </Map>
            <NearHospital />
        </div>
    );
}

export default Near;
