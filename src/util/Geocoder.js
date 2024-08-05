// utils/geoCoder.js
export const getCoordsByAddress = (address) => {
    return new Promise((resolve, reject) => {
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                // 좌표를 배열 형식으로 반환
                const coords = [result[0].y, result[0].x];
                resolve(coords);
            } else {
                reject(new Error("Failed to get coordinates"));
            }
        });
    });
};
