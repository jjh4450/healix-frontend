import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import KakaoLogin from "react-kakao-login";
import useAuthStore from "../store/authStore.js";
import axios from "axios";
import google_login_img from '../assets/google_login.webp';
import kakao_login_img from '../assets/kakao_login.webp';

function Login() {
    const kakaoJavascriptKey = import.meta.env.VITE_APP_KAKAO_JS_KEY;
    const baseurl = import.meta.env.VITE_APP_API_URL;


    const { login, logout } = useAuthStore((state) => ({
        login: state.login,
        logout: state.logout
    }));

    /**
     * 로그인 요청을 보내는 함수
     * @param {string} url - API 엔드포인트 URL
     * @param {string} token - 소셜 로그인에서 받은 토큰
     * @returns {Promise} - Axios response promise
     */
    const socialLogin = async (url, token) => {
        try {
            const response = await axios.put(
                `${baseurl}${url}`,
                { token: token },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                    credentials: 'include'
                }
            );
            return response;
        } catch (error) {
            console.error('로그인 실패:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    const google = {
        onSuccess: (response) => {
            console.log(response);
            socialLogin('/auth/google', response.credential)
                .then((response) => {
                    login();
                    console.log('로그인 성공:', response.data);
                })
                .catch((error) => {
                    logout();
                    console.error('로그인 실패:', error);
                });
        },
        onError: () => {
            logout();
            console.log('Google 로그인 실패');
        }
    };

    const kakao = {
        onSuccess: (response) => {
            socialLogin('/auth/kakao', response.response.access_token)
                .then((response) => {
                    login();
                    console.log('로그인 성공:', response.data);
                })
                .catch((error) => {
                    logout();
                    console.error('로그인 실패:', error);
                });
        },
        onFail: (error) => {
            logout();
            console.error('Kakao 로그인 실패:', error);
        },
        onLogout: () => {
            logout();
            console.info('Kakao 로그아웃');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center rounded-md p-1 pr-10 mb-4 relative overflow-hidden bg-gray-100">
                <img  src={google_login_img} alt="logo" className="w-10 h-10 mx-4 p-1.5"/>
                구글로 로그인하기
                <div className="absolute h-full w-full opacity-5">
                    <GoogleLogin
                        className="h-full w-full"
                        onSuccess={credentialResponse => google.onSuccess(credentialResponse)}
                        onError={google.onError}
                    />
                </div>
            </div>
            <div className="flex items-center rounded-md p-1 pr-10 mb-4 relative overflow-hidden bg-kakao-yellow">
                <img src={kakao_login_img} alt="logo" className="w-10 h-10 mx-4"/>
                카카오 로그인 하기
                <div className="absolute h-full w-full opacity-0">
                    <KakaoLogin
                        className="h-full w-full"
                        token={kakaoJavascriptKey}
                        onSuccess={credentialResponse => kakao.onSuccess(credentialResponse)}
                        onFail={kakao.onFail}
                        onLogout={kakao.onLogout}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
