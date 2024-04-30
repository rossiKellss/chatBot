import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {Toaster} from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext.jsx'
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials=true


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Toaster position='top-right'/>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
