import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
)