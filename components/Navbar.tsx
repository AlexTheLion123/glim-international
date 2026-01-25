import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS, CHURCH_ACRONYM } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-glim-dark/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-glim-gold to-glim-purple flex items-center justify-center shadow-lg shadow-glim-gold/20">
               <Globe className="text-white w-6 h-6" />
            </div>
            <span className="font-serif font-bold text-xl xl:text-2xl text-white tracking-wide">
              <span className="xl:hidden">{CHURCH_ACRONYM} International</span>
              <span className="hidden xl:inline">{CHURCH_ACRONYM}</span>
            </span>
          </div>
          
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-glim-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-glim-gold text-glim-dark px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-all transform hover:scale-105"
              >
                Join Us
              </a>
            </div>
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-glim-dark/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-glim-gold block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-glim-dark bg-glim-gold block px-3 py-3 mt-4 rounded-md text-base font-bold text-center"
              >
                Join Us
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
