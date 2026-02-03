import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cardsData } from '../data/cardsData';
import { ArrowRight, Zap, Shield, Clock, TrendingDown, ChevronRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('instantDelivery'),
      description: t('instantDeliveryDesc')
    },
    {
      icon: Shield,
      title: t('securePayment'),
      description: t('securePaymentDesc')
    },
    {
      icon: Clock,
      title: t('support'),
      description: t('supportDesc')
    },
    {
      icon: TrendingDown,
      title: t('bestPrices'),
      description: t('bestPricesDesc')
    }
  ];

  const steps = [
    { number: '01', title: t('step1'), description: t('step1Desc') },
    { number: '02', title: t('step2'), description: t('step2Desc') },
    { number: '03', title: t('step3'), description: t('step3Desc') },
    { number: '04', title: t('step4'), description: t('step4Desc') }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff8800]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6600]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('heroTitle')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8800] to-[#ff6600]">
                {t('heroSubtitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cards"
                className="group px-8 py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center space-x-2"
              >
                <span>{t('browseCards')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-[#ff8800]/30 hover:border-[#ff8800] hover:bg-white/10 transition-all duration-300"
              >
                {t('learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('ourCards')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('cardsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="group relative bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl overflow-hidden border border-[#ff8800]/20 hover:border-[#ff8800] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff8800]/20 hover:-translate-y-2"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {t(card.descriptionKey)}
                  </p>

                  {/* Account Types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.accountTypes.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 bg-[#ff8800]/10 text-[#ff8800] rounded-full text-sm font-medium"
                      >
                        {type === 'US' ? t('usAccount') : t('qatarAccount')}
                      </span>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">{t('availableAmounts')}</p>
                    <p className="text-xl font-bold text-white">
                      {t('priceRange')}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      to={`/card/${card.id}`}
                      className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium text-center hover:bg-white/10 transition-colors duration-300 border border-[#ff8800]/30 hover:border-[#ff8800]"
                    >
                      {t('viewDetails')}
                    </Link>
                    <a
                      href={card.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>{t('buyNow')}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('whyChooseUs')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20 hover:border-[#ff8800] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-2xl shadow-lg shadow-[#ff8800]/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('howItWorks')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-full shadow-lg shadow-[#ff8800]/30">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#ff8800]/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('getStarted')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('ctaDescription')}
          </p>
          <a
            href="#cards"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300"
          >
            <span>{t('shopNow')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
