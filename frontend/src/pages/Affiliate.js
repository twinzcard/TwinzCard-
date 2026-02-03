import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Users, UserPlus, DollarSign, Megaphone, BarChart3, XCircle } from 'lucide-react';

const Affiliate = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Users,
      title: t('programOverview'),
      content: t('programOverviewText')
    },
    {
      icon: UserPlus,
      title: t('howToJoin'),
      content: t('howToJoinText')
    },
    {
      icon: DollarSign,
      title: t('commission'),
      content: t('commissionText')
    },
    {
      icon: Megaphone,
      title: t('promotional'),
      content: t('promotionalText')
    },
    {
      icon: BarChart3,
      title: t('tracking'),
      content: t('trackingText')
    },
    {
      icon: XCircle,
      title: t('termination'),
      content: t('terminationText')
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
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('affiliateTitle')}
          </h1>
          <p className="text-gray-400">{t('affiliateLastUpdated')}</p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('affiliateIntro')}
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

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#ff8800]/10 to-[#ff6600]/10 rounded-2xl border border-[#ff8800]/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t('emailUs')}
          </h3>
          <p className="text-gray-300 mb-4">
            Contact us for more information about our affiliate program
          </p>
          <a
            href="mailto:Twinzcard23@outlook.sa"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff8800]/50 transition-all duration-300"
          >
            Twinzcard23@outlook.sa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
