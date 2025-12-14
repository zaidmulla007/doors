"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { products } from "../data";
import { useLanguage } from "../context/LanguageContext";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

// Helper function to get translated text
const getTranslated = (value: string | { en: string; ar: string; zh: string }, lang: string): string => {
    if (typeof value === 'string') return value;
    return value[lang as keyof typeof value] || value.en;
};

function ProductsContent() {
    const { t, language } = useLanguage();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
                const productName = getTranslated(product.name, language);
                const productDescription = getTranslated(product.description, language);

                return (
                    <motion.div
                        key={product.id}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden p-4"
                    >
                        <Link href={`/product/${product.slug}`} className="block relative bg-gray-50 rounded-lg overflow-hidden aspect-square mb-4">
                            <Image
                                src={product.images[0] || "/placeholder.jpg"}
                                alt={productName}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        <div>
                            <Link href={`/product/${product.slug}`}>
                                <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                    {productName}
                                </h3>
                            </Link>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{productDescription}</p>
                            <Link
                                href={`/product/${product.slug}`}
                                className="inline-flex items-center gap-1 text-blue-600 text-xs font-medium mt-3 hover:text-blue-700"
                            >
                                {t('productsPage.viewDetails')}
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default function ProductsPage() {
    const { t } = useLanguage();

    return (
        <>
            <section className="bg-white pt-32 pb-8 border-b border-gray-100">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('productsPage.title')}</h1>
                    <p className="text-gray-500">{t('productsPage.subtitle')}</p>
                </div>
            </section>

            <section className="section-padding bg-gray-50 min-h-screen">
                <div className="container-custom">
                    <Suspense fallback={<div>{t('productsPage.loading')}</div>}>
                        <ProductsContent />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
