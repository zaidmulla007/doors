export const categories = [
    {
        id: "doors",
        name: "Doors",
        description: "Interior, exterior, fire-rated, and specialty doors for all applications",
        image: "https://images.unsplash.com/photo-1582205313222-297eb040854d?auto=format&fit=crop&w=800&q=80",
        slug: "doors"
    },
    {
        id: "core-panels",
        name: "Core Panels",
        description: "MDF, WPC, plywood, and specialty panel solutions",
        image: "https://images.unsplash.com/photo-1519962533758-d42111d40eb8?auto=format&fit=crop&w=800&q=80",
        slug: "core-panels"
    },
    {
        id: "doors-hardware-accessories",
        name: "Doors Hardware Accessories",
        description: "Essential hardware including hinges, locks, and handles",
        image: "https://images.unsplash.com/photo-1583847936118-2e1194689b0d?auto=format&fit=crop&w=800&q=80",
        slug: "doors-hardware-accessories"
    },
    {
        id: "general-items",
        name: "General Items",
        description: "Various construction and finishing items",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        slug: "general-items"
    },
    {
        id: "miscellaneous-items",
        name: "Miscellaneous Items",
        description: "Additional accessories and components",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
        slug: "miscellaneous-items"
    },
    {
        id: "kitchen-cabinets",
        name: "Kitchen Cabinets",
        description: "Modern kitchen systems and cabinetry",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80",
        slug: "kitchen-cabinets"
    },
    {
        id: "wardrobes",
        name: "Wardrobes",
        description: "Custom wardrobe solutions",
        image: "https://images.unsplash.com/photo-1595415729796-b072e2d96c81?auto=format&fit=crop&w=800&q=80",
        slug: "wardrobes"
    }
];

export const products = [
    // CORE PANELS - Specific Data from User Screenshots
    {
        id: "melamine-faced-plywood",
        name: "Melamine Faced Plywood",
        category: "Core Panels",
        slug: "melamine-faced-plywood",
        description: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor",
        specifications: [
            { key: "Thickness", value: "6mm-25mm" },
            { key: "Sizes", value: "1220x2440x18mm, 1220x2440x15mm or as per customers' required specifications" },
            { key: "Glue", value: "E0, E1, E2, MR" },
            { key: "Density", value: "680-780KG/m3" },
            { key: "Moisture", value: "8-20%" },
            { key: "Surface finish", value: "Melamine Paper" },
            { key: "Color", value: "solid color(white,black,blue,yellow,red etc.);wood grain(cherry,beech,walnut,teak etc.) cloth grain" },
            { key: "Material", value: "Wood Chips(Poplar,Pine,Combi etc.)" },
            { key: "Usage", value: "Widely used for High-end Furniture Wardrobe/Kitchen Cabinet/TV Cabinet/Closets" },
            { key: "Certifications", value: "CARB, CE,ISO9001:2000, ISO14001" }
        ],
        // Matching aesthetic for wood panels
        images: ["https://images.unsplash.com/photo-1610368153400-u7t6241b711d?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "film-faced-plywood",
        name: "Film Faced Plywood",
        category: "Core Panels",
        slug: "film-faced-plywood",
        description: "Film Faced Plywood is a durable, water-resistant plywood coated with a protective film, widely used for concrete formwork and construction",
        specifications: [
            { key: "Thickness", value: "1-25mm or customized as per clients' requirements" },
            { key: "Sizes", value: "1220x2440mm, 1535x2440mm 1830x2440mm or as clients requirement" },
            { key: "Glue", value: "E2, E1, E0, CARB" },
            { key: "Density", value: "680kgs/m3 ~ 1000kgs/m3" },
            { key: "Moisture", value: "4-12%" },
            { key: "Surface finish", value: "VENEER" },
            { key: "Color", value: "Solid colors, wood grain colors, fancy colors, stone colors,etc or customized as per clients' requirements" },
            { key: "Material", value: "Poplar, Pine and hardwood combi" },
            { key: "Usage", value: "It is widely used in furniture manufacturing, such as beds, tables, cabinets, etc. It is also used in building decoration, like wall panels, ceilings, etc." },
            { key: "Certifications", value: "CARB, CE,ISO9001:2000, ISO14001" }
        ],
        applications: [
            "Furniture Manufacturing: Used for making strong, stylish, and durable furniture pieces",
            "Cabinets & Wardrobes: Ideal for modular kitchens and wardrobes with smooth finishes",
            "Partitions & Displays: Strong and Decorative option for office and retail partitions",
            "Construction & Flooring: Durable and reusable panels widely used in formwork and flooring"
        ],
        images: ["https://images.unsplash.com/photo-1541363659972-0050aa738e4a?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "melamine-faced-mdf-panels",
        name: "Melamine Faced MDF Panels",
        category: "Core Panels",
        slug: "melamine-faced-mdf-panels",
        description: "An elegant and durable board with a melamine-coated surface that offers a decorative finish and resistance to scratches and stains. Ideal for furniture, cabinets, wall paneling, and interior décor.",
        specifications: [
            { key: "Thickness Sizes", value: "Ranges from 2.5 mm to 25 mm, with common options like 9 mm, 12 mm, 15 mm, 17 mm, 18 mm" },
            { key: "Glue", value: "Uses E0/E1/E2 bonding systems, and can include melamine glue depending on the application" },
            { key: "Density", value: "Wood fiber core from poplar, pine, hardwood, or combinations" },
            { key: "Moisture", value: "Standard moisture resistance (not marine-grade); ideal for dry interiors" },
            { key: "Surface finish", value: "Options include plain, various melamine finishes (matt, textured, high-gloss, embossed), with colors ranging from solid to wood grains, cloth or marble patterns" }
        ],
        applications: [
            "Shelving & Racks: Strong and stylish option for storage shelves in homes or shops.",
            "Doors & Panels: Provides smooth and durable surface for interior doors.",
            "Hotel & Restaurant Interiors: Adds warmth and elegance to hospitality spaces",
            "False Ceilings: Enhances interiors with decorative wooden ceiling panels."
        ],
        images: ["https://images.unsplash.com/photo-1620615307374-2dc4aa441999?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "film-faced-mdf-panels",
        name: "FILM FACED MDF PANELS",
        category: "Core Panels",
        slug: "film-faced-mdf-panels",
        description: "A strong and durable panel with a smooth film coating that provides resistance to moisture, wear, and abrasion. It is widely used in construction formwork, shuttering, and other heavy-duty applications where reusability and strength are essential",
        images: ["https://images.unsplash.com/photo-1549419137-b6a6773295c5?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "core-panel-plywood",
        name: "Core Panel Plywood",
        category: "Core Panels",
        slug: "core-panel-plywood",
        description: "Core Panel Plywood Strong and stable plywood made with layered wood veneers at the core, ideal for doors, partitions, furniture, and wall panels",
        specifications: [
            { key: "Thickness Sizes", value: "Also ranges from 2.5 mm to 25 mm" },
            { key: "Glue", value: "Uses E0/E1/E2 bonding systems" },
            { key: "Density", value: "Wood fiber core from poplar, pine, hardwood, or combinations" },
            { key: "Moisture", value: "Standard moisture resistance" },
            { key: "Surface finish", value: "Options include plain, various melamine finishes" },
            { key: "Color", value: "Solid colors, wood grain colors" },
            { key: "Material", value: "Made from wood fiber, typically poplar, pine, or a combination" },
            { key: "Usage", value: "Widely used for furniture, interior decoration" },
            { key: "Certifications", value: "CARB, CE,ISO9001:2000, ISO14001" }
        ],
        images: ["https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80"]
    },

    // Other Existing Products
    {
        id: "aluminium-doors",
        name: "Aluminium Doors",
        category: "Doors",
        slug: "aluminium-doors",
        description: "High-quality aluminium doors designed for modern aesthetics and durability.",
        specifications: [
            { key: "Material", value: "Aluminium Alloy" },
            { key: "Glass", value: "Double Glazed / Tempered" },
            { key: "Finish", value: "Powder Coated / Anodized" }
        ],
        images: ["https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "accessories",
        name: "Accessories",
        category: "Doors Hardware Accessories",
        slug: "accessories",
        description: "General door accessories and hardware components.",
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "door-hinges",
        name: "Door Hinges",
        category: "Doors Hardware Accessories",
        slug: "door-hinges",
        description: "Durable stainless steel door hinges for smooth operation.",
        images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "door-smart-locks",
        name: "Door Smart Locks",
        category: "Doors Hardware Accessories",
        slug: "door-smart-locks",
        description: "Advanced smart lock systems for keyless entry and security.",
        images: ["https://images.unsplash.com/photo-1558002038-109177381793?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "hinges-glass-shelf-clips",
        name: "Hinges/Glass Shelf Clips",
        category: "Doors Hardware Accessories",
        slug: "hinges-glass-shelf-clips",
        description: "Specialized clips and hinges for glass cabinetry.",
        images: ["https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "emergency-exit-doors",
        name: "Emergency Exit Doors",
        category: "Doors",
        slug: "emergency-exit-doors",
        description: "Fire-rated emergency exit doors adhering to safety standards.",
        images: ["https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80"]
    },
    {
        id: "iron-steel-doors",
        name: "Iron/Steel Doors",
        category: "Doors",
        slug: "iron-steel-doors",
        description: "Security steel doors for industrial and residential use.",
        images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"]
    }
];
