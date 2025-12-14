export const categories = [
    {
        id: "doors",
        name: { en: "Doors", ar: "أبواب", zh: "门" },
        description: {
            en: "Interior, exterior, fire-rated, and specialty doors for all applications",
            ar: "أبواب داخلية وخارجية ومقاومة للحريق ومتخصصة لجميع الاستخدامات",
            zh: "适用于所有应用的室内门、室外门、防火门和特种门"
        },
        image: "https://images.unsplash.com/photo-1582205313222-297eb040854d?auto=format&fit=crop&w=800&q=80",
        slug: "doors"
    },
    {
        id: "core-panels",
        name: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        description: {
            en: "MDF, WPC, plywood, and specialty panel solutions",
            ar: "حلول MDF و WPC والخشب الرقائقي والألواح المتخصصة",
            zh: "MDF、WPC、胶合板和特种面板解决方案"
        },
        image: "https://images.unsplash.com/photo-1519962533758-d42111d40eb8?auto=format&fit=crop&w=800&q=80",
        slug: "core-panels"
    },
    {
        id: "doors-hardware-accessories",
        name: { en: "Doors Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        description: {
            en: "Essential hardware including hinges, locks, and handles",
            ar: "الأجهزة الأساسية بما في ذلك المفصلات والأقفال والمقابض",
            zh: "包括铰链、锁和把手在内的基本五金件"
        },
        image: "https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=800&q=80",
        slug: "doors-hardware-accessories"
    },
    {
        id: "general-items",
        name: { en: "General Items", ar: "عناصر عامة", zh: "通用物品" },
        description: {
            en: "Various construction and finishing items",
            ar: "عناصر البناء والتشطيب المختلفة",
            zh: "各种建筑和装修物品"
        },
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        slug: "general-items"
    },
    {
        id: "miscellaneous-items",
        name: { en: "Miscellaneous Items", ar: "عناصر متنوعة", zh: "杂项物品" },
        description: {
            en: "Additional accessories and components",
            ar: "الملحقات والمكونات الإضافية",
            zh: "其他配件和组件"
        },
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
        slug: "miscellaneous-items"
    },
    {
        id: "kitchen-cabinets",
        name: { en: "Kitchen Cabinets", ar: "خزائن المطبخ", zh: "厨柜" },
        description: {
            en: "Modern kitchen systems and cabinetry",
            ar: "أنظمة المطابخ الحديثة والخزائن",
            zh: "现代厨房系统和橱柜"
        },
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
        slug: "kitchen-cabinets"
    },
    {
        id: "wardrobes",
        name: { en: "Wardrobes", ar: "خزائن الملابس", zh: "衣柜" },
        description: {
            en: "Custom wardrobe solutions",
            ar: "حلول خزائن الملابس المخصصة",
            zh: "定制衣柜解决方案"
        },
        image: "https://images.unsplash.com/photo-1595415729796-b072e2d96c81?auto=format&fit=crop&w=800&q=80",
        slug: "wardrobes"
    }
];

export const products = [
    // CORE PANELS - Specific Data from User Screenshots
    {
        id: "melamine-faced-plywood",
        name: {
            en: "Melamine Faced Plywood",
            ar: "خشب رقائقي مغطى بالميلامين",
            zh: "三聚氰胺贴面胶合板"
        },
        category: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        slug: "melamine-faced-plywood",
        description: {
            en: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor",
            ar: "لوح أنيق ومتين بسطح مغطى بالميلامين يوفر تشطيبًا زخرفيًا ومقاومة للخدوش والبقع. مثالي للأثاث والخزائن وتغطية الجدران والديكور الداخلي",
            zh: "一种优雅耐用的板材，带有三聚氰胺涂层表面，提供装饰性饰面，耐刮擦和污渍。适用于家具、橱柜、墙板和室内装饰"
        },
        specifications: [
            { key: { en: "Thickness", ar: "السماكة", zh: "厚度" }, value: "6mm-25mm" },
            { key: { en: "Sizes", ar: "الأحجام", zh: "尺寸" }, value: "1220x2440x18mm, 1220x2440x15mm" },
            { key: { en: "Glue", ar: "الغراء", zh: "胶水" }, value: "E0, E1, E2, MR" },
            { key: { en: "Density", ar: "الكثافة", zh: "密度" }, value: "680-780KG/m3" },
            { key: { en: "Moisture", ar: "الرطوبة", zh: "含水率" }, value: "8-20%" },
            { key: { en: "Surface finish", ar: "التشطيب السطحي", zh: "表面处理" }, value: { en: "Melamine Paper", ar: "ورق الميلامين", zh: "三聚氰胺纸" } },
            { key: { en: "Color", ar: "اللون", zh: "颜色" }, value: { en: "Solid colors, wood grain", ar: "ألوان صلبة، حبيبات خشبية", zh: "纯色、木纹" } },
            { key: { en: "Material", ar: "المادة", zh: "材料" }, value: { en: "Wood Chips (Poplar, Pine)", ar: "رقائق الخشب (الحور، الصنوبر)", zh: "木屑（杨木、松木）" } },
            { key: { en: "Usage", ar: "الاستخدام", zh: "用途" }, value: { en: "Furniture, Wardrobe, Kitchen Cabinet", ar: "الأثاث، خزانة الملابس، خزانة المطبخ", zh: "家具、衣柜、厨柜" } },
            { key: { en: "Certifications", ar: "الشهادات", zh: "认证" }, value: "CARB, CE, ISO9001, ISO14001" }
        ],
        images: ["https://images.unsplash.com/photo-1610368153400-u7t6241b711d?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "film-faced-plywood",
        name: {
            en: "Film Faced Plywood",
            ar: "خشب رقائقي مغطى بالفيلم",
            zh: "覆膜胶合板"
        },
        category: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        slug: "film-faced-plywood",
        description: {
            en: "Film Faced Plywood is a durable, water-resistant plywood coated with a protective film, widely used for concrete formwork and construction",
            ar: "خشب رقائقي مغطى بالفيلم هو خشب متين ومقاوم للماء مغطى بفيلم واقي، يستخدم على نطاق واسع في صب الخرسانة والبناء",
            zh: "覆膜胶合板是一种耐用、防水的胶合板，涂有保护膜，广泛用于混凝土模板和建筑"
        },
        specifications: [
            { key: { en: "Thickness", ar: "السماكة", zh: "厚度" }, value: "1-25mm" },
            { key: { en: "Sizes", ar: "الأحجام", zh: "尺寸" }, value: "1220x2440mm, 1535x2440mm, 1830x2440mm" },
            { key: { en: "Glue", ar: "الغراء", zh: "胶水" }, value: "E2, E1, E0, CARB" },
            { key: { en: "Density", ar: "الكثافة", zh: "密度" }, value: "680-1000 kg/m³" },
            { key: { en: "Moisture", ar: "الرطوبة", zh: "含水率" }, value: "4-12%" },
            { key: { en: "Surface finish", ar: "التشطيب السطحي", zh: "表面处理" }, value: "VENEER" },
            { key: { en: "Material", ar: "المادة", zh: "材料" }, value: { en: "Poplar, Pine, Hardwood", ar: "الحور، الصنوبر، الخشب الصلب", zh: "杨木、松木、硬木" } },
            { key: { en: "Certifications", ar: "الشهادات", zh: "认证" }, value: "CARB, CE, ISO9001, ISO14001" }
        ],
        applications: [
            { en: "Furniture Manufacturing: Used for making strong, stylish, and durable furniture pieces", ar: "تصنيع الأثاث: يستخدم لصنع قطع أثاث قوية وأنيقة ومتينة", zh: "家具制造：用于制作坚固、时尚、耐用的家具" },
            { en: "Cabinets & Wardrobes: Ideal for modular kitchens and wardrobes", ar: "الخزائن والدواليب: مثالي للمطابخ النمطية والدواليب", zh: "橱柜和衣柜：适用于模块化厨房和衣柜" },
            { en: "Partitions & Displays: Strong and decorative option for office and retail", ar: "الفواصل والعروض: خيار قوي وزخرفي للمكاتب والتجزئة", zh: "隔断和展示：办公室和零售的坚固装饰选择" },
            { en: "Construction & Flooring: Durable panels for formwork and flooring", ar: "البناء والأرضيات: ألواح متينة للقوالب والأرضيات", zh: "建筑和地板：用于模板和地板的耐用板材" }
        ],
        images: ["https://images.unsplash.com/photo-1541363659972-0050aa738e4a?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "melamine-faced-mdf-panels",
        name: {
            en: "Melamine Faced MDF Panels",
            ar: "ألواح MDF مغطاة بالميلامين",
            zh: "三聚氰胺贴面MDF板"
        },
        category: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        slug: "melamine-faced-mdf-panels",
        description: {
            en: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor.",
            ar: "لوح أنيق ومتين بسطح مغطى بالميلامين يوفر تشطيبًا زخرفيًا ومقاومة للخدوش والبقع. مثالي للأثاث والخزائن وتغطية الجدران والديكور الداخلي.",
            zh: "一种优雅耐用的板材，带有三聚氰胺涂层表面，提供装饰性饰面，耐刮擦和污渍。适用于家具、橱柜、墙板和室内装饰。"
        },
        specifications: [
            { key: { en: "Thickness", ar: "السماكة", zh: "厚度" }, value: "2.5mm - 25mm" },
            { key: { en: "Glue", ar: "الغراء", zh: "胶水" }, value: "E0/E1/E2" },
            { key: { en: "Density", ar: "الكثافة", zh: "密度" }, value: { en: "Wood fiber core", ar: "لب ألياف الخشب", zh: "木纤维芯" } },
            { key: { en: "Moisture", ar: "الرطوبة", zh: "含水率" }, value: { en: "Standard moisture resistance", ar: "مقاومة رطوبة قياسية", zh: "标准防潮" } },
            { key: { en: "Surface finish", ar: "التشطيب السطحي", zh: "表面处理" }, value: { en: "Plain, Matt, Textured, High-gloss", ar: "سادة، مطفي، محكم، لامع", zh: "平面、哑光、纹理、高光" } }
        ],
        applications: [
            { en: "Shelving & Racks: Strong and stylish option for storage", ar: "الأرفف والحوامل: خيار قوي وأنيق للتخزين", zh: "货架：坚固时尚的存储选择" },
            { en: "Doors & Panels: Provides smooth and durable surface for interior doors", ar: "الأبواب والألواح: توفر سطحًا ناعمًا ومتينًا للأبواب الداخلية", zh: "门板：为室内门提供光滑耐用的表面" },
            { en: "Hotel & Restaurant Interiors: Adds warmth and elegance", ar: "ديكورات الفنادق والمطاعم: تضيف الدفء والأناقة", zh: "酒店和餐厅室内设计：增添温馨和优雅" },
            { en: "False Ceilings: Enhances interiors with decorative wooden ceiling panels", ar: "الأسقف المعلقة: تعزز الديكورات الداخلية بألواح خشبية زخرفية", zh: "吊顶：装饰木质天花板美化室内" }
        ],
        images: ["https://images.unsplash.com/photo-1620615307374-2dc4aa441999?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "film-faced-mdf-panels",
        name: {
            en: "Film Faced MDF Panels",
            ar: "ألواح MDF مغطاة بالفيلم",
            zh: "覆膜MDF板"
        },
        category: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        slug: "film-faced-mdf-panels",
        description: {
            en: "A strong and durable panel with a smooth film coating that provides resistance to moisture, wear, and abrasion. It is widely used in construction formwork, shuttering, and other heavy-duty applications where reusability and strength are essential",
            ar: "لوح قوي ومتين بطلاء فيلم ناعم يوفر مقاومة للرطوبة والتآكل. يستخدم على نطاق واسع في قوالب البناء والتطبيقات الشاقة",
            zh: "一种坚固耐用的板材，覆有光滑的薄膜涂层，具有防潮、耐磨性能。广泛用于建筑模板和其他重型应用"
        },
        images: ["https://images.unsplash.com/photo-1549419137-b6a6773295c5?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "core-panel-plywood",
        name: {
            en: "Core Panel Plywood",
            ar: "خشب رقائقي أساسي",
            zh: "芯板胶合板"
        },
        category: { en: "Core Panels", ar: "الألواح الأساسية", zh: "核心板材" },
        slug: "core-panel-plywood",
        description: {
            en: "Core Panel Plywood - Strong and stable plywood made with layered wood veneers at the core, ideal for doors, partitions, furniture, and wall panels",
            ar: "خشب رقائقي أساسي - خشب قوي ومستقر مصنوع من طبقات من القشرة الخشبية، مثالي للأبواب والفواصل والأثاث والألواح الجدارية",
            zh: "芯板胶合板 - 由层状木材单板制成的坚固稳定的胶合板，适用于门、隔断、家具和墙板"
        },
        specifications: [
            { key: { en: "Thickness", ar: "السماكة", zh: "厚度" }, value: "2.5mm - 25mm" },
            { key: { en: "Glue", ar: "الغراء", zh: "胶水" }, value: "E0/E1/E2" },
            { key: { en: "Density", ar: "الكثافة", zh: "密度" }, value: { en: "Wood fiber core", ar: "لب ألياف الخشب", zh: "木纤维芯" } },
            { key: { en: "Moisture", ar: "الرطوبة", zh: "含水率" }, value: { en: "Standard moisture resistance", ar: "مقاومة رطوبة قياسية", zh: "标准防潮" } },
            { key: { en: "Surface finish", ar: "التشطيب السطحي", zh: "表面处理" }, value: { en: "Plain, various melamine finishes", ar: "سادة، تشطيبات ميلامين متنوعة", zh: "平面、各种三聚氰胺饰面" } },
            { key: { en: "Color", ar: "اللون", zh: "颜色" }, value: { en: "Solid colors, wood grain colors", ar: "ألوان صلبة، ألوان حبيبات الخشب", zh: "纯色、木纹色" } },
            { key: { en: "Material", ar: "المادة", zh: "材料" }, value: { en: "Poplar, Pine or combination", ar: "الحور، الصنوبر أو مزيج", zh: "杨木、松木或组合" } },
            { key: { en: "Usage", ar: "الاستخدام", zh: "用途" }, value: { en: "Furniture, interior decoration", ar: "الأثاث، الديكور الداخلي", zh: "家具、室内装饰" } },
            { key: { en: "Certifications", ar: "الشهادات", zh: "认证" }, value: "CARB, CE, ISO9001, ISO14001" }
        ],
        images: ["https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80"]
    },

    // Other Existing Products
    {
        id: "aluminium-doors",
        name: { en: "Aluminium Doors", ar: "أبواب الألومنيوم", zh: "铝门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "aluminium-doors",
        description: {
            en: "High-quality aluminium doors designed for modern aesthetics and durability.",
            ar: "أبواب ألومنيوم عالية الجودة مصممة للجماليات الحديثة والمتانة.",
            zh: "高品质铝门，设计现代美观且耐用。"
        },
        specifications: [
            { key: { en: "Material", ar: "المادة", zh: "材料" }, value: { en: "Aluminium Alloy", ar: "سبائك الألومنيوم", zh: "铝合金" } },
            { key: { en: "Glass", ar: "الزجاج", zh: "玻璃" }, value: { en: "Double Glazed / Tempered", ar: "زجاج مزدوج / مقسى", zh: "双层/钢化玻璃" } },
            { key: { en: "Finish", ar: "التشطيب", zh: "表面处理" }, value: { en: "Powder Coated / Anodized", ar: "طلاء مسحوق / أنودة", zh: "粉末喷涂/阳极氧化" } }
        ],
        images: ["https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "accessories",
        name: { en: "Accessories", ar: "الإكسسوارات", zh: "配件" },
        category: { en: "Doors Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        slug: "accessories",
        description: {
            en: "General door accessories and hardware components.",
            ar: "ملحقات الأبواب العامة ومكونات الأجهزة.",
            zh: "通用门配件和五金组件。"
        },
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "door-hinges",
        name: { en: "Door Hinges", ar: "مفصلات الأبواب", zh: "门铰链" },
        category: { en: "Doors Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        slug: "door-hinges",
        description: {
            en: "Durable stainless steel door hinges for smooth operation.",
            ar: "مفصلات أبواب من الفولاذ المقاوم للصدأ متينة للتشغيل السلس.",
            zh: "耐用的不锈钢门铰链，操作顺畅。"
        },
        images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "door-smart-locks",
        name: { en: "Door Smart Locks", ar: "أقفال الأبواب الذكية", zh: "智能门锁" },
        category: { en: "Doors Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        slug: "door-smart-locks",
        description: {
            en: "Advanced smart lock systems for keyless entry and security.",
            ar: "أنظمة أقفال ذكية متقدمة للدخول بدون مفتاح والأمان.",
            zh: "先进的智能锁系统，提供无钥匙进入和安全保障。"
        },
        images: ["https://images.unsplash.com/photo-1558002038-109177381793?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "hinges-glass-shelf-clips",
        name: { en: "Hinges/Glass Shelf Clips", ar: "مفصلات/مشابك رفوف زجاجية", zh: "铰链/玻璃搁板夹" },
        category: { en: "Doors Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        slug: "hinges-glass-shelf-clips",
        description: {
            en: "Specialized clips and hinges for glass cabinetry.",
            ar: "مشابك ومفصلات متخصصة لخزائن الزجاج.",
            zh: "用于玻璃橱柜的专用夹子和铰链。"
        },
        images: ["https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "emergency-exit-doors",
        name: { en: "Emergency Exit Doors", ar: "أبواب الخروج في حالات الطوارئ", zh: "紧急出口门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "emergency-exit-doors",
        description: {
            en: "Fire-rated emergency exit doors adhering to safety standards.",
            ar: "أبواب خروج طوارئ مقاومة للحريق تلتزم بمعايير السلامة.",
            zh: "符合安全标准的防火紧急出口门。"
        },
        images: ["https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "iron-steel-doors",
        name: { en: "Iron/Steel Doors", ar: "أبواب حديد/فولاذ", zh: "铁/钢门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "iron-steel-doors",
        description: {
            en: "Security steel doors for industrial and residential use.",
            ar: "أبواب فولاذية أمنية للاستخدام الصناعي والسكني.",
            zh: "工业和住宅用安全钢门。"
        },
        images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"]
    }
];
