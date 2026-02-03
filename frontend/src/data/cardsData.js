export const cardsData = [
  {
    id: 'steam',
    name: 'Steam',
    image: 'https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/4834i1n2_IMG_0230.JPG',
    descriptionKey: 'steamDesc',
    accountTypes: ['US', 'Qatar'],
    affiliateLink: 'https://example.com/affiliate/steam', // Placeholder - to be replaced
    amounts: [10, 25, 50],
    priceQAR: {
      10: 36.5,
      25: 91,
      50: 182
    },
    aboutKey: 'steamAbout',
    redeemSteps: ['steamRedeem1', 'steamRedeem2', 'steamRedeem3', 'steamRedeem4'],
    notes: ['steamNote1', 'steamNote2', 'steamNote3']
  },
  {
    id: 'playstation',
    name: 'PlayStation',
    image: 'https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/oe1o8jd5_playstation.jpg',
    descriptionKey: 'playstationDesc',
    accountTypes: ['US', 'Qatar'],
    affiliateLink: 'https://example.com/affiliate/playstation', // Placeholder - to be replaced
    amounts: [10, 25, 50],
    priceQAR: {
      10: 36.5,
      25: 91,
      50: 182
    },
    aboutKey: 'psAbout',
    redeemSteps: ['psRedeem1', 'psRedeem2', 'psRedeem3', 'psRedeem4'],
    notes: ['psNote1', 'psNote2', 'psNote3']
  },
  {
    id: 'xbox',
    name: 'Xbox',
    image: 'https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/x5mlb9w9_xbox.jpg',
    descriptionKey: 'xboxDesc',
    accountTypes: ['US', 'Qatar'],
    affiliateLink: 'https://example.com/affiliate/xbox', // Placeholder - to be replaced
    amounts: [10, 25, 50],
    priceQAR: {
      10: 36.5,
      25: 91,
      50: 182
    },
    aboutKey: 'xboxAbout',
    redeemSteps: ['xboxRedeem1', 'xboxRedeem2', 'xboxRedeem3', 'xboxRedeem4'],
    notes: ['xboxNote1', 'xboxNote2', 'xboxNote3']
  },
  {
    id: 'googleplay',
    name: 'Google Play',
    image: 'https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/d0sp2a5k_googleplay.jpg',
    descriptionKey: 'googleDesc',
    accountTypes: ['US'],
    affiliateLink: 'https://example.com/affiliate/googleplay', // Placeholder - to be replaced
    amounts: [10, 25, 50],
    priceQAR: {
      10: 36.5,
      25: 91,
      50: 182
    },
    aboutKey: 'googleAbout',
    redeemSteps: ['googleRedeem1', 'googleRedeem2', 'googleRedeem3', 'googleRedeem4'],
    notes: ['googleNote1', 'googleNote2', 'googleNote3']
  },
  {
    id: 'apple',
    name: 'Apple',
    image: 'https://customer-assets.emergentagent.com/job_gaming-cards-qa/artifacts/no7p8dw8_apple.jpg',
    descriptionKey: 'appleDesc',
    accountTypes: ['US'],
    affiliateLink: 'https://example.com/affiliate/apple', // Placeholder - to be replaced
    amounts: [10, 25, 50],
    priceQAR: {
      10: 36.5,
      25: 91,
      50: 182
    },
    aboutKey: 'appleAbout',
    redeemSteps: ['appleRedeem1', 'appleRedeem2', 'appleRedeem3', 'appleRedeem4'],
    notes: ['appleNote1', 'appleNote2', 'appleNote3']
  }
];

export const getCardById = (id) => {
  return cardsData.find(card => card.id === id);
};
