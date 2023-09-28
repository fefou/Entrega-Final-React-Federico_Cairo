import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIvvyW3IozCqhyQQAk7PAQt0PZYld6PGQ",
  authDomain: "valu-ecommerce.firebaseapp.com",
  projectId: "valu-ecommerce",
  storageBucket: "valu-ecommerce.appspot.com",
  messagingSenderId: "656634046342",
  appId: "1:656634046342:web:8dc7e6d81d9aed5c2eae07"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
