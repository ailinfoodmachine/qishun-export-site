const [site, products] = await Promise.all([
  fetch("data/site.json").then((res) => res.json()),
  fetch("data/products.json").then((res) => res.json())
]);

const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" }
];

const translations = {
  en: {
    meta: {
      title: "Qishun Metal Abrasives | Steel Shot, Steel Grit & Blasting Media Manufacturer",
      description:
        "Shandong Qishun Metal Abrasives manufactures steel shot, steel grit, cut wire shot, stainless steel shot and blasting media for global surface preparation buyers."
    },
    nav: { home: "Home", products: "Products", factory: "Factory", quality: "Quality", about: "About", contact: "Contact" },
    actions: { requestQuote: "Request Quote", viewProducts: "View Products", sendInquiry: "Send Inquiry", viewDetails: "View details", requestProduct: "Request This Product" },
    hero: {
      eyebrow: "ISO 9001 metal abrasive manufacturer",
      title: "Steel shot, steel grit and blasting media for global surface preparation buyers.",
      copy:
        "Shandong Qishun Metal Abrasives manufactures five major metal abrasive series with 60+ specifications for foundry, shipbuilding, automotive, steel structure and machinery applications."
    },
    intro: { eyebrow: "Surface treatment consumables", title: "Built for stable cleaning brightness, low abrasive consumption and repeatable blasting performance." },
    products: { eyebrow: "Product Center", title: "Metal abrasives and blasting media", search: "Search", searchPlaceholder: "steel shot, grit, alumina...", all: "All" },
    factory: { eyebrow: "Manufacturing Strength", title: "From melting and atomization to quenching, screening and packing.", note: "Qishun is located in Zouping, Shandong, one of Asia's major metal abrasive production bases." },
    quality: { eyebrow: "Quality Control", title: "SAE-aligned specifications, chemical composition testing and fatigue life checks.", copy: "Qishun uses imported inspection equipment including fatigue life testing and direct-reading spectrometer analysis to control composition, hardness, metallographic structure and abrasive durability." },
    about: {
      eyebrow: "Company Profile",
      title: "Shandong Qishun Metal Abrasives Co., Ltd",
      copy:
        "Qishun manufactures cast steel shot, cast steel grit, cut wire shot, stainless steel shot, conditioned cut wire shot and related blasting media across five major series and more than 60 specifications. Products are used in container manufacturing, shipbuilding, automotive, casting, forging, heat treatment, locomotive, steel structure, steel pipe, machinery, mining, aerospace, pressure vessel and stone industries."
    },
    service: {
      title: "Service Promise",
      item1: "Customized processing plans based on application and equipment.",
      item2: "Production progress follow-up throughout the order process.",
      item3: "Response to product feedback within 24 hours.",
      item4: "Export supply experience across 20+ countries and regions."
    },
    contact: { eyebrow: "Export Inquiry", title: "Send your abrasive grade, size, quantity and application.", whatsapp: "Scan WhatsApp QR", address: "Address" },
    form: { name: "Name", email: "Email", company: "Company", product: "Product", message: "Inquiry Details", placeholder: "Grade, size, quantity, destination port, application...", submit: "Submit Inquiry", note: "The first FormSubmit message requires email activation before live delivery.", subject: "New inquiry from Qishun export website" },
    footer: { copy: "Steel shot, steel grit, cut wire shot and blasting media manufacturer in Shandong, China." }
  },
  zh: {
    meta: { title: "祺顺金属磨料 | 钢丸、钢砂与抛喷丸磨料厂家", description: "山东祺顺金属磨料生产钢丸、钢砂、钢丝切丸、不锈钢丸及表面处理磨料。" },
    nav: { home: "主页", products: "产品", factory: "工厂", quality: "质量", about: "关于", contact: "联系" },
    actions: { requestQuote: "获取报价", viewProducts: "查看产品", sendInquiry: "发送询盘", viewDetails: "查看详情", requestProduct: "询价此产品" },
    hero: { eyebrow: "ISO 9001 金属磨料生产厂家", title: "面向全球表面处理采购商的钢丸、钢砂与抛喷丸磨料。", copy: "山东祺顺金属磨料提供五大金属磨料系列、60 多种规格，服务铸造、船舶、汽车、钢结构和机械行业。" },
    intro: { eyebrow: "表面处理耗材", title: "稳定清理亮度、降低磨料消耗，并保持可重复的抛喷丸效果。" },
    products: { eyebrow: "产品中心", title: "金属磨料与抛喷丸介质", search: "搜索", searchPlaceholder: "钢丸、钢砂、刚玉...", all: "全部" },
    factory: { eyebrow: "制造实力", title: "从熔炼、雾化到淬火、筛分和包装。", note: "祺顺位于山东邹平，亚洲重要的金属磨料生产基地之一。" },
    quality: { eyebrow: "质量控制", title: "符合 SAE 规格，进行化学成分检测与疲劳寿命检查。", copy: "公司使用疲劳寿命试验、直读光谱分析等检测手段，控制成分、硬度、金相组织和磨料耐久性。" },
    about: { eyebrow: "公司简介", title: "山东祺顺金属磨料有限公司", copy: "祺顺生产铸钢丸、铸钢砂、钢丝切丸、不锈钢丸、研磨丸及相关抛喷丸磨料，覆盖五大系列 60 多个规格，广泛应用于集装箱、造船、汽车、铸造、锻造、热处理、钢结构、矿山、航空、压力容器和石材等行业。" },
    service: { title: "服务承诺", item1: "根据应用和设备提供定制加工方案。", item2: "订单生产全流程跟进。", item3: "24 小时内响应产品反馈。", item4: "拥有 20 多个国家和地区的出口供应经验。" },
    contact: { eyebrow: "出口询盘", title: "发送磨料牌号、规格、数量和应用场景。", whatsapp: "扫描 WhatsApp 二维码", address: "地址" },
    form: { name: "姓名", email: "邮箱", company: "公司", product: "产品", message: "询盘详情", placeholder: "牌号、规格、数量、目的港、用途...", submit: "提交询盘", note: "FormSubmit 首次收信需要邮箱点击激活。", subject: "祺顺外贸网站新询盘" },
    footer: { copy: "山东金属磨料生产厂家，供应钢丸、钢砂、钢丝切丸及抛喷丸磨料。" }
  },
  es: {
    meta: { title: "Qishun Abrasivos Metálicos | Granalla de acero y abrasivos de granallado", description: "Fabricante de granalla de acero, grit de acero, cut wire shot y abrasivos para preparación de superficies." },
    nav: { home: "Inicio", products: "Productos", factory: "Fábrica", quality: "Calidad", about: "Empresa", contact: "Contacto" },
    actions: { requestQuote: "Solicitar cotización", viewProducts: "Ver productos", sendInquiry: "Enviar consulta", viewDetails: "Ver detalles", requestProduct: "Consultar producto" },
    hero: { eyebrow: "Fabricante ISO 9001 de abrasivos metálicos", title: "Granalla de acero, grit de acero y abrasivos para compradores globales.", copy: "Shandong Qishun fabrica cinco series principales y más de 60 especificaciones para fundición, naval, automoción, estructuras de acero y maquinaria." },
    intro: { eyebrow: "Consumibles para tratamiento superficial", title: "Rendimiento estable, menor consumo y resultados repetibles de granallado." },
    products: { eyebrow: "Centro de productos", title: "Abrasivos metálicos y medios de granallado", search: "Buscar", searchPlaceholder: "granalla, grit, alúmina...", all: "Todos" },
    factory: { eyebrow: "Capacidad de fabricación", title: "De fusión y atomización a temple, cribado y empaque.", note: "Qishun se ubica en Zouping, Shandong, una importante base asiática de abrasivos metálicos." },
    quality: { eyebrow: "Control de calidad", title: "Especificaciones SAE, análisis químico y pruebas de vida útil.", copy: "El control incluye pruebas de fatiga y espectrometría para composición, dureza, estructura metalográfica y durabilidad." },
    about: { eyebrow: "Perfil de empresa", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "Qishun fabrica granalla de acero, grit de acero, cut wire shot, granalla inoxidable y abrasivos relacionados en cinco series y más de 60 especificaciones para múltiples industrias." },
    service: { title: "Promesa de servicio", item1: "Planes personalizados según aplicación y equipo.", item2: "Seguimiento de producción durante todo el pedido.", item3: "Respuesta a comentarios en 24 horas.", item4: "Experiencia exportadora en más de 20 países y regiones." },
    contact: { eyebrow: "Consulta de exportación", title: "Envíe grado, tamaño, cantidad y aplicación.", whatsapp: "Escanear QR de WhatsApp", address: "Dirección" },
    form: { name: "Nombre", email: "Correo", company: "Empresa", product: "Producto", message: "Detalles", placeholder: "Grado, tamaño, cantidad, puerto destino, aplicación...", submit: "Enviar consulta", note: "El primer mensaje de FormSubmit requiere activación por correo.", subject: "Nueva consulta del sitio Qishun" },
    footer: { copy: "Fabricante de granalla de acero, grit de acero y abrasivos de granallado en Shandong, China." }
  },
  fr: {
    meta: { title: "Qishun Abrasifs Métalliques | Grenaille d'acier et abrasifs", description: "Fabricant de grenaille d'acier, grit acier, cut wire shot et abrasifs de préparation de surface." },
    nav: { home: "Accueil", products: "Produits", factory: "Usine", quality: "Qualité", about: "Société", contact: "Contact" },
    actions: { requestQuote: "Demander un devis", viewProducts: "Voir produits", sendInquiry: "Envoyer demande", viewDetails: "Voir détails", requestProduct: "Demander ce produit" },
    hero: { eyebrow: "Fabricant ISO 9001 d'abrasifs métalliques", title: "Grenaille d'acier, grit acier et abrasifs pour acheteurs mondiaux.", copy: "Shandong Qishun fabrique cinq grandes séries et plus de 60 spécifications pour fonderie, naval, automobile, charpente métallique et machines." },
    intro: { eyebrow: "Consommables de traitement de surface", title: "Nettoyage stable, faible consommation et performance de grenaillage répétable." },
    products: { eyebrow: "Centre produits", title: "Abrasifs métalliques et médias de grenaillage", search: "Recherche", searchPlaceholder: "grenaille, grit, alumine...", all: "Tous" },
    factory: { eyebrow: "Force industrielle", title: "De la fusion et atomisation à la trempe, au criblage et à l'emballage.", note: "Qishun est située à Zouping, Shandong, importante base asiatique d'abrasifs métalliques." },
    quality: { eyebrow: "Contrôle qualité", title: "Spécifications SAE, analyse chimique et essais de durée de vie.", copy: "Les contrôles couvrent fatigue, spectrométrie, composition, dureté, structure métallographique et durabilité." },
    about: { eyebrow: "Profil société", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "Qishun fabrique grenaille d'acier, grit acier, cut wire shot, grenaille inox et abrasifs associés en cinq séries et plus de 60 spécifications pour de nombreuses industries." },
    service: { title: "Engagement service", item1: "Plans personnalisés selon application et équipement.", item2: "Suivi de production pendant toute la commande.", item3: "Réponse sous 24 heures aux retours produit.", item4: "Expérience export dans plus de 20 pays et régions." },
    contact: { eyebrow: "Demande export", title: "Envoyez grade, taille, quantité et application.", whatsapp: "Scanner le QR WhatsApp", address: "Adresse" },
    form: { name: "Nom", email: "E-mail", company: "Société", product: "Produit", message: "Détails", placeholder: "Grade, taille, quantité, port de destination, application...", submit: "Envoyer", note: "Le premier message FormSubmit nécessite une activation par e-mail.", subject: "Nouvelle demande du site Qishun" },
    footer: { copy: "Fabricant de grenaille d'acier, grit acier et abrasifs de grenaillage à Shandong, Chine." }
  },
  de: {
    meta: { title: "Qishun Metallische Strahlmittel | Stahlkies und Stahlstrahlmittel", description: "Hersteller von Stahlkugeln, Stahlkies, Drahtkorn und Strahlmitteln für Oberflächenvorbereitung." },
    nav: { home: "Startseite", products: "Produkte", factory: "Werk", quality: "Qualität", about: "Über uns", contact: "Kontakt" },
    actions: { requestQuote: "Angebot anfragen", viewProducts: "Produkte ansehen", sendInquiry: "Anfrage senden", viewDetails: "Details", requestProduct: "Produkt anfragen" },
    hero: { eyebrow: "ISO 9001 Hersteller metallischer Strahlmittel", title: "Stahlkugeln, Stahlkies und Strahlmittel für globale Einkäufer.", copy: "Shandong Qishun produziert fünf Hauptserien mit über 60 Spezifikationen für Gießerei, Schiffbau, Automobil, Stahlbau und Maschinenbau." },
    intro: { eyebrow: "Verbrauchsmaterial für Oberflächenbehandlung", title: "Stabile Reinigungshelligkeit, geringer Verbrauch und wiederholbare Strahlleistung." },
    products: { eyebrow: "Produktzentrum", title: "Metallische Strahlmittel und Schleifmedien", search: "Suche", searchPlaceholder: "Stahlkugel, Kies, Korund...", all: "Alle" },
    factory: { eyebrow: "Fertigungskraft", title: "Von Schmelzen und Atomisierung bis Härten, Sieben und Verpacken.", note: "Qishun befindet sich in Zouping, Shandong, einer wichtigen asiatischen Basis für metallische Strahlmittel." },
    quality: { eyebrow: "Qualitätskontrolle", title: "SAE-Spezifikationen, chemische Analyse und Lebensdauertests.", copy: "Prüfungen kontrollieren Zusammensetzung, Härte, Gefüge und Haltbarkeit der Strahlmittel." },
    about: { eyebrow: "Unternehmensprofil", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "Qishun fertigt Stahlgusskugeln, Stahlkies, Drahtkorn, Edelstahlstrahlmittel und verwandte Medien in fünf Serien und über 60 Spezifikationen." },
    service: { title: "Serviceversprechen", item1: "Anwendungsspezifische Lösungen nach Anlage und Prozess.", item2: "Produktionsverfolgung während des gesamten Auftrags.", item3: "Antwort auf Produktfeedback innerhalb von 24 Stunden.", item4: "Exporterfahrung in über 20 Ländern und Regionen." },
    contact: { eyebrow: "Exportanfrage", title: "Senden Sie Sorte, Größe, Menge und Anwendung.", whatsapp: "WhatsApp-QR scannen", address: "Adresse" },
    form: { name: "Name", email: "E-Mail", company: "Firma", product: "Produkt", message: "Anfragedetails", placeholder: "Sorte, Größe, Menge, Zielhafen, Anwendung...", submit: "Anfrage senden", note: "Die erste FormSubmit-Nachricht erfordert E-Mail-Aktivierung.", subject: "Neue Anfrage von Qishun Website" },
    footer: { copy: "Hersteller von Stahlkugeln, Stahlkies, Drahtkorn und Strahlmitteln in Shandong, China." }
  },
  pt: {
    meta: { title: "Qishun Abrasivos Metálicos | Granalha de aço e jateamento", description: "Fabricante de granalha de aço, grit de aço, cut wire shot e abrasivos para preparação de superfície." },
    nav: { home: "Início", products: "Produtos", factory: "Fábrica", quality: "Qualidade", about: "Sobre", contact: "Contato" },
    actions: { requestQuote: "Solicitar cotação", viewProducts: "Ver produtos", sendInquiry: "Enviar consulta", viewDetails: "Ver detalhes", requestProduct: "Consultar produto" },
    hero: { eyebrow: "Fabricante ISO 9001 de abrasivos metálicos", title: "Granalha de aço, grit de aço e abrasivos para compradores globais.", copy: "A Shandong Qishun fabrica cinco séries principais com mais de 60 especificações para fundição, naval, automotivo, estruturas de aço e máquinas." },
    intro: { eyebrow: "Consumíveis de tratamento de superfície", title: "Limpeza estável, menor consumo e desempenho repetível no jateamento." },
    products: { eyebrow: "Centro de produtos", title: "Abrasivos metálicos e meios de jateamento", search: "Pesquisar", searchPlaceholder: "granalha, grit, alumina...", all: "Todos" },
    factory: { eyebrow: "Força de fabricação", title: "Da fusão e atomização à têmpera, peneiramento e embalagem.", note: "Qishun está em Zouping, Shandong, uma importante base asiática de abrasivos metálicos." },
    quality: { eyebrow: "Controle de qualidade", title: "Especificações SAE, análise química e testes de vida útil.", copy: "Testes de fadiga e espectrometria controlam composição, dureza, estrutura metalográfica e durabilidade." },
    about: { eyebrow: "Perfil da empresa", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "A Qishun fabrica granalha de aço, grit de aço, cut wire shot, granalha inox e abrasivos relacionados em cinco séries e mais de 60 especificações." },
    service: { title: "Compromisso de serviço", item1: "Planos personalizados conforme aplicação e equipamento.", item2: "Acompanhamento da produção durante todo o pedido.", item3: "Resposta a feedback em até 24 horas.", item4: "Experiência de exportação em mais de 20 países e regiões." },
    contact: { eyebrow: "Consulta de exportação", title: "Envie grau, tamanho, quantidade e aplicação.", whatsapp: "Escanear QR do WhatsApp", address: "Endereço" },
    form: { name: "Nome", email: "E-mail", company: "Empresa", product: "Produto", message: "Detalhes", placeholder: "Grau, tamanho, quantidade, porto destino, aplicação...", submit: "Enviar consulta", note: "A primeira mensagem do FormSubmit requer ativação por e-mail.", subject: "Nova consulta do site Qishun" },
    footer: { copy: "Fabricante de granalha de aço, grit de aço e abrasivos de jateamento em Shandong, China." }
  },
  ru: {
    meta: { title: "Qishun Металлические абразивы | Стальная дробь и грит", description: "Производитель стальной дроби, стального грита, рубленой проволоки и абразивов для подготовки поверхности." },
    nav: { home: "Главная", products: "Продукция", factory: "Завод", quality: "Качество", about: "О нас", contact: "Контакты" },
    actions: { requestQuote: "Запросить цену", viewProducts: "Смотреть продукцию", sendInquiry: "Отправить запрос", viewDetails: "Подробнее", requestProduct: "Запросить продукт" },
    hero: { eyebrow: "Производитель металлических абразивов ISO 9001", title: "Стальная дробь, стальной грит и абразивы для мировых покупателей.", copy: "Shandong Qishun производит пять основных серий и более 60 спецификаций для литейной, судостроительной, автомобильной, металлоконструкционной и машиностроительной отраслей." },
    intro: { eyebrow: "Расходные материалы для обработки поверхности", title: "Стабильная очистка, низкий расход и повторяемая эффективность дробеструйной обработки." },
    products: { eyebrow: "Каталог продукции", title: "Металлические абразивы и материалы для дробеструя", search: "Поиск", searchPlaceholder: "дробь, грит, корунд...", all: "Все" },
    factory: { eyebrow: "Производственные возможности", title: "От плавки и атомизации до закалки, просева и упаковки.", note: "Qishun находится в Цзоупине, Шаньдун, одной из важных азиатских баз металлических абразивов." },
    quality: { eyebrow: "Контроль качества", title: "Спецификации SAE, химический анализ и испытания ресурса.", copy: "Контроль включает испытания на усталостную долговечность и спектрометрию состава, твердости, структуры и стойкости." },
    about: { eyebrow: "Профиль компании", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "Qishun производит литую стальную дробь, стальной грит, рубленую проволоку, нержавеющую дробь и связанные абразивы в пяти сериях и более 60 спецификациях." },
    service: { title: "Сервис", item1: "Индивидуальные решения под применение и оборудование.", item2: "Контроль производства на всех этапах заказа.", item3: "Ответ на отзывы по продукту в течение 24 часов.", item4: "Опыт экспорта в более чем 20 стран и регионов." },
    contact: { eyebrow: "Экспортный запрос", title: "Отправьте марку, размер, количество и применение.", whatsapp: "Сканировать QR WhatsApp", address: "Адрес" },
    form: { name: "Имя", email: "E-mail", company: "Компания", product: "Продукт", message: "Детали запроса", placeholder: "Марка, размер, количество, порт назначения, применение...", submit: "Отправить запрос", note: "Первое сообщение FormSubmit требует активации по e-mail.", subject: "Новый запрос с сайта Qishun" },
    footer: { copy: "Производитель стальной дроби, грита, рубленой проволоки и абразивов в Шаньдуне, Китай." }
  },
  ar: {
    meta: { title: "Qishun للمواد الكاشطة المعدنية | كرات وفُتات فولاذية", description: "مصنع كرات فولاذية وفُتات فولاذية ووسائط كاشطة لمعالجة الأسطح." },
    nav: { home: "الرئيسية", products: "المنتجات", factory: "المصنع", quality: "الجودة", about: "من نحن", contact: "اتصل بنا" },
    actions: { requestQuote: "طلب عرض سعر", viewProducts: "عرض المنتجات", sendInquiry: "إرسال استفسار", viewDetails: "التفاصيل", requestProduct: "استفسار عن المنتج" },
    hero: { eyebrow: "مصنع مواد كاشطة معدنية ISO 9001", title: "كرات فولاذية وفُتات فولاذية ووسائط تفجير للمشترين العالميين.", copy: "تصنع Shandong Qishun خمس سلاسل رئيسية وأكثر من 60 مواصفة لتطبيقات السباكة وبناء السفن والسيارات والهياكل الفولاذية والآلات." },
    intro: { eyebrow: "مستهلكات معالجة الأسطح", title: "تنظيف ثابت، استهلاك أقل، وأداء تفجير قابل للتكرار." },
    products: { eyebrow: "مركز المنتجات", title: "مواد كاشطة معدنية ووسائط تفجير", search: "بحث", searchPlaceholder: "كرات فولاذية، فُتات، ألومينا...", all: "الكل" },
    factory: { eyebrow: "قوة التصنيع", title: "من الصهر والذرّ إلى التقسية والغربلة والتعبئة.", note: "تقع Qishun في Zouping، Shandong، وهي قاعدة آسيوية مهمة للمواد الكاشطة المعدنية." },
    quality: { eyebrow: "ضبط الجودة", title: "مواصفات SAE وتحليل كيميائي واختبارات عمر التعب.", copy: "تشمل الرقابة اختبار عمر التعب والتحليل الطيفي للتحكم في التركيب والصلادة والبنية والمتانة." },
    about: { eyebrow: "نبذة عن الشركة", title: "Shandong Qishun Metal Abrasives Co., Ltd", copy: "تنتج Qishun كرات فولاذية مصبوبة، فُتات فولاذي، قطع سلكية، كرات ستانلس ومواد كاشطة مرتبطة ضمن خمس سلاسل وأكثر من 60 مواصفة." },
    service: { title: "وعد الخدمة", item1: "حلول مخصصة حسب التطبيق والمعدات.", item2: "متابعة الإنتاج طوال عملية الطلب.", item3: "الرد على ملاحظات المنتج خلال 24 ساعة.", item4: "خبرة تصدير إلى أكثر من 20 دولة ومنطقة." },
    contact: { eyebrow: "استفسار تصدير", title: "أرسل الدرجة والحجم والكمية والتطبيق.", whatsapp: "امسح رمز WhatsApp", address: "العنوان" },
    form: { name: "الاسم", email: "البريد الإلكتروني", company: "الشركة", product: "المنتج", message: "تفاصيل الاستفسار", placeholder: "الدرجة، الحجم، الكمية، ميناء الوصول، التطبيق...", submit: "إرسال الاستفسار", note: "تتطلب أول رسالة من FormSubmit تفعيل البريد الإلكتروني.", subject: "استفسار جديد من موقع Qishun" },
    footer: { copy: "مصنع كرات وفُتات فولاذية ووسائط تفجير في شاندونغ، الصين." }
  }
};

const categoryLabels = {
  "Metal Abrasives": { zh: "金属磨料", es: "Abrasivos metálicos", fr: "Abrasifs métalliques", de: "Metallische Strahlmittel", pt: "Abrasivos metálicos", ru: "Металлические абразивы", ar: "مواد كاشطة معدنية" },
  "Stainless Abrasives": { zh: "不锈钢磨料", es: "Abrasivos inoxidables", fr: "Abrasifs inox", de: "Edelstahlstrahlmittel", pt: "Abrasivos inox", ru: "Нержавеющие абразивы", ar: "مواد ستانلس كاشطة" },
  "Foundry Materials": { zh: "铸造材料", es: "Materiales de fundición", fr: "Matériaux de fonderie", de: "Gießereimaterialien", pt: "Materiais de fundição", ru: "Литейные материалы", ar: "مواد السباكة" },
  "Non-ferrous Abrasives": { zh: "有色金属磨料", es: "Abrasivos no ferrosos", fr: "Abrasifs non ferreux", de: "Nichteisen-Strahlmittel", pt: "Abrasivos não ferrosos", ru: "Цветные абразивы", ar: "مواد غير حديدية" },
  "Non-metal Abrasives": { zh: "非金属磨料", es: "Abrasivos no metálicos", fr: "Abrasifs non métalliques", de: "Nichtmetallische Abrasive", pt: "Abrasivos não metálicos", ru: "Неметаллические абразивы", ar: "مواد غير معدنية" },
  "Special Abrasives & Equipment": { zh: "异形磨料与设备", es: "Abrasivos especiales y equipos", fr: "Abrasifs spéciaux et équipements", de: "Spezialabrasive & Ausrüstung", pt: "Abrasivos especiais e equipamentos", ru: "Спецабразивы и оборудование", ar: "مواد خاصة ومعدات" }
};

const localizedProducts = {
  zh: {
    "steel-shot": ["铸钢丸", "球形铸钢磨料，用于抛丸清理、铸件清砂和喷丸强化。"],
    "steel-grit": ["铸钢砂", "棱角状高碳钢砂，用于除锈、除氧化皮和表面粗糙度处理。"],
    "cut-wire-shot": ["钢丝切丸", "精确切割钢丝磨料，寿命长，喷丸强度稳定。"],
    "conditioned-cut-wire-shot": ["研磨丸", "钝化圆整钢丝切丸，用于均匀亚光表面处理。"],
    "stainless-steel-shot": ["不锈钢丸", "低粉尘不锈钢磨料，适用于有色金属和不锈钢工件。"],
    "lost-foam-sand": ["埋箱砂", "消失模铸造用干砂，支撑泡沫模型并帮助排气。"],
    "aluminum-shot": ["铝丸", "柔和有色金属磨料，用于铜铝件抛光。"],
    "copper-shot": ["铜丸", "金黄色铜质磨料，用于强化、亚光和增色处理。"],
    "zinc-shot": ["锌丸", "软质锌磨料，用于铝锌压铸件去毛刺。"],
    "brown-fused-alumina": ["棕刚玉", "耐用氧化铝磨料，用于磨削、喷砂和耐火材料。"],
    "white-fused-alumina": ["白刚玉", "高纯氧化铝磨料，用于精磨和洁净切削。"],
    "glass-beads": ["玻璃珠", "球形玻璃介质，用于清理、喷丸和反光材料。"],
    "silicon-carbide": ["碳化硅", "高硬度磨料，用于切割、研磨和耐高温材料。"],
    "quartz-sand": ["石英砂", "坚硬硅质砂，用于铸造、过滤、玻璃和建材。"],
    "steel-ball": ["钢球", "耐磨研磨介质，用于矿山、水泥和冶金球磨。"],
    "magnetic-steel-pins": ["磁力钢针", "细小磁性钢针，用于抛光、去毛刺和复杂零件清理。"],
    "butterfly-steel-ball": ["蝶形钢珠", "用于手动调节和低摩擦定位的特殊钢珠组件。"],
    "emery": ["金刚砂", "高硬度矿物磨料，用于磨削、喷砂和耐磨表面。"],
    "shot-collection-cart": ["钢丸收集车", "用于喷抛丸车间回收钢丸并提高循环利用率。"],
    "shot-blasting-machine": ["抛丸机及配件", "抛丸机、叶轮、叶片、电机和喷砂配件。"],
    "atomized-stainless-shot": ["雾化不锈钢丸", "洁净低污染的不锈钢球形磨料。"]
  },
  es: {
    "steel-shot": ["Granalla de acero fundido"], "steel-grit": ["Grit de acero fundido"], "cut-wire-shot": ["Granalla de alambre cortado"],
    "conditioned-cut-wire-shot": ["Alambre cortado acondicionado"], "stainless-steel-shot": ["Granalla de acero inoxidable"], "lost-foam-sand": ["Arena para fundición lost foam"],
    "aluminum-shot": ["Granalla de aluminio"], "copper-shot": ["Granalla de cobre"], "zinc-shot": ["Granalla de zinc"], "brown-fused-alumina": ["Alúmina fundida marrón"],
    "white-fused-alumina": ["Alúmina fundida blanca"], "glass-beads": ["Microesferas de vidrio"], "silicon-carbide": ["Carburo de silicio"], "quartz-sand": ["Arena de cuarzo"],
    "steel-ball": ["Bola de acero"], "magnetic-steel-pins": ["Pines magnéticos de acero"], "butterfly-steel-ball": ["Bola de acero mariposa"], "emery": ["Esmeril"],
    "shot-collection-cart": ["Carro recolector de granalla"], "shot-blasting-machine": ["Granalladora y repuestos"], "atomized-stainless-shot": ["Granalla inoxidable atomizada"]
  },
  fr: {
    "steel-shot": ["Grenaille d'acier moulé"], "steel-grit": ["Grit d'acier moulé"], "cut-wire-shot": ["Grenaille de fil coupé"],
    "conditioned-cut-wire-shot": ["Fil coupé conditionné"], "stainless-steel-shot": ["Grenaille inox"], "lost-foam-sand": ["Sable pour moulage lost foam"],
    "aluminum-shot": ["Grenaille d'aluminium"], "copper-shot": ["Grenaille de cuivre"], "zinc-shot": ["Grenaille de zinc"], "brown-fused-alumina": ["Alumine fondue brune"],
    "white-fused-alumina": ["Alumine fondue blanche"], "glass-beads": ["Billes de verre"], "silicon-carbide": ["Carbure de silicium"], "quartz-sand": ["Sable de quartz"],
    "steel-ball": ["Bille d'acier"], "magnetic-steel-pins": ["Aiguilles magnétiques acier"], "butterfly-steel-ball": ["Bille d'acier papillon"], "emery": ["Émeri"],
    "shot-collection-cart": ["Chariot collecteur de grenaille"], "shot-blasting-machine": ["Grenailleuse et pièces"], "atomized-stainless-shot": ["Grenaille inox atomisée"]
  },
  de: {
    "steel-shot": ["Stahlgusskugelstrahlmittel"], "steel-grit": ["Stahlgusskies"], "cut-wire-shot": ["Drahtkorn"],
    "conditioned-cut-wire-shot": ["Konditioniertes Drahtkorn"], "stainless-steel-shot": ["Edelstahlstrahlmittel"], "lost-foam-sand": ["Lost-Foam-Gießsand"],
    "aluminum-shot": ["Aluminiumstrahlmittel"], "copper-shot": ["Kupferstrahlmittel"], "zinc-shot": ["Zinkstrahlmittel"], "brown-fused-alumina": ["Brauner Edelkorund"],
    "white-fused-alumina": ["Weißer Edelkorund"], "glass-beads": ["Glasperlen"], "silicon-carbide": ["Siliziumkarbid"], "quartz-sand": ["Quarzsand"],
    "steel-ball": ["Stahlkugel"], "magnetic-steel-pins": ["Magnetische Stahlnadeln"], "butterfly-steel-ball": ["Schmetterlings-Stahlkugel"], "emery": ["Schmirgel"],
    "shot-collection-cart": ["Strahlmittel-Sammelwagen"], "shot-blasting-machine": ["Strahlanlage und Teile"], "atomized-stainless-shot": ["Atomisiertes Edelstahlstrahlmittel"]
  },
  pt: {
    "steel-shot": ["Granalha de aço fundido"], "steel-grit": ["Grit de aço fundido"], "cut-wire-shot": ["Granalha de arame cortado"],
    "conditioned-cut-wire-shot": ["Arame cortado condicionado"], "stainless-steel-shot": ["Granalha de aço inox"], "lost-foam-sand": ["Areia para fundição lost foam"],
    "aluminum-shot": ["Granalha de alumínio"], "copper-shot": ["Granalha de cobre"], "zinc-shot": ["Granalha de zinco"], "brown-fused-alumina": ["Alumina fundida marrom"],
    "white-fused-alumina": ["Alumina fundida branca"], "glass-beads": ["Microesferas de vidro"], "silicon-carbide": ["Carbeto de silício"], "quartz-sand": ["Areia de quartzo"],
    "steel-ball": ["Esfera de aço"], "magnetic-steel-pins": ["Pinos magnéticos de aço"], "butterfly-steel-ball": ["Esfera de aço borboleta"], "emery": ["Esmeril"],
    "shot-collection-cart": ["Carrinho coletor de granalha"], "shot-blasting-machine": ["Máquina de jateamento e peças"], "atomized-stainless-shot": ["Granalha inox atomizada"]
  },
  ru: {
    "steel-shot": ["Литая стальная дробь"], "steel-grit": ["Литой стальной грит"], "cut-wire-shot": ["Рубленая проволочная дробь"],
    "conditioned-cut-wire-shot": ["Округленная рубленая дробь"], "stainless-steel-shot": ["Нержавеющая дробь"], "lost-foam-sand": ["Песок для ЛГМ"],
    "aluminum-shot": ["Алюминиевая дробь"], "copper-shot": ["Медная дробь"], "zinc-shot": ["Цинковая дробь"], "brown-fused-alumina": ["Коричневый электрокорунд"],
    "white-fused-alumina": ["Белый электрокорунд"], "glass-beads": ["Стеклянные шарики"], "silicon-carbide": ["Карбид кремния"], "quartz-sand": ["Кварцевый песок"],
    "steel-ball": ["Стальной шар"], "magnetic-steel-pins": ["Магнитные стальные иглы"], "butterfly-steel-ball": ["Стальной шар-бабочка"], "emery": ["Наждак"],
    "shot-collection-cart": ["Тележка сбора дроби"], "shot-blasting-machine": ["Дробеметная машина и детали"], "atomized-stainless-shot": ["Атомизированная нержавеющая дробь"]
  },
  ar: {
    "steel-shot": ["كرات فولاذية مصبوبة"], "steel-grit": ["فُتات فولاذي مصبوب"], "cut-wire-shot": ["حبيبات سلك مقطوع"],
    "conditioned-cut-wire-shot": ["سلك مقطوع مستدير"], "stainless-steel-shot": ["كرات ستانلس ستيل"], "lost-foam-sand": ["رمل سباكة الرغوة المفقودة"],
    "aluminum-shot": ["كرات ألمنيوم"], "copper-shot": ["كرات نحاس"], "zinc-shot": ["كرات زنك"], "brown-fused-alumina": ["ألومينا منصهرة بنية"],
    "white-fused-alumina": ["ألومينا منصهرة بيضاء"], "glass-beads": ["خرز زجاجي"], "silicon-carbide": ["كربيد السيليكون"], "quartz-sand": ["رمل كوارتز"],
    "steel-ball": ["كرة فولاذية"], "magnetic-steel-pins": ["إبر فولاذية مغناطيسية"], "butterfly-steel-ball": ["كرة فولاذية فراشية"], "emery": ["سنفرة"],
    "shot-collection-cart": ["عربة جمع الكرات"], "shot-blasting-machine": ["آلة تفجير وقطع غيار"], "atomized-stainless-shot": ["كرات ستانلس مذرة"]
  }
};

const genericProductText = {
  es: "Medio abrasivo industrial para limpieza, preparación de superficie y procesos de granallado.",
  fr: "Média abrasif industriel pour nettoyage, préparation de surface et grenaillage.",
  de: "Industrielles Strahlmittel für Reinigung, Oberflächenvorbereitung und Strahlprozesse.",
  pt: "Meio abrasivo industrial para limpeza, preparação de superfície e jateamento.",
  ru: "Промышленный абразив для очистки, подготовки поверхности и дробеструйной обработки.",
  ar: "وسيط كاشط صناعي للتنظيف وتحضير الأسطح وعمليات التفجير."
};

const metricLabels = {
  en: ["tons annual capacity", "specifications", "export countries & regions", "quality system"],
  zh: ["吨年产能", "规格型号", "出口国家和地区", "质量体系"],
  es: ["toneladas de capacidad anual", "especificaciones", "países y regiones de exportación", "sistema de calidad"],
  fr: ["tonnes de capacité annuelle", "spécifications", "pays et régions exportés", "système qualité"],
  de: ["Tonnen Jahreskapazität", "Spezifikationen", "Exportländer und Regionen", "Qualitätssystem"],
  pt: ["toneladas de capacidade anual", "especificações", "países e regiões de exportação", "sistema de qualidade"],
  ru: ["тонн годовой мощности", "спецификаций", "стран и регионов экспорта", "система качества"],
  ar: ["طن طاقة سنوية", "مواصفة", "دولة ومنطقة تصدير", "نظام الجودة"]
};

const advantageText = {
  en: site.advantages,
  zh: [
    { title: "稳定的磨料性能", body: "采用中频感应炉、离心雾化、二次淬火、回火、选圆、筛分和包装等工艺生产。" },
    { title: "以检测驱动质量控制", body: "通过疲劳寿命试验和直读光谱分析，控制批次稳定性、化学成分和 SAE 规格。" },
    { title: "支持定制加工", body: "根据客户需求跟进生产加工进度，并在 24 小时内响应产品反馈。" }
  ],
  es: [
    { title: "Rendimiento estable", body: "Procesos de horno de inducción, atomización centrífuga, temple, revenido, redondeo, cribado y empaque." },
    { title: "Calidad basada en pruebas", body: "Ensayos de vida útil y espectrometría ayudan a controlar consistencia, composición y especificaciones SAE." },
    { title: "Soporte personalizado", body: "Seguimiento de producción y respuesta a comentarios de producto dentro de 24 horas." }
  ],
  fr: [
    { title: "Performance stable", body: "Production par four à induction, atomisation centrifuge, trempe, revenu, arrondi, criblage et emballage." },
    { title: "Qualité pilotée par essais", body: "Essais de durée de vie et spectrométrie pour contrôler la constance, la composition et les normes SAE." },
    { title: "Support personnalisé", body: "Suivi de production et réponse aux retours produit sous 24 heures." }
  ],
  de: [
    { title: "Stabile Strahlmittelleistung", body: "Fertigung mit Induktionsofen, Zentrifugalatomisierung, Härten, Anlassen, Runden, Sieben und Verpacken." },
    { title: "Prüfbasierte Qualität", body: "Lebensdauertests und Spektrometrie kontrollieren Chargenstabilität, Zusammensetzung und SAE-Spezifikationen." },
    { title: "Individuelle Fertigung", body: "Produktionsverfolgung und Antwort auf Produktfeedback innerhalb von 24 Stunden." }
  ],
  pt: [
    { title: "Desempenho estável", body: "Produção com forno de indução, atomização centrífuga, têmpera, revenimento, arredondamento, peneiramento e embalagem." },
    { title: "Qualidade baseada em testes", body: "Testes de vida útil e espectrometria controlam consistência, composição e especificações SAE." },
    { title: "Suporte personalizado", body: "Acompanhamento de produção e resposta a feedback em até 24 horas." }
  ],
  ru: [
    { title: "Стабильные свойства абразива", body: "Производство включает индукционную печь, центробежную атомизацию, закалку, отпуск, округление, просев и упаковку." },
    { title: "Качество через испытания", body: "Испытания ресурса и спектрометрия контролируют стабильность партий, состав и соответствие SAE." },
    { title: "Индивидуальная поддержка", body: "Сопровождение производства и ответ на отзывы по продукту в течение 24 часов." }
  ],
  ar: [
    { title: "أداء كاشط مستقر", body: "إنتاج عبر فرن حثي وذرّ مركزي وتقسية ومراجعة واستدارة وغربلة وتعبئة." },
    { title: "جودة مدعومة بالاختبار", body: "اختبارات العمر والتحليل الطيفي لضبط ثبات الدفعات والتركيب ومواصفات SAE." },
    { title: "دعم تصنيع مخصص", body: "متابعة الإنتاج والرد على ملاحظات المنتج خلال 24 ساعة." }
  ]
};

const marketLabels = {
  Foundry: { zh: "铸造", es: "Fundición", fr: "Fonderie", de: "Gießerei", pt: "Fundição", ru: "Литейное производство", ar: "السباكة" },
  Shipbuilding: { zh: "造船", es: "Construcción naval", fr: "Naval", de: "Schiffbau", pt: "Construção naval", ru: "Судостроение", ar: "بناء السفن" },
  Automotive: { zh: "汽车", es: "Automoción", fr: "Automobile", de: "Automobil", pt: "Automotivo", ru: "Автомобили", ar: "السيارات" },
  "Steel structure": { zh: "钢结构", es: "Estructura de acero", fr: "Charpente métallique", de: "Stahlbau", pt: "Estrutura de aço", ru: "Металлоконструкции", ar: "الهياكل الفولاذية" },
  Container: { zh: "集装箱", es: "Contenedores", fr: "Conteneurs", de: "Container", pt: "Contêineres", ru: "Контейнеры", ar: "الحاويات" },
  Mining: { zh: "矿山", es: "Minería", fr: "Mine", de: "Bergbau", pt: "Mineração", ru: "Горная отрасль", ar: "التعدين" },
  Aerospace: { zh: "航空航天", es: "Aeroespacial", fr: "Aérospatial", de: "Luft- und Raumfahrt", pt: "Aeroespacial", ru: "Аэрокосмическая отрасль", ar: "الطيران" },
  "Pressure vessel": { zh: "压力容器", es: "Recipientes a presión", fr: "Appareils sous pression", de: "Druckbehälter", pt: "Vasos de pressão", ru: "Сосуды давления", ar: "أوعية الضغط" }
};

const state = {
  language: localStorage.getItem("qishun-language") || "en",
  category: "All",
  query: ""
};

const $ = (selector) => document.querySelector(selector);
const productGrid = $("#productGrid");
const tabs = $("#categoryTabs");
const productSearch = $("#productSearch");
const dialog = $("#productDialog");
const dialogContent = $("#dialogContent");

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[state.language]) ?? path;
}

function categoryLabel(category) {
  if (category === "All") return t("products.all");
  return categoryLabels[category]?.[state.language] || category;
}

function productText(product) {
  const translated = localizedProducts[state.language]?.[product.slug];
  return {
    name: translated?.[0] || product.name,
    summary: translated?.[1] || (state.language === "en" ? product.summary : genericProductText[state.language] || product.summary),
    category: categoryLabel(product.category),
    description: state.language === "en" ? product.description : translated?.[1] || genericProductText[state.language],
    applications: product.applications
  };
}

function applyStaticText() {
  const lang = languages.find((item) => item.code === state.language) || languages[0];
  document.documentElement.lang = lang.code;
  document.documentElement.dir = lang.dir;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  if (productSearch) productSearch.placeholder = t("products.searchPlaceholder");
  const messageBox = document.querySelector('textarea[name="message"]');
  if (messageBox) messageBox.placeholder = t("form.placeholder");
  const formSubject = $("#formSubject");
  if (formSubject) formSubject.value = t("form.subject");
}

function renderLanguageSelect() {
  const select = $("#languageSelect");
  if (!select) return;
  select.innerHTML = languages.map((lang) => `<option value="${lang.code}">${lang.label}</option>`).join("");
  select.value = state.language;
}

function renderMetrics() {
  if (!$("#metrics")) return;
  $("#metrics").innerHTML = site.metrics
    .map((metric, index) => `<div class="metric"><strong>${metric.value}</strong><span>${metricLabels[state.language]?.[index] || metric.label}</span></div>`)
    .join("");
}

function renderAdvantages() {
  if (!$("#advantages")) return;
  $("#advantages").innerHTML = (advantageText[state.language] || site.advantages)
    .map((item) => `<article class="advantage"><h3>${item.title}</h3><p>${item.body}</p></article>`)
    .join("");
}

function renderMarkets() {
  if (!$("#markets")) return;
  $("#markets").innerHTML = site.markets.map((market) => `<span>${marketLabels[market]?.[state.language] || market}</span>`).join("");
}

function renderContact() {
  if (!$("#contactLines") || !$("#inquiryForm")) {
    const footerEmail = $("#footerEmail");
    const footerPhone = $("#footerPhone");
    if (footerEmail) {
      footerEmail.href = `mailto:${site.email}`;
      footerEmail.textContent = site.email;
    }
    if (footerPhone) {
      footerPhone.href = `tel:${site.phoneRaw}`;
      footerPhone.textContent = site.phone;
    }
    return;
  }
  $("#contactLines").innerHTML = `
    <a href="mailto:${site.email}">${site.email}</a>
    <a href="tel:${site.phoneRaw}">${site.phone}</a>
    <a href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener">WhatsApp: ${site.whatsapp}</a>
    <span>${t("contact.address")}: ${site.address}</span>
  `;
  $("#whatsappBox").innerHTML = `
    <img src="${site.whatsappQr}" width="220" height="250" alt="WhatsApp QR code" />
    <span>${t("contact.whatsapp")}</span>
  `;
  $("#inquiryForm").action = site.formEndpoint;
  $("#productSelect").innerHTML = products
    .map((product) => `<option value="${product.name}">${productText(product).name}</option>`)
    .join("");
  $("#footerEmail").href = `mailto:${site.email}`;
  $("#footerEmail").textContent = site.email;
  $("#footerPhone").href = `tel:${site.phoneRaw}`;
  $("#footerPhone").textContent = site.phone;
}

function renderTabs() {
  if (!tabs) return;
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  tabs.innerHTML = categories
    .map(
      (category) =>
        `<button type="button" role="tab" aria-selected="${category === state.category}" data-category="${category}">${categoryLabel(category)}</button>`
    )
    .join("");
}

function filteredProducts() {
  const query = state.query.trim().toLowerCase();
  return products.filter((product) => {
    const text = productText(product);
    const matchesCategory = state.category === "All" || product.category === state.category;
    const haystack = [text.name, text.category, text.summary, product.name, product.category, product.summary, ...product.applications].join(" ").toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function renderProducts() {
  if (!productGrid) return;
  const list = filteredProducts();
  productGrid.innerHTML = list
    .map((product) => {
      const text = productText(product);
      return `
        <article class="product-card">
          <img src="${product.image}" width="640" height="480" alt="${text.name}" />
          <div class="product-body">
            <div class="category">${text.category}</div>
            <h3>${text.name}</h3>
            <p>${text.summary}</p>
            <a class="text-link" href="products/${product.slug}.html">${t("actions.viewDetails")}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function openProduct(slug) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return;
  const text = productText(product);
  const specs = Object.entries(product.specs)
    .map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`)
    .join("");

  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <img src="${product.image}" width="720" height="720" alt="${text.name}" />
      <div class="dialog-copy">
        <p class="eyebrow">${text.category}</p>
        <h2>${text.name}</h2>
        <p>${text.description}</p>
        <div class="application-list">${text.applications.map((item) => `<span>${item}</span>`).join("")}</div>
        <table class="spec-table"><tbody>${specs}</tbody></table>
        <a class="button primary" href="contact.html" data-close-dialog>${t("actions.requestProduct")}</a>
      </div>
    </div>
  `;
  dialog.showModal();
}

function renderAll() {
  applyStaticText();
  renderMetrics();
  renderAdvantages();
  renderMarkets();
  renderContact();
  renderTabs();
  renderProducts();
}

$("#languageSelect")?.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("qishun-language", state.language);
  renderAll();
});

tabs?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderTabs();
  renderProducts();
});

productSearch?.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

productGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (button) openProduct(button.dataset.product);
});

$(".dialog-close")?.addEventListener("click", () => dialog.close());

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog || event.target.closest("[data-close-dialog]")) dialog.close();
});

$(".menu-toggle")?.addEventListener("click", () => {
  const header = $(".site-header");
  const isOpen = header.classList.toggle("nav-open");
  $(".menu-toggle").setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => $(".site-header").classList.remove("nav-open"));
});

renderLanguageSelect();
renderAll();
