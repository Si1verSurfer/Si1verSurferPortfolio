export type Locale = "en" | "ar";

export type SectionId = "home" | "about" | "work" | "capabilities" | "process" | "contact";

export const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "work",
  "capabilities",
  "process",
  "contact",
];

export type TranslationContent = {
  nav: {
    about: string;
    work: string;
    capabilities: string;
    process: string;
    contact: string;
    letsTalk: string;
    menu: string;
  };
  hero: {
    available: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    highlights: string[];
    viewWork: string;
    github: string;
    focusLabel: string;
    focusValue: string;
    appsValue: string;
    appsLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    pillars: { title: string; description: string }[];
    educationTitle: string;
    education: string[];
  };
  stats: { value: string; label: string }[];
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
    viewProject: string;
    featuredLabel: string;
    techLabel: string;
    countLabel: string;
    projects: Record<string, { categories: string; description: string; role: string }>;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
    toolsTitle: string;
    focusTitle: string;
    focusItems: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    headline: string;
    cta: string;
    email: string;
    location: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    rights: string;
  };
  language: {
    en: string;
    ar: string;
  };
};

export const translations: Record<Locale, TranslationContent> = {
  en: {
    nav: {
      about: "About",
      work: "Work",
      capabilities: "Skills",
      process: "Process",
      contact: "Contact",
      letsTalk: "Say hello",
      menu: "Menu",
    },
    hero: {
      available: "Open for new projects",
      eyebrow: "Bashar Rizk",
      titleLine1: "Software",
      titleLine2: "Engineer",
      tagline:
        "I build clear, fast apps and websites — products people use every day, and that stay easy to grow.",
      highlights: ["Mobile apps", "Web platforms", "AI features"],
      viewWork: "See my work",
      github: "GitHub",
      focusLabel: "Focus",
      focusValue: "Mobile · Web · AI",
      appsValue: "8+",
      appsLabel: "Products shipped",
    },
    about: {
      eyebrow: "About",
      title: "I build products people come back to",
      intro:
        "I'm Bashar. I started coding at 15, and I still love that quiet moment when an idea becomes something real in someone's hands.",
      paragraphs: [
        "I spend most of my time on mobile apps and web platforms — clear, fast, and built to last. When AI helps, I use it. When it doesn't, I leave it out.",
        "What matters to me is simple: a calm interface, clean code, and honest work. No noise. No over-promising.",
        "If you have an idea you want to ship, or a product that needs a clearer path — let's talk.",
      ],
      pillars: [
        {
          title: "Clarity first",
          description: "If a screen needs explaining, we redesign it until it doesn't.",
        },
        {
          title: "Mobile & web",
          description: "Flutter for apps. React and Next.js for the web. Strong backends under both.",
        },
        {
          title: "Useful AI",
          description: "Only when it saves time, reduces mistakes, or opens a real new door.",
        },
      ],
      educationTitle: "Highlights",
      education: [
        "8+ years shipping real products",
        "Flutter, Clean Architecture, GetX, BLOC",
        "Node.js, Go, Firebase, Docker",
        "Care for UI detail, performance, and structure",
      ],
    },
    stats: [
      { value: "8+", label: "Years of experience" },
      { value: "8+", label: "Live products" },
      { value: "15+", label: "Tools & technologies" },
      { value: "10+", label: "Clients & partners" },
    ],
    work: {
      eyebrow: "Work",
      title: "Selected projects",
      subtitle:
        "A mix of mobile products, web platforms, and systems built for real daily use — from transport and health to faith and logistics.",
      explore: "More on GitHub",
      viewProject: "View project",
      featuredLabel: "Featured",
      techLabel: "Stack",
      countLabel: "projects",
      projects: {
        bori: {
          categories: "Mobile · Family transport",
          description: "Book a driver for your family — now or later, with live tracking.",
          role: "Full Stack",
        },
        haykal: {
          categories: "Mobile · Real estate",
          description: "Browse properties and follow construction projects in one place.",
          role: "Full Stack",
        },
        "mtloob-medical": {
          categories: "Mobile · Healthcare",
          description: "Help clinics order medical supplies with trust and simplicity.",
          role: "Mobile",
        },
        "rafiq-al-dhikr": {
          categories: "Mobile · Daily companion",
          description: "Quran, prayer times, and dhikr — quiet tools for everyday life.",
          role: "Flutter",
        },
        "zoro-delivery": {
          categories: "Mobile · Delivery",
          description: "Order, deliver, and manage — apps for customers, drivers, and admins.",
          role: "Full Stack",
        },
        "safer-travel": {
          categories: "Web · Travel",
          description: "Search flights and hotels through a clear, uncluttered experience.",
          role: "Full Stack",
        },
        "ilex-logistics": {
          categories: "Mobile · Shipping",
          description: "Create a shipment and follow it on the map in real time.",
          role: "Full Stack",
        },
        "joman-al-thikr": {
          categories: "Mobile · Quran & dhikr",
          description: "Read, bookmark, and return — a calm space for daily worship.",
          role: "Flutter",
        },
      },
    },
    capabilities: {
      eyebrow: "Skills",
      title: "What I do best",
      subtitle:
        "From product UI to backend systems — I care about craft, clarity, and shipping work that lasts.",
      items: [
        {
          title: "Mobile apps",
          description: "Flutter apps that feel smooth on iOS and Android, with thoughtful UX.",
        },
        {
          title: "Web development",
          description: "Fast, readable websites and dashboards with React and Next.js.",
        },
        {
          title: "Backend systems",
          description: "APIs, auth, and data flow with Node.js, Go, and Flask.",
        },
        {
          title: "Artificial intelligence",
          description: "Models that ship — from training to real deployment, not demos only.",
        },
        {
          title: "Design sense",
          description: "Spacing, hierarchy, and flows that make usage feel natural.",
        },
        {
          title: "Software architecture",
          description: "Structures that can grow without collapsing under change.",
        },
      ],
      toolsTitle: "Tools",
      focusTitle: "Usually focused on",
      focusItems: [
        "Apps people open every day",
        "Web products with clear UX",
        "Small AI features with big impact",
        "Codebases that stay readable over time",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How I work",
      subtitle: "A calm, clear path from idea to launch — with early testing and honest iteration.",
      steps: [
        { title: "Listen", description: "What real problem are we solving?" },
        { title: "Plan", description: "Scope, timeline, and a shared definition of success." },
        { title: "Design", description: "Screens and flows before heavy engineering." },
        { title: "Build", description: "Test early. Adjust honestly. Keep quality high." },
        { title: "Launch", description: "Ship, observe, improve, and continue." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea?",
      subtitle: "Tell me briefly what you want to build. I reply personally.",
      headline: "Let's turn your idea into a product people actually use.",
      cta: "Email me",
      email: "bashar772004@gmail.com",
      location: "Remote — anywhere",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell me about your idea",
      formSubmit: "Send message",
      formSending: "Sending…",
      formSuccess: "Got it — thank you.",
      rights: "All rights reserved.",
    },
    language: { en: "EN", ar: "ع" },
  },
  ar: {
    nav: {
      about: "نبذة",
      work: "الأعمال",
      capabilities: "الخبرات",
      process: "المنهج",
      contact: "تواصل",
      letsTalk: "ابدأ الحديث",
      menu: "القائمة",
    },
    hero: {
      available: "متاح للمشاريع الجديدة",
      eyebrow: "بشار رزق",
      titleLine1: "مهندس",
      titleLine2: "برمجيات",
      tagline:
        "أبني تطبيقات ومواقع واضحة وسريعة — منتجات تُستخدم كل يوم، وتبقى سهلة مع الوقت.",
      highlights: ["تطبيقات", "مواقع", "ذكاء اصطناعي"],
      viewWork: "استكشف أعمالي",
      github: "GitHub",
      focusLabel: "التخصص",
      focusValue: "موبايل · ويب · ذكاء اصطناعي",
      appsValue: "+8",
      appsLabel: "منتجات أُطلقت",
    },
    about: {
      eyebrow: "نبذة",
      title: "أبني منتجات يعود إليها الناس",
      intro:
        "أنا بشار. بدأت البرمجة في الخامسة عشرة، وما زلت أحب تلك اللحظة الهادئة حين تتحول الفكرة إلى شيء حقيقي في يد المستخدم.",
      paragraphs: [
        "أقضي معظم وقتي في تطبيقات الموبايل ومنصات الويب — واضحة، سريعة، ومبنية لتدوم. وإذا كان الذكاء الاصطناعي مفيداً استخدمه، وإن لم يكن… أتركه جانباً.",
        "ما يهمّني بسيط: واجهة هادئة، كود نظيف، وعمل صادق. بلا ضجيج، وبلا وعود أكبر من الحقيقة.",
        "إذا كانت لديك فكرة تريد إطلاقها، أو منتج يحتاج طريقاً أوضح — لنتحدث.",
      ],
      pillars: [
        {
          title: "الوضوح أولاً",
          description: "إذا احتاجت الشاشة شرحاً، نعيد تصميمها حتى تصبح مفهومة من نفسها.",
        },
        {
          title: "موبايل وويب",
          description: "Flutter للتطبيقات، وReact وNext.js للويب، مع باكند قوي تحت الجميع.",
        },
        {
          title: "ذكاء اصطناعي نافع",
          description: "فقط حين يوفّر وقتاً، أو يقلّل خطأً، أو يفتح باباً جديداً حقيقياً.",
        },
      ],
      educationTitle: "ملامح سريعة",
      education: [
        "أكثر من ثماني سنوات في إطلاق منتجات حقيقية",
        "Flutter وClean Architecture وGetX وBLOC",
        "Node.js وGo وFirebase وDocker",
        "اهتمام بالتفاصيل والأداء وترتيب الكود",
      ],
    },
    stats: [
      { value: "+8", label: "سنوات خبرة" },
      { value: "+8", label: "منتجات حيّة" },
      { value: "+15", label: "تقنية وأداة" },
      { value: "+10", label: "عميل وشريك" },
    ],
    work: {
      eyebrow: "الأعمال",
      title: "مشاريع مختارة",
      subtitle:
        "مزيج من تطبيقات الموبايل والمنصات الرقمية والأنظمة المبنية للاستخدام اليومي — من النقل والصحة إلى الذكر والخدمات اللوجستية.",
      explore: "المزيد على GitHub",
      viewProject: "عرض المشروع",
      featuredLabel: "مميز",
      techLabel: "التقنيات",
      countLabel: "مشاريع",
      projects: {
        bori: {
          categories: "موبايل · نقل عائلي",
          description: "احجز سائقاً لعائلتك الآن أو لاحقاً، مع تتبّع مباشر للرحلة.",
          role: "Full Stack",
        },
        haykal: {
          categories: "موبايل · عقارات",
          description: "استعرض العقارات وتابع مشاريع البناء من مكان واحد.",
          role: "Full Stack",
        },
        "mtloob-medical": {
          categories: "موبايل · رعاية صحية",
          description: "منصة تساعد العيادات على طلب المستلزمات الطبية بثقة وسهولة.",
          role: "موبايل",
        },
        "rafiq-al-dhikr": {
          categories: "موبايل · رفيق يومي",
          description: "قرآن ومواقيت وأذكار — أدوات هادئة ترافقك كل يوم.",
          role: "Flutter",
        },
        "zoro-delivery": {
          categories: "موبايل · توصيل",
          description: "اطلب ووصّل وأدِر — تطبيقات للعميل والسائق والإدارة.",
          role: "Full Stack",
        },
        "safer-travel": {
          categories: "ويب · سفر",
          description: "ابحث عن الرحلات والفنادق بواجهة واضحة بلا تعقيد.",
          role: "Full Stack",
        },
        "ilex-logistics": {
          categories: "موبايل · شحن",
          description: "أنشئ شحنتك وتابع حركتها على الخريطة لحظة بلحظة.",
          role: "Full Stack",
        },
        "joman-al-thikr": {
          categories: "موبايل · قرآن وذكر",
          description: "اقرأ واحفظ وارجع — مساحة هادئة للعبادة اليومية.",
          role: "Flutter",
        },
      },
    },
    capabilities: {
      eyebrow: "الخبرات",
      title: "ما أتقنه",
      subtitle: "من واجهة المنتج إلى الأنظمة الخلفية — أهتم بالحرفة والوضوح والعمل الذي يدوم.",
      items: [
        {
          title: "تطبيقات الموبايل",
          description: "تطبيقات Flutter سلسة على iOS وAndroid، بتجربة استخدام مدروسة.",
        },
        {
          title: "تطوير الويب",
          description: "مواقع ولوحات تحكم سريعة وواضحة باستخدام React وNext.js.",
        },
        {
          title: "الخدمات الخلفية",
          description: "واجهات برمجة ومصادقة وتدفّق بيانات عبر Node.js وGo وFlask.",
        },
        {
          title: "الذكاء الاصطناعي",
          description: "نماذج تُطلق فعلياً — من التدريب إلى النشر، لا مجرد عروض.",
        },
        {
          title: "حس التصميم",
          description: "ترتيب ومسافات ومسارات تجعل الاستخدام طبيعياً دون جهد.",
        },
        {
          title: "هندسة البرمجيات",
          description: "بنية كود قابلة للنمو دون أن تنهار تحت التغيير.",
        },
      ],
      toolsTitle: "الأدوات",
      focusTitle: "أركّز عادةً على",
      focusItems: [
        "تطبيقات يفتحها الناس كل يوم",
        "منتجات ويب بتجربة واضحة",
        "ميزات ذكاء اصطناعي صغيرة… بأثر كبير",
        "أكواد تبقى مقروءة مع مرور الوقت",
      ],
    },
    process: {
      eyebrow: "المنهج",
      title: "كيف أعمل",
      subtitle: "مسار هادئ وواضح من الفكرة إلى الإطلاق — مع اختبار مبكر وتعديلات صادقة.",
      steps: [
        { title: "أستمع", description: "ما المشكلة الحقيقية التي نريد حلّها؟" },
        { title: "أخطّط", description: "النطاق والوقت ومعنى النجاح بوضوح مشترك." },
        { title: "أصمّم", description: "الشاشات والمسارات قبل بناء الكود الثقيل." },
        { title: "أبني", description: "أختبر مبكراً، وأعدّل بصدق، وأحافظ على الجودة." },
        { title: "أُطلق", description: "ننشر، نراقب، نُحسّن، ثم نكمل." },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "هل لديك فكرة؟",
      subtitle: "اكتب لي باختصار ما تريد بناءه. أردّ عليك شخصياً.",
      headline: "لنحوّل فكرتك إلى منتج يستخدمه الناس فعلاً.",
      cta: "راسلني الآن",
      email: "bashar772004@gmail.com",
      location: "عن بُعد — من أي مكان",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "حدّثني عن فكرتك",
      formSubmit: "إرسال الرسالة",
      formSending: "جاري الإرسال…",
      formSuccess: "وصلني رسالتك — شكراً لك.",
      rights: "جميع الحقوق محفوظة.",
    },
    language: { en: "EN", ar: "ع" },
  },
};

export function getNavLinks(locale: Locale) {
  const t = translations[locale].nav;
  return [
    { id: "about" as const, label: t.about, href: "#about" },
    { id: "work" as const, label: t.work, href: "#work" },
    { id: "capabilities" as const, label: t.capabilities, href: "#capabilities" },
    { id: "process" as const, label: t.process, href: "#process" },
    { id: "contact" as const, label: t.contact, href: "#contact" },
  ];
}
