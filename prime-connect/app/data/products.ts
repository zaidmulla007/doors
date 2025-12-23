export interface Product {
  id: string;
  slug: string;
  categoryId: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  specifications?: {
    [key: string]: string;
  };
  images: string[];
}

export const products: Product[] = [
  // MDF DOORS
  {
    id: 'mdf-door-001',
    slug: 'mdf-doors',
    categoryId: 'doors',
    name: {
      en: 'MDF Doors (Medium Density Fiberboard)',
      ar: 'أبواب MDF (لوح ألياف متوسط الكثافة)'
    },
    description: {
      en: 'High-quality engineered wood doors offering smooth finish, durability, and excellent resistance to warping',
      ar: 'أبواب خشبية هندسية عالية الجودة توفر تشطيبًا ناعمًا ومتانة ومقاومة ممتازة للالتواء'
    },
    features: {
      en: [
        'No raised grain or cracking',
        'Smooth, paintable surface',
        'Reduces sound transmission',
        'Increased privacy',
        'More stable than wood',
        'Exceptional details, crisp clean lines',
        'Fire Rated: FD30 (30-min), FD60 (60-min), FD120 (120-min)'
      ],
      ar: [
        'لا يوجد حبيبات مرتفعة أو تشققات',
        'سطح ناعم قابل للطلاء',
        'يقلل من انتقال الصوت',
        'زيادة الخصوصية',
        'أكثر استقرارًا من الخشب',
        'تفاصيل استثنائية وخطوط نظيفة واضحة',
        'مقاوم للحريق: FD30 (30 دقيقة)، FD60 (60 دقيقة)، FD120 (120 دقيقة)'
      ]
    },
    specifications: {
      material: 'MDF with wood veneer',
      structure: 'MDF strips filling + structure, door filler solid wood, solid skeleton',
      fireRating: 'FD30/FD60/FD120'
    },
    images: ['/images/products/mdf-doors.jpg', '/images/products/mdf-1.jpg', '/images/products/mdf-2.jpg']
  },

  // WPC DOORS
  {
    id: 'wpc-door-001',
    slug: 'wpc-doors',
    categoryId: 'doors',
    name: {
      en: 'WPC Doors (Wood Plastic Composite)',
      ar: 'أبواب WPC (مركب الخشب والبلاستيك)'
    },
    description: {
      en: 'Eco-friendly doors combining wood\'s elegance with plastic\'s durability, giving you long-lasting performance and modern design',
      ar: 'أبواب صديقة للبيئة تجمع بين أناقة الخشب ومتانة البلاستيك، مما يمنحك أداءً طويل الأمد وتصميمًا عصريًا'
    },
    features: {
      en: [
        'Waterproof and moistureproof',
        'Anti-termites, anti-worm, anti-termites',
        'Fast delivery',
        'Sound proof',
        'Environmentally friendly - eco-friendly material',
        'Formaldehyde levels ≤ø1',
        'Recycled material',
        'Customized color and design',
        'Hinge hole, ODM & OEM',
        'Easy installation - 4 screw connection saving labor time',
        '100% water proof',
        '100% Eco Friendly',
        'Non-Formaldehyde',
        '100% Moisture Proof',
        '100% Anti-Termite',
        'Sound Proof',
        'Anti Flaming',
        'More Durable',
        'Easy to be Installed',
        'Customized',
        'Modern and Fashionable'
      ],
      ar: [
        'مقاوم للماء والرطوبة',
        'مضاد للنمل الأبيض والديدان',
        'توصيل سريع',
        'عازل للصوت',
        'صديق للبيئة - مواد صديقة للبيئة',
        'مستويات الفورمالديهايد ≤ø1',
        'مواد معاد تدويرها',
        'لون وتصميم مخصص',
        'ثقب المفصلة، ODM و OEM',
        'سهل التركيب - توصيل 4 مسامير يوفر وقت العمل',
        '100٪ مقاوم للماء',
        '100٪ صديق للبيئة',
        'خالي من الفورمالديهايد',
        '100٪ مقاوم للرطوبة',
        '100٪ مضاد للنمل الأبيض',
        'عازل للصوت',
        'مضاد للاشتعال',
        'أكثر متانة',
        'سهل التركيب',
        'قابل للتخصيص',
        'عصري وعصري'
      ]
    },
    specifications: {
      panelMaterial: 'WPC Panel 30/35mm + wood',
      filmLaminated: 'PVC Film',
      painting: 'Full WPC Door Painting',
      foam: 'PU Foam, WPC edge banding'
    },
    images: ['/images/products/wpc-doors.jpg']
  },

  // IRON/STEEL DOORS
  {
    id: 'steel-door-001',
    slug: 'steel-doors',
    categoryId: 'doors',
    name: {
      en: 'Iron/Steel Doors',
      ar: 'أبواب الحديد/الفولاذ'
    },
    description: {
      en: 'Crafted from premium iron, our doors offer unmatched durability, modern design, and reliable safety for your home or business',
      ar: 'مصنوعة من الحديد الممتاز، توفر أبوابنا متانة لا مثيل لها وتصميمًا عصريًا وسلامة موثوقة لمنزلك أو عملك'
    },
    features: {
      en: [
        'Steel frame construction',
        'Infill particle board or rockwool or fiber glass',
        'Fireproof & smoke seal',
        'Fire lock',
        'High density honeycomb paper core laminated to door face sheets',
        'Galvanmeal steel face sheets',
        'Pre-punched label holes',
        '10 GA 4 1/2" high frequency hinge reinforcement',
        'Continuous, mechanical interlocking edge seam filled with an internal sealant',
        '16 GA inverted top/bottom channel',
        '16 GA closer reinforcement',
        '161 cylindrical lock reinforcement',
        'Fire Rating: FD60 (60-min), FD90 (90-min), FD120 (120-min)'
      ],
      ar: [
        'بناء إطار فولاذي',
        'حشو لوح جزيئات أو صوف صخري أو ألياف زجاجية',
        'مقاوم للحريق وختم الدخان',
        'قفل مقاوم للحريق',
        'قلب ورق قرص العسل عالي الكثافة مغلف على ألواح واجهة الباب',
        'ألواح واجهة من الفولاذ المجلفن',
        'ثقوب الملصقات المثقوبة مسبقًا',
        'تعزيز المفصلة عالي التردد 10 GA 4 1/2"',
        'حافة متشابكة ميكانيكيًا مستمرة مملوءة بمانع تسرب داخلي',
        'قناة علوية/سفلية مقلوبة 16 GA',
        'تعزيز إغلاق 16 GA',
        'تعزيز قفل أسطواني 161',
        'تصنيف الحريق: FD60 (60 دقيقة)، FD90 (90 دقيقة)، FD120 (120 دقيقة)'
      ]
    },
    specifications: {
      material: 'Steel/Iron',
      fireRating: 'FD60/FD90/FD120'
    },
    images: ['/images/products/steel-doors.jpg']
  },

  // WOODEN DOORS
  {
    id: 'wooden-door-001',
    slug: 'wooden-doors',
    categoryId: 'doors',
    name: {
      en: 'Wooden Doors',
      ar: 'أبواب خشبية'
    },
    description: {
      en: 'Wooden doors bring timeless elegance with natural warmth and strength. A perfect blend of durability and classic style for every space',
      ar: 'تجلب الأبواب الخشبية الأناقة الخالدة مع الدفء والقوة الطبيعية. مزيج مثالي من المتانة والأسلوب الكلاسيكي لكل مساحة'
    },
    features: {
      en: [
        'Consistent grain and color matching',
        'Dowel joinery for added strength',
        'Engineered core for stability',
        'Edge - glued solid wood panel',
        'Floating panel system',
        'Hand-matched 1/16" veneers',
        'Horizontal or vertical grain pattern',
        'Fire Rating: FD30 (30-min), FD60 (60-min)'
      ],
      ar: [
        'حبيبات ولون متسقة',
        'نجارة دوول لقوة إضافية',
        'قلب هندسي للاستقرار',
        'لوحة خشبية صلبة ملصقة بالحافة',
        'نظام اللوحة العائمة',
        'قشرة 1/16" مطابقة يدويًا',
        'نمط حبيبات أفقي أو عمودي',
        'تصنيف الحريق: FD30 (30 دقيقة)، FD60 (60 دقيقة)'
      ]
    },
    specifications: {
      material: 'Solid wood, wood veneers',
      construction: 'TruStile Wood stile & rail door / Reserve Wood flush construction',
      fireRating: 'FD30/FD60'
    },
    images: ['/images/products/wooden-doors.jpg']
  },

  // ALUMINIUM DOORS
  {
    id: 'aluminum-door-001',
    slug: 'aluminum-doors',
    categoryId: 'doors',
    name: {
      en: 'Aluminium Doors',
      ar: 'أبواب ألمنيوم'
    },
    description: {
      en: 'Aluminium doors that are rust-free, durable, and stylish - perfect for every home and office',
      ar: 'أبواب ألمنيوم خالية من الصدأ ومتينة وأنيقة - مثالية لكل منزل ومكتب'
    },
    features: {
      en: [
        'Rust-free and corrosion resistant',
        'Lightweight yet strong',
        'Low maintenance',
        'Modern sleek design',
        'Energy efficient',
        '5 chamber sash with optional BCM inserts available',
        'Sustainable and built to last',
        'Life expectancy of up to 40 years',
        'Diverse glaze options available, up to 52mm, to maximise thermal and acoustic performance',
        'Fire Rating: FD30 (30-min), FD60 (60-min)'
      ],
      ar: [
        'خالي من الصدأ ومقاوم للتآكل',
        'خفيف الوزن لكنه قوي',
        'صيانة منخفضة',
        'تصميم أنيق عصري',
        'كفاءة في استهلاك الطاقة',
        'إطار 5 غرف مع إدراجات BCM اختيارية متاحة',
        'مستدام ومبني ليدوم',
        'عمر متوقع يصل إلى 40 عامًا',
        'خيارات زجاج متنوعة متاحة، حتى 52 مم، لزيادة الأداء الحراري والصوتي',
        'تصنيف الحريق: FD30 (30 دقيقة)، FD60 (60 دقيقة)'
      ]
    },
    specifications: {
      material: 'Aluminium',
      glazing: '24, 28, 36, 40 & 44mm glazing options',
      chambers: '5 chamber sash',
      fireRating: 'FD30/FD60'
    },
    images: ['/images/products/aluminum-doors.jpg']
  },

  // EMERGENCY EXIT DOORS
  {
    id: 'emergency-door-001',
    slug: 'emergency-exit-doors',
    categoryId: 'doors',
    name: {
      en: 'Emergency Exit Doors',
      ar: 'أبواب الطوارئ'
    },
    description: {
      en: 'Designed to resist fire and heat, these doors provide safety, durability, and compliance with building standards, ensuring protection in case of emergencies',
      ar: 'مصممة لمقاومة الحريق والحرارة، توفر هذه الأبواب السلامة والمتانة والامتثال لمعايير البناء، مما يضمن الحماية في حالات الطوارئ'
    },
    features: {
      en: [
        'Fire rated construction',
        'Panic bar hardware',
        'Emergency exit signage compatible',
        'Self-closing mechanism',
        'Quick and easy egress',
        'Meets safety regulations',
        'Fire Rating: FD60 (60-min), FD90 (90-min), FD120 (120-min)'
      ],
      ar: [
        'بناء مقاوم للحريق',
        'أجهزة شريط الذعر',
        'متوافق مع لافتات الخروج في حالات الطوارئ',
        'آلية الإغلاق الذاتي',
        'خروج سريع وسهل',
        'يلبي لوائح السلامة',
        'تصنيف الحريق: FD60 (60 دقيقة)، FD90 (90 دقيقة)، FD120 (120 دقيقة)'
      ]
    },
    specifications: {
      thickness: '55mm (2 hours fire rated)',
      fireRating: 'FD60/FD90/FD120'
    },
    images: ['/images/products/emergency-doors.jpg']
  },

  // DOOR MECHANISMS AND ACCESSORIES
  {
    id: 'hardware-001',
    slug: 'door-mechanisms-accessories',
    categoryId: 'door-hardware',
    name: {
      en: 'Door Mechanisms and Accessories',
      ar: 'آليات وملحقات الأبواب'
    },
    description: {
      en: 'Complete range of door handles, hinges, locks, and decorative accessories in various finishes',
      ar: 'مجموعة كاملة من مقابض الأبواب والمفصلات والأقفال والملحقات الزخرفية بتشطيبات مختلفة'
    },
    features: {
      en: [
        'Premium quality materials',
        'Multiple finish options (gold, silver, bronze, black)',
        'Decorative and functional designs',
        'Easy installation',
        'Durable construction'
      ],
      ar: [
        'مواد عالية الجودة',
        'خيارات تشطيب متعددة (ذهبي، فضي، برونزي، أسود)',
        'تصاميم زخرفية ووظيفية',
        'سهل التركيب',
        'بناء متين'
      ]
    },
    images: ['/images/products/door-hardware.jpg']
  },

  // DOOR HINGES
  {
    id: 'hinges-001',
    slug: 'door-hinges',
    categoryId: 'door-hardware',
    name: {
      en: 'Door Hinges',
      ar: 'مفصلات الأبواب'
    },
    description: {
      en: 'High-quality door hinges in various styles and finishes for smooth operation',
      ar: 'مفصلات أبواب عالية الجودة بأنماط وتشطيبات مختلفة للتشغيل السلس'
    },
    features: {
      en: [
        'Heavy-duty construction',
        'Multiple sizes available',
        'Concealed and visible options',
        'Smooth operation',
        'Corrosion resistant',
        'Gold, silver, black finishes'
      ],
      ar: [
        'بناء ثقيل',
        'أحجام متعددة متاحة',
        'خيارات مخفية ومرئية',
        'تشغيل سلس',
        'مقاوم للتآكل',
        'تشطيبات ذهبية وفضية وسوداء'
      ]
    },
    images: ['/images/products/hinges.jpg']
  },

  // SMART LOCKS
  {
    id: 'smartlock-001',
    slug: 'smart-locks',
    categoryId: 'door-hardware',
    name: {
      en: 'Door Smart Locks',
      ar: 'أقفال الأبواب الذكية'
    },
    description: {
      en: 'Modern smart lock systems with keyless entry, biometric, and remote access features',
      ar: 'أنظمة قفل ذكية حديثة مع دخول بدون مفتاح وبصمة الأصابع وميزات الوصول عن بعد'
    },
    features: {
      en: [
        'Keyless entry',
        'Fingerprint recognition',
        'PIN code access',
        'Remote control via smartphone',
        'Multiple user management',
        'Auto-lock function',
        'Low battery warning',
        'Emergency power supply'
      ],
      ar: [
        'دخول بدون مفتاح',
        'التعرف على بصمات الأصابع',
        'الوصول برمز PIN',
        'التحكم عن بعد عبر الهاتف الذكي',
        'إدارة مستخدمين متعددة',
        'وظيفة القفل التلقائي',
        'تحذير البطارية المنخفضة',
        'إمدادات الطاقة الطارئة'
      ]
    },
    images: ['/images/products/smart-locks.jpg']
  },

  // KITCHEN CABINETS - Base Cabinets
  {
    id: 'kitchen-base-001',
    slug: 'kitchen-base-cabinets',
    categoryId: 'kitchen-cabinets',
    name: {
      en: 'Base Kitchen Cabinets',
      ar: 'خزائن المطبخ الأساسية'
    },
    description: {
      en: 'Sturdy base cabinets in various configurations including sink bases, drawer bases, and corner units',
      ar: 'خزائن أساسية قوية بتكوينات مختلفة بما في ذلك قواعد الحوض وقواعد الأدراج ووحدات الزاوية'
    },
    features: {
      en: [
        'Multiple door and drawer configurations',
        'Soft-close hinges and drawer slides',
        'Adjustable shelving',
        'Durable construction',
        'Water-resistant materials',
        'Easy to clean'
      ],
      ar: [
        'تكوينات متعددة للأبواب والأدراج',
        'مفصلات وشرائح أدراج ناعمة الإغلاق',
        'رفوف قابلة للتعديل',
        'بناء متين',
        'مواد مقاومة للماء',
        'سهل التنظيف'
      ]
    },
    specifications: {
      types: 'Base Spice Racks, Single Door Bases, Double Door Bases, Sink Bases, Drawer Bases',
      heights: '34.5"',
      widths: 'Various (12"-48")'
    },
    images: ['/images/products/base-cabinets.jpg']
  },

  // KITCHEN CABINETS - Wall Cabinets
  {
    id: 'kitchen-wall-001',
    slug: 'kitchen-wall-cabinets',
    categoryId: 'kitchen-cabinets',
    name: {
      en: 'Wall Kitchen Cabinets',
      ar: 'خزائن المطبخ الحائطية'
    },
    description: {
      en: 'Space-efficient wall cabinets for maximum storage with elegant designs',
      ar: 'خزائن حائطية فعالة المساحة لتخزين أقصى بتصاميم أنيقة'
    },
    features: {
      en: [
        'Space-saving design',
        'Multiple height options',
        'Glass door options available',
        'Soft-close hinges',
        'Adjustable shelves',
        'Modern finishes'
      ],
      ar: [
        'تصميم يوفر المساحة',
        'خيارات ارتفاع متعددة',
        'خيارات أبواب زجاجية متاحة',
        'مفصلات ناعمة الإغلاق',
        'رفوف قابلة للتعديل',
        'تشطيبات عصرية'
      ]
    },
    specifications: {
      heights: '30", 36", 42"',
      depths: '12"-15"'
    },
    images: ['/images/products/wall-cabinets.jpg']
  },

  // KITCHEN CABINETS - Pantry
  {
    id: 'kitchen-pantry-001',
    slug: 'kitchen-pantry-cabinets',
    categoryId: 'kitchen-cabinets',
    name: {
      en: 'Pantry Cabinets',
      ar: 'خزائن المؤن'
    },
    description: {
      en: 'Tall pantry cabinets for maximum storage with pull-out shelves and organizers',
      ar: 'خزائن مؤن طويلة لتخزين أقصى مع رفوف سحب ومنظمات'
    },
    features: {
      en: [
        'Full-height storage',
        'Pull-out shelves',
        'Built-in organizers',
        'Multiple compartments',
        'Soft-close doors',
        'Adjustable shelving'
      ],
      ar: [
        'تخزين بارتفاع كامل',
        'رفوف قابلة للسحب',
        'منظمات مدمجة',
        'مقصورات متعددة',
        'أبواب ناعمة الإغلاق',
        'رفوف قابلة للتعديل'
      ]
    },
    specifications: {
      heights: '84", 90", 96"',
      widths: '24", 30", 36"'
    },
    images: ['/images/products/pantry-cabinets.jpg']
  },

  // KITCHEN ACCESSORIES
  {
    id: 'kitchen-accessories-001',
    slug: 'kitchen-accessories',
    categoryId: 'kitchen-cabinets',
    name: {
      en: 'Kitchen Cabinet Accessories',
      ar: 'ملحقات خزائن المطبخ'
    },
    description: {
      en: 'Complete range of hinges, glass shelf clips, hooks, runners, and organizers',
      ar: 'مجموعة كاملة من المفصلات ومشابك الرفوف الزجاجية والخطافات والمتسابقين والمنظمات'
    },
    features: {
      en: [
        'Self-closing runners',
        'OT door openers',
        'Hidden rails',
        'Pull-out clothes hanger rails',
        'Telescopic trouser racks',
        'Wine glass racks',
        'Jewelry organizers',
        'Bed frame lift systems'
      ],
      ar: [
        'متسابقين إغلاق ذاتي',
        'فتاحات أبواب OT',
        'سكك حديدية مخفية',
        'قضبان شماعات ملابس سحب',
        'رفوف بنطلونات تلسكوبية',
        'رفوف كؤوس النبيذ',
        'منظمات المجوهرات',
        'أنظمة رفع إطار السرير'
      ]
    },
    images: ['/images/products/kitchen-accessories.jpg']
  },

  // WARDROBES - Custom Walk-in
  {
    id: 'wardrobe-walkin-001',
    slug: 'walk-in-wardrobes',
    categoryId: 'wardrobes',
    name: {
      en: 'Walk-in Wardrobes',
      ar: 'خزانات الملابس المشي'
    },
    description: {
      en: 'Luxurious walk-in wardrobes with customizable layouts and premium finishes',
      ar: 'خزانات ملابس فاخرة للمشي مع تخطيطات قابلة للتخصيص وتشطيبات ممتازة'
    },
    features: {
      en: [
        'Customizable layout',
        'LED lighting options',
        'Multiple hanging spaces',
        'Drawer organizers',
        'Shoe racks',
        'Jewelry drawers',
        'Mirror options',
        'Premium finishes'
      ],
      ar: [
        'تخطيط قابل للتخصيص',
        'خيارات إضاءة LED',
        'مساحات تعليق متعددة',
        'منظمات الأدراج',
        'رفوف الأحذية',
        'أدراج المجوهرات',
        'خيارات المرآة',
        'تشطيبات ممتازة'
      ]
    },
    images: ['/images/products/walkin-wardrobe.jpg']
  },

  // WARDROBES - Built-in
  {
    id: 'wardrobe-builtin-001',
    slug: 'built-in-wardrobes',
    categoryId: 'wardrobes',
    name: {
      en: 'Built-in Wardrobes',
      ar: 'خزانات الملابس المدمجة'
    },
    description: {
      en: 'Space-efficient built-in wardrobes with sliding or hinged doors',
      ar: 'خزانات ملابس مدمجة فعالة المساحة مع أبواب منزلقة أو مفصلية'
    },
    features: {
      en: [
        'Space-saving design',
        'Sliding or hinged doors',
        'Customizable interiors',
        'Soft-close mechanisms',
        'Various finishes available',
        'Integrated lighting options'
      ],
      ar: [
        'تصميم يوفر المساحة',
        'أبواب منزلقة أو مفصلية',
        'داخلية قابلة للتخصيص',
        'آليات إغلاق ناعمة',
        'تشطيبات مختلفة متاحة',
        'خيارات إضاءة متكاملة'
      ]
    },
    images: ['/images/products/builtin-wardrobe.jpg']
  },

  // CORE PANELS - MDF
  {
    id: 'panel-mdf-001',
    slug: 'mdf-core-panels',
    categoryId: 'core-panels',
    name: {
      en: 'MDF Core Panels',
      ar: 'ألواح MDF الأساسية'
    },
    description: {
      en: 'Medium Density Fiberboard panels with smooth surface and consistent strength for furniture, cabinets, and doors',
      ar: 'ألواح ألياف متوسطة الكثافة بسطح ناعم وقوة متسقة للأثاث والخزائن والأبواب'
    },
    features: {
      en: [
        'Smooth consistent surface',
        'Easy to cut and shape',
        'Excellent for painting and laminating',
        'Cost-effective',
        'Environmentally friendly'
      ],
      ar: [
        'سطح ناعم ومتسق',
        'سهل القطع والتشكيل',
        'ممتاز للطلاء والتصفيح',
        'فعال من حيث التكلفة',
        'صديق للبيئة'
      ]
    },
    specifications: {
      thickness: '1-25mm or customized',
      sizes: '1220x2440mm, 1830x2440mm, 1830x2750mm, and more',
      density: '680-1000kgs/m3',
      moisture: '4-12%',
      glue: 'E2, E1, E0, CARB',
      surfaceFinish: 'Melamine paper',
      certifications: 'CARB, CE, ISO9001:2000, ISO14001'
    },
    images: ['/images/products/mdf-panels.jpg']
  },

  // CORE PANELS - MR MDF
  {
    id: 'panel-mrmdf-001',
    slug: 'mr-mdf-core-panels',
    categoryId: 'core-panels',
    name: {
      en: 'MR MDF Core Panels (Moisture Resistant)',
      ar: 'ألواح MR MDF الأساسية (مقاومة للرطوبة)'
    },
    description: {
      en: 'Moisture resistant MDF with improved performance for kitchens, bathrooms, and humid environments',
      ar: 'MDF مقاوم للرطوبة مع أداء محسن للمطابخ والحمامات والبيئات الرطبة'
    },
    features: {
      en: [
        'Moisture resistant properties',
        'Improved dimensional stability',
        'Suitable for humid environments',
        'Enhanced durability',
        'Green core identification'
      ],
      ar: [
        'خصائص مقاومة للرطوبة',
        'استقرار أبعاد محسّن',
        'مناسب للبيئات الرطبة',
        'متانة محسّنة',
        'تحديد القلب الأخضر'
      ]
    },
    specifications: {
      thickness: '1-25mm or customized',
      sizes: '1220x2440mm, 1830x2440mm, 1830x2750mm',
      density: '680-1000kgs/m3',
      moisture: '4-12%',
      glue: 'E2, E1, E0, CARB',
      usage: 'Kitchen cabinets, wardrobe, bathroom cabinets, doors, flooring',
      certifications: 'CARB, CE, ISO9001:2000, ISO14001'
    },
    images: ['/images/products/mr-mdf-panels.jpg']
  },

  // CORE PANELS - Plywood
  {
    id: 'panel-plywood-001',
    slug: 'marine-construction-plywood',
    categoryId: 'core-panels',
    name: {
      en: 'Marine & Construction Plywood',
      ar: 'خشب رقائقي بحري وبناء'
    },
    description: {
      en: 'High-quality, water-resistant plywood for marine, construction, and heavy-duty applications',
      ar: 'خشب رقائقي عالي الجودة ومقاوم للماء للتطبيقات البحرية والبناء والثقيلة'
    },
    features: {
      en: [
        'Water-resistant',
        'High strength and stability',
        'Layered wood veneer construction',
        'Suitable for outdoor use',
        'Ideal for boats, kitchens, bathrooms, outdoor furniture'
      ],
      ar: [
        'مقاوم للماء',
        'قوة واستقرار عالي',
        'بناء قشرة خشبية متعددة الطبقات',
        'مناسب للاستخدام الخارجي',
        'مثالي للقوارب والمطابخ والحمامات والأثاث الخارجي'
      ]
    },
    specifications: {
      material: 'Poplar, Pine and hardwood combi',
      usage: 'Doors, partitions, furniture, wall panels, construction'
    },
    images: ['/images/products/plywood.jpg']
  },

  // CORE PANELS - Film Faced MDF
  {
    id: 'panel-filmfaced-001',
    slug: 'film-faced-mdf-panels',
    categoryId: 'core-panels',
    name: {
      en: 'Film Faced MDF Panels',
      ar: 'ألواح MDF بطلاء فيلم'
    },
    description: {
      en: 'Strong panel with smooth film coating providing resistance to moisture, wear, and abrasion for construction and heavy-duty use',
      ar: 'لوح قوي بطلاء فيلم ناعم يوفر مقاومة للرطوبة والتآكل والكشط للبناء والاستخدام الثقيل'
    },
    features: {
      en: [
        'Moisture and wear resistant',
        'Smooth film surface',
        'Reusable and durable',
        'Ideal for formwork and shuttering',
        'High strength construction'
      ],
      ar: [
        'مقاوم للرطوبة والتآكل',
        'سطح فيلم ناعم',
        'قابل لإعادة الاستخدام ومتين',
        'مثالي للقوالب والإغلاق',
        'بناء عالي القوة'
      ]
    },
    images: ['/images/products/film-faced-mdf.jpg']
  },

  // CORE PANELS - Melamine Faced MDF
  {
    id: 'panel-melamine-001',
    slug: 'melamine-faced-mdf-panels',
    categoryId: 'core-panels',
    name: {
      en: 'Melamine Faced MDF Panels',
      ar: 'ألواح MDF بطلاء ميلامين'
    },
    description: {
      en: 'Elegant board with melamine surface offering decorative finish and resistance to scratches and stains',
      ar: 'لوح أنيق بسطح ميلامين يوفر تشطيبًا زخرفيًا ومقاومة للخدوش والبقع'
    },
    features: {
      en: [
        'Decorative melamine surface',
        'Scratch and stain resistant',
        'Wide range of colors and patterns',
        'Easy to clean',
        'No painting required',
        'Ideal for furniture and cabinets'
      ],
      ar: [
        'سطح ميلامين زخرفي',
        'مقاوم للخدوش والبقع',
        'مجموعة واسعة من الألوان والأنماط',
        'سهل التنظيف',
        'لا يحتاج إلى طلاء',
        'مثالي للأثاث والخزائن'
      ]
    },
    images: [
      '/core-panel/MelamineFacedMDFPanels/1.jpg',
      '/core-panel/MelamineFacedMDFPanels/2.jpg',
      '/core-panel/MelamineFacedMDFPanels/3.jpg',
      '/core-panel/MelamineFacedMDFPanels/4.jpg',
      '/core-panel/MelamineFacedMDFPanels/5.jpg',
      '/core-panel/MelamineFacedMDFPanels/6.jpg'
    ]
  }
];

// Color options from the catalog
export interface ColorOption {
  id: string;
  code: string;
  name: {
    en: string;
    ar: string;
  };
  hexColor?: string;
  image?: string;
}

export const colorOptions: ColorOption[] = [
  { id: 'pm-001', code: 'PM-001', name: { en: 'White', ar: 'أبيض' } },
  { id: 'pm-003', code: 'PM-003', name: { en: 'Cream', ar: 'كريمي' } },
  { id: 'pm-004', code: 'PM-004', name: { en: 'Dark Grey', ar: 'رمادي غامق' } },
  { id: 'pm-005', code: 'PM-005', name: { en: 'Off White', ar: 'أبيض مائل' } },
  { id: 'pm-006', code: 'PM-006', name: { en: 'Brown', ar: 'بني' } },
  { id: 'pm-007', code: 'PM-007', name: { en: 'Grey Wood', ar: 'خشب رمادي' } },
  { id: 'pm-008', code: 'PM-008', name: { en: 'Brown Wood', ar: 'خشب بني' } },
  { id: 'pm-009', code: 'PM-009', name: { en: 'Light Wood', ar: 'خشب فاتح' } },
  { id: 'pm-010', code: 'PM-010', name: { en: 'Light Beige', ar: 'بيج فاتح' } },
  { id: 'pm-012', code: 'PM-012', name: { en: 'Medium Brown', ar: 'بني متوسط' } },
  { id: 'pm-013', code: 'PM-013', name: { en: 'Dark Green', ar: 'أخضر داكن' } },
  { id: 'pm-014', code: 'PM-014', name: { en: 'Natural Wood', ar: 'خشب طبيعي' } },
  { id: 'pm-015', code: 'PM-015', name: { en: 'Grey', ar: 'رمادي' } },
  { id: 'pm-016', code: 'PM-016', name: { en: 'Blue Grey', ar: 'رمادي مزرق' } },
  { id: 'pm-019', code: 'PM-019', name: { en: 'Charcoal', ar: 'فحمي' } },
  { id: 'pm-020', code: 'PM-020', name: { en: 'Dark Grey Wood', ar: 'خشب رمادي غامق' } },
  { id: 'pm-021', code: 'PM-021', name: { en: 'Light Grey Wood', ar: 'خشب رمادي فاتح' } },
  { id: 'pm-022', code: 'PM-022', name: { en: 'Taupe', ar: 'توبي' } },
  { id: 'pm-023', code: 'PM-023', name: { en: 'Honey Wood', ar: 'خشب عسلي' } },
  { id: 'pm-033', code: 'PM-033', name: { en: 'Beige', ar: 'بيج' } },
  { id: 'pm-101', code: 'PM-101', name: { en: 'Light Grey', ar: 'رمادي فاتح' } },
  { id: 'pm-102', code: 'PM-102', name: { en: 'Medium Grey', ar: 'رمادي متوسط' } },
  { id: 'pm-111', code: 'PM-111', name: { en: 'Lilac', ar: 'أرجواني فاتح' } },
  { id: 'pm-122', code: 'PM-122', name: { en: 'Dark Brown', ar: 'بني داكن' } },
  { id: 'pm-162', code: 'PM-162', name: { en: 'Pure White', ar: 'أبيض نقي' } },
  { id: 'pm-202', code: 'PM-202', name: { en: 'Snow White', ar: 'أبيض ثلجي' } },
  { id: 'pm-215', code: 'PM-215', name: { en: 'Black', ar: 'أسود' } },
  { id: 'pm-251', code: 'PM-251', name: { en: 'Sand', ar: 'رملي' } },
  { id: 'pm-301', code: 'PM-301', name: { en: 'Ivory', ar: 'عاجي' } },
  { id: 'pm-302', code: 'PM-302', name: { en: 'Dark Charcoal', ar: 'فحمي داكن' } },
  { id: 'pm-303', code: 'PM-303', name: { en: 'Oak Wood', ar: 'خشب البلوط' } },
  { id: 'pm-304', code: 'PM-304', name: { en: 'Ash Wood', ar: 'خشب الرماد' } }
];
