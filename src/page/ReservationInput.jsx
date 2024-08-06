import React, { useEffect, useState } from 'react';
import NavyButton from '../components/NavyButton.jsx';
import WhiteButton from '../components/WhiteButton.jsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReservationInput() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    const hospitalId = location.state || {};
    const navigate = useNavigate();

    // useEffect를 컴포넌트 최상위에서 정의
    useEffect(() => {
        const baseurl = import.meta.env.VITE_APP_API_URL;
        axios.get(`${baseurl}/auth/verify`,{
            withCredentials: true,
            credentials: 'include'
        }).then((response) => {
            console.log(response);
            setIsLogin(true);
        }).catch(() => {
            navigate('/login');
        });
    }, [navigate]);

    const handleReservation = async () => {
        if (!time || !date || !symptom) {
            setError("모든 필드를 채워주세요.");
            return;
        }
        setError(null);
        const dateTime = `${date}T${time}`;
        const data = { symptom, dateTime };

        try {
            const response = await axios.post(`/hospital/${hospitalId}/appointment`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                // 성공적으로 예약 생성
                console.log('예약 성공:', response.data);
            }
        } catch (err) {
            console.error('예약 실패:', err);
            setError("예약 중 오류가 발생했습니다.");
        }
    };

    return (
        <section className="body-font flex flex-col items-center h-full m-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-h-dvh">
                <div className="flex flex-col text-black w-full mb-4">
                    <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">병원 예약</h1>
                    <p className="mt-2 text-gray-600">병원 정보를 입력해주세요.</p>
                </div>

                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="증상"
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
                    />

                    <input
                        type="date"
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <input
                        type="time"
                        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="flex justify-between mt-4">
                        <NavyButton onClick={handleReservation}>예약하기</NavyButton>
                        <Link to="/reservation_result">
                            <WhiteButton>취소</WhiteButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReservationInput;
