import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: 2x2 Grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Sync Label - Column 1 Row 1 */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Sync</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              One System. One Flow. Synchronized.
            </p>
          </div>

          {/* Follow Us - Column 2 Row 1 */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
            <div className="flex gap-3 md:gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="mailto:contact@sync.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 Row 2 */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><button onClick={() => handleNavigation('home')} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">Home</button></li>
              <li><button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">About</button></li>
              <li><button onClick={() => handleNavigation('pricing')} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">Pricing</button></li>
              <li><button onClick={() => handleNavigation('contact')} className="text-gray-300 hover:text-white transition-colors text-xs md:text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info - Column 2 Row 2 */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h4>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <li>contact@sync.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business St, City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-300 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Sync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
