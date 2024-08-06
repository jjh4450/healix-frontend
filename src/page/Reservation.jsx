import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Reservation() {
    const [result, setResult] = useState([]);
    const baseurl = import.meta.env.VITE_APP_API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseurl}/auth/verify`, {
            withCredentials: true,
            credentials: 'include',
        })
            .then((response) => {
                console.log(response);
            })
            .catch(() => {
                navigate('/login');
            });

        axios.get(`${baseurl}/hospital/appointment`, {
            withCredentials: true,
            credentials: 'include',
        })
            .then((response) => {
                console.log(response.data);
                setResult(response.data);
            })
            .catch(() => {
                navigate('/login');
            });
    }, [baseurl, navigate]);

    // Function to handle appointment deletion
    const handleDelete = (appointmentId) => {
        axios.delete(`${baseurl}/hospital/${appointmentId}/appointment`, {
            withCredentials: true,
            credentials: 'include',
        })
            .then(() => {
                // Update the state to reflect the deletion
                setResult(result.filter(appointment => appointment.id !== appointmentId));
                console.log(`Deleted appointment with ID: ${appointmentId}`);
            })
            .catch((error) => {
                console.error('Error deleting appointment:', error);
                // Handle errors appropriately, e.g., show a message to the user
            });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">예약 목록</h1>
            <ul className="space-y-4">
                {result.map((appointment) => (
                    <li key={appointment.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{appointment.hospitalName}</h2>
                            <p className="text-gray-600">주소: {appointment.hospitalAddress}</p>
                            <p className="text-gray-600">예약 시간: {new Date(appointment.dateTime).toLocaleString()}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(appointment.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reservation;
