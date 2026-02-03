import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/privacy', label: t('privacy') },
    { path: '/terms', label: t('terms') },
    { path: '/affiliate', label: t('affiliateRules') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f10]/95 backdrop-blur-lg border-b border-[#ff8800]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#ff8800] to-[#ff6600] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-base md:text-xl">TC</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-white">{t('siteName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#ff8800]'
                    : 'text-gray-300 hover:text-[#ff8800]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 md:space-x-2 px-3 md:px-4 py-2 rounded-lg bg-[#ff8800]/10 hover:bg-[#ff8800]/20 text-[#ff8800] transition-colors duration-300"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#ff8800] hover:bg-[#ff8800]/10 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 md:py-4 border-t border-[#ff8800]/20">
            <nav className="flex flex-col space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'bg-[#ff8800]/20 text-[#ff8800]'
                      : 'text-gray-300 hover:text-[#ff8800] hover:bg-[#ff8800]/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
