import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCardById } from '../data/cardsData';
import { ArrowLeft, ExternalLink, Check, ShoppingCart } from 'lucide-react';

const CardDetail = () => {
  const params = useParams();
  const cardId = params.id;
  const { t } = useTranslation();
  const card = getCardById(cardId);
  
  const defaultAccountType = card && card.accountTypes && card.accountTypes.length > 0 ? card.accountTypes[0] : 'US';
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedAccountType, setSelectedAccountType] = useState(defaultAccountType);

  if (!card) {
    return <Navigate to="/" replace />;
  }

  const handleBuyNow = () => {
    window.open(card.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const amountOptions = card.amounts || [];
  const redeemStepKeys = card.redeemSteps || [];
  const noteKeys = card.notes || [];
  const hasMultipleAccountTypes = card.accountTypes && card.accountTypes.length > 1;

  return (
    <div className="min-h-screen bg-[#0f0f10] pt-16 md:pt-24 pb-8 md:pb-16 px-3 md:px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 md:space-x-2 text-gray-400 hover:text-[#ff8800] transition-colors duration-300 mb-4 md:mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-xs md:text-base">{t('backToHome')}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 mb-8 md:mb-16">
          <div className="relative">
            <div className="relative rounded-lg md:rounded-2xl overflow-hidden border border-[#ff8800]/20 shadow-2xl shadow-[#ff8800]/10">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/50 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
              {card.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8800] to-[#ff6600] mt-1 md:mt-2 text-xl md:text-3xl lg:text-4xl">
                {t('cardDetails')}
              </span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 leading-relaxed">
              {t(card.descriptionKey)}
            </p>

            <div className="mb-4 md:mb-8">
              <h3 className="text-xs font-semibold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">
                {hasMultipleAccountTypes ? t('selectAccountType') : t('accountTypes')}
              </h3>
              {hasMultipleAccountTypes ? (
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {card.accountTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedAccountType(type)}
                      className={selectedAccountType === type
                        ? 'px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-base font-semibold transition-all duration-300 border-2 bg-[#ff8800] border-[#ff8800] text-white shadow-lg shadow-[#ff8800]/30'
                        : 'px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-base font-semibold transition-all duration-300 border-2 bg-[#1a1a1b] border-[#ff8800]/30 text-gray-300 hover:border-[#ff8800]/60 hover:bg-[#ff8800]/5'
                      }
                    >
                      {type === 'US' ? '🇺🇸 ' + t('usAccount') : '🇶🇦 ' + t('qatarAccount')}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5 md:gap-3">
                  {card.accountTypes.map((type) => (
                    <span
                      key={type}
                      className="px-2 md:px-4 py-1 md:py-2 bg-[#ff8800]/10 text-[#ff8800] rounded-lg text-xs md:text-base font-medium border border-[#ff8800]/30"
                    >
                      {type === 'US' ? '🇺🇸 ' + t('usAccount') : '🇶🇦 ' + t('qatarAccount')}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4 md:mb-8">
              <h3 className="text-xs font-semibold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">
                {t('selectAmount')}
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {amountOptions.map((amount) => {
                  const isSelected = selectedAmount === amount;
                  const priceInQAR = card.priceQAR[amount];
                  
                  return (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`relative p-2 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-300 ${
                        isSelected
                          ? 'border-[#ff8800] bg-[#ff8800]/10'
                          : 'border-[#ff8800]/20 bg-[#1a1a1b] hover:border-[#ff8800]/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-1 right-1 md:top-2 md:right-2 w-3.5 h-3.5 md:w-5 md:h-5 bg-[#ff8800] rounded-full flex items-center justify-center">
                          <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                        </div>
                      )}
                      <div className="text-center">
                        <p className="text-base md:text-xl lg:text-2xl font-bold text-white mb-0.5">${amount}</p>
                        <p className="text-xs md:text-sm text-gray-400">{priceInQAR} {t('qar')}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleBuyNow}
              className="group w-full py-2.5 md:py-4 bg-gradient-to-r from-[#ff8800] to-[#ff6600] text-white rounded-lg md:rounded-xl font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-[#ff8800]/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
              <span>{t('buyNow')}</span>
              <ExternalLink className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 md:p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <div className="w-1 md:w-2 h-5 md:h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-2 md:mr-3"></div>
              {t('aboutThisCard')}
            </h2>
            <p className="text-xs md:text-base text-gray-300 leading-relaxed">
              {t(card.aboutKey)}
            </p>
          </div>

          <div className="p-4 md:p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <div className="w-1 md:w-2 h-5 md:h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-2 md:mr-3"></div>
              {t('howToRedeem')}
            </h2>
            <ol className="space-y-2 md:space-y-3">
              {redeemStepKeys.map((stepKey, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t(stepKey)}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 md:p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <div className="w-1 md:w-2 h-5 md:h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-2 md:mr-3"></div>
              {t('importantNotes')}
            </h2>
            <ul className="space-y-2 md:space-y-3">
              {noteKeys.map((noteKey, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff8800] rounded-full mt-1.5"></div>
                  <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t(noteKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 md:p-8 bg-gradient-to-br from-[#1a1a1b] to-[#0f0f10] rounded-lg md:rounded-2xl border border-[#ff8800]/20">
            <h2 className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <div className="w-1 md:w-2 h-5 md:h-8 bg-gradient-to-b from-[#ff8800] to-[#ff6600] rounded-full mr-2 md:mr-3"></div>
              {t('purchaseProcess')}
            </h2>
            <ol className="space-y-2 md:space-y-3">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">1</span>
                <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t('purchaseStep1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">2</span>
                <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t('purchaseStep2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">3</span>
                <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t('purchaseStep3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">4</span>
                <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t('purchaseStep4')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#ff8800] to-[#ff6600] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">5</span>
                <span className="text-xs md:text-base text-gray-300 leading-relaxed">{t('purchaseStep5')}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
