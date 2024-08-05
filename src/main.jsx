import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";
// import dotenv from "dotenv";

// dotenv.config()

const googleClientId = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={googleClientId}>
                <App/>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
