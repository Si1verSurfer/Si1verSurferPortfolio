export type Locale = "en" | "ar";

export type SectionId =
  | "home"
  | "about"
  | "work"
  | "proof"
  | "capabilities"
  | "process"
  | "contact";

export const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "work",
  "proof",
  "process",
  "capabilities",
  "contact",
];

export type TranslationContent = {
  nav: {
    about: string;
    work: string;
    proof: string;
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
    pillars: { title: string; description: string }[];
    educationTitle: string;
    education: string[];
    nowEyebrow: string;
    nowTitle: string;
    nowText: string;
    nowTags: string[];
    nowCta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    countLabel: string;
    cta: string;
    featuredLabel: string;
    timelineLabel: string;
    planCta: string;
    noteTitle: string;
    noteText: string;
    noteCta: string;
    trust: [string, string, string];
    plans: Record<
      string,
      {
        name: string;
        for: string;
        description: string;
        includes: string[];
        timeline: string;
      }
    >;
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
  proof: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stageEyebrow: string;
    stageQuote: string;
    stageName: string;
    stageRole: string;
    generalLabel: string;
    sourceMostaql: string;
    sourceClient: string;
    scoresTitle: string;
    scores: { label: string; value: string }[];
    stats: { value: string; label: string }[];
    pillars: {
      eyebrow: string;
      title: string;
      description: string;
      points: string[];
    }[];
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviews: Record<
      string,
      { quote: string; name: string; role: string; project: string }
    >;
    ctaTitle: string;
    ctaText: string;
    cta: string;
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
    formIntroTitle: string;
    formIntro: string;
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
      about: "Services",
      work: "Work",
      proof: "Trust",
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
      nowEyebrow: "Right now",
      nowTitle: "Open for meaningful products",
      nowText:
        "I'm looking for ideas that deserve calm design and solid engineering — apps and platforms people will actually use.",
      nowTags: ["Flutter", "Next.js", "AI features", "Product UI"],
      nowCta: "Let's talk",
    },
    services: {
      eyebrow: "Services",
      title: "Choose how we build together",
      subtitle:
        "Premium packages for design, mobile, web, backend, automations, Odoo, and AI — clear scope, fast delivery, no price noise.",
      countLabel: "plans",
      cta: "Start a project",
      featuredLabel: "Most chosen",
      timelineLabel: "Typical timeline",
      planCta: "Get this plan",
      noteTitle: "Need a custom package?",
      noteText:
        "Tell me your goal and constraints. I’ll shape a plan around what matters — clean scope, clear timeline, and real delivery.",
      noteCta: "Talk to me",
      trust: [
        "Clear scope before we start",
        "Delivery within 6 weeks max",
        "Built for real users",
      ],
      plans: {
        mobile: {
          name: "Mobile App",
          for: "Best for iOS & Android products",
          description:
            "A polished Flutter app with clean architecture, calm UX, and production-ready foundations.",
          includes: [
            "UI/UX flow for core screens",
            "Flutter app for iOS & Android",
            "Auth, profiles, and core features",
            "API integration & clean structure",
            "Store-ready build support",
          ],
          timeline: "4–6 weeks",
        },
        web: {
          name: "Web Platform",
          for: "Best for dashboards & websites",
          description:
            "A fast, clear web product with React/Next.js — designed to feel premium and stay maintainable.",
          includes: [
            "Modern responsive interface",
            "Next.js / React implementation",
            "Admin or user dashboard flows",
            "API connection & auth",
            "Performance & SEO basics",
          ],
          timeline: "3–6 weeks",
        },
        full: {
          name: "Full Product",
          for: "Best for end-to-end builds",
          description:
            "From idea to launch: mobile, web, and backend together as one coherent product system.",
          includes: [
            "Product discovery & clear scope",
            "Mobile + web experience",
            "Backend, APIs, and database",
            "Admin tools where needed",
            "Launch support & iteration",
          ],
          timeline: "5–6 weeks",
        },
        ai: {
          name: "AI Feature",
          for: "Best for smart product upgrades",
          description:
            "Add useful AI only where it creates real value — not as decoration.",
          includes: [
            "Use-case definition & data flow",
            "Model or API integration",
            "In-product AI experience",
            "Testing & quality checks",
            "Deployment & monitoring basics",
          ],
          timeline: "2–6 weeks",
        },
        backend: {
          name: "Backend Only",
          for: "Best for APIs & system foundations",
          description:
            "Solid backend architecture, secure APIs, and reliable data flow — ready for any frontend.",
          includes: [
            "API design & documentation",
            "Auth, roles, and permissions",
            "Database modeling",
            "Integrations & webhooks",
            "Deployment-ready structure",
          ],
          timeline: "2–5 weeks",
        },
        uiux: {
          name: "UI / UX Design",
          for: "Best for product clarity & polish",
          description:
            "Calm, premium interfaces and clear user flows — before or during development.",
          includes: [
            "User flow mapping",
            "Wireframes & high-fidelity screens",
            "Design system basics",
            "Mobile & web layouts",
            "Handoff-ready design files",
          ],
          timeline: "1–4 weeks",
        },
        automations: {
          name: "Automations",
          for: "Best for saving time & reducing manual work",
          description:
            "Smart workflows that connect your tools and remove repetitive tasks.",
          includes: [
            "Process discovery & mapping",
            "Workflow automation setup",
            "Tool & API connections",
            "Notifications & reporting flows",
            "Testing & handover docs",
          ],
          timeline: "1–4 weeks",
        },
        odoo: {
          name: "Odoo Services",
          for: "Best for ERP & business operations",
          description:
            "Odoo setup, customization, and integrations tailored to how your business actually works.",
          includes: [
            "Module setup & configuration",
            "Custom workflows & forms",
            "Reports & dashboards",
            "Third-party integrations",
            "Training & handover support",
          ],
          timeline: "2–6 weeks",
        },
      },
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
    proof: {
      eyebrow: "Trust",
      title: "Why clients feel safe building with me",
      subtitle:
        "Real feedback from Mostaql and product partners — clear work, calm delivery, and support that continues after launch.",
      stageEyebrow: "From Mostaql",
      stageQuote:
        "A thousand thanks, engineer. He even gave me three months of free support after delivery — one of the best people and developers on Mostaql.",
      stageName: "Hamdan M.",
      stageRole: "Client · Quran iPhone app · Mostaql",
      generalLabel: "Across projects",
      sourceMostaql: "Mostaql",
      sourceClient: "Client",
      scoresTitle: "Mostaql rating breakdown",
      scores: [
        { label: "Professionalism", value: "5.0" },
        { label: "Communication", value: "5.0" },
        { label: "Quality delivered", value: "5.0" },
        { label: "Domain expertise", value: "5.0" },
        { label: "On-time delivery", value: "5.0" },
        { label: "Would hire again", value: "5.0" },
      ],
      stats: [
        { value: "5.0", label: "Average rating" },
        { value: "4", label: "Mostaql reviews" },
        { value: "5", label: "Completed projects" },
      ],
      pillars: [
        {
          eyebrow: "Clarity",
          title: "No fog before we start",
          description:
            "You know the scope, timeline, and what “done” means — before a single line of code.",
          points: [
            "Written scope you can share with your team",
            "Honest trade-offs when time or budget is tight",
            "One calm channel for updates and decisions",
          ],
        },
        {
          eyebrow: "Delivery",
          title: "Progress you can see",
          description:
            "I ship in clear steps. You test early, give feedback, and never wait until the end to discover surprises.",
          points: [
            "Weekly checkpoints with real builds",
            "Early testing on real devices and flows",
            "Delivery capped at six weeks for focused plans",
          ],
        },
        {
          eyebrow: "Care",
          title: "Ownership after launch",
          description:
            "A product should feel steady in real life — not fragile the moment users arrive.",
          points: [
            "Clean structure that stays readable later",
            "Handover notes and practical guidance",
            "Support for the first improvements after go-live",
          ],
        },
      ],
      reviewsEyebrow: "Reviews",
      reviewsTitle: "Client voices from Mostaql & real products",
      reviews: {
        "mostaql-yahya": {
          quote:
            "Best developer — I recommend him strongly. He never falls short with the client, God willing.",
          name: "Yahya A.",
          role: "Client · Mostaql",
          project: "Flutter delivery app · Makeup, groceries & admin",
        },
        "mostaql-hamdan": {
          quote:
            "A thousand thanks, engineer. He even gave me three months of free support after delivery — one of the best people and developers on Mostaql.",
          name: "Hamdan M.",
          role: "Client · Mostaql",
          project: "Quran app for iPhone",
        },
        "mostaql-abdullah-fix": {
          quote: "Bashar is solid and practical. May God bless him.",
          name: "Abdullah A.",
          role: "Client · Mostaql",
          project: "App issue fix",
        },
        "mostaql-abdullah-build": {
          quote:
            "Someone you can rely on for the work. Simply put — a dependable person.",
          name: "Abdullah A.",
          role: "Client · Mostaql",
          project: "Construction company mobile app",
        },
        "client-bori": {
          quote:
            "Family booking and live tracking launched clean. Communication stayed clear the whole way, and the app felt ready for real users.",
          name: "Noura S.",
          role: "Product partner",
          project: "Bori · Family transport",
        },
        "client-haykal": {
          quote:
            "Properties and construction updates finally live in one calm app. The team opens it daily without confusion.",
          name: "Faisal R.",
          role: "Operations partner",
          project: "Haykal · Real estate",
        },
        "client-zoro": {
          quote:
            "Customer, driver, and admin felt like one product. Fast delivery, careful details, and support when we needed it.",
          name: "Maya K.",
          role: "Co-founder",
          project: "Zoro Delivery",
        },
      },
      ctaTitle: "Ready for a calm build?",
      ctaText:
        "Tell me what you want to launch. I’ll reply with a clear shape, timeline, and what we should build first.",
      cta: "Start a conversation",
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
      formIntroTitle: "Send your message",
      formIntro: "Share your idea briefly — I’ll reply personally.",
      rights: "All rights reserved.",
    },
    language: { en: "EN", ar: "ع" },
  },
  ar: {
    nav: {
      about: "الخدمات",
      work: "الأعمال",
      proof: "الثقة",
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
      nowEyebrow: "حالياً",
      nowTitle: "متاح لمنتجات تستحق البناء",
      nowText:
        "أبحث عن أفكار تحتاج تصميماً هادئاً وهندسة ثابتة — تطبيقات ومنصات يستخدمها الناس فعلاً.",
      nowTags: ["Flutter", "Next.js", "ذكاء اصطناعي", "واجهات منتج"],
      nowCta: "لنتحدث",
    },
    services: {
      eyebrow: "الخدمات",
      title: "اختر كيف نبني معاً",
      subtitle:
        "باقات احترافية للتصميم والموبايل والويب والباكند والأتمتة وOdoo والذكاء الاصطناعي — نطاق واضح، تسليم سريع، بدون ضجيج أسعار.",
      countLabel: "باقات",
      cta: "ابدأ مشروعاً",
      featuredLabel: "الأكثر اختياراً",
      timelineLabel: "المدة المعتادة",
      planCta: "أريد هذه الباقة",
      noteTitle: "تحتاج باقة مخصصة؟",
      noteText:
        "احكِ لي هدفك وحدودك. أصمم خطة حول ما يهم فعلاً — نطاق نظيف، وقت واضح، وتسليم حقيقي.",
      noteCta: "كلمني",
      trust: [
        "نطاق واضح قبل البدء",
        "تسليم خلال 6 أسابيع كحد أقصى",
        "مبني لمستخدمين حقيقيين",
      ],
      plans: {
        mobile: {
          name: "تطبيق موبايل",
          for: "الأنسب لمنتجات iOS وAndroid",
          description:
            "تطبيق Flutter متقن، بتجربة هادئة وهيكل نظيف وجاهزية للإطلاق.",
          includes: [
            "تصميم مسارات الشاشات الأساسية",
            "تطبيق Flutter لـ iOS وAndroid",
            "تسجيل، ملفات، والميزات الأساسية",
            "ربط APIs وهيكلة نظيفة",
            "دعم تجهيز البناء للمتاجر",
          ],
          timeline: "4–6 أسابيع",
        },
        web: {
          name: "منصة ويب",
          for: "الأنسب للمواقع ولوحات التحكم",
          description:
            "منتج ويب سريع وواضح بـ React/Next.js — مظهر قوي وقابل للصيانة.",
          includes: [
            "واجهة متجاوبة حديثة",
            "تنفيذ بـ Next.js / React",
            "مسارات لوحة تحكم أو مستخدمين",
            "ربط API ومصادقة",
            "أساسيات الأداء وSEO",
          ],
          timeline: "3–6 أسابيع",
        },
        full: {
          name: "منتج كامل",
          for: "الأنسب للبناء من الفكرة حتى الإطلاق",
          description:
            "من الفكرة إلى الإطلاق: موبايل وويب وباكند في نظام منتج واحد متماسك.",
          includes: [
            "اكتشاف المنتج وتحديد النطاق",
            "تجربة موبايل + ويب",
            "باكند وواجهات برمجة وقاعدة بيانات",
            "أدوات إدارة عند الحاجة",
            "دعم الإطلاق والتحسين",
          ],
          timeline: "5–6 أسابيع",
        },
        ai: {
          name: "ميزة ذكاء اصطناعي",
          for: "الأنسب لتطوير المنتج بذكاء نافع",
          description:
            "إضافة ذكاء اصطناعي فقط حيث يصنع قيمة حقيقية — لا للزينة.",
          includes: [
            "تحديد حالة الاستخدام وتدفق البيانات",
            "دمج نموذج أو API",
            "تجربة AI داخل المنتج",
            "اختبارات وضبط الجودة",
            "أساسيات النشر والمراقبة",
          ],
          timeline: "2–6 أسابيع",
        },
        backend: {
          name: "باكند فقط",
          for: "الأنسب لواجهات البرمجة وأساس النظام",
          description:
            "بنية باكند ثابتة، وAPIs آمنة، وتدفّق بيانات موثوق — جاهز لأي واجهة أمامية.",
          includes: [
            "تصميم وتوثيق APIs",
            "مصادقة وصلاحيات وأدوار",
            "نمذجة قاعدة البيانات",
            "تكاملات وwebhooks",
            "هيكل جاهز للنشر",
          ],
          timeline: "2–5 أسابيع",
        },
        uiux: {
          name: "تصميم UI / UX",
          for: "الأنسب لوضوح المنتج ولمسة احترافية",
          description:
            "واجهات هادئة ومميزة ومسارات استخدام واضحة — قبل التطوير أو خلاله.",
          includes: [
            "رسم مسارات المستخدم",
            "Wireframes وشاشات عالية الدقة",
            "أساسيات نظام التصميم",
            "تخطيطات موبايل وويب",
            "ملفات جاهزة للتسليم للمطور",
          ],
          timeline: "1–4 أسابيع",
        },
        automations: {
          name: "أتمتة العمليات",
          for: "الأنسب لتوفير الوقت وتقليل العمل اليدوي",
          description:
            "سير عمل ذكي يربط أدواتك ويلغي المهام المتكررة.",
          includes: [
            "اكتشاف العملية ورسمها",
            "إعداد أتمتة سير العمل",
            "ربط الأدوات وواجهات البرمجة",
            "تدفقات إشعارات وتقارير",
            "اختبار ووثائق تسليم",
          ],
          timeline: "1–4 أسابيع",
        },
        odoo: {
          name: "خدمات Odoo",
          for: "الأنسب لأنظمة ERP وإدارة الأعمال",
          description:
            "إعداد Odoo وتخصيصه وربطه بما يناسب طريقة عمل شركتك فعلياً.",
          includes: [
            "إعداد وتكوين الوحدات",
            "مسارات ونماذج مخصصة",
            "تقارير ولوحات متابعة",
            "تكاملات مع أنظمة خارجية",
            "تدريب ودعم التسليم",
          ],
          timeline: "2–6 أسابيع",
        },
      },
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
    proof: {
      eyebrow: "الثقة",
      title: "لماذا يشعر العملاء بالأمان معي",
      subtitle:
        "آراء حقيقية من مستقل ومن شركاء المنتجات — عمل واضح، تسليم هادئ، ودعم يستمر بعد الإطلاق.",
      stageEyebrow: "من مستقل",
      stageQuote:
        "الف شكر مهندس يعطيك العافية والاجمل عطاني دعم مجاني 3 اشهر بعد تسليم الخدمة من افضل الاشخاص والمبرمجين بمنصة مستقل",
      stageName: "حمدان م.",
      stageRole: "صاحب مشروع · تطبيق قرآن للأيفون · مستقل",
      generalLabel: "عبر المشاريع",
      sourceMostaql: "مستقل",
      sourceClient: "عميل",
      scoresTitle: "تفاصيل التقييم على مستقل",
      scores: [
        { label: "الاحترافية بالتعامل", value: "5.0" },
        { label: "التواصل والمتابعة", value: "5.0" },
        { label: "جودة العمل المسلّم", value: "5.0" },
        { label: "الخبرة بمجال المشروع", value: "5.0" },
        { label: "التسليم فى الموعد", value: "5.0" },
        { label: "التعامل معه مرّة أخرى", value: "5.0" },
      ],
      stats: [
        { value: "5.0", label: "متوسط التقييم" },
        { value: "4", label: "تقييمات مستقل" },
        { value: "5", label: "مشاريع مكتملة" },
      ],
      pillars: [
        {
          eyebrow: "وضوح",
          title: "لا ضباب قبل البدء",
          description:
            "تعرف النطاق والوقت ومعنى «انتهى» قبل أن نكتب سطراً واحداً من الكود.",
          points: [
            "نطاق مكتوب يمكن مشاركته مع فريقك",
            "مفاضلات صادقة حين يضيق الوقت أو الميزانية",
            "قناة هادئة واحدة للتحديثات والقرارات",
          ],
        },
        {
          eyebrow: "تسليم",
          title: "تقدّم تراه بعينك",
          description:
            "أبني بخطوات واضحة. تختبر مبكراً، تعطي ملاحظات، ولا تنتظر للنهاية لتكتشف المفاجآت.",
          points: [
            "نقاط متابعة أسبوعية ببناء حقيقي",
            "اختبار مبكر على أجهزة ومسارات حقيقية",
            "تسليم الباقات المركّزة خلال 6 أسابيع كحد أقصى",
          ],
        },
        {
          eyebrow: "رعاية",
          title: "مسؤولية بعد الإطلاق",
          description:
            "المنتج يجب أن يبقى ثابتاً في الحياة الحقيقية — لا هشاً في اللحظة التي يصل فيها المستخدمون.",
          points: [
            "هيكل نظيف يبقى مقروءاً لاحقاً",
            "ملاحظات تسليم وإرشاد عملي",
            "دعم لأول التحسينات بعد الإطلاق",
          ],
        },
      ],
      reviewsEyebrow: "آراء العملاء",
      reviewsTitle: "أصوات من مستقل ومنتجات حقيقية",
      reviews: {
        "mostaql-yahya": {
          quote:
            "افضل مبرمج وانصحكم جدا جدا ومايقصر مع العميل انشاءالله",
          name: "Yahya A.",
          role: "صاحب المشروع · مستقل",
          project: "تطبيق توصيل Flutter · مكياج ومقاضي ولوحة تحكم",
        },
        "mostaql-hamdan": {
          quote:
            "الف شكر مهندس يعطيك العافية والاجمل عطاني دعم مجاني 3 اشهر بعد تسليم الخدمة من افضل الاشخاص والمبرمجين بمنصة مستقل",
          name: "حمدان م.",
          role: "صاحب المشروع · مستقل",
          project: "برمجة تطبيق قرآن على الأيفون",
        },
        "mostaql-abdullah-fix": {
          quote: "بشار شخص جدع وعملي .. بارك الله فيه",
          name: "Abdullah A.",
          role: "صاحب المشروع · مستقل",
          project: "إصلاح مشكلة في تطبيق",
        },
        "mostaql-abdullah-build": {
          quote: "انسان يُعتمد عليه بالشغل .. بكل اختصار .. شخص (قدع)!",
          name: "Abdullah A.",
          role: "صاحب المشروع · مستقل",
          project: "تطبيق هاتف لشركة مقاولات",
        },
        "client-bori": {
          quote:
            "حجز العائلة والتتبّع المباشر انطلقوا بنظافة. التواصل كان واضحاً طول الطريق، والتطبيق جاهز لمستخدمين حقيقيين.",
          name: "نورة س.",
          role: "شريكة منتج",
          project: "Bori · نقل عائلي",
        },
        "client-haykal": {
          quote:
            "العقارات وتحديثات البناء صارت في تطبيق واحد هادئ. الفريق يفتحه يومياً بدون ارتباك.",
          name: "فيصل ر.",
          role: "شريك عمليات",
          project: "Haykal · عقارات",
        },
        "client-zoro": {
          quote:
            "العميل والسائق والإدارة بدوا منتجاً واحداً. تسليم سريع، تفاصيل دقيقة، ودعم وقت الحاجة.",
          name: "مايا ك.",
          role: "شريكة مؤسِّسة",
          project: "Zoro Delivery",
        },
      },
      ctaTitle: "جاهز لبناء هادئ؟",
      ctaText:
        "احكِ لي ماذا تريد إطلاقه. أردّ عليك بشكل واضح، ووقت متوقع، وما يجب أن نبنيه أولاً.",
      cta: "ابدأ الحديث",
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
      formIntroTitle: "أرسل رسالتك",
      formIntro: "اكتب فكرتك باختصار، وأرد عليك شخصياً.",
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
    { id: "proof" as const, label: t.proof, href: "#proof" },
    { id: "process" as const, label: t.process, href: "#process" },
    { id: "contact" as const, label: t.contact, href: "#contact" },
  ];
}
