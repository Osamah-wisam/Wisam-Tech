/* ============================================================================
   Translations — every piece of page text, in Arabic and English.

   Each key matches a data-i18n="…" attribute in index.html. To change a
   wording, edit it here in both languages. To add a new piece of text, add
   the same key to both "ar" and "en", then put data-i18n="that.key" on the
   element in the HTML.

   Values marked as lists (…tags, sectors, foot.*) are HTML, because their
   elements carry data-i18n-html. Everything else is plain text.

   {company}, {brand}, {email} and {year} are filled in from js/config.js.

   The Arabic text is also written into index.html itself, so the page still
   reads correctly with JavaScript off and for search engines. When you change
   an Arabic string here, update the same text in index.html too.
   ========================================================================== */
window.I18N = {

  /* ===================================================================  AR */
  ar: {
    "title": "{company} | المنصات",

    "skip": "تخطَّ إلى المحتوى",
    "brand": "{brand}",
    "rail.aria": "أقسام الصفحة",
    "rail.ecosystem": "المنظومة",
    "rail.platforms": "المنصات",
    "rail.flow": "كيف تتكامل",
    "rail.reach": "لمن نقدّم خدماتنا",
    "nav.aria": "التنقل الرئيسي",
    "nav.platforms": "المنصات",
    "nav.flow": "كيف تتكامل",
    "nav.reach": "لمن نقدّم خدماتنا",

    "hero.eyebrow": "{company} — الملف التعريفي",
    "hero.title": "سبع منصات، <em>سلسلة إمداد</em> واحدة.",
    "hero.lead": "تعمل {company} على بناء وتشغيل منظومة متكاملة تغطي مختلف مراحل سلسلة الإمداد، بدءًا من التخليص الجمركي والنقل البري، مرورًا بالتخزين الذكي والبيع بالجملة والتجزئة، وصولًا إلى التوصيل للعميل الأخير. وتعمل كل وظيفة من هذه الوظائف كمنصة مستقلة ومتكاملة، تتكامل فيما بينها لتوفير رحلة لوجستية متكاملة تنقل الشحنة من ميناء الدخول وحتى باب العميل النهائي، دون الحاجة إلى خروجها من منظومة الشركة.",

    "hero.carousel": "{company}",
    "hero.dot.profile": "الملف التعريفي",
    "hero.more": "تعرّف على المنصات",
    "hero.prev": "الشريحة السابقة",
    "hero.next": "الشريحة التالية",
    "hero.pause": "إيقاف العرض",
    "hero.play": "تشغيل العرض",
    "slide.takhlees": "تخليص الإقرارات الجمركية والإفراج عن البضائع في الموانئ والمنافذ.",
    "slide.tawseel": "نقل بري بين الموانئ والمستودعات والمصانع، مع تتبع الشحنة طوال الرحلة.",
    "slide.takhzeen": "تخزين مُدار يعرف ما بداخله، ومخزون جاهز للبيع مباشرةً.",
    "slide.tawfir": "سوق جملة يضع الموردين والمصانع أمام المنشآت المشترية.",
    "slide.express": "توصيل في اليوم نفسه حتى باب العميل.",
    "slide.tawfiry": "متجر للأغذية والسلع اليومية، يصل طلبك إلى باب منزلك.",

    "s1.index": "01 — المنصات",
    "s1.h2": "ست منصات تشغيلية، والطبقة التي تعمل عليها",
    "s1.lead": "كل منصة مبنية لتعمل بشكل مستقل، ولكل منها هويتها وبياناتها الخاصة بما يناسب طبيعة عملها. وما يجمعها هو طبقة التشغيل التي تديرها {company}.",

    "p.wisam.kicker": "مُشغّل المنظومة",
    "p.wisam.name": "{company}",
    "p.wisam.desc": "الشركة الأم، والطبقة التي تُبنى عليها المنصات الست الأخرى. تملك {company} الخدمات المشتركة التي تعتمد عليها جميعًا — البيانات الرئيسية، وهوية الشركاء والمستخدمين، والسجلات التشغيلية، والتتبع والتقارير — وتدير المنظومة كعملية واحدة لا كمجموعة منتجات منفصلة. وهي مصممة للعمل على نطاق وطني ومهيأة للتوسع إقليميًا ودوليًا.",
    "p.wisam.tags": "<li>البيانات الرئيسية المشتركة</li><li>هوية الشركاء والمستخدمين</li><li>السجل التشغيلي</li><li>التتبع والتقارير</li><li>تكامل المنصات</li>",

    "p.takhlees.kicker": "التخليص الجمركي",
    "p.takhlees.name": "منصة تخليص",
    "p.takhlees.desc": "تتولى تخليص الإقرارات الجمركية والإفراج عن البضائع في الموانئ البحرية والجوية والمنافذ البرية — من التصنيف والرسوم والضرائب إلى المستندات ومتابعة الفحص — ثم تُسلّم شحنة مُخلّصة وموصوفة بالكامل مباشرةً إلى النقل.",
    "p.takhlees.tags": "<li>الإقرارات الجمركية</li><li>التصنيف الجمركي</li><li>الرسوم وضريبة القيمة المضافة</li><li>دورة المستندات</li><li>متابعة الإفراج</li>",

    "p.tawseel.kicker": "النقل البري",
    "p.tawseel.name": "منصة توصيل",
    "p.tawseel.desc": "النقل البري بين الموانئ والمنافذ والمستودعات والمصانع، لأي شحنة أيًّا كان مصدرها. تطابق المنصة الحمولات مع السعة المتاحة، وتُصدر الرحلات وتراقبها، وتُبقي الشحنة مرئية طوال الرحلة لا عند الاستلام والتسليم فقط.",
    "p.tawseel.tags": "<li>حمولات كاملة وجزئية</li><li>مطابقة الحمولات</li><li>إصدار الرحلات</li><li>تتبع لحظي</li><li>إثبات التسليم</li>",

    "p.takhzeen.kicker": "التخزين الذكي",
    "p.takhzeen.name": "منصة تخزين",
    "p.takhzeen.desc": "تخزين يعرف ما بداخله. تدير المنصة الاستلام والتخزين والجرد على مستوى الموقع داخل المستودع والتجهيز، لمن يحتاج مساحة تخزين مُدارة وحدها. ويمكن ربط المخزون نفسه بمنصتَي الجملة والتجزئة ليصبح متاحًا للبيع مباشرةً.",
    "p.takhzeen.tags": "<li>الاستلام والتخزين</li><li>جرد على مستوى الموقع</li><li>الجرد الدوري</li><li>التجهيز والتغليف</li><li>وضوح المخزون</li>",

    "p.tawfir.kicker": "البيع بالجملة",
    "p.tawfir.name": "منصة توفير",
    "p.tawfir.desc": "سوق البيع بالجملة. تضع المنصة المصانع والمستوردين وأصحاب الوكالات والموردين أمام المشترين من المنشآت — تجار التجزئة والبقالات وقطاع الأغذية — عبر كتالوجات وأسعار جملة وأوامر شراء. وللبائع أن ينفّذ طلباته بنفسه، أو يتركها لمنصات التخزين والنقل والتوصيل إن كان يستخدمها.",
    "p.tawfir.tags": "<li>كتالوج الجملة</li><li>تسعير متدرج</li><li>أوامر الشراء</li><li>حسابات الموردين</li><li>تنفيذ الطلبات</li>",

    "p.express.kicker": "التوصيل السريع",
    "p.express.name": "منصة توصيل إكسبريس",
    "p.express.desc": "التوصيل داخل المدن وفي اليوم نفسه حتى باب العميل، متاح لأي متجر أو منشأة ترسل طلباتها بنفسها. تُسند المنصة المناديب وترتّب المسارات وتُبلّغ عن كل عملية تسليم بالرجوع إلى الطلب الذي نشأت عنه.",
    "p.express.tags": "<li>التوصيل في اليوم نفسه</li><li>إسناد المناديب</li><li>ترتيب المسارات</li><li>تتبع لحظي</li><li>تأكيد التسليم</li>",

    "p.tawfiry.kicker": "البيع بالتجزئة",
    "p.tawfiry.name": "منصة توفيري",
    "p.tawfiry.desc": "واجهة البيع للمستهلك للأغذية والسلع اليومية. تعمل المنصة كمتجر قائم بذاته بطلباته ومرتجعاته، ولها — متى استُخدمت المنصات معًا — أن تبيع من مخزون تحفظه منصة تخزين وتُسلّم كل طلب إلى توصيل إكسبريس.",
    "p.tawfiry.tags": "<li>متجر للمستهلك</li><li>مخزون مشترك</li><li>إدارة الطلبات</li><li>تسليم إلى التوصيل</li><li>المرتجعات</li>",

    "s2.index": "02 — كيف تتكامل",
    "s2.h2": "شحنة واحدة، خمس عمليات تسليم",
    "s2.lead": "تظهر قيمة المنصات أكثر ما تظهر حين تعمل بالتسلسل. هذا هو المسار الذي تسلكه الشحنة بينها، والنقطة التي تتسلم عندها كل منصة دورها.",
    "f1.h": "التخليص", "f1.o": "منصة تخليص",
    "f1.p": "تصل البضائع إلى ميناء أو منفذ. يُقدَّم الإقرار الجمركي، وتُسدَّد الرسوم، ويُفرج عن الشحنة.",
    "f2.h": "النقل",   "f2.o": "منصة توصيل",
    "f2.p": "تُطابَق الحمولة المُخلّصة مع مركبة وتُنقل برًا إلى الداخل، مع تتبعها طوال الرحلة.",
    "f3.h": "التخزين", "f3.o": "منصة تخزين",
    "f3.p": "يُستلم المخزون ويُخزَّن ويُجرد على مستوى الموقع، ثم يصبح متاحًا للبيع عبر منصتي البيع.",
    "f4.h": "البيع",   "f4.o": "منصتا توفير وتوفيري",
    "f4.p": "يُباع المخزون نفسه بالجملة للمنشآت وبالتجزئة للمستهلكين، من وضع مخزون واحد.",
    "f5.h": "التوصيل", "f5.o": "منصة توصيل إكسبريس",
    "f5.p": "تخرج الطلبات في مرحلتها الأخيرة، ويُبلَّغ عن كل تسليم بالرجوع إلى الطلب الذي أنشأه.",

    "s4.index": "03 — لمن نقدّم خدماتنا",
    "s4.h2": "مبنية للمنشآت التي تحرّك البضائع",
    "s4.lead": "صُممت المنظومة للشركات المحلية والدولية والمصانع وأصحاب الوكالات والموردين الذين يحتاجون إلى إدارة عملياتهم بكفاءة ووضوح، وبمستوى عالٍ من الموثوقية التشغيلية.",
    "sectors":
      "<li>المصانع</li><li>المستوردون والمصدّرون</li><li>أصحاب الوكالات</li>" +
      "<li>تجار الجملة والموزعون</li><li>تجار التجزئة والبقالات</li><li>قطاع الأغذية</li>" +
      "<li>بائعو التجارة الإلكترونية</li><li>الموردون</li>",
    "facts.1.t": "الشركة",       "facts.1.d": "{company}",
    "facts.2.t": "المنظومة",     "facts.2.d": "تخليص جمركي · نقل بري · تخزين · بيع بالجملة · بيع بالتجزئة · توصيل للعميل الأخير",
    "facts.3.t": "النطاق",       "facts.3.d": "وطني، ومهيأ للتوسع إقليميًا ودوليًا",
    "facts.4.t": "للاستفسارات",

    "foot.tag": "منظومة متكاملة للخدمات اللوجستية والبيع، تُدار كنظام واحد.",
    "foot.h.platforms": "المنصات",
    "foot.platforms":
      '<li><a href="#platforms">منصة تخليص — التخليص الجمركي</a></li>' +
      '<li><a href="#platforms">منصة توصيل — النقل البري</a></li>' +
      '<li><a href="#platforms">منصة تخزين — التخزين الذكي</a></li>' +
      '<li><a href="#platforms">منصة توفير — البيع بالجملة</a></li>' +
      '<li><a href="#platforms">منصة توصيل إكسبريس — التوصيل السريع</a></li>' +
      '<li><a href="#platforms">منصة توفيري — البيع بالتجزئة</a></li>',
    "foot.h.page": "هذه الصفحة",
    "foot.page":
      '<li><a href="#ecosystem">المنظومة</a></li>' +
      '<li><a href="#platforms">المنصات</a></li>' +
      '<li><a href="#flow">كيف تتكامل</a></li>' +
      '<li><a href="#reach">لمن نقدّم خدماتنا</a></li>',
    "foot.h.vision": "بالتوافق مع",
    "vision.alt": "رؤية السعودية 2030",
    "foot.copy": "© {year} {company}"
  },

  /* ===================================================================  EN */
  en: {
    "title": "{company} | The Platforms",

    "skip": "Skip to content",
    "brand": "{brand}",
    "rail.aria": "Page sections",
    "rail.ecosystem": "Ecosystem",
    "rail.platforms": "Platforms",
    "rail.flow": "How it connects",
    "rail.reach": "Who it serves",
    "nav.aria": "Primary",
    "nav.platforms": "Platforms",
    "nav.flow": "How it connects",
    "nav.reach": "Who it serves",

    "hero.eyebrow": "{company} — Company Profile",
    "hero.title": "Seven platforms, <em>one</em> supply chain.",
    "hero.lead": "{company} builds and operates an integrated ecosystem for customs clearance, land freight, smart warehousing, wholesale and retail commerce, and last-mile delivery. Each function is its own platform. Together they carry a consignment from the port of entry to the final door without it ever leaving the system.",

    "hero.carousel": "{company}",
    "hero.dot.profile": "Company profile",
    "hero.more": "Explore the platforms",
    "hero.prev": "Previous slide",
    "hero.next": "Next slide",
    "hero.pause": "Pause slideshow",
    "hero.play": "Play slideshow",
    "slide.takhlees": "Customs declarations and the release of goods at ports and borders.",
    "slide.tawseel": "Road freight between ports, warehouses and plants, tracked for the whole trip.",
    "slide.takhzeen": "Managed storage that knows what it holds, with stock ready to sell from.",
    "slide.tawfir": "A wholesale marketplace that puts suppliers and manufacturers in front of business buyers.",
    "slide.express": "Same-day delivery to the customer's door.",
    "slide.tawfiry": "A store for food and everyday goods, with your order delivered to your door.",

    "s1.index": "01 — The platforms",
    "s1.h2": "Six operating platforms, and the layer they run on",
    "s1.lead": "Every platform is built to stand on its own, with its own identity and its own data suited to the work it does, and each one has a use of its own — a client can work with a single platform, or with several together, depending on what they need. What connects them is the operating layer {company} runs.",

    "p.wisam.kicker": "Ecosystem operator",
    "p.wisam.name": "{company}",
    "p.wisam.desc": "The parent company, and the layer the other six platforms are built on. {company} owns the shared services they all draw from — master data, partner and user identity, operational records, tracking and reporting — and runs the ecosystem as a single operation rather than a set of separate products. It is designed to work at national scale and structured for regional and international expansion.",
    "p.wisam.tags": "<li>Shared master data</li><li>Partner &amp; user identity</li><li>Operational record</li><li>Tracking &amp; reporting</li><li>Platform integration</li>",

    "p.takhlees.kicker": "Customs clearance",
    "p.takhlees.name": "Takhlees",
    "p.takhlees.desc": "A complete clearance service that can be used on its own. Takhlees handles the declaration and release of goods at seaports, airports and land borders — classification, duties and tax, documentation and inspection follow-up — and hands back a cleared, fully described consignment. If the client wants it moved on from there, its details carry over to Tawseel with no re-entry.",
    "p.takhlees.tags": "<li>Declarations</li><li>HS classification</li><li>Duty &amp; VAT</li><li>Document workflow</li><li>Release tracking</li>",

    "p.tawseel.kicker": "Land freight",
    "p.tawseel.name": "Tawseel",
    "p.tawseel.desc": "Road transport between ports, borders, warehouses and plants, for any consignment whatever its origin. Tawseel matches loads to available capacity, dispatches and monitors trips, and keeps the consignment visible for the whole run rather than only at collection and delivery.",
    "p.tawseel.tags": "<li>Full &amp; part loads</li><li>Load matching</li><li>Trip dispatch</li><li>Live tracking</li><li>Proof of delivery</li>",

    "p.takhzeen.kicker": "Smart warehousing",
    "p.takhzeen.name": "Takhzeen",
    "p.takhzeen.desc": "Storage that knows what it holds. Takhzeen manages receiving, put-away, bin-level stock and picking for anyone who needs managed warehouse space on its own. The same stock can also be connected to the wholesale and retail platforms so it is available to sell from directly.",
    "p.takhzeen.tags": "<li>Inbound &amp; put-away</li><li>Bin-level stock</li><li>Cycle counting</li><li>Pick &amp; pack</li><li>Stock visibility</li>",

    "p.tawfir.kicker": "B2B wholesale",
    "p.tawfir.name": "Tawfir",
    "p.tawfir.desc": "The wholesale marketplace. Tawfir puts manufacturers, importers, agency holders and suppliers in front of business buyers — retailers, grocers and food service — with catalogues, wholesale pricing and purchase orders. Sellers can fulfil those orders themselves, or leave fulfilment to the warehousing, freight and delivery platforms if they use them.",
    "p.tawfir.tags": "<li>Wholesale catalogue</li><li>Tiered pricing</li><li>Purchase orders</li><li>Supplier accounts</li><li>Order fulfilment</li>",

    "p.express.kicker": "Last-mile delivery",
    "p.express.name": "Tawseel Express",
    "p.express.desc": "Urban and same-day delivery out to the customer's door, open to any store or business sending its own orders. Tawseel Express assigns riders, sequences routes and reports each drop back against the order that raised it.",
    "p.express.tags": "<li>Same-day delivery</li><li>Rider dispatch</li><li>Route sequencing</li><li>Live tracking</li><li>Delivery confirmation</li>",

    "p.tawfiry.kicker": "B2C retail",
    "p.tawfiry.name": "Tawfiry",
    "p.tawfiry.desc": "The consumer storefront for food and everyday goods. Tawfiry runs as a store in its own right, with its own orders and returns, and — where the platforms are used together — can sell from stock held in Takhzeen and hand each order to Tawseel Express.",
    "p.tawfiry.tags": "<li>Consumer storefront</li><li>Shared inventory</li><li>Order management</li><li>Delivery hand-off</li><li>Returns</li>",

    "s2.index": "02 — How it connects",
    "s2.h2": "One consignment, five hand-offs",
    "s2.lead": "The platforms are most useful in sequence. This is the path a consignment takes through them, and the point at which each one takes over.",
    "f1.h": "Clear",   "f1.o": "Takhlees",
    "f1.p": "Goods arrive at a port or border. The declaration is filed, duties are settled and the consignment is released.",
    "f2.h": "Move",    "f2.o": "Tawseel",
    "f2.p": "The cleared load is matched to a vehicle and carried inland by road, tracked for the whole trip.",
    "f3.h": "Store",   "f3.o": "Takhzeen",
    "f3.p": "Stock is received, put away and counted at bin level, then made sellable through both trade platforms.",
    "f4.h": "Trade",   "f4.o": "Tawfir & Tawfiry",
    "f4.p": "The same inventory is sold wholesale to businesses and retail to consumers, from one stock position.",
    "f5.h": "Deliver", "f5.o": "Tawseel Express",
    "f5.p": "Orders go out on the final leg, and each drop is reported back against the order that raised it.",

    "s4.index": "03 — Who it serves",
    "s4.h2": "Built for the businesses that move goods",
    "s4.lead": "The ecosystem is designed for local and international companies, manufacturers, agency holders and suppliers that need their operations to run efficiently and visibly, at a high level of operational reliability.",
    "sectors":
      "<li>Manufacturers</li><li>Importers &amp; exporters</li><li>Agency holders</li>" +
      "<li>Wholesalers &amp; distributors</li><li>Retailers &amp; grocers</li><li>Food service</li>" +
      "<li>E-commerce sellers</li><li>Suppliers</li>",
    "facts.1.t": "Company",   "facts.1.d": "{company}",
    "facts.2.t": "Ecosystem", "facts.2.d": "Customs clearance · Land freight · Warehousing · Wholesale · Retail · Last-mile",
    "facts.3.t": "Scale",     "facts.3.d": "National, built for regional and international expansion",
    "facts.4.t": "Enquiries",

    "foot.tag": "An integrated logistics and commerce ecosystem, operated as one system.",
    "foot.h.platforms": "Platforms",
    "foot.platforms":
      '<li><a href="#platforms">Takhlees — Customs clearance</a></li>' +
      '<li><a href="#platforms">Tawseel — Land freight</a></li>' +
      '<li><a href="#platforms">Takhzeen — Smart warehousing</a></li>' +
      '<li><a href="#platforms">Tawfir — B2B wholesale</a></li>' +
      '<li><a href="#platforms">Tawseel Express — Last-mile delivery</a></li>' +
      '<li><a href="#platforms">Tawfiry — B2C retail</a></li>',
    "foot.h.page": "This page",
    "foot.page":
      '<li><a href="#ecosystem">Ecosystem</a></li>' +
      '<li><a href="#platforms">Platforms</a></li>' +
      '<li><a href="#flow">How it connects</a></li>' +
      '<li><a href="#reach">Who it serves</a></li>',
    "foot.h.vision": "Aligned with",
    "vision.alt": "Saudi Vision 2030",
    "foot.copy": "© {year} {company}"
  }
};
