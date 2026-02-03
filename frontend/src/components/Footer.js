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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-3 md:mb-4 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/kzyugu67_D613799F-3331-4B7C-A9AB-55928EB12F62.png"
                alt="TwinzCard"
                className="h-10 md:h-12 w-auto transform group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-3 md:mb-4">
              {t('heroSubtitle')}
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ff8800] flex-shrink-0" />
              <a href="mailto:Twinzcard23@outlook.sa" className="hover:text-[#ff8800] transition-colors duration-300 break-all">
                Twinzcard23@outlook.sa
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#ff8800] transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">{t('followUs')}</h3>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[#ff8800]/10 hover:bg-[#ff8800]/20 flex items-center justify-center text-[#ff8800] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-[#ff8800]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-gray-400 text-xs md:text-sm">
              © {currentYear} {t('siteName')}. {t('allRightsReserved')}
            </p>
            <p className="text-gray-400 text-xs md:text-sm">
              {t('madeInQatar')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
