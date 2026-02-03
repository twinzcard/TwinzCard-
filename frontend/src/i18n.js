import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header & Navigation
      "siteName": "TwinzCard",
      "home": "Home",
      "cards": "Cards",
      "about": "About",
      "contact": "Contact",
      "privacy": "Privacy Policy",
      "terms": "Terms & Conditions",
      "affiliateRules": "Affiliate Rules",
      
      // Hero Section
      "heroTitle": "Digital Gift Cards",
      "heroSubtitle": "Get instant access to your favorite gaming platforms",
      "heroDescription": "Purchase digital gift cards for PlayStation, Xbox, Steam, Google Play, and Apple. Fast delivery, secure payment, and 24/7 support.",
      "browseCards": "Browse Cards",
      "learnMore": "Learn More",
      
      // Cards Section
      "ourCards": "Our Gift Cards",
      "cardsDescription": "Choose from our premium selection of digital gift cards",
      "viewDetails": "View Details",
      "buyNow": "Buy Now",
      "availableAmounts": "Available Amounts",
      "accountTypes": "Account Types",
      "usAccount": "US Account",
      "qatarAccount": "Qatar Account",
      
      // Card Descriptions
      "steamDesc": "Access thousands of games on the world's largest gaming platform",
      "playstationDesc": "Enhance your PlayStation gaming experience with exclusive content",
      "xboxDesc": "Unlock premium gaming content on Xbox consoles and PC",
      "googlePlayDesc": "Get apps, games, movies, and more on your Android device",
      "appleDesc": "Access the App Store, Apple Music, iCloud, and more",
      
      // Pricing
      "priceRange": "$10 - $50",
      "selectAmount": "Select Amount",
      "qar": "QAR",
      "usd": "USD",
      
      // Features
      "whyChooseUs": "Why Choose TwinzCard",
      "instantDelivery": "Instant Delivery",
      "instantDeliveryDesc": "Receive your digital code instantly after purchase",
      "securePayment": "Secure Payment",
      "securePaymentDesc": "Safe and encrypted payment processing",
      "support": "24/7 Support",
      "supportDesc": "Our team is always here to help you",
      "bestPrices": "Best Prices",
      "bestPricesDesc": "Competitive prices in Qatari Riyals",
      
      // How It Works
      "howItWorks": "How It Works",
      "step1": "Choose Your Card",
      "step1Desc": "Select the gift card you want",
      "step2": "Select Amount",
      "step2Desc": "Choose from $10 to $50",
      "step3": "Complete Purchase",
      "step3Desc": "Secure checkout process",
      "step4": "Receive Code",
      "step4Desc": "Get your code instantly",
      
      // Footer
      "quickLinks": "Quick Links",
      "legal": "Legal",
      "followUs": "Follow Us",
      "emailUs": "Email Us",
      "allRightsReserved": "All rights reserved",
      "madeInQatar": "Made in Qatar 🇶🇦",
      
      // Card Details Page
      "backToHome": "Back to Home",
      "cardDetails": "Card Details",
      "aboutThisCard": "About This Card",
      "howToRedeem": "How to Redeem",
      "importantNotes": "Important Notes",
      "purchaseProcess": "Purchase Process",
      
      // Steam Details
      "steamAbout": "Steam Gift Cards are the perfect way to add funds to your Steam Wallet. Use them to purchase games, software, hardware, and any other item available on Steam.",
      "steamRedeem1": "Log in to your Steam account",
      "steamRedeem2": "Click on 'Games' menu and select 'Redeem a Steam Wallet Code'",
      "steamRedeem3": "Enter the code you received",
      "steamRedeem4": "Funds will be added to your Steam Wallet instantly",
      "steamNote1": "Codes are region-specific and must match your account region",
      "steamNote2": "Cannot be refunded or exchanged for cash",
      "steamNote3": "Valid for accounts in supported regions only",
      
      // PlayStation Details
      "psAbout": "PlayStation Store Gift Cards let you add funds to your PlayStation Network wallet. Use them to purchase games, DLC, subscriptions, and more on PS5, PS4, and other PlayStation devices.",
      "psRedeem1": "Sign in to PlayStation Network",
      "psRedeem2": "Go to PlayStation Store",
      "psRedeem3": "Select 'Redeem Codes' from the menu",
      "psRedeem4": "Enter your 12-digit code",
      "psNote1": "Available for US and Qatar accounts",
      "psNote2": "Codes are region-locked",
      "psNote3": "Check your account region before purchase",
      
      // Xbox Details
      "xboxAbout": "Xbox Gift Cards can be used to purchase games, apps, movies, TV shows, and more on Xbox consoles, Windows PCs, and mobile devices.",
      "xboxRedeem1": "Press the Xbox button to open the guide",
      "xboxRedeem2": "Select 'Store' then 'Redeem'",
      "xboxRedeem3": "Enter the 25-character code",
      "xboxRedeem4": "Confirm to add funds to your account",
      "xboxNote1": "Works on Xbox Series X|S, Xbox One, and Windows 10/11",
      "xboxNote2": "Available for US and Qatar accounts",
      "xboxNote3": "Can be used for Game Pass subscriptions",
      
      // Google Play Details
      "googleAbout": "Google Play Gift Cards give you access to millions of apps, games, movies, books, and more on Google Play. Perfect for Android users.",
      "googleRedeem1": "Open the Google Play Store app",
      "googleRedeem2": "Tap the menu icon and select 'Redeem'",
      "googleRedeem3": "Enter the code",
      "googleRedeem4": "Tap 'Redeem' to add credit to your account",
      "googleNote1": "US accounts only",
      "googleNote2": "Code must be redeemed within validity period",
      "googleNote3": "Cannot be used for Play Pass subscriptions in some regions",
      
      // Apple Details
      "appleAbout": "Apple Gift Cards can be used for purchases on the App Store, Apple Music, Apple TV+, iCloud storage, and more. Perfect for iPhone, iPad, and Mac users.",
      "appleRedeem1": "Open the App Store on your device",
      "appleRedeem2": "Tap your profile icon at the top",
      "appleRedeem3": "Tap 'Redeem Gift Card or Code'",
      "appleRedeem4": "Enter the code manually or use camera",
      "appleNote1": "US accounts only",
      "appleNote2": "Cannot be used for iTunes Match",
      "appleNote3": "Check balance in Account Settings",
      
      // Purchase Steps
      "purchaseStep1": "Click 'Buy Now' button below",
      "purchaseStep2": "You will be redirected to our secure partner",
      "purchaseStep3": "Select your desired amount ($10-$50)",
      "purchaseStep4": "Complete the payment process",
      "purchaseStep5": "Receive your code via email instantly",
      
      // Privacy Policy
      "privacyTitle": "Privacy Policy",
      "privacyIntro": "At TwinzCard, we are committed to protecting your privacy and ensuring the security of your personal information.",
      "privacyLastUpdated": "Last Updated: December 2025",
      "infoCollection": "Information We Collect",
      "infoCollectionText": "We collect information necessary to process your orders, including email address, payment information, and purchase history. We use secure payment processors and do not store credit card details.",
      "howWeUse": "How We Use Your Information",
      "howWeUseText": "Your information is used solely to process orders, provide customer support, send order confirmations, and improve our services. We never sell your data to third parties.",
      "dataSecurity": "Data Security",
      "dataSecurityText": "We implement industry-standard security measures to protect your personal information. All transactions are encrypted using SSL technology.",
      "yourRights": "Your Rights",
      "yourRightsText": "You have the right to access, modify, or delete your personal information. Contact us at Twinzcard23@outlook.sa for any privacy concerns.",
      
      // Terms & Conditions
      "termsTitle": "Terms & Conditions",
      "termsIntro": "Please read these terms carefully before using TwinzCard services.",
      "termsLastUpdated": "Last Updated: December 2025",
      "acceptance": "Acceptance of Terms",
      "acceptanceText": "By using TwinzCard, you agree to these terms and conditions. If you do not agree, please do not use our services.",
      "productDelivery": "Product Delivery",
      "productDeliveryText": "Digital gift card codes are delivered via email within minutes of purchase confirmation. Please check your spam folder if you don't receive the email.",
      "refundPolicy": "Refund Policy",
      "refundPolicyText": "Due to the digital nature of our products, all sales are final. Refunds are only provided in case of technical errors or if the code is invalid.",
      "accountResponsibility": "Account Responsibility",
      "accountResponsibilityText": "You are responsible for ensuring that the gift card matches your account region. We are not responsible for region mismatch issues.",
      "prohibitedUse": "Prohibited Use",
      "prohibitedUseText": "You may not use our services for fraudulent activities, reselling without authorization, or any illegal purposes.",
      "limitation": "Limitation of Liability",
      "limitationText": "TwinzCard is not liable for any indirect damages arising from the use of our services. Our liability is limited to the purchase price of the product.",
      
      // Affiliate Rules
      "affiliateTitle": "Affiliate Program Rules",
      "affiliateIntro": "Welcome to the TwinzCard Affiliate Program. Please review these rules carefully.",
      "affiliateLastUpdated": "Last Updated: December 2025",
      "programOverview": "Program Overview",
      "programOverviewText": "Our affiliate program allows partners to earn commissions by promoting TwinzCard gift cards. We work with trusted affiliate networks to ensure fair and transparent partnerships.",
      "howToJoin": "How to Join",
      "howToJoinText": "We partner with leading affiliate networks including Admitad. Apply through these networks to get access to our affiliate links and promotional materials.",
      "commission": "Commission Structure",
      "commissionText": "Earn competitive commissions on every successful sale. Commission rates vary by product and are defined by the affiliate network.",
      "promotional": "Promotional Guidelines",
      "promotionalText": "Affiliates must clearly disclose their relationship with TwinzCard. Misleading advertising, spam, or fraudulent practices are strictly prohibited and will result in termination.",
      "tracking": "Tracking & Payments",
      "trackingText": "All sales are tracked through the affiliate network's system. Payments are processed according to the network's payment schedule and terms.",
      "termination": "Termination",
      "terminationText": "We reserve the right to terminate affiliate partnerships for violations of these rules, fraudulent activity, or at our discretion.",
      
      // CTA
      "getStarted": "Get Started Today",
      "ctaDescription": "Join thousands of satisfied customers who trust TwinzCard for their digital gift card needs",
      "shopNow": "Shop Now",
      
      // Misc
      "loading": "Loading...",
      "error": "An error occurred",
      "tryAgain": "Try Again"
    }
  },
  ar: {
    translation: {
      // Header & Navigation
      "siteName": "TwinzCard",
      "home": "الرئيسية",
      "cards": "البطاقات",
      "about": "من نحن",
      "contact": "تواصل",
      "privacy": "سياسة الخصوصية",
      "terms": "الشروط والأحكام",
      "affiliateRules": "قوانين الشراكة",
      
      // Hero Section
      "heroTitle": "بطاقات هدايا رقمية",
      "heroSubtitle": "احصل على وصول فوري لمنصات الألعاب المفضلة لديك",
      "heroDescription": "اشترِ بطاقات هدايا رقمية لـ PlayStation و Xbox و Steam و Google Play و Apple. توصيل سريع، دفع آمن، ودعم على مدار الساعة.",
      "browseCards": "تصفح البطاقات",
      "learnMore": "اعرف المزيد",
      
      // Cards Section
      "ourCards": "بطاقاتنا",
      "cardsDescription": "اختر من مجموعتنا المميزة من بطاقات الهدايا الرقمية",
      "viewDetails": "عرض التفاصيل",
      "buyNow": "اشترِ الآن",
      "availableAmounts": "الفئات المتاحة",
      "accountTypes": "أنواع الحسابات",
      "usAccount": "حساب أمريكي",
      "qatarAccount": "حساب قطري",
      
      // Card Descriptions
      "steamDesc": "احصل على آلاف الألعاب على أكبر منصة ألعاب في العالم",
      "playstationDesc": "عزز تجربة ألعاب PlayStation الخاصة بك مع محتوى حصري",
      "xboxDesc": "افتح محتوى ألعاب مميز على أجهزة Xbox والكمبيوتر",
      "googlePlayDesc": "احصل على التطبيقات والألعاب والأفلام والمزيد على جهاز Android",
      "appleDesc": "الوصول إلى App Store و Apple Music و iCloud والمزيد",
      
      // Pricing
      "priceRange": "10 - 50 دولار",
      "selectAmount": "اختر المبلغ",
      "qar": "ريال قطري",
      "usd": "دولار",
      
      // Features
      "whyChooseUs": "لماذا تختار TwinzCard",
      "instantDelivery": "توصيل فوري",
      "instantDeliveryDesc": "احصل على الكود الرقمي فوراً بعد الشراء",
      "securePayment": "دفع آمن",
      "securePaymentDesc": "معالجة دفع آمنة ومشفرة",
      "support": "دعم 24/7",
      "supportDesc": "فريقنا موجود دائماً لمساعدتك",
      "bestPrices": "أفضل الأسعار",
      "bestPricesDesc": "أسعار تنافسية بالريال القطري",
      
      // How It Works
      "howItWorks": "كيف يعمل",
      "step1": "اختر بطاقتك",
      "step1Desc": "حدد بطاقة الهدايا التي تريدها",
      "step2": "اختر المبلغ",
      "step2Desc": "اختر من 10 إلى 50 دولار",
      "step3": "أكمل الشراء",
      "step3Desc": "عملية دفع آمنة",
      "step4": "استلم الكود",
      "step4Desc": "احصل على الكود فوراً",
      
      // Footer
      "quickLinks": "روابط سريعة",
      "legal": "قانوني",
      "followUs": "تابعنا",
      "emailUs": "راسلنا",
      "allRightsReserved": "جميع الحقوق محفوظة",
      "madeInQatar": "صنع في قطر 🇶🇦",
      
      // Card Details Page
      "backToHome": "العودة للرئيسية",
      "cardDetails": "تفاصيل البطاقة",
      "aboutThisCard": "حول هذه البطاقة",
      "howToRedeem": "كيفية الاستخدام",
      "importantNotes": "ملاحظات هامة",
      "purchaseProcess": "عملية الشراء",
      
      // Steam Details
      "steamAbout": "بطاقات هدايا Steam هي الطريقة المثالية لإضافة أموال إلى محفظة Steam الخاصة بك. استخدمها لشراء الألعاب والبرامج والأجهزة وأي عنصر آخر متاح على Steam.",
      "steamRedeem1": "قم بتسجيل الدخول إلى حساب Steam الخاص بك",
      "steamRedeem2": "انقر على قائمة 'الألعاب' واختر 'استرداد رمز محفظة Steam'",
      "steamRedeem3": "أدخل الكود الذي استلمته",
      "steamRedeem4": "ستتم إضافة الأموال إلى محفظة Steam على الفور",
      "steamNote1": "الأكواد خاصة بالمنطقة ويجب أن تتطابق مع منطقة حسابك",
      "steamNote2": "لا يمكن استردادها أو استبدالها بنقود",
      "steamNote3": "صالحة للحسابات في المناطق المدعومة فقط",
      
      // PlayStation Details
      "psAbout": "بطاقات هدايا PlayStation Store تتيح لك إضافة أموال إلى محفظة PlayStation Network. استخدمها لشراء الألعاب و DLC والاشتراكات والمزيد على PS5 و PS4 وأجهزة PlayStation الأخرى.",
      "psRedeem1": "قم بتسجيل الدخول إلى PlayStation Network",
      "psRedeem2": "انتقل إلى PlayStation Store",
      "psRedeem3": "اختر 'استرداد الأكواد' من القائمة",
      "psRedeem4": "أدخل الكود المكون من 12 رقماً",
      "psNote1": "متاح للحسابات الأمريكية والقطرية",
      "psNote2": "الأكواد مقفلة بالمنطقة",
      "psNote3": "تحقق من منطقة حسابك قبل الشراء",
      
      // Xbox Details
      "xboxAbout": "يمكن استخدام بطاقات هدايا Xbox لشراء الألعاب والتطبيقات والأفلام والبرامج التلفزيونية والمزيد على أجهزة Xbox وأجهزة الكمبيوتر التي تعمل بنظام Windows والأجهزة المحمولة.",
      "xboxRedeem1": "اضغط على زر Xbox لفتح الدليل",
      "xboxRedeem2": "حدد 'المتجر' ثم 'الاسترداد'",
      "xboxRedeem3": "أدخل الكود المكون من 25 حرفاً",
      "xboxRedeem4": "قم بالتأكيد لإضافة الأموال إلى حسابك",
      "xboxNote1": "يعمل على Xbox Series X|S و Xbox One و Windows 10/11",
      "xboxNote2": "متاح للحسابات الأمريكية والقطرية",
      "xboxNote3": "يمكن استخدامه لاشتراكات Game Pass",
      
      // Google Play Details
      "googleAbout": "بطاقات هدايا Google Play تمنحك الوصول إلى ملايين التطبيقات والألعاب والأفلام والكتب والمزيد على Google Play. مثالية لمستخدمي Android.",
      "googleRedeem1": "افتح تطبيق متجر Google Play",
      "googleRedeem2": "انقر على أيقونة القائمة واختر 'استرداد'",
      "googleRedeem3": "أدخل الكود",
      "googleRedeem4": "انقر على 'استرداد' لإضافة الرصيد إلى حسابك",
      "googleNote1": "للحسابات الأمريكية فقط",
      "googleNote2": "يجب استرداد الكود خلال فترة الصلاحية",
      "googleNote3": "لا يمكن استخدامه لاشتراكات Play Pass في بعض المناطق",
      
      // Apple Details
      "appleAbout": "يمكن استخدام بطاقات هدايا Apple للمشتريات على App Store و Apple Music و Apple TV+ وتخزين iCloud والمزيد. مثالية لمستخدمي iPhone و iPad و Mac.",
      "appleRedeem1": "افتح App Store على جهازك",
      "appleRedeem2": "انقر على أيقونة ملفك الشخصي في الأعلى",
      "appleRedeem3": "انقر على 'استرداد بطاقة هدايا أو كود'",
      "appleRedeem4": "أدخل الكود يدوياً أو استخدم الكاميرا",
      "appleNote1": "للحسابات الأمريكية فقط",
      "appleNote2": "لا يمكن استخدامه لـ iTunes Match",
      "appleNote3": "تحقق من الرصيد في إعدادات الحساب",
      
      // Purchase Steps
      "purchaseStep1": "انقر على زر 'اشترِ الآن' أدناه",
      "purchaseStep2": "سيتم إعادة توجيهك إلى شريكنا الآمن",
      "purchaseStep3": "اختر المبلغ المطلوب (10-50 دولار)",
      "purchaseStep4": "أكمل عملية الدفع",
      "purchaseStep5": "استلم الكود عبر البريد الإلكتروني فوراً",
      
      // Privacy Policy
      "privacyTitle": "سياسة الخصوصية",
      "privacyIntro": "في TwinzCard، نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية.",
      "privacyLastUpdated": "آخر تحديث: ديسمبر 2025",
      "infoCollection": "المعلومات التي نجمعها",
      "infoCollectionText": "نجمع المعلومات الضرورية لمعالجة طلباتك، بما في ذلك عنوان البريد الإلكتروني ومعلومات الدفع وسجل الشراء. نستخدم معالجات دفع آمنة ولا نخزن تفاصيل بطاقة الائتمان.",
      "howWeUse": "كيف نستخدم معلوماتك",
      "howWeUseText": "تُستخدم معلوماتك فقط لمعالجة الطلبات وتوفير دعم العملاء وإرسال تأكيدات الطلب وتحسين خدماتنا. نحن لا نبيع بياناتك لأطراف ثالثة أبداً.",
      "dataSecurity": "أمان البيانات",
      "dataSecurityText": "نطبق تدابير أمنية معيارية في الصناعة لحماية معلوماتك الشخصية. جميع المعاملات مشفرة باستخدام تقنية SSL.",
      "yourRights": "حقوقك",
      "yourRightsText": "لديك الحق في الوصول إلى معلوماتك الشخصية أو تعديلها أو حذفها. اتصل بنا على Twinzcard23@outlook.sa لأي مخاوف تتعلق بالخصوصية.",
      
      // Terms & Conditions
      "termsTitle": "الشروط والأحكام",
      "termsIntro": "يرجى قراءة هذه الشروط بعناية قبل استخدام خدمات TwinzCard.",
      "termsLastUpdated": "آخر تحديث: ديسمبر 2025",
      "acceptance": "قبول الشروط",
      "acceptanceText": "باستخدام TwinzCard، فإنك توافق على هذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.",
      "productDelivery": "توصيل المنتج",
      "productDeliveryText": "يتم توصيل أكواد بطاقات الهدايا الرقمية عبر البريد الإلكتروني في غضون دقائق من تأكيد الشراء. يرجى التحقق من مجلد البريد العشوائي إذا لم تتلق البريد الإلكتروني.",
      "refundPolicy": "سياسة الاسترداد",
      "refundPolicyText": "نظراً للطبيعة الرقمية لمنتجاتنا، فإن جميع المبيعات نهائية. يتم توفير المبالغ المستردة فقط في حالة حدوث أخطاء فنية أو إذا كان الكود غير صالح.",
      "accountResponsibility": "مسؤولية الحساب",
      "accountResponsibilityText": "أنت مسؤول عن التأكد من أن بطاقة الهدايا تتطابق مع منطقة حسابك. نحن لسنا مسؤولين عن مشاكل عدم تطابق المنطقة.",
      "prohibitedUse": "الاستخدام المحظور",
      "prohibitedUseText": "لا يجوز لك استخدام خدماتنا للأنشطة الاحتيالية أو إعادة البيع دون إذن أو أي أغراض غير قانونية.",
      "limitation": "تحديد المسؤولية",
      "limitationText": "TwinzCard غير مسؤول عن أي أضرار غير مباشرة ناتجة عن استخدام خدماتنا. تقتصر مسؤوليتنا على سعر شراء المنتج.",
      
      // Affiliate Rules
      "affiliateTitle": "قوانين برنامج الشراكة",
      "affiliateIntro": "مرحباً بك في برنامج شراكة TwinzCard. يرجى مراجعة هذه القوانين بعناية.",
      "affiliateLastUpdated": "آخر تحديث: ديسمبر 2025",
      "programOverview": "نظرة عامة على البرنامج",
      "programOverviewText": "يسمح برنامج الشراكة الخاص بنا للشركاء بكسب عمولات من خلال الترويج لبطاقات هدايا TwinzCard. نعمل مع شبكات شراكة موثوقة لضمان شراكات عادلة وشفافة.",
      "howToJoin": "كيفية الانضمام",
      "howToJoinText": "نحن نتشارك مع شبكات شراكة رائدة بما في ذلك Admitad. قدم طلباً من خلال هذه الشبكات للحصول على روابط الشراكة والمواد الترويجية.",
      "commission": "هيكل العمولة",
      "commissionText": "احصل على عمولات تنافسية على كل عملية بيع ناجحة. تختلف معدلات العمولة حسب المنتج ويتم تحديدها من قبل شبكة الشراكة.",
      "promotional": "إرشادات الترويج",
      "promotionalText": "يجب على الشركاء الإفصاح بوضوح عن علاقتهم بـ TwinzCard. الإعلانات المضللة أو البريد العشوائي أو الممارسات الاحتيالية محظورة بشكل صارم وستؤدي إلى الإنهاء.",
      "tracking": "التتبع والمدفوعات",
      "trackingText": "يتم تتبع جميع المبيعات من خلال نظام شبكة الشراكة. تتم معالجة المدفوعات وفقاً لجدول الدفع وشروط الشبكة.",
      "termination": "الإنهاء",
      "terminationText": "نحتفظ بالحق في إنهاء شراكات الشراكة لانتهاكات هذه القوانين أو النشاط الاحتيالي أو وفقاً لتقديرنا.",
      
      // CTA
      "getStarted": "ابدأ اليوم",
      "ctaDescription": "انضم إلى آلاف العملاء الراضين الذين يثقون في TwinzCard لاحتياجات بطاقات الهدايا الرقمية",
      "shopNow": "تسوق الآن",
      
      // Misc
      "loading": "جاري التحميل...",
      "error": "حدث خطأ",
      "tryAgain": "حاول مرة أخرى"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
