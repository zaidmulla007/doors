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
        images: ["https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `MDF-${100 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1517646331032-9e8563c523a1', '1582205313222-297eb040854d', '1533090481720-856c6e3c1960',
                '1487700160041-babef9c3cb55', '1622372738946-67e0231446f1', '1600607686527-6fb886090705'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "wpc-doors",
        name: { en: "WPC DOORS", ar: "أبواب WPC", zh: "WPC门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "wpc-doors",
        description: { en: "Waterproof and termite-proof WPC doors for long-lasting durability.", ar: "أبواب WPC مقاومة للماء والنمل الأبيض لمتانة طويلة الأمد.", zh: "防水防白蚁WPC门，持久耐用。" },
        images: ["https://images.unsplash.com/photo-1533090481720-856c6e3c1960?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `WPC-${400 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1533090481720-856c6e3c1960', '1582205313222-297eb040854d', '1517646331032-9e8563c523a1',
                '1595166442656-7876a4ba0c7b', '1613545325278-f24b0cae1224', '1600607686527-6fb886090705'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "iron-and-steel-doors",
        name: { en: "IRON AND STEEL DOORS", ar: "أبواب حديدية وفولاذية", zh: "钢铁门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "iron-and-steel-doors",
        description: { en: "Secure and robust iron and steel doors for maximum security.", ar: "أبواب حديدية وفولاذية آمنة وقوية لأقصى قدر من الأمان.", zh: "安全坚固的钢铁门，提供最大的安全性。" },
        images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `ISD-${900 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1519710164239-da123dc03ef4', '1613545325278-f24b0cae1224', '1595166442656-7876a4ba0c7b',
                '1600607686527-6fb886090705', '1622372738946-67e0231446f1', '1487700160041-babef9c3cb55'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "wooden-doors",
        name: { en: "WOODEN DOORS", ar: "أبواب خشبية", zh: "木门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "wooden-doors",
        description: { en: "Classic and elegant wooden doors including Melamine, PET, and Solid Wood.", ar: "أبواب خشبية كلاسيكية وأنيقة بما في ذلك الميلامين و PET والخشب الصلب.", zh: "经典而优雅的木门，包括三聚氰胺、PET和实木。" },
        images: ["https://images.unsplash.com/photo-1582205313222-297eb040854d?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `WD-${300 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1582205313222-297eb040854d', '1595515106969-1ce29566ff1c', '1487700160041-babef9c3cb55',
                '1622372738946-67e0231446f1', '1517646331032-9e8563c523a1', '1533090481720-856c6e3c1960'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "aluminium-doors",
        name: { en: "ALUMINIUM DOORS", ar: "أبواب ألومنيوم", zh: "铝门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "aluminium-doors",
        description: { en: "Modern aluminium doors available in glass and wood combinations.", ar: "أبواب ألومنيوم حديثة متوفرة في مجموعات الزجاج والخشب.", zh: "现代铝门，提供玻璃和木材组合。" },
        images: ["https://images.unsplash.com/photo-1595166442656-7876a4ba0c7b?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `ALD-${800 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1595166442656-7876a4ba0c7b', '1613545325278-f24b0cae1224', '1600607686527-6fb886090705',
                '1519710164239-da123dc03ef4', '1622372738946-67e0231446f1', '1487700160041-babef9c3cb55'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "emergency-exit-doors",
        name: { en: "EMERGENCY EXIT DOORS", ar: "أبواب الخروج في حالات الطوارئ", zh: "紧急出口门" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "emergency-exit-doors",
        description: { en: "Certified emergency exit and fire-rated doors for safety.", ar: "أبواب خروج طوارئ ومقاومة للحريق معتمدة للسلامة.", zh: "经认证的紧急出口和防火门，确保安全。" },
        images: ["https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80"],
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
        variants: Array.from({ length: 12 }, (_, i) => ({
            name: `EXIT-${1000 + i}`,
            image: `https://images.unsplash.com/photo-${[
                '1613545325278-f24b0cae1224', '1519710164239-da123dc03ef4', '1595166442656-7876a4ba0c7b',
                '1618220179428-22790b461013', '1622372738946-67e0231446f1', '1487700160041-babef9c3cb55'
            ][i % 6]}?auto=format&fit=crop&w=300&q=80`
        }))
    },
    {
        id: "doors-color-cards",
        name: { en: "DOORS COLOR CARDS", ar: "بطاقات ألوان الأبواب", zh: "门色卡" },
        category: { en: "Doors", ar: "أبواب", zh: "门" },
        slug: "doors-color-cards",
        description: { en: "Explore our wide range of color options for your doors.", ar: "استكشف مجموعتنا الواسعة من خيارات الألوان لأبوابك.", zh: "探索我们为您的门提供的广泛颜色选项。" },
        images: ["https://images.unsplash.com/photo-1523456722026-6b21ba37ee1d?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "Classic Oak", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80" },
            { name: "Dark Walnut", image: "https://images.unsplash.com/photo-1543444465-34372e90c51e?auto=format&fit=crop&w=300&q=80" },
            { name: "Cherry Wood", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1960?auto=format&fit=crop&w=300&q=80" },
            { name: "Mahogany", image: "https://images.unsplash.com/photo-1589139266795-8c01d3b07446?auto=format&fit=crop&w=300&q=80" },
            { name: "Ash Grey", image: "https://images.unsplash.com/photo-1629898086082-f54c25bd2830?auto=format&fit=crop&w=300&q=80" },
            { name: "Pure White", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" },
            { name: "Matte Black", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=300&q=80" },
            { name: "Teak Finish", image: "https://images.unsplash.com/photo-1610363060661-827d09b3054f?auto=format&fit=crop&w=300&q=80" }
        ]
    },

    // --- CABINETS ---
    {
        id: "kitchen-cabinet",
        name: { en: "Kitchen Cabinet", ar: "خزانة مطبخ", zh: "橱柜" },
        category: { en: "Cabinet", ar: "خزائن", zh: "橱柜" },
        slug: "kitchen-cabinet",
        description: { en: "Custom kitchen cabinets designed for functionality and style.", ar: "خزائن مطبخ مخصصة مصممة للوظائف والأناقة.", zh: "专为功能性和风格设计的定制厨柜。" },
        images: ["https://images.unsplash.com/photo-1556911220-e620418f47f8?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "CA-001", image: "https://images.unsplash.com/photo-1556911220-e620418f47f8?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-002", image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-003", image: "https://images.unsplash.com/photo-1556909190-e7352514d7bd?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-004", image: "https://images.unsplash.com/photo-1556909138-ac7c532467b7?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-005", image: "https://images.unsplash.com/photo-1556909212-c28f73f5d554?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-006", image: "https://images.unsplash.com/photo-1556157382-97eda2d622ca?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-007", image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=300&q=80" },
            { name: "CA-008", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80" }
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
        images: ["https://images.unsplash.com/photo-1523456722026-6b21ba37ee1d?auto=format&fit=crop&w=800&q=80"],
        colors: [
            { name: "Classic Oak", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80" },
            { name: "Dark Walnut", image: "https://images.unsplash.com/photo-1543444465-34372e90c51e?auto=format&fit=crop&w=300&q=80" },
            { name: "Cherry Wood", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1960?auto=format&fit=crop&w=300&q=80" },
            { name: "Mahogany", image: "https://images.unsplash.com/photo-1589139266795-8c01d3b07446?auto=format&fit=crop&w=300&q=80" },
            { name: "Ash Grey", image: "https://images.unsplash.com/photo-1629898086082-f54c25bd2830?auto=format&fit=crop&w=300&q=80" },
            { name: "Pure White", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" },
            { name: "Matte Black", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=300&q=80" },
            { name: "Teak Finish", image: "https://images.unsplash.com/photo-1610363060661-827d09b3054f?auto=format&fit=crop&w=300&q=80" }
        ]
    },

    // --- HARDWARE ACCESSORIES ---
    {
        id: "door-hardware-accessories",
        name: { en: "Door Hardware Accessories", ar: "إكسسوارات أجهزة الأبواب", zh: "门五金配件" },
        category: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        slug: "door-hardware-accessories",
        description: { en: "Handles, locks, hinges, and other essential door hardware.", ar: "مقابض، أقفال، مفصلات، وغيرها من أجهزة الأبواب الأساسية.", zh: "把手、锁、铰链和其他基本门五金件。" },
        images: ["https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "Luxury Handle-01", image: "https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=300&q=80" },
            { name: "Smart Lock-X1", image: "https://images.unsplash.com/photo-1558002038-1091a1662721?auto=format&fit=crop&w=300&q=80" },
            { name: "Hinge Set-H1", image: "https://images.unsplash.com/photo-1622372738946-67e0231446f1?auto=format&fit=crop&w=300&q=80" },
            { name: "Door Closer-DC", image: "https://images.unsplash.com/photo-1595166442656-7876a4ba0c7b?auto=format&fit=crop&w=300&q=80" },
            { name: "Door Stopper-DS", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80" },
            { name: "Cylinder Lock-CL", image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&w=300&q=80" },
            { name: "Pull Handle-PH", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=300&q=80" },
            { name: "Mortise Lock-ML", image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    {
        id: "fire-rated-door-hardware",
        name: { en: "Fire Rated Door Hardware", ar: "أجهزة أبواب مقاومة للحريق", zh: "防火门五金" },
        category: { en: "Hardware Accessories", ar: "ملحقات الأجهزة", zh: "五金配件" },
        slug: "fire-rated-door-hardware",
        description: { en: "Specialized hardware designed for fire-rated doors.", ar: "أجهزة متخصصة مصممة للأبواب المقاومة للحريق.", zh: "专为防火门设计的特种五金。" },
        images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"],
        variants: [
            { name: "Panic Bar-PB100", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80" },
            { name: "Fire Door Closer-FDC", image: "https://images.unsplash.com/photo-1595166442656-7876a4ba0c7b?auto=format&fit=crop&w=300&q=80" },
            { name: "Steel Hinge-SH200", image: "https://images.unsplash.com/photo-1622372738946-67e0231446f1?auto=format&fit=crop&w=300&q=80" },
            { name: "Fire Lock-FL50", image: "https://images.unsplash.com/photo-1558002038-1091a1662721?auto=format&fit=crop&w=300&q=80" },
            { name: "Emergency Push Bar", image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?auto=format&fit=crop&w=300&q=80" },
            { name: "Smoke Seal-SS", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=300&q=80" },
            { name: "Auto Drop Seal", image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&w=300&q=80" },
            { name: "Fire Rated Handle", image: "https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=300&q=80" }
        ]
    }
];
