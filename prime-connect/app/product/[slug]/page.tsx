"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Package, Share2, Printer } from "lucide-react";
import { useParams, notFound } from "next/navigation";
import { products } from "../../data";
import { useLanguage } from "../../context/LanguageContext";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Helper function to get translated text
const getTranslated = (value: string | { en: string; ar: string; zh: string }, lang: string): string => {
    if (typeof value === 'string') return value;
    return value[lang as keyof typeof value] || value.en;
};

export default function ProductPage() {
    const { t, language } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return notFound();
    }

    // Get translated product data
    const productName = getTranslated(product.name, language);
    const productCategory = getTranslated(product.category, language);
    const productDescription = getTranslated(product.description, language);

    return (
        <>
            <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="container-custom">
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

                        {/* Top Section: Images & Basic Info */}
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
                                        <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                                            {productCategory}
                                        </span>
                                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                            {productName}
                                        </h1>
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

                        {/* Specifications Section */}
                        {product.specifications && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('productDetail.specifications')}</h2>
                                <div className="overflow-hidden rounded-xl border border-gray-200">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            {product.specifications.map((spec, index) => (
                                                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                    <th className="py-4 px-6 bg-gray-50/50 font-medium text-gray-900 w-1/3 border-r border-gray-100">
                                                        {getTranslated(spec.key, language)}
                                                    </th>
                                                    <td className="py-4 px-6 text-gray-600">
                                                        {getTranslated(spec.value, language)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}

                        {/* Applications Section */}
                        {product.applications && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 h-fit"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDetail.applications')}</h2>
                                <ul className="space-y-4">
                                    {product.applications.map((app, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span>{getTranslated(app, language)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
}
