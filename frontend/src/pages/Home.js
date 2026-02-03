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
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-3 md:px-4 overflow-hidden min-h-[70vh] md:min-h-0 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff8800]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6600]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6 md:mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/kzyugu67_D613799F-3331-4B7C-A9AB-55928EB12F62.png"
                alt="TwinzCard Logo"
                className="w-64 h-auto md:w-96 lg:w-[28rem] drop-shadow-2xl animate-fadeIn"
              />
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight px-1">
              {t('heroTitle')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8800] to-[#ff6600] mt-1 md:mt-2">
                {t('heroSubtitle')}
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2 md:px-4">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 px-3 md:px-4">
              <a
                href="#cards"
                className="group w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>{t('browseCards')}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-5 md:px-8 py-2.5 md:py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-[#ff8800]/30 hover:border-[#ff8800] hover:bg-white/10 transition-all duration-300 text-sm md:text-base"
              >
                {t('learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-8 md:py-20 px-3 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {t('ourCards')}
            </h2>
            <p className="text-base md:text-xl text-gray-400">
              {t('cardsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="group relative bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl overflow-hidden border border-[#ff8800]/20 hover:border-[#ff8800] transition-all duration-500 hover:shadow-2xl hover:shadow-[#ff8800]/20 hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative h-32 md:h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1.5 md:mb-3">
                    {card.name}
                  </h3>
                  <p className="text-xs md:text-base text-gray-400 mb-2 md:mb-4 leading-relaxed line-clamp-2">
                    {t(card.descriptionKey)}
                  </p>

                  {/* Account Types */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-4">
                    {card.accountTypes.map((type) => (
                      <span
                        key={type}
                        className="px-2 md:px-3 py-0.5 md:py-1 bg-[#ff8800]/10 text-[#ff8800] rounded-full text-xs font-medium"
                      >
                        {type === 'US' ? t('usAccount') : t('qatarAccount')}
                      </span>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="mb-3 md:mb-6">
                    <p className="text-xs text-gray-500 mb-0.5 md:mb-1">{t('availableAmounts')}</p>
                    <p className="text-base md:text-xl font-bold text-white">
                      {t('priceRange')}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-1.5 md:gap-3">
                    <Link
                      to={`/card/${card.id}`}
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium text-center hover:bg-white/10 transition-colors duration-300 border border-[#ff8800]/30 hover:border-[#ff8800] text-xs md:text-base"
                    >
                      {t('viewDetails')}
                    </Link>
                    <a
                      href={card.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center justify-center space-x-1.5 md:space-x-2 text-xs md:text-base"
                    >
                      <span>{t('buyNow')}</span>
                      <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-20 px-3 md:px-4 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {t('whyChooseUs')}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-4 md:p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl border border-[#ff8800]/20 hover:border-[#ff8800] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-lg md:rounded-2xl shadow-lg shadow-[#ff8800]/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-8 md:py-20 px-3 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
              {t('howItWorks')}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] rounded-full shadow-lg shadow-[#ff8800]/30">
                    <span className="text-lg md:text-3xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-base text-gray-400 leading-relaxed">
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
      <section className="py-8 md:py-20 px-3 md:px-4 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6 px-2">
            {t('getStarted')}
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 px-2">
            {t('ctaDescription')}
          </p>
          <a
            href="#cards"
            className="inline-flex items-center space-x-2 px-5 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300 text-sm md:text-base"
          >
            <span>{t('shopNow')}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
