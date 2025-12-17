export interface Category {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: 'doors',
    name: {
      en: 'Doors',
      ar: 'الأبواب'
    },
    description: {
      en: 'Premium quality doors including MDF, WPC, Steel, Wooden, Aluminum, and Emergency Exit doors',
      ar: 'أبواب عالية الجودة تشمل MDF و WPC والفولاذ والخشب والألمنيوم وأبواب الطوارئ'
    },
    image: '/images/categories/doors.jpg',
    slug: 'doors'
  },
  {
    id: 'door-hardware',
    name: {
      en: 'Door Hardware & Accessories',
      ar: 'أجهزة وملحقات الأبواب'
    },
    description: {
      en: 'Complete range of door mechanisms, hinges, handles, and smart locks',
      ar: 'مجموعة كاملة من آليات الأبواب والمفصلات والمقابض والأقفال الذكية'
    },
    image: '/images/categories/hardware.jpg',
    slug: 'door-hardware'
  },
  {
    id: 'kitchen-cabinets',
    name: {
      en: 'Kitchen Cabinets',
      ar: 'خزائن المطبخ'
    },
    description: {
      en: 'Durable and stylish cabinets for an organized kitchen',
      ar: 'خزائن متينة وأنيقة لمطبخ منظم'
    },
    image: '/images/categories/kitchen.jpg',
    slug: 'kitchen-cabinets'
  },
  {
    id: 'wardrobes',
    name: {
      en: 'Wardrobes',
      ar: 'خزانات الملابس'
    },
    description: {
      en: 'Smart storage solutions for everyday style with customizable designs',
      ar: 'حلول تخزين ذكية للأسلوب اليومي مع تصاميم قابلة للتخصيص'
    },
    image: '/images/categories/wardrobes.jpg',
    slug: 'wardrobes'
  },
  {
    id: 'core-panels',
    name: {
      en: 'Core Panels',
      ar: 'الألواح الأساسية'
    },
    description: {
      en: 'MDF, MR MDF, Plywood, Film Faced, and Melamine panels for various applications',
      ar: 'ألواح MDF و MR MDF والخشب الرقائقي والفيلم والميلامين لمختلف التطبيقات'
    },
    image: '/images/categories/panels.jpg',
    slug: 'core-panels'
  },
  {
    id: 'color-options',
    name: {
      en: 'Color Options',
      ar: 'خيارات الألوان'
    },
    description: {
      en: 'Wide range of colors and finishes for doors and cabinets',
      ar: 'مجموعة واسعة من الألوان والتشطيبات للأبواب والخزائن'
    },
    image: '/images/categories/colors.jpg',
    slug: 'color-options'
  }
];
