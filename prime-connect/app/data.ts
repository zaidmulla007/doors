export const categories = [
    {
        id: "core-panels",
        name: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        description: {
            en: "Premium quality core panels including Melamine Faced Plywood, MDF, and Film Faced options for construction and furniture.",
            ar: "ألواح أساسية عالية الجودة بما في ذلك الخشب الرقائقي والميلامين و MDF والخoptionsيارات المغطاة بالفيلم للبناء والأثاث.",
            zh: "优质核心板，包括三聚氰胺贴面胶合板、MDF 和覆膜选项，用于建筑和家具。"
        },
        image: "/core-panel/MelamineFacedPlywood/1.jpg",
        slug: "core-panels"
    },
    {
        id: "doors",
        name: { en: "Doors", ar: "أبواب", zh: "门" },
        description: {
            en: "Wide range of high quality doors including PVC, Melamine, WPC, and Fire-rated options.",
            ar: "تشكيلة واسعة من الأبواب عالية الجودة بما في ذلك PVC والميلامين و WPC والخيارات المقاومة للحريق.",
            zh: "种类繁多的优质门，包括PVC、三聚氰胺、WPC和防火选项。"
        },
        image: "https://images.unsplash.com/photo-1582205313222-297eb040854d?auto=format&fit=crop&w=800&q=80",
        slug: "doors"
    },
    {
        id: "cabinet",
        name: { en: "Cabinet", ar: "خزائن", zh: "橱柜" },
        description: {
            en: "Modern cabinets for kitchen, closets, and storage solutions.",
            ar: "خزائن حديثة للمطبخ والخزائن وحلول التخزين.",
            zh: "用于厨房、衣柜和储藏解决方案的现代橱柜。"
        },
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
        slug: "cabinet"
    },
    {
        id: "color-card",
        name: { en: "Color Card", ar: "بطاقة الألوان", zh: "色卡" },
        description: {
            en: "Explore our variety of material finishes and color options.",
            ar: "استكشف مجموعتنا المتنوعة من تشطيبات المواد وخيارات الألوان.",
            zh: "探索我们要种材料饰面和颜色选项。"
        },
        image: "https://images.unsplash.com/photo-1523456722026-6b21ba37ee1d?auto=format&fit=crop&w=800&q=80",
        slug: "color-card"
    },
    {
        id: "wardrobe",
        name: { en: "Wardrobe", ar: "خزانة الملابس", zh: "衣柜" },
        description: {
            en: "Elegant and functional wardrobes for your storage needs.",
            ar: "خزائن ملابس أنيقة وعملية لتلبية احتياجاتك التخزينية.",
            zh: "优雅实用的衣柜，满足您的储物需求。"
        },
        image: "/wardrobes/CLOSET001.jpg",
        slug: "wardrobe"
    },
    {
        id: "hardware-accessories",
        name: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        description: {
            en: "Essential hardware components for doors and cabinets.",
            ar: "مكونات الأجهزة الأساسية للأبواب والخزائن.",
            zh: "门和橱柜的基本五金组件。"
        },
        image: "https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=800&q=80",
        slug: "hardware-accessories"
    }
];

export const products = [
    // --- CORE PANELS ---
    {
        id: "melamine-faced-plywood",
        name: { en: "Melamine Faced Plywood", ar: "خشب رقائقي مغطى بالميلامين", zh: "三聚氰胺贴面胶合板" },
        category: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        slug: "melamine-faced-plywood",
        description: {
            en: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor",
            ar: "لوح أنيق ومتين بسطح مطلي بالميلامين يوفر لمسة زخرفية ومقاومة للخدوش والبقع. مثالي للأثاث والخزائن وألواح الجدران والديكور الداخلي.",
            zh: "一种优雅耐用的板材，表面涂有三聚氰胺，具有装饰性饰面，耐刮擦和耐污渍。是家具、橱柜、墙板和室内装饰的理想选择。"
        },
        images: ["/core-panel/MelamineFacedPlywood/1.jpg"],
        specifications: {
            "Thickness": "6mm-25mm",
            "Sizes": "1220X2440X18mm, 1220X2440X15mm or as per customers' required specifications",
            "Glue": "E0, E1, E2, MR",
            "Density": "680-780KG/m3",
            "Moisture": "8-20%",
            "Surface finish": "Melamine Paper",
            "Color": "solid color(white,black,blue,yellow,red etc.);wood grain(cherry,beech,walnut,teak etc.) cloth grain",
            "Material": "Wood Chips(Poplar,Pine,Combi etc.)",
            "Usage": "Widely used for High-end Furniture Wardrobe/Kitchen Cabinet/TV Cabinet/Closets",
            "Certifications": "CARB, CE, ISO9001:2000, ISO14001"
        }
    },
    {
        id: "film-faced-plywood",
        name: { en: "Film Faced Plywood", ar: "خشب رقائقي مغطى بالفيلم", zh: "覆膜胶合板" },
        category: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        slug: "film-faced-plywood",
        description: {
            en: "Film Faced Plywood is a durable, water-resistant plywood coated with a protective film, widely used for concrete formwork and construction",
            ar: "الخشب الرقائقي المغطى بالفيلم هو خشب رقائقي متين ومقاوم للماء ومطلي بفيلم واقٍ، ويستخدم على نطاق واسع في قوالب الخرسانة والبناء.",
            zh: "覆膜胶合板是一种耐用、防水的胶合板，涂有保护膜，广泛用于混凝土模板和建筑。"
        },
        images: ["/core-panel/FilmFacedPlywood/1.jpg"],
        specifications: {
            "Thickness": "1-25mm or customized as per clients' requirements",
            "Sizes": "1220x2440mm, 1535x2440mm 1830x2440mm or as clients requirement",
            "Glue": "E2, E1, E0, CARB",
            "Density": "680kgs/m3 ~ 1000kgs/m3",
            "Moisture": "4-12%",
            "Surface finish": "VENEER",
            "Color": "Solid colors, wood grain colors, fancy colors, stone colors, etc or customized as per clients' requirements",
            "Material": "Poplar, Pine and hardwood combi",
            "Usage": "It is widely used in furniture manufacturing, such as beds, tables, cabinets, etc. It is also used in building decoration, like wall panels, ceilings, etc. Moreover, it can be used to make display racks, decorative moldings, etc., enhancing the aesthetics and quality of the space.",
            "Certifications": "CARB, CE, ISO9001:2000, ISO14001"
        },
        applications: {
            en: [
                "Furniture Manufacturing: Used for making strong, stylish, and durable furniture pieces",
                "Cabinets & Wardrobes: Ideal for modular kitchens and wardrobes with smooth finishes",
                "Partitions & Displays: Strong and Decorative option for office and retail partitions",
                "Construction & Flooring: Durable and reusable panels widely used in formwork and flooring"
            ],
            ar: [
                "تصنيع الأثاث: يستخدم لصنع قطع أثاث قوية وأنيقة ومتينة",
                "الخزائن والخزائن: مثالي للمطابخ والخزائن المعيارية ذات التشطيبات الناعمة",
                "القواطع والعروض: خيار قوي وزخرفي لقواطع المكاتب والتجزئة",
                "البناء والأرضيات: ألواح متينة وقابلة لإعادة الاستخدام تستخدم على نطاق واسع في قوالب صب الخرسانة والأرضيات"
            ],
            zh: [
                "家具制造：用于制造坚固、时尚且耐用的家具部件",
                "橱柜和衣柜：是具有光滑饰面的模块化厨房和衣柜的理想选择",
                "隔断和展示：办公和零售隔断的坚固且具装饰性的选择",
                "建筑和地板：耐用且可重复使用的面板，广泛用于模板和地板"
            ]
        }
    },
    {
        id: "melamine-faced-mdf-panels",
        name: { en: "Melamine Faced MDF Panels", ar: "ألواح MDF مغطاة بالميلامين", zh: "三聚氰胺贴面MDF板" },
        category: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        slug: "melamine-faced-mdf-panels",
        description: {
            en: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor.",
            ar: "لوح أنيق ومتين بسطح مطلي بالميلامين يوفر لمسة زخرفية ومقاومة للخدوش والبقع. مثالي للأثاث والخزائن وألواح الجدران والديكور الداخلي.",
            zh: "一种优雅耐用的板材，表面涂有三聚氰胺，具有装饰性饰面，耐刮擦和耐污渍。是家具、橱柜、墙板和室内装饰的理想选择。"
        },
        images: ["/core-panel/MelamineFacedMDFPanels/1.jpg"],
        specifications: {
            "Thickness": "Ranges from 2.5 mm to 25 mm, with common options like 9 mm, 12 mm, 15 mm, 17 mm, 18 mm",
            "Glue": "Uses E0/E1/E2 bonding systems, and can include melamine glue depending on the application",
            "Density": "Wood fiber core from poplar, pine, hardwood, or combinations",
            "Moisture": "Standard moisture resistance (not marine-grade); ideal for dry interiors",
            "Surface finish": "Options include plain, various melamine finishes (matt, textured, high-gloss, embossed), with colors ranging from solid to wood grains, cloth or marble patterns",
            "Color": "Solid colors, wood grain colors, fancy colors, stone colors, etc or customized as per clients' requirements",
            "Material": "Made from wood fiber, typically poplar, pine, or a combination (\"combi\") offering a stable and lightweight core.",
            "Usage": "Widely used for furniture, interior decoration, and as a wood flooring material. Mainly intended for indoor environments; not specified as marine-grade or moisture-resistant for outdoor exposure.",
            "Certifications": "CARB, CE, ISO9001:2000, ISO14001"
        },
        applications: {
            en: [
                "Shelving & Racks: Strong and stylish option for storage shelves in homes or shops.",
                "Doors & Panels: Provides smooth and durable surface for interior doors.",
                "Hotel & Restaurant Interiors: Adds warmth and elegance to hospitality spaces",
                "False Ceilings: Enhances interiors with decorative wooden ceiling panels."
            ],
            ar: [
                "الأرفف والرفوف: خيار قوي وأنيق لرفوف التخزين في المنازل أو المحلات التجارية.",
                "الأبواب والألواح: يوفر سطحًا ناعمًا ومتينًا للأبواب الداخلية.",
                "الديكورات الداخلية للفنادق والمطاعم: يضيف الدفء والأناقة لمساحات الضيافة",
                "الأسقف المستعارة: يعزز الديكورات الداخلية بألواح سقف خشبية زخرفية."
            ],
            zh: [
                "货架和架子：家庭或商店存储货架的坚固且时尚的选择。",
                "门和面板：为室内门提供光滑耐用的表面。",
                "酒店和餐厅内饰：为接待空间增添温馨和优雅",
                "吊顶：用装饰木制天花板增强室内效果。"
            ]
        }
    },
    {
        id: "film-faced-mdf-panels",
        name: { en: "Film Faced MDF Panels", ar: "ألواح MDF مغطاة بالفيلم", zh: "覆膜MDF板" },
        category: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        slug: "film-faced-mdf-panels",
        description: {
            en: "A strong and durable panel with a smooth film coating that provides resistance to moisture, wear, and abrasion. It is widely used in construction formwork, shuttering, and other heavy-duty applications where reusability and strength are essential",
            ar: "لوح قوي ومتين بطبقة فيلم ناعمة توفر مقاومة للرطوبة والتآكل والاحتكاك. يستخدم على نطاق واسع في قوالب صب الخرسانة والبناء والتطبيقات الشاقة الأخرى حيث تكون إعادة الاستخدام والقوة أمرًا ضروريًا.",
            zh: "一种坚固耐用的面板，具有光滑的薄膜涂层，可防潮、耐磨和耐磨损。它广泛用于建筑模板、模板和其他重型应用，在这些应用中，重复使用性和强度至关重要。"
        },
        images: ["/core-panel/FILMFACEDMDFPANELS/1.jpg"],
        specifications: {
            "Thickness": "1-25mm or customized as per clients' requirements",
            "Sizes": "1220x2440mm, 1535x2440mm 1830x2440mm or as clients requirement",
            "Glue": "E2, E1, E0, CARB",
            "Density": "680kgs/m3 ~ 1000kgs/m3",
            "Moisture": "4-12%",
            "Surface finish": "VENEER",
            "Color": "Solid colors, wood grain colors, fancy colors, stone colors, etc or customized as per clients' requirements",
            "Material": "Poplar, Pine and hardwood combi",
            "Usage": "It is widely used in furniture manufacturing, such as beds, tables, cabinets, etc. It is also used in building decoration, like wall panels, ceilings, etc. Moreover, it can be used to make display racks, decorative moldings, etc., enhancing the aesthetics and quality of the space.",
            "Certifications": "CARB, CE, ISO9001:2000, ISO14001"
        }
    },
    {
        id: "core-panel-plywood",
        name: { en: "Core Panel Plywood", ar: "خشب رقائقي للألواح الأساسية", zh: "芯板胶合板" },
        category: { en: "Core Panels", ar: "ألواح أساسية", zh: "核心板" },
        slug: "core-panel-plywood",
        description: {
            en: "Core Panel Plywood Strong and stable plywood made with layered wood veneers at the core, ideal for doors, partitions, furniture, and wall panels",
            ar: "الخشب الرقائقي للألواح الأساسية خشب رقائقي قوي ومستقر مصنوع من قشور خشبية ذات طبقات في القلب، مثالي للأبواب والقواطع والأثاث وألواح الجدران.",
            zh: "芯板胶合板，坚固稳定的胶合板，核心由层状木单板制成，是门、隔断、家具和墙板的理想选择。"
        },
        images: ["/core-panel/CORE-PANEL-PLYWOOD/1.jpg"],
        specifications: {
            "Thickness": "Also ranges from 2.5 mm to 25 mm",
            "Glue": "Uses E0/E1/E2 bonding systems, and can include melamine glue depending on the application",
            "Density": "Wood fiber core from poplar, pine, hardwood, or combinations",
            "Moisture": "Standard moisture resistance (not marine-grade); ideal for dry interiors",
            "Surface finish": "Options include plain, various melamine finishes (matt, textured, high-gloss, embossed), with colors ranging from solid to wood grains, cloth or marble patterns",
            "Color": "Solid colors, wood grain colors, fancy colors, stone colors, etc or customized as per clients' requirements",
            "Material": "Made from wood fiber, typically poplar, pine, or a combination (\"combi\") offering a stable and lightweight core.",
            "Usage": "Widely used for furniture, interior decoration, and as a wood flooring material. Mainly intended for indoor environments; not specified as marine-grade or moisture-resistant for outdoor exposure.",
            "Certifications": "CARB, CE, ISO9001:2000, ISO14001"
        }
    },

    // --- DOORS ---
    // --- DOORS ---
    {
        id: "mdf-doors",
        name: { en: "MDF DOORS", ar: "أبواب MDF", zh: "MDF门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "mdf-doors",
        description: { en: "Durable MDF doors available in various designs and finishes.", ar: "أبواب MDF متينة متوفرة بتصاميم وتشطيبات مختلفة.", zh: "耐用的MDF门，有多种设计和饰面可供选择。" },
        images: ["/doors/mdf-doors/MDFD001.jpg"],
        features: {
            en: ["Versatile Design", "Smooth Finish", "Cost-Effective"],
            ar: ["تصميم متعدد الاستخدامات", "تشطيب ناعم", "فعال من حيث التكلفة"],
            zh: ["多功能设计", "光滑饰面", "性价比高"]
        },
        specifications: {
            "Material": "MDF",
            "Thickness": "35mm - 45mm",
            "Warranty": "3 Years"
        },
        variants: [
            { name: "MDFD001", image: "/doors/mdf-doors/MDFD001.jpg" },
            { name: "MDFD002", image: "/doors/mdf-doors/MDFD002.jpg" },
            { name: "MDFD003", image: "/doors/mdf-doors/MDFD003.jpg" },
            { name: "MDFD004", image: "/doors/mdf-doors/MDFD004.jpg" },
            { name: "MDFD005", image: "/doors/mdf-doors/MDFD005.jpg" },
            { name: "MDFD006", image: "/doors/mdf-doors/MDFD006.jpg" },
            { name: "MDFD007", image: "/doors/mdf-doors/MDFD007.jpg" },
            { name: "MDFD008", image: "/doors/mdf-doors/MDFD008.jpg" },
            { name: "MDFD009", image: "/doors/mdf-doors/MDFD009.jpg" },
            { name: "MDFD011", image: "/doors/mdf-doors/MDFD011.jpg" },
            { name: "MDFD012", image: "/doors/mdf-doors/MDFD012.jpg" },
            { name: "MDFD013", image: "/doors/mdf-doors/MDFD013.jpg" },
            { name: "MDFD014", image: "/doors/mdf-doors/MDFD014.jpg" }
        ]
    },
    {
        id: "wpc-doors",
        name: { en: "WPC DOORS", ar: "أبواب WPC", zh: "WPC门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "wpc-doors",
        description: { en: "Waterproof and termite-proof WPC doors for long-lasting durability.", ar: "أبواب WPC مقاومة للماء والنمل الأبيض لمتانة طويلة الأمد.", zh: "防水防白蚁WPC门，持久耐用。" },
        images: ["/doors/wpc-doors/WPCD001.jpg"],
        features: {
            en: ["Waterproof", "Termite Proof", "Eco-Friendly"],
            ar: ["مقاوم للماء", "مقاوم للنمل الأبيض", "صديق للبيئة"],
            zh: ["防水", "防白蚁", "环保"]
        },
        specifications: {
            "Material": "Wood Plastic Composite",
            "Thickness": "40mm",
            "Warranty": "10 Years"
        },
        variants: [
            { name: "WPCD001", image: "/doors/wpc-doors/WPCD001.jpg" },
            { name: "WPCD002", image: "/doors/wpc-doors/WPCD002.jpg" },
            { name: "WPCD003", image: "/doors/wpc-doors/WPCD003.jpg" },
            { name: "WPCD004", image: "/doors/wpc-doors/WPCD004.jpg" },
            { name: "WPCD005", image: "/doors/wpc-doors/WPCD005.jpg" },
            { name: "WPCD006", image: "/doors/wpc-doors/WPCD006.jpg" },
            { name: "WPCD007", image: "/doors/wpc-doors/WPCD007.jpg" },
            { name: "WPCD008", image: "/doors/wpc-doors/WPCD008.jpg" },
            { name: "WPCD009", image: "/doors/wpc-doors/WPCD009.jpg" },
            { name: "WPCD010", image: "/doors/wpc-doors/WPCD010.jpg" },
            { name: "WPCD011", image: "/doors/wpc-doors/WPCD011.jpg" },
            { name: "WPCD012", image: "/doors/wpc-doors/WPCD012.jpg" }
        ]
    },
    {
        id: "iron-and-steel-doors",
        name: { en: "IRON AND STEEL DOORS", ar: "أبواب حديدية وفولاذية", zh: "钢铁门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "iron-and-steel-doors",
        description: { en: "Secure and robust iron and steel doors for maximum security.", ar: "أبواب حديدية وفولاذية آمنة وقوية لأقصى قدر من الأمان.", zh: "安全坚固的钢铁门，提供最大的安全性。" },
        images: ["/doors/iron-steel-doors/I&SD001.jpg"],
        features: {
            en: ["High Security", "Durable", "Weather Resistant"],
            ar: ["أمان عالي", "متين", "مقاوم للعوامل الجوية"],
            zh: ["高安全性", "耐用", "耐候"]
        },
        specifications: {
            "Material": "Galvanized Steel / Iron",
            "Thickness": "50mm - 70mm",
            "Locking System": "Multipoint"
        },
        variants: [
            { name: "I&SD001", image: "/doors/iron-steel-doors/I&SD001.jpg" },
            { name: "I&SD002", image: "/doors/iron-steel-doors/I&SD002.jpg" },
            { name: "I&SD003", image: "/doors/iron-steel-doors/I&SD003.jpg" },
            { name: "I&SD004", image: "/doors/iron-steel-doors/I&SD004.jpg" },
            { name: "I&SD005", image: "/doors/iron-steel-doors/I&SD005.jpg" },
            { name: "I&SD006", image: "/doors/iron-steel-doors/I&SD006.jpg" },
            { name: "I&SD007", image: "/doors/iron-steel-doors/I&SD007.jpg" },
            { name: "I&SD008", image: "/doors/iron-steel-doors/I&SD008.jpg" },
            { name: "I&SD009", image: "/doors/iron-steel-doors/I&SD009.jpg" },
            { name: "I&SD010", image: "/doors/iron-steel-doors/I&SD010.jpg" },
            { name: "I&SD011", image: "/doors/iron-steel-doors/I&SD011.jpg" },
            { name: "I&SD012", image: "/doors/iron-steel-doors/I&SD012.jpg" },
            { name: "I&SD013", image: "/doors/iron-steel-doors/I&SD013.jpg" },
            { name: "I&SD014", image: "/doors/iron-steel-doors/I&SD014.jpg" },
            { name: "I&SD015", image: "/doors/iron-steel-doors/I&SD015.jpg" }
        ]
    },
    {
        id: "wooden-doors",
        name: { en: "WOODEN DOORS", ar: "أبواب خشبية", zh: "木门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "wooden-doors",
        description: { en: "Classic and elegant wooden doors including Melamine, PET, and Solid Wood.", ar: "أبواب خشبية كلاسيكية وأنيقة بما في ذلك الميلامين و PET والخشب الصلب.", zh: "经典而优雅的木门，包括三聚氰胺、PET和实木。" },
        images: ["/doors/wooden-doors/WDND001.jpg"],
        features: {
            en: ["Natural Look", "Sound Insulation", "Premium Finish"],
            ar: ["مظهر طبيعي", "عزل الصوت", "تشطيب ممتاز"],
            zh: ["自然外观", "隔音", "优质饰面"]
        },
        specifications: {
            "Material": "Solid Wood / Engineered Wood",
            "Finish": "Veneer / Laminate / Paint",
            "Warranty": "5 Years"
        },
        variants: [
            { name: "WDND001", image: "/doors/wooden-doors/WDND001.jpg" },
            { name: "WDND002", image: "/doors/wooden-doors/WDND002.jpg" },
            { name: "WDND003", image: "/doors/wooden-doors/WDND003.jpg" },
            { name: "WDND004", image: "/doors/wooden-doors/WDND004.jpg" },
            { name: "WDND005", image: "/doors/wooden-doors/WDND005.jpg" },
            { name: "WDND006", image: "/doors/wooden-doors/WDND006.jpg" },
            { name: "WDND007", image: "/doors/wooden-doors/WDND007.jpg" },
            { name: "WDND008", image: "/doors/wooden-doors/WDND008.jpg" },
            { name: "WDND009", image: "/doors/wooden-doors/WDND009.jpg" },
            { name: "WDND010", image: "/doors/wooden-doors/WDND010.jpg" },
            { name: "WDND011", image: "/doors/wooden-doors/WDND011.jpg" },
            { name: "WDND012", image: "/doors/wooden-doors/WDND012.jpg" },
            { name: "WDND013", image: "/doors/wooden-doors/WDND013.jpg" },
            { name: "WDND014", image: "/doors/wooden-doors/WDND014.jpg" },
            { name: "WDND015", image: "/doors/wooden-doors/WDND015.jpg" }
        ]
    },
    {
        id: "aluminium-doors",
        name: { en: "ALUMINIUM DOORS", ar: "أبواب ألومنيوم", zh: "铝门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "aluminium-doors",
        description: { en: "Modern aluminium doors available in glass and wood combinations.", ar: "أبواب ألومنيوم حديثة متوفرة في مجموعات الزجاج والخشب.", zh: "现代铝门，提供玻璃和木材组合。" },
        images: ["/doors/aluminium-doors/ALD001.jpg"],
        features: {
            en: ["Lightweight", "Corrosion Resistant", "Modern Aesthetic"],
            ar: ["خفيفة الوزن", "مقاومة للتآكل", "جمالية حديثة"],
            zh: ["轻便", "耐腐蚀", "现代美学"]
        },
        specifications: {
            "Material": "Aluminium Alloy",
            "Glazing": "Double/Triple Glazed",
            "Profile Thickness": "1.4mm - 2.0mm"
        },
        variants: [
            { name: "ALD001", image: "/doors/aluminium-doors/ALD001.jpg" },
            { name: "ALD002", image: "/doors/aluminium-doors/ALD002.jpg" },
            { name: "ALD003", image: "/doors/aluminium-doors/ALD003.jpg" },
            { name: "ALD004", image: "/doors/aluminium-doors/ALD004.jpg" },
            { name: "ALD005", image: "/doors/aluminium-doors/ALD005.jpg" },
            { name: "ALD006", image: "/doors/aluminium-doors/ALD006.jpg" },
            { name: "ALD007", image: "/doors/aluminium-doors/ALD007.jpg" },
            { name: "ALD008", image: "/doors/aluminium-doors/ALD008.jpg" },
            { name: "ALD009", image: "/doors/aluminium-doors/ALD009.jpg" },
            { name: "ALD010", image: "/doors/aluminium-doors/ALD010.jpg" },
            { name: "ALD011", image: "/doors/aluminium-doors/ALD011.jpg" },
            { name: "ALD012", image: "/doors/aluminium-doors/ALD012.jpg" },
            { name: "ALD013", image: "/doors/aluminium-doors/ALD013.jpg" },
            { name: "ALD014", image: "/doors/aluminium-doors/ALD014.jpg" },
            { name: "ALD015", image: "/doors/aluminium-doors/ALD015.jpg" },
            { name: "ALD016", image: "/doors/aluminium-doors/ALD016.jpg" },
            { name: "ALD017", image: "/doors/aluminium-doors/ALD017.jpg" },
            { name: "ALD018", image: "/doors/aluminium-doors/ALD018.jpg" },
            { name: "ALD019", image: "/doors/aluminium-doors/ALD019.jpg" },
            { name: "ALD020", image: "/doors/aluminium-doors/ALD020.jpg" }
        ]
    },
    {
        id: "emergency-exit-doors",
        name: { en: "EMERGENCY EXIT DOORS", ar: "أبواب الخروج في حالات الطوارئ", zh: "紧急出口门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "emergency-exit-doors",
        description: { en: "Certified emergency exit and fire-rated doors for safety.", ar: "أبواب خروج طوارئ ومقاومة للحريق معتمدة للسلامة.", zh: "经认证的紧急出口和防火门，确保安全。" },
        images: ["/doors/emergency-doors/EMGD001.jpg"],
        features: {
            en: ["Fire Resistant", "Panic Bar Included", "Certified Safety"],
            ar: ["مقاوم للحريق", "يشمل شريط الذعر", "سلامة معتمدة"],
            zh: ["耐火", "包含推杆", "安全认证"]
        },
        specifications: {
            "Fire Rating": "60/90/120 Mins",
            "Material": "Steel / Composite",
            "Certification": "UL / BS / EN"
        },
        variants: [
            { name: "EMGD001", image: "/doors/emergency-doors/EMGD001.jpg" },
            { name: "EMGD002", image: "/doors/emergency-doors/EMGD002.jpg" },
            { name: "EMGD003", image: "/doors/emergency-doors/EMGD003.jpg" },
            { name: "EMGD004", image: "/doors/emergency-doors/EMGD004.jpg" }
        ]
    },
    {
        id: "glass-doors",
        name: { en: "GLASS DOORS", ar: "أبواب زجاجية", zh: "玻璃门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "glass-doors",
        description: { en: "Elegant glass doors for modern interiors with excellent light transmission.", ar: "أبواب زجاجية أنيقة للتصميمات الداخلية الحديثة مع نقل ممتاز للضوء.", zh: "优雅的玻璃门，适合现代室内设计，透光性极佳。" },
        images: ["/doors/glass-doors/gl1.jpg"],
        features: {
            en: ["Light Transmission", "Modern Design", "Easy Maintenance"],
            ar: ["نقل الضوء", "تصميم حديث", "صيانة سهلة"],
            zh: ["透光", "现代设计", "易于维护"]
        },
        specifications: {
            "Material": "Tempered Glass",
            "Thickness": "8mm - 12mm",
            "Warranty": "2 Years"
        },
        variants: [
            { name: "GL1", image: "/doors/glass-doors/gl1.jpg" },
            { name: "GL2", image: "/doors/glass-doors/gl2.jpg" },
            { name: "GL3", image: "/doors/glass-doors/gl3.jpg" },
            { name: "GL4", image: "/doors/glass-doors/gl4.jpg" },
            { name: "GL5", image: "/doors/glass-doors/gl5.jpg" },
            { name: "GL6", image: "/doors/glass-doors/gl6.jpg" },
            { name: "GL7", image: "/doors/glass-doors/gl7.jpg" },
            { name: "GL8", image: "/doors/glass-doors/gl8.jpg" },
            { name: "GL9", image: "/doors/glass-doors/gl9.jpg" },
            { name: "GL10", image: "/doors/glass-doors/gl10.jpg" },
            { name: "GL11", image: "/doors/glass-doors/gl11.jpg" },
            { name: "GL12", image: "/doors/glass-doors/gl12.jpg" },
            { name: "GL13", image: "/doors/glass-doors/gl13.jpg" },
            { name: "GL14", image: "/doors/glass-doors/gl14.jpg" }
        ]
    },

    // --- CABINETS ---
    {
        id: "kitchen-cabinet",
        name: { en: "Kitchen Cabinet", ar: "خزانة مطبخ", zh: "橱柜" },
        category: { en: "Cabinet", ar: "خزائن", zh: "橱柜" },
        slug: "kitchen-cabinet",
        description: { en: "Custom kitchen cabinets designed for functionality and style.", ar: "خزائن مطبخ مخصصة مصممة للوظائف والأناقة.", zh: "专为功能性和风格设计的定制厨柜。" },
        images: ["/kitchen-cabinets/KC001.jpg"],
        variants: [
            { name: "KC001", image: "/kitchen-cabinets/KC001.jpg" },
            { name: "KC003", image: "/kitchen-cabinets/KC003.jpg" },
            { name: "KC005", image: "/kitchen-cabinets/KC005.jpg" },
            { name: "KC006", image: "/kitchen-cabinets/KC006.jpg" },
            { name: "KC007", image: "/kitchen-cabinets/KC007.jpg" },
            { name: "KC009", image: "/kitchen-cabinets/KC009.jpg" },
            { name: "KC010", image: "/kitchen-cabinets/KC010.jpg" },
            { name: "KC011", image: "/kitchen-cabinets/KC011.jpg" },
            { name: "KC012", image: "/kitchen-cabinets/KC012.jpg" },
            { name: "KC013", image: "/kitchen-cabinets/KC013.jpg" },
            { name: "KC015", image: "/kitchen-cabinets/KC015.jpg" },
            { name: "KC017", image: "/kitchen-cabinets/KC017.jpg" },
            { name: "KC018", image: "/kitchen-cabinets/KC018.jpg" },
            { name: "KC019", image: "/kitchen-cabinets/KC019.jpg" },
            { name: "KC020", image: "/kitchen-cabinets/KC020.jpg" },
            { name: "KC021", image: "/kitchen-cabinets/KC021.jpg" },
            { name: "KC022", image: "/kitchen-cabinets/KC022.jpg" },
            { name: "KC023", image: "/kitchen-cabinets/KC023.jpg" },
            { name: "KC025", image: "/kitchen-cabinets/KC025.jpg" },
            { name: "KC026", image: "/kitchen-cabinets/KC026.jpg" },
            { name: "KC027", image: "/kitchen-cabinets/KC027.jpg" },
            { name: "KC028", image: "/kitchen-cabinets/KC028.jpg" }
        ]
    },
    {
        id: "closet",
        name: { en: "Bar Cabinet", ar: "خزانة بار", zh: "酒柜" },
        category: { en: "Cabinet", ar: "خزائن", zh: "橱柜" },
        slug: "closet",
        description: { en: "Spacious and organized closets for your storage needs.", ar: "خزائن واسعة ومنظمة لاحتياجات التخزين الخاصة بك.", zh: "宽敞有序的衣柜，满足您的储物需求。" },
        images: ["https://images.unsplash.com/photo-1595415729796-b072e2d96c81?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "CL-001", image: "https://images.unsplash.com/photo-1595415729796-b072e2d96c81?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-002", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-003", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-004", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-005", image: "https://images.unsplash.com/photo-1595515106918-0b3c220555a8?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-006", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-007", image: "https://images.unsplash.com/photo-1616137615002-c743825832a8?auto=format&fit=crop&w=300&q=80" },
            { name: "CL-008", image: "https://images.unsplash.com/photo-1522771753035-4a53c9d1314d?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "bar-cabinet",
        name: { en: "Bar Cabinet", ar: "خزانة بار", zh: "酒柜" },
        category: { en: "Cabinet", ar: "خزائن", zh: "橱柜" },
        slug: "bar-cabinet",
        description: { en: "Stylish bar cabinets for entertaining and storage.", ar: "خزائن بار أنيقة للترفيه والتخزين.", zh: "时尚的酒柜，用于娱乐和储藏。" },
        images: ["https://images.unsplash.com/photo-1594953932225-451950ccf8ba?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "CB-001", image: "https://images.unsplash.com/photo-1594953932225-451950ccf8ba?auto=format&fit=crop&w=300&q=80" },
            { name: "CB-002", image: "https://images.unsplash.com/photo-1595514588049-93878b277156?auto=format&fit=crop&w=300&q=80" },
            { name: "CB-003", image: "https://images.unsplash.com/photo-1595514588037-124675704179?auto=format&fit=crop&w=300&q=80" },
            { name: "CB-004", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80" },
            { name: "CB-005", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80" },
            { name: "CB-006", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=300&q=80" }
        ]
    },

    // --- COLOR CARD ---
    {
        id: "color-card",
        name: { en: "Color Card", ar: "بطاقة الألوان", zh: "色卡" },
        category: { en: "Color Card", ar: "بطاقة الألوان", zh: "色卡" },
        slug: "color-card",
        description: { en: "View our extensive range of colors and textures.", ar: "شاهد مجموعتنا الواسعة من الألوان والقوام.", zh: "查看我们广泛的颜色和纹理选项。" },
        images: ["/color-card/CLRC001.jpg"],
        colors: [
            { name: "CLRC001", image: "/color-card/CLRC001.jpg" },
            { name: "CLRC002", image: "/color-card/CLRC002.jpg" },
            { name: "CLRC003", image: "/color-card/CLRC003.jpg" },
            { name: "CLRC004", image: "/color-card/CLRC004.jpg" },
            { name: "CLRC005", image: "/color-card/CLRC005.jpg" },
            { name: "CLRC006", image: "/color-card/CLRC006.jpg" },
            { name: "CLRC007", image: "/color-card/CLRC007.jpg" },
            { name: "CLRC008", image: "/color-card/CLRC008.jpg" },
            { name: "CLRC009", image: "/color-card/CLRC009.jpg" },
            { name: "CLRC010", image: "/color-card/CLRC010.jpg" },
            { name: "CLRC011", image: "/color-card/CLRC011.jpg" },
            { name: "CLRC012", image: "/color-card/CLRC012.jpg" },
            { name: "CLRC013", image: "/color-card/CLRC013.jpg" },
            { name: "CLRC014", image: "/color-card/CLRC014.jpg" },
            { name: "CLRC015", image: "/color-card/CLRC015.jpg" },
            { name: "CLRC016", image: "/color-card/CLRC016.jpg" },
            { name: "CLRC017", image: "/color-card/CLRC017.jpg" },
            { name: "CLRC018", image: "/color-card/CLRC018.jpg" },
            { name: "CLRC019", image: "/color-card/CLRC019.jpg" },
            { name: "CLRC020", image: "/color-card/CLRC020.jpg" },
            { name: "CLRC021", image: "/color-card/CLRC021.jpg" },
            { name: "CLRC022", image: "/color-card/CLRC022.jpg" },
            { name: "CLRC023", image: "/color-card/CLRC023.jpg" },
            { name: "CLRC024", image: "/color-card/CLRC024.jpg" },
            { name: "CLRC025", image: "/color-card/CLRC025.jpg" },
            { name: "CLRC026", image: "/color-card/CLRC026.jpg" },
            { name: "CLRC027", image: "/color-card/CLRC027.jpg" },
            { name: "CLRC028", image: "/color-card/CLRC028.jpg" },
            { name: "CLRC029", image: "/color-card/CLRC029.jpg" },
            { name: "CLRC030", image: "/color-card/CLRC030.jpg" }
        ]
    },

    // --- WARDROBE ---
    {
        id: "wardrobe",
        name: { en: "Wardrobe", ar: "خزانة الملابس", zh: "衣柜" },
        category: { en: "Wardrobe", ar: "خزانة الملابس", zh: "衣柜" },
        slug: "wardrobe",
        description: { en: "Elegant and functional wardrobes for your storage needs.", ar: "خزائن ملابس أنيقة وعملية لتلبية احتياجاتك التخزينية.", zh: "优雅实用的衣柜，满足您的储物需求。" },
        images: ["/wardrobes/CLOSET001.jpg"],
        variants: [
            { name: "CLOSET001", image: "/wardrobes/CLOSET001.jpg" },
            { name: "CLOSET002", image: "/wardrobes/CLOSET002.jpg" },
            { name: "CLOSET003", image: "/wardrobes/CLOSET003.jpg" },
            { name: "CLOSET004", image: "/wardrobes/CLOSET004.jpg" },
            { name: "CLOSET005", image: "/wardrobes/CLOSET005.jpg" },
            { name: "CLOSET006", image: "/wardrobes/CLOSET006.jpg" },
            { name: "CLOSET007", image: "/wardrobes/CLOSET007.jpg" },
            { name: "CLOSET008", image: "/wardrobes/CLOSET008.jpg" },
            { name: "CLOSET009", image: "/wardrobes/CLOSET009.jpg" },
            { name: "CLOSET011", image: "/wardrobes/CLOSET011.jpg" },
            { name: "CLOSET012", image: "/wardrobes/CLOSET012.jpg" },
            { name: "CLOSET013", image: "/wardrobes/CLOSET013.jpg" }
        ]
    },

    // --- HARDWARE ACCESSORIES ---
    {
        id: "door-handles",
        name: { en: "Door Handles", ar: "مقابض الأبواب", zh: "门把手" },
        category: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        slug: "door-handles",
        description: { en: "Premium door handles with elegant designs and durable construction.", ar: "مقابض أبواب فاخرة بتصاميم أنيقة وبناء متين.", zh: "优质门把手，设计优雅，结构耐用。" },
        images: ["/door-mech-access/door-handles/DH001.jpg"],
        variants: [
            { name: "DH001", image: "/door-mech-access/door-handles/DH001.jpg" },
            { name: "DH002", image: "/door-mech-access/door-handles/DH002.jpg" },
            { name: "DH003", image: "/door-mech-access/door-handles/DH003.jpg" },
            { name: "DH004", image: "/door-mech-access/door-handles/DH004.jpg" },
            { name: "DH005", image: "/door-mech-access/door-handles/DH005.jpg" },
            { name: "DH006", image: "/door-mech-access/door-handles/DH006.jpg" },
            { name: "DH008", image: "/door-mech-access/door-handles/DH008.jpg" },
            { name: "DH009", image: "/door-mech-access/door-handles/DH009.jpg" },
            { name: "DH010", image: "/door-mech-access/door-handles/DH010.png" },
            { name: "DH011", image: "/door-mech-access/door-handles/DH011.png" },
            { name: "DH012", image: "/door-mech-access/door-handles/DH012.png" }
        ]
    },
    {
        id: "door-hinges",
        name: { en: "Door Hinges", ar: "مفصلات الأبواب", zh: "门铰链" },
        category: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        slug: "door-hinges",
        description: { en: "High-quality door hinges for smooth operation and long-lasting performance.", ar: "مفصلات أبواب عالية الجودة لتشغيل سلس وأداء طويل الأمد.", zh: "高品质门铰链，运行平稳，性能持久。" },
        images: ["/door-mech-access/door-hinges/DHG001.jpg"],
        variants: [
            { name: "DHG001", image: "/door-mech-access/door-hinges/DHG001.jpg" },
            { name: "DHG002", image: "/door-mech-access/door-hinges/DHG002.jpg" },
            { name: "DHG003", image: "/door-mech-access/door-hinges/DHG003.jpg" },
            { name: "DHG005", image: "/door-mech-access/door-hinges/DHG005.jpg" },
            { name: "DHG006", image: "/door-mech-access/door-hinges/DHG006.jpg" }
        ]
    },
    {
        id: "doors-with-smart-locks",
        name: { en: "Doors with Smart Locks", ar: "أبواب بأقفال ذكية", zh: "智能锁门" },
        category: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        slug: "doors-with-smart-locks",
        description: { en: "Modern doors equipped with advanced smart lock technology for enhanced security and convenience.", ar: "أبواب حديثة مجهزة بتقنية القفل الذكي المتقدمة لتعزيز الأمان والراحة.", zh: "配备先进智能锁技术的现代门，增强安全性和便利性。" },
        images: ["/door-mech-access/doors-with-smart-lock/DSL001.jpg"],
        variants: [
            { name: "DSL001", image: "/door-mech-access/doors-with-smart-lock/DSL001.jpg" },
            { name: "DSL002", image: "/door-mech-access/doors-with-smart-lock/DSL002.jpg" },
            { name: "DSL003", image: "/door-mech-access/doors-with-smart-lock/DSL003.jpg" },
            { name: "DSL004", image: "/door-mech-access/doors-with-smart-lock/DSL004.jpg" },
            { name: "DSL005", image: "/door-mech-access/doors-with-smart-lock/DSL005.jpg" }
        ]
    }
];
