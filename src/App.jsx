import {Route, Routes, useLocation} from 'react-router-dom';
import Header from './widgets/Header';
import Home from './page/Home';
import Text from './page/Text.jsx';
import Analyze from './page/Analyze.jsx';
import Login from './components/Login.jsx';
import Footer from './widgets/Footer';
import Reservation from './page/Reservation.jsx';
import Lottie from "react-lottie-player";
import loading from "./assets/HEALIX.json";
import React from "react";
import Near from "./page/Near.jsx";
import ReserVationAccept from "./page/ReservationAccept.jsx";
import ReservationInput from "./page/ReservationInput.jsx";
import Maptest from "./components/Maptest.jsx";

const pages = [
    {path: '/', component: Home},
    {path: '/text', component: Text},
    {path: '/analyze', component: Analyze},
    {path: '/login', component: Login},
    {path: '/near', component: Near},
    {path: '/reservation', component: Reservation},
    {path: '/reservation_accept', component: ReserVationAccept},
    {path: '/start_reservation', component: ReservationInput},
    {path: '/maptest', component: Maptest}
];

const hloading = [
    '/', '/text', '/analyze', '/login'
]

function App() {
    const location = useLocation();

    return (
        <div className="bg-healix-gray flex flex-col h-screen justify-between">
            {window.innerWidth >= 768 && <Header/>}
            <div
                className="flex flex-col lg:flex-row justify-center items-center my-4 basis-1/3 gap-x-0"> {/* 내용 중앙 배치 */}
                {(hloading.includes(location.pathname) || window.innerWidth <= 768) && (
                    <div className="w-1/2 sm:w-1/4 max-h-dvh">
                        <Lottie
                            loop
                            animationData={loading}
                            play
                        />
                    </div>
                )}
                <Routes>
                    {pages.map((page, index) => (
                        <Route key={index} path={page.path} element={<page.component/>}/>
                    ))}
                </Routes>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
