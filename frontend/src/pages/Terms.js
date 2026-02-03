import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, FileCheck, Package, RefreshCw, UserCheck, AlertTriangle, Scale } from 'lucide-react';

const Terms = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: FileCheck,
      title: t('acceptance'),
      content: t('acceptanceText')
    },
    {
      icon: Package,
      title: t('productDelivery'),
      content: t('productDeliveryText')
    },
    {
      icon: RefreshCw,
      title: t('refundPolicy'),
      content: t('refundPolicyText')
    },
    {
      icon: UserCheck,
      title: t('accountResponsibility'),
      content: t('accountResponsibilityText')
    },
    {
      icon: AlertTriangle,
      title: t('prohibitedUse'),
      content: t('prohibitedUseText')
    },
    {
      icon: Scale,
      title: t('limitation'),
      content: t('limitationText')
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10] pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#ff8800] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>{t('backToHome')}</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-2xl shadow-lg shadow-[#ff8800]/30">
            <FileCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('termsTitle')}
          </h1>
          <p className="text-gray-400">{t('termsLastUpdated')}</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('termsIntro')}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20 hover:border-[#ff8800]/40 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#ff8800]/10 to-[#ff6600]/10 rounded-2xl border border-[#ff8800]/30 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            {t('emailUs')}
          </h3>
          <a
            href="mailto:Twinzcard23@outlook.sa"
            className="text-[#ff8800] hover:text-[#ff6600] font-medium transition-colors duration-300"
          >
            Twinzcard23@outlook.sa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terms;
