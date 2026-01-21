import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/SYNCSAMPLE.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-1">
            <img src={logo} alt="Sync Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary tracking-wide">ync</span>
          </Link>
          
          <button 
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
          </button>

          <ul className="hidden md:flex gap-4 lg:gap-8">
            <li><Link to="/" className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Home</Link></li>
            <li><Link to="/about" className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">About</Link></li>
            <li><Link to="/pricing" className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Pricing</Link></li>
            <li><Link to="/contact" className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Contact</Link></li>
          </ul>
        </div>

        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">About</Link></li>
            <li><Link to="/pricing" onClick={() => setIsOpen(false)} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Pricing</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Contact</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
