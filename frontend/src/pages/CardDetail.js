import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCardById } from '../data/cardsData';
import { ArrowLeft, ExternalLink, Check, ShoppingCart } from 'lucide-react';

const CardDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const card = getCardById(id);
  const [selectedAmount, setSelectedAmount] = useState(null);

  if (!card) {
    return <Navigate to="/" replace />;
  }

  const handleBuyNow = () => {
    // Redirect to affiliate link
    window.open(card.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#ff8800] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>{t('backToHome')}</span>
        </Link>

        {/* Card Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Card Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#ff8800]/20 shadow-2xl shadow-[#ff8800]/10">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/50 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Card Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {card.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8800] to-[#ff6600] mt-2">
                {t('cardDetails')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(card.descriptionKey)}
            </p>

            {/* Account Types */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                {t('accountTypes')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {card.accountTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-[#ff8800]/10 text-[#ff8800] rounded-lg font-medium border border-[#ff8800]/30"
                  >
                    {type === 'US' ? t('usAccount') : t('qatarAccount')}
                  </span>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                {t('selectAmount')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {card.amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'border-[#ff8800] bg-[#ff8800]/10'
                        : 'border-[#ff8800]/20 bg-[#1a1a1b] hover:border-[#ff8800]/50'
                    }`}
                  >
                    {selectedAmount === amount && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-[#ff8800] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white mb-1">${amount}</p>
                      <p className="text-sm text-gray-400">{card.priceQAR[amount]} {t('qar')}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={handleBuyNow}
              className="group w-full py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>{t('buyNow')}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Card Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About This Card */}
          <div className="p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-3"></div>
              {t('aboutThisCard')}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t(card.aboutKey)}
            </p>
          </div>

          {/* How to Redeem */}
          <div className="p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-3"></div>
              {t('howToRedeem')}
            </h2>
            <ol className="space-y-3">
              {card.redeemSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 leading-relaxed">{t(step)}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Important Notes */}
          <div className="p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-3"></div>
              {t('importantNotes')}
            </h2>
            <ul className="space-y-3">
              {card.notes.map((note, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#ff8800] rounded-full mt-2"></div>
                  <span className="text-gray-300 leading-relaxed">{t(note)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Purchase Process */}
          <div className="p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-3"></div>
              {t('purchaseProcess')}
            </h2>
            <ol className="space-y-3">
              {[1, 2, 3, 4, 5].map((step) => (
                <li key={step} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </span>
                  <span className="text-gray-300 leading-relaxed">{t(`purchaseStep${step}`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
