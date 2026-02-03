import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/privacy', label: t('privacy') },
    { path: '/terms', label: t('terms') },
    { path: '/affiliate', label: t('affiliateRules') }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-[#ff8800]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff8800] to-[#ff6600] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <span className="text-xl font-bold text-white">{t('siteName')}</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              {t('heroSubtitle')}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-[#ff8800]" />
              <a href="mailto:Twinzcard23@outlook.sa" className="hover:text-[#ff8800] transition-colors duration-300">
                Twinzcard23@outlook.sa
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#ff8800] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#ff8800]/10 hover:bg-[#ff8800]/20 flex items-center justify-center text-[#ff8800] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#ff8800]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {t('siteName')}. {t('allRightsReserved')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('madeInQatar')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
