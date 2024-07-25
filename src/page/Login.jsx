import React from 'react'
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios";

function Login() {

    const googleClientId = '319922940823-b08eii6kg0t9t9jojpgtnop6tuc0jelk.apps.googleusercontent.com';
    const baseurl = import.meta.env.VITE_APP_API_URL;

    const socialLogin = async (url, token) => {
        try {
            console.log(import.meta.env.VITE_APP_API_URL)
            const response = await axios.put(baseurl+url, {
                token: token
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // 로그인 요청 성공 시의 응답 처리
            console.log('로그인 성공:', response.data);
            return response.data;
        } catch (error) {
            // 로그인 요청 실패 시의 에러 처리
            console.error('로그인 실패:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    const google= {
        onSuccess: (response) => {
            console.log(response);
            socialLogin('/auth/google', response.accessToken);
        },
    }

  return (
    <>
        <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    google.onSuccess(credentialResponse['credential']);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </GoogleOAuthProvider>
    </>
  )
}

export default Login
