import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './widgets/Header';
import Home from './page/Home';
import Text from './page/Text.jsx';
import Userinfo from './page/Userinfo.jsx';
import Analyze from './page/Analyze.jsx';
import Login from './components/Login.jsx';
import Footer from './widgets/Footer';
import Lottie from "react-lottie-player";
import loading from "./assets/HEALIX.json";
import React from "react";

const pages = [
    { path: '/', component: Home },
    { path: '/text', component: Text },
    { path: '/userinfo', component: Userinfo },
    { path: '/analyze', component: Analyze },
    { path: '/login', component: Login },
];

const hloading = [
    '/', '/text'
]

function App() {
    const location = useLocation();

    return (
        <div className="bg-healix-gray flex flex-col h-screen justify-between">
            {window.innerWidth >= 768 && <Header />}
            <div className="flex flex-col lg:flex-row justify-center items-center my-4 basis-1/3 gap-x-0"> {/* 내용 중앙 배치 */}
                {(hloading.includes(location.pathname) || window.innerWidth >= 768) && (
                        <div className="w-1/2 sm:w-1/4 max-h-dvh">
                            <Lottie
                                loop
                                animationData={loading}
                                play
                            />
                        </div>
                )}
                <div className="basis-1/3">
                    <Routes>
                        {pages.map((page, index) => (
                            <Route key={index} path={page.path} element={<page.component/>}/>
                        ))}
                    </Routes>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default App;
