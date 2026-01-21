import { useState } from 'react';
import logo from '../assets/SYNCSAMPLE.png';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => handleNavigation('home')} className="flex items-center gap-1 cursor-pointer">
            <img src={logo} alt="Sync Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary tracking-wide">ync</span>
          </button>
          
          <button 
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
            <span className="w-6 h-0.5 bg-primary transition-all"></span>
          </button>

          <ul className="hidden md:flex gap-4 lg:gap-8">
            <li><button onClick={() => handleNavigation('home')} className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Home</button></li>
            <li><button onClick={() => handleNavigation('about')} className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">About</button></li>
            <li><button onClick={() => handleNavigation('pricing')} className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Pricing</button></li>
            <li><button onClick={() => handleNavigation('contact')} className="text-primary hover:text-primary-light transition-colors px-2 lg:px-4 py-2 font-medium">Contact</button></li>
          </ul>
        </div>

        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li><button onClick={() => handleNavigation('home')} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Home</button></li>
            <li><button onClick={() => handleNavigation('about')} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">About</button></li>
            <li><button onClick={() => handleNavigation('pricing')} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Pricing</button></li>
            <li><button onClick={() => handleNavigation('contact')} className="block w-full text-left text-primary hover:bg-gray-100 transition-colors px-4 py-3">Contact</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
