"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Package, Share2, Printer, X } from "lucide-react";
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
    const [selectedColor, setSelectedColor] = useState<any>(null);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const params = useParams();
    const slug = params.slug as string;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return notFound();
    }

    // Get translated product data
    const productName = getTranslated(product.name, language);
    const productDescription = getTranslated(product.description, language);
    const productFeatures = (product as any).features?.[language] || (product as any).features?.en || [];
    const productApplications = (product as any).applications?.[language] || (product as any).applications?.en || [];

    const variants = (product as any).variants || (product as any).colors || [];

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

                                                    <div className="relative aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
                                                        {product.images?.[0] ? (
                                                            <Image
                                                                src={product.images[0]}
                                                                alt={productName}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                        ) : (
                                                            <div className="flex items-center justify-center h-full text-gray-400">{t('productDetail.noImage')}</div>
                                                        )}
                                                    </div>
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

                                    {/* Specifications Section */}
                                    {product.specifications && Object.keys(product.specifications).length > 0 && (
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
                                                                    {t(`common.productSpecs.${key.toLowerCase().replace(/\s+/g, '')}` as any) || key.replace(/([A-Z])/g, ' $1').trim()}
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
                                                {variants.map((item: any, index: number) => (
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
                                                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
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
                                                    className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl grid md:grid-cols-2 max-h-[90vh]"
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
                                                    <div className="p-8 flex flex-col overflow-y-auto">
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

                                                        <div className="mt-auto space-y-4">
                                                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
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
                                                                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
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
