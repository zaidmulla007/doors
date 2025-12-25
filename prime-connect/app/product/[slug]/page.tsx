"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Package, Share2, Printer, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import { products } from "../../data";
import { useLanguage } from "../../context/LanguageContext";
import ProductSidebar from "../../components/ProductSidebar";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Helper function to get translated text
const getTranslated = (value: string | { en: string; ar: string; zh?: string } | undefined, lang: string): string => {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (lang === 'ar' && value.ar) return value.ar;
    if (lang === 'zh' && value.zh) return value.zh;
    return value.en || '';
};

export default function ProductPage() {
    const { t, language } = useLanguage();
    const [selectedColor, setSelectedColor] = useState<{ name: string; image: string } | null>(null);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [currentSpecImage, setCurrentSpecImage] = useState(0);
    const params = useParams();
    const slug = params.slug as string;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return notFound();
    }

    // Get translated product data
    const productName = getTranslated(product.name, language);
    const productDescription = getTranslated(product.description, language);
    const productFeatures = (product as unknown as Record<string, { [key: string]: string[] }>).features?.[language] || (product as unknown as Record<string, { en: string[] }>).features?.en || [];
    const productApplications = (product as unknown as Record<string, { [key: string]: string[] }>).applications?.[language] || (product as unknown as Record<string, { en: string[] }>).applications?.en || [];

    const variants = ((product as unknown as Record<string, unknown>).variants || (product as unknown as Record<string, unknown>).colors || []) as { name: string; image: string }[];

    // Zoom handler for modal image
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomPosition({ x, y });
    };

    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="container-custom">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Sidebar Column */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-32">
                                    <ProductSidebar activeSlug={slug} />
                                </div>
                            </div>

                            {/* Main Content Column */}
                            <div className="lg:col-span-3">
                                {/* Breadcrumb */}
                                <div className="mb-8">
                                    <Link
                                        href="/products"
                                        className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        {t('productDetail.backToProducts')}
                                    </Link>
                                </div>

                                <div className="flex flex-col gap-8">

                                    {/* Top Section: Images & Basic Info - Hidden if there are variants/grid items */}
                                    {variants.length === 0 && (
                                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                                            <div className="grid lg:grid-cols-2 gap-0">

                                                {/* Images */}
                                                <div className="p-8 lg:p-12 bg-gray-50 border-r border-gray-100">
                                                    <div className="flex items-center gap-2 mb-6">
                                                        <Package className="w-5 h-5 text-gray-700" />
                                                        <h3 className="font-semibold text-gray-900">{t('productDetail.productImages')}</h3>
                                                    </div>

                                                    {product.images && product.images.length > 0 ? (
                                                        <div className="space-y-4">
                                                            {/* Main Image Display */}
                                                            <div className="relative aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
                                                                <Image
                                                                    src={product.images[currentSpecImage] || product.images[0]}
                                                                    alt={`${productName} ${currentSpecImage + 1}`}
                                                                    fill
                                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                />

                                                                {/* Navigation Arrows - only show if more than 1 image */}
                                                                {product.images.length > 1 && (
                                                                    <>
                                                                        <button
                                                                            onClick={() => setCurrentSpecImage(prev => prev === 0 ? product.images!.length - 1 : prev - 1)}
                                                                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-all border border-gray-200 shadow-md"
                                                                        >
                                                                            <ChevronLeft size={20} />
                                                                        </button>
                                                                        <button
                                                                            onClick={() => setCurrentSpecImage(prev => prev === product.images!.length - 1 ? 0 : prev + 1)}
                                                                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-all border border-gray-200 shadow-md"
                                                                        >
                                                                            <ChevronRight size={20} />
                                                                        </button>
                                                                    </>
                                                                )}
                                                            </div>

                                                            {/* Thumbnail Gallery - only show if more than 1 image */}
                                                            {product.images.length > 1 && (
                                                                <div className="overflow-x-auto pb-2">
                                                                    <div className="flex gap-2 min-w-max">
                                                                        {product.images.map((img, idx) => (
                                                                            <button
                                                                                key={idx}
                                                                                onClick={() => setCurrentSpecImage(idx)}
                                                                                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === currentSpecImage
                                                                                        ? 'border-blue-500 shadow-md'
                                                                                        : 'border-gray-200 hover:border-blue-300'
                                                                                    }`}
                                                                            >
                                                                                <Image
                                                                                    src={img}
                                                                                    alt={`${productName} thumbnail ${idx + 1}`}
                                                                                    fill
                                                                                    className="object-cover"
                                                                                />
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="relative aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center">
                                                            <div className="text-gray-400">{t('productDetail.noImage')}</div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Info */}
                                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                                                        <h4 className="text-xl font-bold text-gray-900 mb-6">
                                                            {productName}
                                                        </h4>
                                                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                                            {productDescription}
                                                        </p>

                                                        <div className="flex items-center gap-4">
                                                            <Link href="/contact" className="btn-primary">
                                                                {t('productDetail.inquire')}
                                                            </Link>
                                                            {/* Placeholder Actions */}
                                                            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Share2 className="w-5 h-5 text-gray-600" /></button>
                                                            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition"><Printer className="w-5 h-5 text-gray-600" /></button>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Features Section */}
                                    {productFeatures && productFeatures.length > 0 && variants.length === 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
                                        >
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.features')}</h2>
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {productFeatures.map((feature: string, index: number) => (
                                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {/* Specification Images Section */}
                                    {(() => {
                                        const specImages: { [key: string]: string[] } = {
                                            'mdf-doors': ['/mdf-doors-details/3.png', '/mdf-doors-details/4.png', '/mdf-doors-details/5.png', '/mdf-doors-details/6.png', '/mdf-doors-details/7.png'],
                                            'wpc-doors': ['/wpc-door-details/9.png', '/wpc-door-details/10.png', '/wpc-door-details/11.png', '/wpc-door-details/12.png', '/wpc-door-details/13.png'],
                                            'iron-and-steel-doors': ['/iron-steel-doors-details/15.png', '/iron-steel-doors-details/16.png', '/iron-steel-doors-details/17.png'],
                                            'wooden-doors': ['/wooden-doors-details/19.png', '/wooden-doors-details/20.png', '/wooden-doors-details/21.png', '/wooden-doors-details/22.png'],
                                            'aluminium-doors': ['/aluminium-doors-details/24.png', '/aluminium-doors-details/25.png', '/aluminium-doors-details/26.png', '/aluminium-doors-details/27.png'],
                                            'emergency-exit-doors': ['/emeregency-exit-doors-details/29.png', '/emeregency-exit-doors-details/30.png', '/emeregency-exit-doors-details/31.png']
                                        };
                                        const images = specImages[slug] || [];
                                        if (images.length === 0) return null;

                                        const handlePrevSpec = () => {
                                            setCurrentSpecImage((prev) => prev === 0 ? images.length - 1 : prev - 1);
                                        };

                                        const handleNextSpec = () => {
                                            setCurrentSpecImage((prev) => prev === images.length - 1 ? 0 : prev + 1);
                                        };

                                        return (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
                                            >
                                                <h4 className="text-lg font-bold text-gray-900 mb-8">{t('productDetail.specifications')}</h4>
                                                <div className="relative">
                                                    {/* Carousel Container */}
                                                    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[55vh] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                                                        <AnimatePresence initial={false} mode="wait">
                                                            <motion.div
                                                                key={currentSpecImage}
                                                                initial={{ opacity: 0, x: 100 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -100 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="absolute inset-0"
                                                            >
                                                                <Image
                                                                    src={images[currentSpecImage]}
                                                                    alt={`${productName} specification ${currentSpecImage + 1}`}
                                                                    fill
                                                                    className="object-contain bg-white p-0"
                                                                />
                                                            </motion.div>
                                                        </AnimatePresence>

                                                        {/* Navigation Arrows */}
                                                        {images.length > 1 && (
                                                            <>
                                                                <button
                                                                    onClick={handlePrevSpec}
                                                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-all border border-gray-200 shadow-md"
                                                                    aria-label="Previous specification"
                                                                >
                                                                    <ChevronLeft size={24} />
                                                                </button>
                                                                <button
                                                                    onClick={handleNextSpec}
                                                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-all border border-gray-200 shadow-md"
                                                                    aria-label="Next specification"
                                                                >
                                                                    <ChevronRight size={24} />
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Dot Indicators */}
                                                    {images.length > 1 && (
                                                        <div className="flex justify-center gap-2 mt-6">
                                                            {images.map((_, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => setCurrentSpecImage(index)}
                                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSpecImage
                                                                        ? 'bg-blue-600 w-8'
                                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                                        }`}
                                                                    aria-label={`Go to specification ${index + 1}`}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })()}

                                    {/* Specifications Table Section - Only show if no spec images */}
                                    {product.specifications && Object.keys(product.specifications).length > 0 && !['mdf-doors', 'wpc-doors', 'iron-and-steel-doors', 'wooden-doors', 'aluminium-doors', 'emergency-exit-doors'].includes(slug) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
                                        >
                                            <h4 className="text-lg font-bold text-gray-900 mb-8">{t('productDetail.specifications')}</h4>
                                            <div className="overflow-hidden rounded-xl border border-gray-200">
                                                <table className="w-full text-left border-collapse">
                                                    <tbody>
                                                        {Object.entries(product.specifications).map(([key, value], index) => (
                                                            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                                <th className="py-4 px-6 bg-gray-50/50 font-medium text-gray-900 w-1/3 border-r border-gray-100 capitalize">
                                                                    {(t as (key: string) => string)(`common.productSpecs.${key.toLowerCase().replace(/\s+/g, '')}`) || key.replace(/([A-Z])/g, ' $1').trim()}
                                                                </th>
                                                                <td className="py-4 px-6 text-gray-600">
                                                                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Applications Section */}
                                    {productApplications && productApplications.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 mb-8"
                                        >
                                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.applications')}</h2>
                                            <ul className="space-y-4">
                                                {productApplications.map((app: string, index: number) => (
                                                    <li key={index} className="flex items-start gap-4 text-gray-600">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                                        <span className="text-lg leading-relaxed">{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {/* Models/Variants Grid */}
                                    {variants.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
                                        >
                                            <h4 className="text-2xl font-bold text-gray-900 mb-8">
                                                {slug === 'color-card' ? t('productDetail.colorShades') : `${t('productDetail.availableModels')} ${productName}`}
                                            </h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                {variants.map((item, index: number) => (
                                                    <div
                                                        key={index}
                                                        className="group flex flex-col gap-2 cursor-pointer"
                                                        onClick={() => setSelectedColor(item)}
                                                    >
                                                        <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-all bg-white">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-contain p-2 group-hover:scale-125 transition-transform duration-700 ease-out"
                                                            />
                                                        </div>
                                                        <p className="text-center text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Selected Item Modal */}
                                    <AnimatePresence>
                                        {selectedColor && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                                                onClick={() => setSelectedColor(null)}
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar md:grid md:grid-cols-2 md:overflow-hidden"
                                                >
                                                    {/* Image Section with Zoom */}
                                                    <div className="relative">
                                                        <div
                                                            className="relative h-64 md:h-[90vh] bg-white flex items-center justify-center p-4 cursor-zoom-in"
                                                            onMouseMove={handleMouseMove}
                                                            onMouseEnter={() => setShowZoom(true)}
                                                            onMouseLeave={() => setShowZoom(false)}
                                                        >
                                                            {/* Main Image */}
                                                            <Image
                                                                src={selectedColor.image}
                                                                alt={selectedColor.name}
                                                                fill
                                                                className="object-contain p-4"
                                                            />
                                                        </div>

                                                        {/* Flipkart-style Zoomed Image Panel */}
                                                        {showZoom && (
                                                            <div className="hidden md:block absolute left-full top-0 ml-4 w-[400px] h-[400px] bg-white border-2 border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50">
                                                                <div
                                                                    className="relative w-full h-full"
                                                                    style={{
                                                                        backgroundImage: `url(${selectedColor.image})`,
                                                                        backgroundSize: '200%',
                                                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                                                        backgroundRepeat: 'no-repeat',
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Info & Inquiry Section */}
                                                    <div className="p-6 md:p-8 flex flex-col md:overflow-y-auto custom-scrollbar"
                                                        style={{
                                                            maxHeight: 'calc(90vh - 2rem)',
                                                            WebkitOverflowScrolling: 'touch'
                                                        }}
                                                    >
                                                        <div className="flex justify-between items-start mb-6">
                                                            <div>
                                                                <h3 className="text-2xl font-bold text-gray-900">{selectedColor.name}</h3>
                                                                <p className="text-sm text-gray-500 mt-1">
                                                                    {slug === 'color-card' ? t('productDetail.finishTexture') : t('productDetail.modelDetail')}
                                                                </p>
                                                            </div>
                                                            <button
                                                                onClick={() => setSelectedColor(null)}
                                                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                                            >
                                                                <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                                                            </button>
                                                        </div>

                                                        <div className="mt-auto space-y-4 pb-8 md:pb-4">
                                                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                                                <h4 className="font-semibold text-blue-900 mb-2">
                                                                    {slug === 'color-card' ? t('productDetail.interestedFinish') : t('productDetail.interestedModel')}
                                                                </h4>
                                                                <p className="text-sm text-blue-700 mb-4">
                                                                    {t('productDetail.fillForm')} <span className="font-bold">{selectedColor.name}</span> {t('productDetail.option')}.
                                                                </p>
                                                                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                                                    <input
                                                                        type="text"
                                                                        placeholder={t('productDetail.yourName')}
                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                                    />
                                                                    <input
                                                                        type="email"
                                                                        placeholder={t('productDetail.emailAddress')}
                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                                    />
                                                                    <input
                                                                        type="tel"
                                                                        placeholder={t('productDetail.phoneNumber')}
                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                                    />
                                                                    <textarea
                                                                        rows={3}
                                                                        placeholder={t('productDetail.messageRequirements')}
                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                                                                    ></textarea>
                                                                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-200 uppercase tracking-widest text-xs">
                                                                        {t('productDetail.sendInquiry')}
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
