import { Link } from 'react-router-dom';
import logo from '../../public/symbol_clear.png';

export default function Navbar() {
    return (
        <nav className="bg-black text-white flex flex-row justify-between items-center py-4 px-8 fixed top-0 left-0 w-full shadow-lg z-50 border-b-2 border-white">
            <div className="flex items-center">
                <img src={logo} alt="Apple Hacks Logo" className="h-12 mr-4"/>
                <Link to="/" className="text-2xl font-bold">Apple Hacks</Link>
            </div>
            <div className="flex gap-8">
                <Link to="/about" className="text-lg hover:text-gray-400 transition duration-300">About</Link>
                <Link to="/register" className="text-lg hover:text-gray-400 transition duration-300">Register</Link>
                <Link to="/faq" className="text-lg hover:text-gray-400 transition duration-300">FAQ</Link>
                <Link to="/contact" className="text-lg hover:text-gray-400 transition duration-300">Contact</Link>
            </div>
        </nav>
    );
}