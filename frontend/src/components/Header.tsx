import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo - Responsive sizing */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo3.png"
                alt="InvoiceSnap Logo"
                className="h-8 w-auto sm:h-10 md:h-12 lg:h-16 transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['features', 'pricing', 'about', 'blog', 'contact'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item}`} 
                  className={`text-sm font-medium transition-colors duration-200 relative group ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/login" 
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 relative group overflow-hidden ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-white'}`}
              >
                Sign In
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}></span>
              </Link>
              <Link 
                to="/register" 
                className={`text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${isScrolled ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white hover:from-[#0072ff] hover:to-[#00a3ff] shadow-md' : 'bg-white text-blue-600 hover:bg-white shadow-md'}`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 rounded-sm ${isScrolled ? 'bg-slate-700' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 rounded-sm ${isScrolled ? 'bg-slate-700' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} top-2`}></span>
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 rounded-sm ${isScrolled ? 'bg-slate-700' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Redesigned Mobile Menu - Fullscreen overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gradient-to-b from-[#0F172A] to-[#1E293B] transition-opacity duration-300 overflow-y-auto">
          <div className="min-h-screen flex flex-col pt-24 px-6">
            {/* Logo in menu */}
            <div className="flex justify-center mb-10">
              <img
                src="/logo3.png"
                alt="InvoiceSnap Logo"
                className="h-16 w-auto"
              />
            </div>
            
            {/* Menu links with animation */}
            <nav className="flex flex-col space-y-6">
              {['features', 'pricing', 'about', 'blog', 'contact'].map((item, index) => (
                <Link 
                  key={item}
                  to={`/${item}`} 
                  className="text-xl font-medium text-white/90 hover:text-white py-2 border-b border-white/10 relative group"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col space-y-4">
              <Link 
                to="/login" 
                className="w-full text-center text-base font-medium py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="w-full text-center text-base font-medium py-3 rounded-lg bg-white text-blue-600 hover:bg-white/90 transition-all duration-200 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
            
            {/* Social Icons */}
            <div className="mt-auto py-8">
              <div className="flex justify-center space-x-6">
                {/* Facebook */}
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;