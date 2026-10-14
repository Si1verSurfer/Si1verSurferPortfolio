export type CaseStudyContent = {
  problem: string;
  roleDetail: string;
  outcomes: string[];
};

export type LocalizedCaseStudy = {
  en: CaseStudyContent;
  ar: CaseStudyContent;
};

/** Case study depth — informed by local repos (BoriSystem, haykl_app, etc.) */
export const PROJECT_CASE_STUDIES: Record<string, LocalizedCaseStudy> = {
  bori: {
    en: {
      problem:
        "Families in Saudi Arabia needed a trusted way to subscribe to a private driver, schedule commutes, and track trips without juggling calls and spreadsheets.",
      roleDetail:
        "Led the family Flutter app and backend integration — subscriptions, live maps, OTP auth, and App Store release alongside the driver companion product.",
      outcomes: [
        "Shipped family + driver iOS apps (v1.1) with live trip tracking and monthly plans",
        "Production API, admin dashboard, and legal site on basiii.com infrastructure",
        "End-to-end flows: OTP, KYC handoff to drivers, and WebSocket-backed ride state",
      ],
    },
    ar: {
      problem:
        "العائلات في السعودية تحتاج طريقة موثوقة للاشتراك مع سائق خاص، جدولة الرحلات، وتتبّعها دون فوضى مكالمات وجداول يدوية.",
      roleDetail:
        "قيادة تطبيق العائلة Flutter وربط الباكند — اشتراكات، خرائط مباشرة، OTP، وإطلاق App Store إلى جانب تطبيق السائق.",
      outcomes: [
        "إطلاق تطبيقي العائلة والسائق (1.1) مع تتبّع مباشر وخطط شهرية",
        "API إنتاجي ولوحة إدارة وموقع قانوني على basiii.com",
        "مسارات كاملة: OTP، KYC للسائقين، وحالة الرحلة عبر WebSocket",
      ],
    },
  },
  "bori-driver": {
    en: {
      problem:
        "Certified drivers needed one app to finish onboarding, run subscription routes, and resume active trips safely after login.",
      roleDetail:
        "Built the driver Flutter app — KYC uploads, map navigation, earnings views, and parity with family-app API contracts.",
      outcomes: [
        "Driver app on the App Store with OTP and Sign in with Apple stability fixes",
        "Active-trip resume and scheduled vs on-demand ride modes",
        "Shared backend with rate limits for location and OTP endpoints",
      ],
    },
    ar: {
      problem:
        "السائقون المعتمدون يحتاجون تطبيقاً واحداً لإكمال التسجيل، تشغيل رحلات الاشتراك، واستئناف الرحلة النشطة بأمان.",
      roleDetail:
        "بناء تطبيق السائق Flutter — رفع KYC، ملاحة، أرباح، وتوافق كامل مع API تطبيق العائلة.",
      outcomes: [
        "تطبيق السائق على App Store مع إصلاحات OTP وتسجيل Apple",
        "استئناف الرحلة النشطة ومسارات مجدولة أو فورية",
        "باكند مشترك مع حدود معدّل للموقع وOTP",
      ],
    },
  },
  haykal: {
    en: {
      problem:
        "Property buyers and owners wanted construction progress and listings in one Arabic-first app instead of scattered chats and PDFs.",
      roleDetail:
        "Full-stack delivery on haykl_app + API — Flutter client, Firebase, OTP verification, and service listings for finishes and contracting.",
      outcomes: [
        "Live on the App Store (هَيْكَل) with OTP and performance updates through v1.0.9",
        "Unified browse flow for properties and construction services",
        "Admin-friendly content hooks for services and about screens",
      ],
    },
    ar: {
      problem:
        "المستخدمون يريدون متابعة العقارات ومشاريع البناء في تطبيق عربي واحد بدل محادثات وملفات متفرقة.",
      roleDetail:
        "تسليم Full Stack على haykl_app والـ API — Flutter وFirebase وOTP وقوائم التشطيب والمقاولات.",
      outcomes: [
        "متاح على App Store (هَيْكَل) مع OTP وتحسينات أداء حتى 1.0.9",
        "مسار واحد للاستعراض والخدمات العقارية",
        "ربط محتوى الإدارة للخدمات وشاشة من نحن",
      ],
    },
  },
  "mtloob-medical": {
    en: {
      problem:
        "Clinics struggled to reorder medical supplies quickly from approved vendors with clear status and trust.",
      roleDetail:
        "Mobile developer on the Matloob flow — clinic ordering UI, vendor catalog, and Firebase-backed order state.",
      outcomes: [
        "Simplified clinic → vendor ordering with fewer steps per restock",
        "Reliable mobile UX for repeat weekly orders",
        "Foundation for notifications and order history",
      ],
    },
    ar: {
      problem:
        "العيادات تواجه صعوبة في إعادة طلب المستلزمات الطبية بسرعة من موردين معتمدين مع حالة واضحة.",
      roleDetail:
        "تطوير موبايل لمسار Matloob — واجهة الطلب، كatalog المورد، وحالة الطلب على Firebase.",
      outcomes: [
        "تبسيط طلب العيادة → المورد بخطوات أقل",
        "تجربة موبايل موثوقة للطلبات المتكررة",
        "أساس للإشعارات وسجل الطلبات",
      ],
    },
  },
  "rafiq-al-dhikr": {
    en: {
      problem:
        "Users in Saudi Arabia wanted Quran, prayer times, dhikr, and qibla in one calm app tuned for local cities.",
      roleDetail:
        "Flutter developer — prayer widgets, iPad layouts, offline-friendly Quran reader, and 2.0 design refresh.",
      outcomes: [
        "App Store release with 5.0 client feedback on core flows",
        "Prayer tab countdown, widgets, and iPad split views",
        "Performance and notification stability across iOS versions",
      ],
    },
    ar: {
      problem:
        "المستخدمون في السعودية يريدون قرآناً ومواقيت وأذكاراً وقبلة في تطبيق هادئ مضبوط للمدن المحلية.",
      roleDetail:
        "مطور Flutter — ويدجت الصلاة، iPad، قارئ offline، وتحديث تصميم 2.0.",
      outcomes: [
        "إطلاق App Store مع تقييم 5.0 على المسارات الأساسية",
        "عدّاد الصلاة وويدجت وعرض iPad",
        "استقرار الإشعارات والأداء عبر إصدارات iOS",
      ],
    },
  },
  "zoro-delivery": {
    en: {
      problem:
        "A delivery startup needed customer, driver, and admin surfaces that felt like one product, not three silos.",
      roleDetail:
        "Full-stack across zoro_app, driver app, and dashboard — Node backend, order state, and ops tooling.",
      outcomes: [
        "Three-app ecosystem with shared order and user model",
        "Admin visibility into dispatch and fulfillment",
        "Production QA checklist and integration guides in repo",
      ],
    },
    ar: {
      problem:
        "شركة توصيل تحتاج واجهات عميل وسائق وإدارة كمنتج واحد وليس ثلاثة جزر منفصلة.",
      roleDetail:
        "Full Stack عبر zoro_app وتطبيق السائق واللوحة — Node Backend وحالة الطلب وأدوات التشغيل.",
      outcomes: [
        "منظومة ثلاث تطبيقات بنموذج طلب موحّد",
        "رؤية إدارية للتوزيع والتسليم",
        "قوائم QA ودلائل تكامل في المستودع",
      ],
    },
  },
  "safer-travel": {
    en: {
      problem:
        "Travel search sites often overwhelm users with ads and clutter before they can compare flights or hotels.",
      roleDetail:
        "Built a Next.js/React front end focused on fast search, readable results, and minimal steps to inquiry.",
      outcomes: [
        "Cleaner search-first layout with responsive breakpoints",
        "API-driven results with loading states that feel instant",
        "SEO-friendly structure for destination landing patterns",
      ],
    },
    ar: {
      problem:
        "مواقع السفر غالباً تزدحم المستخدم بالإعلانات قبل مقارنة الرحلات أو الفنادق.",
      roleDetail:
        "بناء واجهة Next.js/React تركز على بحث سريع ونتائج واضحة وخطوات قليلة للاستفسار.",
      outcomes: [
        "تخطيط يبدأ بالبحث مع استجابة جيدة للشاشات",
        "نتائج من API مع حالات تحميل سلسة",
        "هيكل مناسب لـ SEO لصفحات الوجهات",
      ],
    },
  },
  "ilex-logistics": {
    en: {
      problem:
        "Shippers needed to create a parcel and follow it on a map without calling support for every update.",
      roleDetail:
        "Full-stack mobile + Flask API — shipment creation, map tracking, and status timeline in Flutter (iel/ilex).",
      outcomes: [
        "Map-centric tracking experience on mobile",
        "Backend endpoints for shipment lifecycle events",
        "Clear status UI for senders and receivers",
      ],
    },
    ar: {
      problem:
        "المرسلون يحتاجون إنشاء شحنة ومتابعتها على الخريطة دون الاتصال بالدعم في كل تحديث.",
      roleDetail:
        "Full Stack موبايل + Flask — إنشاء الشحنة، تتبع الخريطة، وخط زمني للحالة في Flutter.",
      outcomes: [
        "تجربة تتبّع محورها الخريطة",
        "Endpoints للمراحل في دورة الشحنة",
        "واجهة حالة واضحة للمرسل والمستلم",
      ],
    },
  },
  "joman-al-thikr": {
    en: {
      problem:
        "Daily worship tools were split across many apps — Quran, adhkar, prayer times, and qibla needed one calm Arabic home.",
      roleDetail:
        "Flutter developer on goman_alhoda — Noto Naskh typography, offline modes, prayer UI refresh, and App Store releases.",
      outcomes: [
        "Live App Store app (جُمانُ الهُدَى) with v1.5+ UI polish",
        "Offline Quran, adhkar, and prayer times for saved cities",
        "Dark/light themes and sermon library browsing",
      ],
    },
    ar: {
      problem:
        "أدوات العبادة اليومية موزعة على تطبيقات كثيرة — القرآن والأذكار والمواقيت والقبلة تحتاج بيتاً عربياً هادئاً.",
      roleDetail:
        "مطور Flutter على goman_alhoda — خط Noto Naskh، offline، تحديث مواقيت الصلاة، وإصدارات App Store.",
      outcomes: [
        "تطبيق حي على App Store (جُمانُ الهُدَى) مع تحسينات 1.5+",
        "قرآن وأذكار ومواقيت offline للمدن المحفوظة",
        "ثيم فاتح/داكن ومكتبة خطب",
      ],
    },
  },
  "rafiq-al-umrah": {
    en: {
      problem:
        "Pilgrims in Makkah need step-by-step ritual guidance, maps, and safety tools when connectivity and stress are high.",
      roleDetail:
        "Product design + mobile architecture for ritual flows, offline packs, family tracking, SOS, and AI ask-and-answer.",
      outcomes: [
        "End-to-end UX for Tawaf counters, maps, and offline ritual mode",
        "Family location sharing and emergency shortcuts spec’d for field use",
        "AI assistant entry points tied to ritual context, not generic chat",
      ],
    },
    ar: {
      problem:
        "المعتمرون في مكة يحتاجون إرشاد الشعائر خطوة بخطوة وخرائط وأدوات سلامة عند ضغط الاتصال والوقت.",
      roleDetail:
        "تصميم منتج وهندسة موبايل للشعائر، offline، تتبع العائلة، SOS، ومساعد ذكي مرتبط بالسياق.",
      outcomes: [
        "UX كامل للطواف والخرائط ووضع offline للمناسك",
        "مشاركة موقع العائلة واختصارات طوارئ للاستخدام الميداني",
        "مساعد AI مربوط بالمناسك لا محادثة عامة",
      ],
    },
  },
  "bobo-ala-bab": {
    en: {
      problem:
        "Households wanted groceries, produce, and essentials from nearby stores with Arabic checkout and fast delivery.",
      roleDetail:
        "Full-stack on Bobo_AlalBab monorepo — user app, vendor app, delivery app addons, cart, and secure payments.",
      outcomes: [
        "Multi-role delivery commerce: customer, vendor, and courier surfaces",
        "Category-first home and store-detail flows from marketing mockups",
        "Ready for App Store / Play positioning with brand-consistent UI",
      ],
    },
    ar: {
      problem:
        "الأسر تريد بقالة وخضاراً ومستلزمات من متاجر قريبة مع دفع عربي وتوصيل سريع.",
      roleDetail:
        "Full Stack على Bobo_AlalBab — تطبيق مستخدم وبائع وتوصيل، سلة، ومدفوعات آمنة.",
      outcomes: [
        "تجارة متعددة الأدوار: عميل، بائع، ومندوب",
        "رئيسية حسب التصنيف وتفاصيل المتجر من التصميم",
        "جاهزية للمتاجر مع واجهة متناسقة مع الهوية",
      ],
    },
  },
  jumera: {
    en: {
      problem:
        "A lighting brand needed premium e-commerce on web and mobile with bilingual RTL storytelling and trust at checkout.",
      roleDetail:
        "Designed and built storefront + mobile patterns — collections, product detail, cart, and Tajawal-driven brand system.",
      outcomes: [
        "Responsive web hero and collection grids aligned to mockups",
        "Mobile product detail with gallery, variants, and sticky add-to-cart",
        "Documented color, type, and illustration system for marketing handoff",
      ],
    },
    ar: {
      problem:
        "علامة إضاءة تحتاج تجارة فاخرة على الويب والموبايل مع RTL ثنائي اللغة وثقة عند الدفع.",
      roleDetail:
        "تصميم وبناء المتجر + أنماط الموبايل — مجموعات، تفاصيل منتج، سلة، ونظام Tajawal.",
      outcomes: [
        "ويب متجاوب للمجموعات مطابق للتصميم",
        "تفاصيل منتج موبايل مع معرض وزر شراء ثابت",
        "توثيق ألوان وخطوط ورسوم للتسويق",
      ],
    },
  },
};

export function getCaseStudy(slug: string, locale: "en" | "ar"): CaseStudyContent | null {
  const entry = PROJECT_CASE_STUDIES[slug];
  if (!entry) return null;
  return entry[locale];
}
