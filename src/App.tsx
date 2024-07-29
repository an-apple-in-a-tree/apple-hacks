import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Register from './pages/Register';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;