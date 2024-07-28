import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import KakaoLogin from "react-kakao-login";
import useAuthStore from "../store/authStore.js";
import axios from "axios";

function Login() {
    const googleClientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
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
                    withCredentials: true
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
            <div className="mb-8">
                <GoogleOAuthProvider clientId={googleClientId}>
                    <GoogleLogin
                        onSuccess={credentialResponse => google.onSuccess(credentialResponse)}
                        onError={google.onError}
                    />
                </GoogleOAuthProvider>
            </div>
            <div className="mb-8">
                <KakaoLogin
                    className="bg-kakao-login bg-cover bg-center h-screen"
                    token={kakaoJavascriptKey}
                    onSuccess={credentialResponse => kakao.onSuccess(credentialResponse)}
                    onFail={kakao.onFail}
                    onLogout={kakao.onLogout}
                />
            </div>
        </div>
    );
}

export default Login;
